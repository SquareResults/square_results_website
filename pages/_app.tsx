// Import BrowserRouter conditionally
import dynamic from "next/dynamic";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import ChatbotComponent from "@/components/ChatbotComponent";
import "@/styles/index.css";
import "@/styles/App.css";

const BrowserRouter = dynamic(
  () => import("react-router-dom").then((mod) => mod.BrowserRouter),
  { ssr: false }
);

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* ✅ Only runs on the client */}
        <TooltipProvider>
          <Toaster />
          <Sonner />

          {/* ==== Navbar ==== */}
          <Navbar />

          {/* ==== Main Content ==== */}
          <Component {...pageProps} />

          {/* ==== Chat Component ==== */}
          <ChatbotComponent />

          {/* ==== Footer ==== */}
          <Footer />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
