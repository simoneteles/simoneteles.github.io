import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-black/80 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#home"
          className={`text-2xl font-bold ${isScrolled ? "text-black" : "text-white"}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          whileHover={{ scale: 1.05 }}
        >
          Portfolio
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {["Sobre", "Trabalhos", "Contato"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <a
                href={`#${item === "Trabalhos" ? "portfolio" : item === "Sobre" ? "about" : "contact"}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item === "Trabalhos" ? "portfolio" : item === "Sobre" ? "about" : "contact");
                }}
                className={`transition-colors cursor-pointer ${
                  isScrolled ? "text-gray-700 hover:text-black" : "text-gray-300 hover:text-white"
                }`}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? "text-black" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-t"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <ul className="flex flex-col py-4 px-6 gap-4">
            {["Sobre", "Trabalhos", "Contato"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item === "Trabalhos" ? "portfolio" : item === "Sobre" ? "about" : "contact"}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item === "Trabalhos" ? "portfolio" : item === "Sobre" ? "about" : "contact");
                  }}
                  className="text-gray-700 hover:text-gray-900 transition-colors block cursor-pointer"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}