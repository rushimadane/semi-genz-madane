import React from "react";
import { Mail, Phone, Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-custom py-16">
        <div className="text-center space-y-8">
          {/* Main Message */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Let's connect and build something <span className="text-gradient">amazing</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              Ready to collaborate on your next project or discuss innovative solutions
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="mailto:rushimadane10@gmail.com"
              className="group p-4 rounded-full bg-muted hover:bg-accent transition-all duration-300 hover-lift"
              title="Email"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
            </a>
            <a
              href="tel:+918928508584"
              className="group p-4 rounded-full bg-muted hover:bg-accent transition-all duration-300 hover-lift"
              title="Phone"
            >
              <Phone className="w-6 h-6 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/rushikesh-madane-560335189/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-muted hover:bg-accent transition-all duration-300 hover-lift"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
            </a>
            <a
              href="https://github.com/rushimadane"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-muted hover:bg-accent transition-all duration-300 hover-lift"
              title="GitHub"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Rushikesh Madane. All Rights Reserved.
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;