import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, ArrowDown } from "lucide-react";
import heroWorkspace from "@/assets/hero-workspace.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroWorkspace}
          alt="Professional workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 md:px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold mb-6 tracking-tight">
            <span className="block">RUSHIKESH</span>
            <span className="block text-gradient">MADANE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary mb-4 font-medium animate-slide-in-left">
            M.C.A. Student & Full-Stack Developer
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-slide-in-right">
            Building dynamic and user-friendly web applications with a passion for clean code and modern technology.
          </p>

          {/* Contact Icons */}
          <div className="flex justify-center gap-6 mb-12 animate-fade-in">
            <a
              href="mailto:rushimadane10@gmail.com"
              className="p-4 rounded-full bg-surface/80 backdrop-blur-sm border border-border hover-lift hover-glow group"
              title="Email"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href={isMobile ? "tel:+918928508584" : "https://wa.me/918928508584"}
              className="p-4 rounded-full bg-surface/80 backdrop-blur-sm border border-border hover-lift hover-glow group"
              title="Phone"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Phone className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/rushikesh-madane-560335189/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-surface/80 backdrop-blur-sm border border-border hover-lift hover-glow group"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/rushimadane"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-surface/80 backdrop-blur-sm border border-border hover-lift hover-glow group"
              title="GitHub"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-glow hover-lift group"
          >
            View My Work
            <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;