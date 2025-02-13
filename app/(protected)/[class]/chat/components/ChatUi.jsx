"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function ChatUi() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        id: Date.now(),
        content: input.trim(),
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInput("");

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          content: "tesst",
          sender: "ai",
        };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
      }, 1000);
    }
  };

  return (
    <div className="flex sm:items-center justify-center sm:min-h-screen  bg-gray-100 ">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Chat </CardTitle>
        </CardHeader>
        <CardContent className="sm:p-2 p-0">
          <ScrollArea className="h-[60vh] pr-4 ">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex mb-4 ${
                  m.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.sender === "ai" && (
                  <Avatar className="mr-2">
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`p-2 rounded-lg max-w-[70%] ${
                    m.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <div className="flex w-full space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <Button onClick={handleSend}>Send</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
