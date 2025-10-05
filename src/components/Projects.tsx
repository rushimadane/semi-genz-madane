import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "bindas-vibes-stickers",
      description: "E-commerce website for custom stickers with modern design and seamless user experience",
      skills: ["React.js", "TypeScript", "E-commerce", "UI/UX" , "R2 Cloud" , "Firebase"],
      github: "https://github.com/rushimadane/bindas-vibes-stickers",
      demo: null,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Share Warmth Together",
      description: "Community platform connecting donors with those in need, fostering social impact",
      skills: ["React.js", "Node.js", "Firebase", "Social Impact"],
      github: "https://github.com/rushimadane/share-warmth-together",
      demo: null,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Present AI",
      description: "AI-powered presentation generator that creates engaging slides from simple prompts",
      skills: ["AI Integration", "React.js", "Machine Learning", "Flask"],
      github: "https://github.com/rushimadane/present-ai",
      demo: null,
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Learn IT",
      description: "Educational platform for IT concepts with interactive learning modules",
      skills: ["Education Tech", "React.js", "Interactive Learning" , "AI Integration"],
      github: "https://github.com/rushimadane/learn-it",
      demo: null,
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Student Exam Prediction Model",
      description: "Machine learning model predicting student performance using advanced algorithms",
      skills: ["Machine Learning", "scikit-learn", "Python" , "Flask" ,  "Data Analysis"],
      github: "https://github.com/rushimadane/student-exam-prediction",
      demo: null,
      gradient: "from-indigo-500/20 to-purple-500/20"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group bg-gradient-card border-border hover-lift shadow-soft overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs px-3 py-1 bg-accent/10 text-accent border-accent/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary-hover"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;