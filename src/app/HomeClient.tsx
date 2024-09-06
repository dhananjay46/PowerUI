"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"; // Import Card and CardContent
import { Textarea } from "@/components/ui/textarea";
import RetroGrid from "@/components/magicui/retro-grid";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function HomeClient() {
  const [isVisible, setIsVisible] = useState(false); // Start as false to avoid hydration issues
  const [selectedTab, setSelectedTab] = useState<"mobile" | "web">("mobile"); // Default to mobile

  useEffect(() => {
    setIsVisible(true); // Set to true after the component mounts
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTabSelect = (tab: "mobile" | "web") => {
    setSelectedTab(tab);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800">
      <RetroGrid className="absolute inset-0" />
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-8">
        <h1 className="mb-8 text-4xl font-bold text-neutral-800 dark:text-neutral-100 sm:text-6xl">
          New Design
        </h1>
        
        <Card className="w-full max-w-2xl p-6 space-y-6 shadow-xl border border-gray-300">
          <CardContent className="space-y-6 p-5">
            <Textarea
              placeholder="Describe your design..."
              className="min-h-[150px] w-full p-5 border border-gray-400 rounded-sm" // Updated for border and radius
            />
            
            <div className="flex justify-center space-x-2 w-full"> {/* Center aligned with space between buttons */}
              <Button
                variant={selectedTab === "mobile" ? "default" : "outline"} // Set to primary style if selected
                className={`w-32 rounded ${selectedTab === "mobile" ? "bg-primary text-primary-foreground" : "bg-background"}`}
                onClick={() => handleTabSelect("mobile")}
              >
                Mobile
              </Button>
              <Button
                variant={selectedTab === "web" ? "default" : "outline"} // Set to primary style if selected
                className={`w-32 rounded ${selectedTab === "web" ? "bg-primary text-primary-foreground" : "bg-background"}`}
                onClick={() => handleTabSelect("web")}
              >
                Web
              </Button>
            </div>
            
            <div className="flex justify-center">
              <Button className="w-auto p-5">Generate</Button>
            </div>
          </CardContent>
        </Card>
        
      </main>
    </div>
  );
}