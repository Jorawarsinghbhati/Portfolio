import type { Metadata } from "next";
import "../globals.css";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return (
    
          <div className="min-h-screen flex flex-col justify-center items-center">
            <h1
              className="text-5xl font-extrabold  uppercase 
              bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 text-transparent bg-clip-text text-center"
            >
              Details shown in below Footer
            </h1>
  
            <main className="relative">{children}</main>
          </div>
    );
  }
  