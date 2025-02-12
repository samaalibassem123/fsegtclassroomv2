import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreatedContainer from "./containers/CreatedContainer";
import JoinedContainer from "./containers/JoinedContainer";

export default function Main() {
  return (
    <main className="flex  w-full justify-center p-5 min-h-svh drop-shadow-lg">
      <Tabs
        defaultValue="created"
        className=" w-full flex flex-col items-center"
      >
        <TabsList className="w-full transition-all">
          <TabsTrigger value="created" className="w-[50%] text-md text-black">
            Created
          </TabsTrigger>
          <TabsTrigger value="joined" className="w-[50%] text-md text-black">
            Joined
          </TabsTrigger>
        </TabsList>
        <TabsContent value="created" className="w-full min-h-svh">
          <p className="text-sm text-gray-400 text-center my-2">
            Classes That you created.
          </p>
          <CreatedContainer />
        </TabsContent>
        <TabsContent value="joined" className="w-full min-h-svh">
          <p className="text-sm text-gray-400 text-center my-2">
            Classes That you Joined.
          </p>
          <JoinedContainer />
        </TabsContent>
      </Tabs>
    </main>
  );
}
