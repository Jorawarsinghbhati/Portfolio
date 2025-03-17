import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-black to-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Social Media Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-white font-semibold mb-3 text-2xl">
              Social Media
            </h3>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="https://github.com/"
                  target="_blank"
                  aria-label="GitHub"
                  className="hover:text-blue-400"
                >
                  <FaGithub size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="hover:text-blue-400"
                >
                  <FaLinkedin size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  aria-label="Twitter"
                  className="hover:text-blue-400"
                >
                  <FaTwitter size={24} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Hobbies & Interests */}
          <div className="flex flex-col items-center text-center sm:text-left">
            <h3 className="text-white font-semibold mb-3 text-2xl">
              Hobbies & Interests
            </h3>
            <ul className="space-y-2">
              <li>🎨 UI/UX Designing</li>
              <li>📚 Reading Tech Blogs</li>
              <li>🎮 Gaming & Game Development</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center text-center sm:text-left">
            <h3 className="text-white font-semibold mb-3 text-2xl">
              Contact Me
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="mailto:JorawarSinghbhati135@gmail.com"
                  className="hover:text-blue-400"
                >
                  JorawarSinghbhati135@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:2023ucp1619@mnit.ac.in"
                  className="hover:text-blue-400"
                >
                  2023ucp1619@mnit.ac.in
                </Link>
              </li>
              <li className="text-gray-400">📍 Jaipur, India</li>
              <li>
                <Link
                  href="tel:+919680776189"
                  className="hover:text-blue-400"
                >
                  📞 +91 9680776189
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Credits */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Jorawar Singh. All rights reserved.
      </div>
    </footer>
  );
}
