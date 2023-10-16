"use client";
import ProfileCard from "@/Component/profile";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/Images/top-background.svg")' }}
    >
      <NextUIProvider>
        <ProfileCard />
      </NextUIProvider>
    </div>
  );
}
