"use client";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";


export default function About() {
  return (
    <Card className="bg-transparent border-none shadow-none mt-8">
      <CardContent className="max-w-3xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-8 p-0">
        {/* Left: Heading, subheading, and about text */}
        <div className="flex-1 w-full md:w-auto flex flex-col items-center md:items-start justify-center">
          <h1 className="text-5xl md:text-6xl text-white font-semibold tracking-tight text-center md:text-left mb-2 text-black">
            Hi, Anany here
          </h1>
          <p className="text-xl text-center md:text-left mb-4 md:mb-0 text-gray-200">
            I do code a little
          </p>
          <div className="mt-6 w-full">
            <h2 className="text-2xl font-bold mb-2  text-gray-200">About</h2>
            <p className="text-gray-200">
              tldr; play games, watch sports, chase tech
            </p>
            <p className="text-gray-200">
              I dive into video games—from strategy to sheer chaos.
            </p>
            <p className=" text-gray-200">
              Football and basketball keep me yelling at screens.
            </p>
            <p className="text-gray-200">
              Finance is my newest obsession—markets, money, and all the madness.
            </p>
          </div>
        </div>
        {/* Right: Avatar image */}
        <div className="flex-shrink-0 flex justify-center md:justify-center items-center w-full md:w-auto md:mt-2">
          <Avatar className="w-32 h-32 border-4 border-white bg-black">
            <Image
              src="/pfp.jpg"
              alt="Profile avatar"
              className="rounded-full object-cover"
              width={128}
              height={128}
            />
          </Avatar>
        </div>
      </CardContent>
    </Card>
  );
} 