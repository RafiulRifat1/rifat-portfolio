import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Spline 3D Model */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        <iframe
          src="https://my.spline.design/worldplanet-bgp1VAkTRMpwxYpVrXgt6TJs/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="absolute inset-0"
          style={{ 
            left: '10%',
            width: '100%',
            height: '100%'
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/20" />
      </motion.div>

      {/* Floating orbs */}
      <div className="absolute inset-0 z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full bg-gradient-glow opacity-30"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + (i % 2) * 50}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 2.8, duration: 1 }}
        >
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent font-normal">
              Rifat
            </span>
            <br />
            <span className="text-muted-foreground text-2xl md:text-4xl lg:text-5xl">
              Web Developer
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
        >
          Crafting digital experiences that inspire and engage through innovative design and cutting-edge technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.6, duration: 0.6 }}
        >
          <Button
            size="lg"
            className="group relative bg-gradient-primary text-primary-foreground font-light tracking-wide px-8 py-6 text-lg rounded-xl shadow-glow hover:shadow-intense transition-all duration-300"
            asChild
          >
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Hire Me</span>
              <motion.div
                className="absolute inset-0 bg-gradient-secondary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.a>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;