import { motion } from "framer-motion";
import avatarImage from "@/assets/avatar.png";

const AboutSection = () => {
  const skills = [
    { name: "HTML5", icon: "🔗" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Framer Motion", icon: "🎭" },
    { name: "Tailwind", icon: "🌊" },
    { name: "Node.js", icon: "🚀" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-glow"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="relative flex justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.div
              className="relative group"
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              
              {/* Main image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-glass-border bg-card shadow-card">
                <img
                  src={avatarImage}
                  alt="Rifat - Web Developer"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-neon-cyan rounded-full"
                animate={{
                  y: [-5, 5, -5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-neon-violet rounded-full"
                animate={{
                  y: [5, -5, 5],
                  scale: [1.2, 1, 1.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-light mb-6 tracking-tight"
                variants={itemVariants}
              >
                About{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent font-normal">
                  Me
                </span>
              </motion.h2>
              
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed mb-6 font-light"
                variants={itemVariants}
              >
                I'm a passionate web developer with expertise in modern JavaScript frameworks and cutting-edge animation libraries. I love creating immersive digital experiences that bridge the gap between design and functionality.
              </motion.p>
              
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed font-light"
                variants={itemVariants}
              >
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or experimenting with the latest web animation techniques.
              </motion.p>
            </div>

            {/* Skills Grid */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-normal tracking-tight mb-6 text-neon-cyan">
                Skills & Technologies
              </h3>
              
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                variants={containerVariants}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group relative bg-card/50 backdrop-blur-sm border border-glass-border rounded-lg p-4 text-center hover:bg-card/70 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    custom={index}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <p className="text-sm font-light text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </p>
                    <div className="absolute inset-0 bg-gradient-primary rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;