import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Main() {
  return (
    <main className="flex  w-full justify-center p-5 min-h-svh drop-shadow-lg">
      <Tabs defaultValue="account" className=" w-full flex flex-col items-center">
        <TabsList className="w-full transition-all">
          <TabsTrigger value="account" className="w-[50%] text-md ">Created</TabsTrigger>
          <TabsTrigger value="password" className="w-[50%] text-md ">Joined</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </main>
  );
}
