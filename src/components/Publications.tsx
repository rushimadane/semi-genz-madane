import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, User } from "lucide-react";

const Publications = () => {
  return (
    <section className="section-padding bg-surface/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Publications & <span className="text-gradient">Research</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contributing to academic research and industry insights
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border hover-lift shadow-medium overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-accent-primary/30 to-accent-secondary/30" />
            
            <CardHeader className="pb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                  <FileText className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Bridging The Employability Gap In Indian Higher Education
                  </CardTitle>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span className="font-medium">Mentor: Dr. Sanju Gupta</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                This research paper addressed the employability of engineering graduates in the Indian Job Market. 
                Key findings highlighted persistent gaps in digital and emerging technology skills.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground text-lg">Key Research Skills Applied:</h4>
                <div className="flex flex-wrap gap-3">
                  {["Quantitative Analysis", "Mix Method Approach", "Primary Data Collection"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-accent/5 rounded-xl border border-accent/10">
                <h4 className="font-semibold text-foreground mb-3">Research Impact</h4>
                <p className="text-muted-foreground">
                  Identified critical skill gaps in the Indian higher education system, contributing valuable insights 
                  for curriculum development and industry-academia collaboration improvement.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Publications;