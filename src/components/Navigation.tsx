import { motion } from "framer-motion";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-glass-border"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="text-xl font-light tracking-wider"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Rifat
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-light tracking-wide"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 + index * 0.1 }}
                  whileHover={{ 
                    y: -2,
                    color: "hsl(var(--neon-blue))",
                    transition: { duration: 0.2 }
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-foreground focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className="w-full h-0.5 bg-current transform transition-all duration-300"
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 2 : -2,
                  }}
                />
                <motion.span
                  className="w-full h-0.5 bg-current transform transition-all duration-300"
                  animate={{
                    opacity: isOpen ? 0 : 1,
                  }}
                />
                <motion.span
                  className="w-full h-0.5 bg-current transform transition-all duration-300"
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -2 : 2,
                  }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 z-30 bg-background/95 backdrop-blur-md md:hidden"
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? "0%" : "100%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-2xl font-light text-muted-foreground hover:text-foreground transition-colors duration-300"
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                x: isOpen ? 0 : 50,
              }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsOpen(false)}
              whileHover={{
                scale: 1.1,
                color: "hsl(var(--neon-blue))",
              }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;