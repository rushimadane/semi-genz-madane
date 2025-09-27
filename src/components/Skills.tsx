import React from "react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "TypeScript", "C#"],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      title: "Frontend",
      skills: ["React.js", "Vite", "Tailwind CSS"],
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Spring", "Hibernate", "ASP.Net", "Express.js"],
      color: "bg-green-500/10 text-green-400 border-green-500/20"
    },
    {
      title: "Databases",
      skills: ["DBMS", "MongoDB", "Firebase"],
      color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    },
    {
      title: "Tools & Concepts",
      skills: ["Docker", "Git", "API Integration", "Adaptability", "Team Leadership"],
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    },
    {
      title: "Machine Learning",
      skills: ["scikit-learn", "pickle", "Flask"],
      color: "bg-pink-500/10 text-pink-400 border-pink-500/20"
    }
  ];

  return (
    <section className="section-padding bg-surface/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Key <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and skills I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gradient-card p-8 rounded-2xl border border-border hover-lift shadow-soft"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${category.color}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;