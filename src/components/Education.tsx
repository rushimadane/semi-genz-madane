import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "SIES College of Management Studies",
      degree: "M.C.A. - Computer Applications",
      period: "2024–2026",
      status: "Currently Pursuing",
      grade: null,
      highlight: true
    },
    {
      institution: "Pillai College of Arts, Commerce and Science",
      degree: "B.Sc. - Information Technology",
      period: "2020–2024",
      status: "Completed",
      grade: "CGPA: 7.25/10",
      highlight: false
    },
    {
      institution: "New Sudhagad Education Society, Navi Mumbai",
      degree: "12th MSBSHSE",
      period: "2020",
      status: "Completed",
      grade: "Percentage: 52%",
      highlight: false
    },
    {
      institution: "St Joseph High School and Jr College, Panvel",
      degree: "10th MSBSHSE",
      period: "2018",
      status: "Completed",
      grade: "Percentage: 70.40%",
      highlight: false
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Educational <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning path
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-muted border-0"></div>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-8 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className={`relative z-10 p-3 rounded-full border-4 ${
                    item.highlight 
                      ? 'bg-accent border-accent shadow-glow' 
                      : 'bg-surface border-border group-hover:border-accent'
                  } transition-all duration-300`}>
                    <GraduationCap className={`w-6 h-6 ${
                      item.highlight ? 'text-white' : 'text-muted-foreground group-hover:text-accent'
                    } transition-colors`} />
                  </div>

                  {/* Content Card */}
                  <Card className={`flex-1 bg-gradient-card border-border hover-lift shadow-soft group-hover:shadow-medium transition-all duration-300 ${
                    item.highlight ? 'ring-2 ring-accent/20' : ''
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {item.institution}
                          </h3>
                          <p className="text-lg font-semibold text-accent mt-1">
                            {item.degree}
                          </p>
                        </div>
                        
                        <div className="flex flex-col sm:items-end gap-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{item.period}</span>
                          </div>
                          
                          <Badge
                            variant={item.highlight ? "default" : "secondary"}
                            className={item.highlight 
                              ? "bg-accent text-accent-foreground" 
                              : "bg-muted text-muted-foreground"
                            }
                          >
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                      
                      {item.grade && (
                        <div className="mt-4 p-3 bg-accent/5 rounded-lg border border-accent/10">
                          <p className="text-sm font-medium text-accent">
                            Academic Performance: {item.grade}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;