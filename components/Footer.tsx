import React from 'react';
import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://x.com/01Janhavi59736?t=91LChmNrm5OY6ViAcuMQlg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/janhavi-kendre-b06675249/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:janhavikendre717@gmail.com"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          {/* Contact Information */}
          <div className="text-zinc-400">
            <p>Feel free to reach out to me via email, Twitter, or LinkedIn!</p>
            <p className="text-blue-400 hover:text-blue-300">
              <a href="mailto:janhavikendre717@gmail.com">janhavikendre717@gmail.com</a>
            </p>
          </div>

          {/* Copyright Section */}
          <div className="text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Janhavi Kendre. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
