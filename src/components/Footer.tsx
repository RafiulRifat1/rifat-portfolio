import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: "🐙", href: "https://github.com" },
    { name: "LinkedIn", icon: "💼", href: "https://linkedin.com" },
    { name: "Twitter", icon: "🐦", href: "https://twitter.com" },
  ];

  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      {/* Floating background particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-neon-blue rounded-full opacity-30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="grid md:grid-cols-3 gap-12 mb-12"
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div className="space-y-4">
            <motion.h3
              className="text-2xl font-light tracking-wider"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Rifat
              </span>
            </motion.h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              Creating digital experiences that inspire and engage through innovative design and cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-light text-neon-cyan">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-light"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block"
                    >
                      {item.name}
                    </motion.span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-light text-neon-violet">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-glass-bg/50 border border-glass-border rounded-xl flex items-center justify-center hover:bg-glass-bg/70 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -2,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground font-light text-center md:text-left">
            © {currentYear} Rifat. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-2 text-muted-foreground font-light">
            <span>Built with</span>
            <motion.span
              className="text-red-400"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ❤️
            </motion.span>
            <span>using React & Framer Motion</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;