import React from "react";
import Image from "next/image";
import { WavyBackground } from "./ui/wavy-background";
import Link from "next/link";

export default function Home() {
  return (
    <WavyBackground className="max-w-7xl mx-auto flex flex-row items-center justify-center h-full sm:w-full">
      <section className="flex flex-col sm:flex-row sm:items-center sm:justify-center justify-end w-full min-h-screen px-8 sm:px-16 lg:px-32">
        
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            I am Jorawar Singh
          </h1>
          <h2 className="mt-2 text-2xl md:text-4xl text-blue-400 font-semibold">
            Web Developer
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            MALAVIYA NATIONAL INSTITUTE OF TECHNOLOGY  Passionate about building scalable and user-friendly web applications.
          </p>
          <p className="mt-2 text-gray-400">
            Specializing in React, Next.js, Tailwind CSS.
          </p>
          <div className="sm:mt-6 flex flex-wrap sm:gap-3 gap-1">
            <span className="px-4 py-2 bg-blue-500 text-white rounded-full">React.js</span>
            <span className="px-4 py-2 bg-green-500 text-white rounded-full">Next.js</span>
            <span className="px-4 py-2 bg-purple-500 text-white rounded-full">Tailwind CSS</span>
            <span className="px-4 py-2 bg-yellow-500 text-black rounded-full">Node.js</span>
          </div>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full">
            <Link href={"/Projects"}>View My Work </Link>
          </button>
        </div>

        {/* Right Side - Circular Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="w-56 h-56 md:w-72 md:h-72 bg-gray-400 rounded-full overflow-hidden">
          <Image width={288} height={288}  src="/Jorawar.jpeg" alt="Medicine Store" className="rounded-full object-cover w-full h-full" />
          </div>
        </div>

      </section>
    </WavyBackground>
  );
}


