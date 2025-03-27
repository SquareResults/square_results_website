import React, { useEffect, useRef } from 'react';
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const particlesRef = useRef<Array<{ x: number; y: number; speed: number; angle: number; size: number }>>([]);
  const papersRef = useRef<Array<{ x: number; y: number; rotation: number; size: number; opacity: number; speed: number }>>([]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
      initPapers();
    };

    const initParticles = () => {
      particlesRef.current = Array.from({ length: 1000 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 1,
        angle: Math.random() * Math.PI * 2,
        size: Math.random() * 2 + 0.5,
      }));
    };

    const initPapers = () => {
      papersRef.current = Array.from({ length: 15 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        rotation: Math.random() * Math.PI * 2,
        size: Math.random() * 20 + 30, // Increased size for better visibility
        opacity: 1,
        speed: Math.random() * 1 + 0.5,
      }));
    };

    contextRef.current = context;
    handleResize();
    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const drawPaper = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, opacity: number) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.globalAlpha = opacity;
    
    // Draw paper background
    ctx.fillStyle = '#f3f3f3';
    ctx.beginPath();
    ctx.rect(-size/2, -size/2, size, size * 1.4); // Made slightly taller for document look
    ctx.fill();
    
    // Add a subtle border
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.lineWidth = 0.5;
    ctx.stroke();

    // Draw text lines
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    const lineHeight = size / 12;
    const marginTop = -size/2 + size/8;
    
    // Header section (darker and larger)
    ctx.fillRect(-size/2 + size/8, marginTop, size * 0.7, lineHeight * 1.2);
    
    // Regular lines (text content)
    for(let i = 0; i < 8; i++) {
      const y = marginTop + (i + 2) * lineHeight * 1.5;
      // Vary line lengths for realism
      const lineWidth = size * (0.8 - (Math.random() * 0.2));
      ctx.fillRect(-size/2 + size/8, y, lineWidth, lineHeight);
    }

    // Add a bullet point section
    const bulletStartY = marginTop + 7 * lineHeight * 1.5;
    for(let i = 0; i < 3; i++) {
      const y = bulletStartY + i * lineHeight * 1.5;
      // Bullet point
      ctx.beginPath();
      ctx.arc(-size/2 + size/6, y + lineHeight/2, lineHeight/4, 0, Math.PI * 2);
      ctx.fill();
      // Line after bullet
      ctx.fillRect(-size/2 + size/4, y, size * 0.6, lineHeight);
    }
    
    ctx.restore();
  };

  const animate = () => {
    frameRef.current = requestAnimationFrame(animate);
    if (!contextRef.current || !canvasRef.current) return;

    const ctx = contextRef.current;
    const canvas = canvasRef.current;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Clear canvas with fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw black hole core
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 100);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
    gradient.addColorStop(0.3, 'rgba(45, 27, 78, 0.8)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Update and draw particles
    particlesRef.current.forEach((particle, i) => {
      const dx = centerX - particle.x;
      const dy = centerY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const force = Math.max(100 / (distance * distance), 0.5);

      particle.angle = Math.atan2(dy, dx);
      particle.speed = Math.min(force * 2, 15);

      particle.x += Math.cos(particle.angle) * particle.speed;
      particle.y += Math.sin(particle.angle) * particle.speed;

      // Reset particles that get too close to the center
      if (distance < 50) {
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
        particle.speed = Math.random() * 2 + 1;
      }

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, force * 0.3)})`;
      ctx.fill();
    });

    // Update and draw papers
    papersRef.current.forEach((paper, i) => {
      const dx = centerX - paper.x;
      const dy = centerY - paper.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const force = Math.max(150 / (distance * distance), 0.5);

      const angle = Math.atan2(dy, dx);
      paper.speed = Math.min(force * 1.5, 10);

      // Enhanced spiral movement
      const spiralFactor = Math.max(0, 1 - distance / 500);
      const tangentialSpeed = paper.speed * spiralFactor * 2;
      
      paper.x += Math.cos(angle) * paper.speed + Math.cos(angle + Math.PI/2) * tangentialSpeed;
      paper.y += Math.sin(angle) * paper.speed + Math.sin(angle + Math.PI/2) * tangentialSpeed;
      
      // Rotate paper as it moves
      paper.rotation += 0.02 * force;
      
      // Fade out as it gets closer to the center
      paper.opacity = Math.max(0, 1 - (force * 0.3));

      // Reset papers that get too close to the center
      if (distance < 50) {
        paper.x = Math.random() * canvas.width;
        paper.y = Math.random() * canvas.height;
        paper.speed = Math.random() * 1 + 0.5;
        paper.opacity = 1;
      }

      // Draw paper
      drawPaper(ctx, paper.x, paper.y, paper.size, paper.rotation, paper.opacity);
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute top-0 left-0 pointer-events-none"
        style={{ background: 'semi-transparent' }}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative z-1 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-30 p-6 rounded-lg">
        <h1 className="text-10xl md:text-7xl font-bold mb-6 mt-80">
          <span className="text-white tracking-wider">Making the Job Search Easier</span>
          <br />
          <span className="text-[#BEBEBE] md:text-5xl tracking-wide">No Blackholes, just Results</span>
        </h1>
        <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a href="https://theradarlist.com/" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group relative px-8 py-3 bg-[#1D066F] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#1E3A8A]/30 transition-all duration-200 transform overflow-hidden flex items-center"
              >
                <span className="relative z-10 group-hover:text-white">Job Seekers</span>
                <ChevronRight className="inline-block ml-2 w-5 h-5" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#1D066F] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-20 rounded-full pointer-events-none" />
              </motion.button>
            </a>
            <a href="https://squarecircle.group/" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group relative px-8 py-3 bg-white text-[#1D066F] border-2 border-[#1D066F] rounded-full hover:bg-white/90 text-black transition-colors duration-200 transform flex items-center"
              >
                <span className="relative z-10">Hiring Partners</span>
                <ChevronRight className="inline-block ml-2 w-5 h-5" />
                {/* <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#1E3A8A] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-20 rounded-full pointer-events-none" />
              </motion.button>
            </a>
          </motion.div>
      </div>
    </div>
  );
};

export default Hero;
