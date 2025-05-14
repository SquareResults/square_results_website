"use client";

import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { X, Send, Loader2, ArrowDownCircleIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import remarkGfm from "remark-gfm";
import { useChat } from "@ai-sdk/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChatbotComponent = () => {
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
    // onResponse: (response) => console.log("API Response:", response),
    onError: (err) => console.error("Chat API Error:", err),
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      {/* ==== Chat Icon ==== */}
      <AnimatePresence>
        {showChatIcon && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 z-50"
            ref={chatIconRef}>
            <Button
              onClick={toggleChat}
              size="icon"
              className="rounded-full size-14 bg-gray-100 hover:text-semantic-white shadow-md shadow-slate-400">
              {!isChatOpen ? (
                <Image
                  src="/images/chatbot_profile.png"
                  alt="chatbot picture"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              ) : (
                <ArrowDownCircleIcon />
              )}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ==== Chat UI ==== */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 z-50 w-[95%] md:w-[500px]">
            <Card className="border-2 bg-white shadow-lg rounded-xl">
              <CardHeader className="p-4 flex flex-row items-center justify-between space-y-0 pb-3 border-b border-gray-200">
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                  <Image
                    src="/images/chatbot_profile.png"
                    alt="chatbot profile picture"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <p>Chat with Us</p>
                </CardTitle>
                <Button
                  onClick={toggleChat}
                  size="sm"
                  variant="ghost"
                  className="px-2 py-0">
                  <X className="size-12" />
                </Button>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[30rem] pr-4">
                  {messages?.length === 0 && (
                    <div className="w-full mt-32 text-gray-500 items-center justify-center flex gap-3">
                      No messages yet
                    </div>
                  )}
                  {messages?.map((message, index) => (
                    <div
                      key={index}
                      className={`my-4  ${
                        message.role === "user" ? "text-right" : "text-left"
                      }`}>
                      <div
                        className={`inline-block p-2 rounded-lg${
                          message.role === "user"
                            ? "text-primary bg-slate-200 rounded-l-lg rounded-br-lg"
                            : "text-primary bg-slate-200 rounded-r-lg rounded-bl-lg"
                        }`}>
                        <ReactMarkdown
                          children={message.content}
                          remarkPlugins={[remarkGfm]}
                          components={{
                            code({
                              node,
                              inline,
                              className,
                              children,
                              ...props
                            }: {
                              node?: any;
                              inline?: boolean;
                              className?: string;
                              children?: React.ReactNode;
                            }) {
                              return inline ? (
                                <code
                                  {...props}
                                  className="bg-gray-200 rounded px-1">
                                  {" "}
                                  {children}
                                </code>
                              ) : (
                                <pre
                                  {...props}
                                  className="bg-gray-200 rounded p-2">
                                  <code>{children}</code>
                                </pre>
                              );
                            },
                            ul: ({ children }) => (
                              <ul className="list-disc ml-4">{children}</ul>
                            ),
                            ol: ({ children }) => (
                              <li className="list-disc ml-4">{children}</li>
                            ),
                          }}
                        />
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="w-full items-center flex justify-center gap-3">
                      <Loader2 className="animate-spin h-5 w-5 text-primary" />
                      <button
                        className="underline"
                        type="button"
                        onClick={() => stop()}>
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
                        onClick={() => reload()}>
                        retry
                      </button>
                    </div>
                  )}
                  <div ref={scrollRef} />
                </ScrollArea>
              </CardContent>
              <CardFooter className="p-4 flex flex-col space-y-2">
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full items-center space-x-2">
                  <Input
                    value={input}
                    onChange={handleInputChange}
                    className="flex-1"
                    placeholder="Type your question here..."
                  />
                  <Button
                    type="submit"
                    className="size-9"
                    disabled={isLoading}
                    size="icon">
                    <Send className="size-4 text-semantic-white" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotComponent;
