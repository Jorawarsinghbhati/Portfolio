import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-black to-gray-800 text-gray-300 py-10">
      <div className="logo">
        <div>
          <span className="text-3xl font-bold text-blue-400 flex flex-col items-center justify-center sm:flex-none ">
            ≈
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8">
          {/* Solutions */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-white font-semibold mb-3 not-even: text-4xl">
              Social Media
            </h3>
            <ul className="space-y-3 flex flex-wrap space-x-8 justify-center ">
              <li>
                <Link
                  href="https://github.com/"
                  target="_blank"
                  className="hover:text-blue-400"
                >
                  <FaGithub size={22} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/"
                  target="_blank"
                  className="hover:text-blue-400"
                >
                  <FaLinkedin size={22} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  className="hover:text-blue-400"
                >
                  <FaTwitter size={22} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col items-center justify-center lg:block lg:ml-7 lg:mt-3">
            <h3 className="text-white font-semibold mb-3 text-4xl">
              Hobbies & Interests
            </h3>
            <ul className="space-y-3 flex flex-wrap space-x-8 justify-center sm:block">
              <li>🎨 UI/UX Designing</li>
              <li>📚 Reading Tech Blogs</li>
              <li>🎮 Gaming & Game Development</li>
            </ul>
          </div>

          {/* Company */}
          {/* <div className="flex flex-col items-center justify-center sm:flex-none">
            <h3 className="text-white font-semibold mb-3 text-4xl">Company</h3>
            <ul className="space-y-3 flex flex-wrap space-x-8 justify-center sm:block">
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
            </ul>
          </div> */}

          {/* Legal */}
          <div className="flex flex-col items-center justify-center lg:block lg:ml-16">
            <h3 className="text-white font-semibold mb-3 text-4xl">
              Contact Me
            </h3>
            <ul className="space-y-3 flex flex-wrap space-x-8 justify-center sm:block ">
              <li>
                <Link
                  href="mailto:your.email@example.com"
                  className="text-gray-300 hover:text-blue-400"
                >
                  JorawarSinghbhati135@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:your.email@example.com"
                  className="text-gray-300 hover:text-blue-400"
                >
                  2023ucp1619@mnit.ac.in
                </Link>
              </li>
              <li>
                <p className="text-gray-400 text-sm mt-1">📍 Jaipur, India</p>
              </li>
              <li>
                <Link
                  href="tel:+919876543210"
                  className="text-gray-300 hover:text-blue-400 block mt-2"
                >
                  📞 +91 9680776189
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Jorawar Singh. All rights reserved.
      </div>
    </footer>
  );
}
