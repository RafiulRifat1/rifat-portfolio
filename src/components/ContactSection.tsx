import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you as soon as possible.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/RafiulRifat1" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/md-rafiul-rifat-dev/" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/RifatRafiul" },
    { name: "Email", icon: Mail, href: "mailto:rafiul2071@gmail.com" },
  ];

  const contactInfo = [
    { name: "Location", icon: MapPin, value: "Dhaka, Bangladesh", gradient: "bg-gradient-primary" },
    { name: "Email", icon: Mail, value: "rafiul2071@gmail.com", gradient: "bg-gradient-secondary" },
    { name: "Phone", icon: Phone, value: "Available upon request", gradient: "bg-gradient-primary" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-glow"
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Get In{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent font-normal">
              Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind or just want to say hello? Drop me a message and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            className="h-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6 h-full flex flex-col" 
              variants={itemVariants}
            >
              <motion.div variants={itemVariants}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-glass-bg/50 border-glass-border backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:border-neon-blue focus:ring-neon-blue/20 transition-all duration-300 h-12 text-lg"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-glass-bg/50 border-glass-border backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:border-neon-blue focus:ring-neon-blue/20 transition-all duration-300 h-12 text-lg"
                />
              </motion.div>

              <motion.div className="flex-grow flex" variants={itemVariants}>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-glass-bg/50 border-glass-border backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:border-neon-blue focus:ring-neon-blue/20 transition-all duration-300 text-lg resize-none flex-grow"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-gradient-primary text-primary-foreground font-light tracking-wide px-8 py-6 text-lg rounded-xl shadow-glow hover:shadow-intense transition-all duration-300 disabled:opacity-50"
                >
                  <motion.div
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </motion.div>
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="bg-card/30 backdrop-blur-sm border border-glass-border rounded-2xl p-8"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-normal tracking-tight mb-6 text-neon-cyan">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.name}
                      className="flex items-center space-x-4"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`w-12 h-12 ${info.gradient} rounded-xl flex items-center justify-center`}>
                        <Icon size={20} className="text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">{info.name}</p>
                        <p className="text-muted-foreground font-light">{info.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              className="bg-card/30 backdrop-blur-sm border border-glass-border rounded-2xl p-8"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-normal tracking-tight mb-6 text-neon-violet">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative bg-glass-bg/50 border border-glass-border rounded-xl p-4 text-center hover:bg-glass-bg/70 transition-all duration-300 overflow-hidden"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      variants={itemVariants}
                    >
                      <div className="relative z-10">
                        <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent size={24} className="text-neon-blue group-hover:text-neon-cyan transition-colors duration-300" />
                        </div>
                        <p className="text-sm font-light text-muted-foreground group-hover:text-foreground transition-colors">
                          {social.name}
                        </p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;