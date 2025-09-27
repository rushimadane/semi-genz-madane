import React from "react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
import Leadership from "@/components/Leadership";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      <Hero />
      <Skills />
      <Projects />
      <Publications />
      <Education />
      <Leadership />
      <Footer />
    </div>
  );
};

export default Index;
