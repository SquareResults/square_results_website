import "@/styles/index.css";
import "@/styles/App.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

// Import BrowserRouter conditionally
import dynamic from "next/dynamic";
const BrowserRouter = dynamic(() => import("react-router-dom").then(mod => mod.BrowserRouter), { ssr: false });

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter> {/* ✅ Only runs on the client */}
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Component {...pageProps} />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
