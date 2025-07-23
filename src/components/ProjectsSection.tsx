import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "3D Portfolio Website",
      description: "Interactive portfolio with Three.js and smooth animations",
      tech: ["React", "Three.js", "Framer Motion"],
      image: "/api/placeholder/400/300",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with real-time features",
      tech: ["Next.js", "TypeScript", "Stripe"],
      image: "/api/placeholder/400/300",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "AI Dashboard",
      description: "Data visualization dashboard with AI-powered insights",
      tech: ["React", "D3.js", "Python"],
      image: "/api/placeholder/400/300",
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure banking application with biometric authentication",
      tech: ["React Native", "Node.js", "MongoDB"],
      image: "/api/placeholder/400/300",
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Social Media Platform",
      description: "Real-time social platform with video calling features",
      tech: ["Vue.js", "Socket.io", "WebRTC"],
      image: "/api/placeholder/400/300",
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "NFT Marketplace",
      description: "Decentralized marketplace for digital assets",
      tech: ["React", "Web3.js", "Solidity"],
      image: "/api/placeholder/400/300",
      link: "#",
      github: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      filter: "blur(10px)" 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 0.8,
        ease: "easeOut" as const
      },
    },
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-40 left-20 w-80 h-80 rounded-full bg-gradient-secondary"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Featured{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            A collection of projects that showcase my expertise in modern web development and creative problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative bg-card/30 backdrop-blur-sm border border-glass-border rounded-2xl overflow-hidden hover:bg-card/50 transition-all duration-500"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-hero overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-primary opacity-20"
                  whileHover={{ opacity: 40 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Placeholder for project image */}
                <div className="w-full h-full flex items-center justify-center text-4xl">
                  🚀
                </div>
                
                {/* Hover overlay with links */}
                <motion.div
                  className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={false}
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-neon-violet text-neon-violet hover:bg-neon-violet hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-light">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 text-xs bg-glass-bg border border-glass-border rounded-full text-muted-foreground font-light"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                initial={false}
              />
              
              {/* Border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-neon-blue opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-primary-foreground px-8 py-6 text-lg rounded-xl transition-all duration-300"
            asChild
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;