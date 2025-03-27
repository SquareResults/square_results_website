"use client"; 

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import CEOSection from "@/components/CEOSection";
import BlogsSection from "@/components/BlogsSection";
import WhySection from "@/components/WhySection";
import JobSeekersSection from "@/components/JobSeekersSection";
import HiringManagersSection from "@/components/HiringManagersSection";
import KeyFeatures from "@/components/KeyFeatures";
import UpcomingEvents from "@/components/UpcomingEvents";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import {useState, useEffect, useRef, use, Children} from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import {Button} from "@/components/ui/button";
import {
  Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import { ScrollArea} from "@/components/ui/scroll-area";
import {X, MessageCircle, Send, Loader2, ArrowDownCircleIcon} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";
import {useChat} from "@ai-sdk/react";


const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showChatIcon, setShowChatIcon] = useState(true);
  const chatIconRef = useRef<HTMLDivElement>(null);

  const {
    messages, 
    input, 
    handleInputChange, 
    handleSubmit, 
    isLoading, 
    stop, 
    reload, 
    error,
  } = useChat({
    api: "/api/gemini",
    onResponse: (response) => console.log("API Response:", response),  
    onError: (err) => console.error("Chat API Error:", err),  
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowChatIcon(true);
      } else {
        setShowChatIcon(false);
        setIsChatOpen(false);
      }
    }; 
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  }

  useEffect(() => {
    if(scrollRef.current){
      scrollRef.current.scrollIntoView({behavior: "smooth"});
    }
  }, [messages]);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Hero />
      <WhySection />
      {/* <KeyFeatures/> */}
      <JobSeekersSection />
      <HiringManagersSection />
      <StatsSection />
      <TestimonialsSection />
      {/* <UpcomingEvents/> */}
      <PartnersSection />
      <AnimatePresence>
        {showChatIcon && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 z-50"
            ref={chatIconRef}
          >
            <Button 
               onClick={toggleChat} 
               size="icon" 
               className="rounded-full size-14 p-2 bg-gray shadow-lg">
              {!isChatOpen ? (
                <MessageCircle className="size-12" />
              ) : (
                <ArrowDownCircleIcon />
              )}
              
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 z-50 w-[95%] md:w-[500px]"
          >
            <Card className="border-2 bg-white shadow-lg">
              <CardHeader className = "flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-lg font-bold">Chat with Us</CardTitle>
                <Button 
                  onClick={toggleChat} 
                  size="sm" 
                  variant="ghost"
                  className="px-2 py-0"
                  >
                  <X className="size-12" />
                </Button>
              </CardHeader>
              <CardContent>
                
                <ScrollArea className="h-[300px] pr-4">
                  {messages?.length === 0 && (
                    <div className="w-full mt-32 text-gray-500 items-center justify-center flex gap-3">
                    No messages yet
                  </div>
                    )}
                    {messages?.map((message, index) => (
                      <div 
                      key={index}
                      className={`mb-4 ${
                          message.role === "user" ? "text-right" : "text-left"
                          }`}
                          >
                            <div className={`inline-block p-2 rounded-lg${
                              message.role === "user" 
                              ? "bg-primary text-primary"
                              : "bg-muted"
                            }`}
                            >
                              <ReactMarkdown 
                              children={message.content}
                              remarkPlugins = {[remarkGfm]}
                              components={{
                                code({ node, inline, className, children, ...props }: { node?: any; inline?: boolean; className?: string; children?: React.ReactNode }) {
                                  return inline ? (
                                    <code {...props} className="bg-gray-200 rounded px-1"> {children}</code>
                                  ):(
                                    <pre 
                                    {...props} 
                                    className="bg-gray-200 rounded p-2">
                                      <code>{children}</code> 
                                    </pre>
                                  );
                                },
                                ul: ({children}) => (
                                  <ul className="list-disc ml-4">{children}</ul>
                                ),
                                ol: ({children}) => (
                                  <li className="list-disc ml-4">{children}</li>
                                ),
                              }}/>
                            </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="w-full items-center flex justify-center gap-3">
                        <Loader2 className="animate-spin h-5 w-5 text-primary"/>
                        <button
                         className="underline"
                         type="button"
                         onClick={() => stop()}
                         >
                          abort
                         </button>
                      </div>
                    )}
                    {error && (
                      <div className="w-full items-center flex justify-center gap-3">
                        <div>An error occured.</div>
                        <button
                         className="underline"
                         type="button"
                         onClick={() => reload()}
                         >
                          retry
                         </button>
                      </div>)}
                      <div ref={scrollRef}/>
                </ScrollArea>

              </CardContent>
              <CardFooter>
                <form onSubmit={handleSubmit}
                className="flex w-full items-center space-x-2">
                <Input 
                  value={input}
                  onChange={handleInputChange}
                  className="flex-1"
                  placeholder="type your message here.."/>
                  <Button 
                    type="submit" 
                    className="size-9" 
                    disabled={isLoading}
                    size="icon"
                    >
                      <Send className="size-4"/>
                    </Button>
                </form>
              </CardFooter>
            </Card>
            </motion.div>
        )}
            
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Home;
