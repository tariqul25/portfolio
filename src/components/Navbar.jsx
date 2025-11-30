import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href, name) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      setActiveItem(name);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 md:h-20 ">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold text-blue-500 "
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home", "Home");
            }}
          >
            <span className="font-ephesis font-extrabold text-5xl">Tariqul</span>
          </a>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center lg:space-x-3">
            {menuItems.map((item) => (
              <button
                key={item.name}
                className={`px-3 py-2 rounded-md transition-all duration-300 ${activeItem === item.name
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
                  }`}
                onClick={() => scrollToSection(item.href, item.name)}
              >
                {item.name}
              </button>
            ))}


          </div>
          {/* Download Button */}
          <button className="text-center hidden lg:inline-block">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/Tariqul_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/30 transition"
            >
              <Download className="w-5 h-5 " />
              Download CV
            </motion.a>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-blue-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
{isOpen && (
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="lg:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-lg shadow-md z-50"
  >
    <div className="flex flex-col pb-4 space-y-2">
      {menuItems.map((item) => (
        <button
          key={item.name}
          className={`block w-full text-left px-4 py-2 rounded-lg ${activeItem === item.name
              ? "text-blue-600 bg-gray-100"
              : "text-gray-800 hover:text-blue-600 hover:bg-gray-100"
            }`}
          onClick={() => scrollToSection(item.href, item.name)}
        >
          {item.name}
        </button>
      ))}
    </div>
  </motion.div>
)}

      </div>
    </nav>
  );
};

export default Navbar;
