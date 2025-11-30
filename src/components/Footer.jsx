import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <h3 className="text-blue-500 "> <span className="font-ephesis font-extrabold text-5xl">Tariqul</span></h3>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/tariqul25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/tariqul25/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 hover:scale-110 transform transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:tariqulcst@gmail.com"
              className="text-gray-400 hover:text-purple-500 hover:scale-110 transform transition-all duration-300"
              aria-label="Send an Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <hr className="border-t border-gray-700" />
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 mt-6">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-ephesis text-lg">Tariqul</span>. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
          >
            Back to Top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
