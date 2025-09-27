import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, Calendar, Briefcase } from "lucide-react";

const Leadership = () => {
  const activities = {
    coCurricular: [
      {
        title: "Core Committee Member",
        organization: "Pixel Annual Tech Fest - 2025",
        type: "Technical Leadership",
        icon: Briefcase,
        color: "text-blue-400 bg-blue-500/10 border-blue-500/20"
      },
      {
        title: "Participation",
        organization: "SynTechXathon organized by RD&SH National College - 2025",
        type: "Competition",
        icon: Trophy,
        color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
      }
    ],
    extraCurricular: [
      {
        title: "POC of Alumni Committee - 2024",
        organization: "Point of Contact for Alumni Relations",
        type: "Community Building",
        icon: Users,
        color: "text-green-400 bg-green-500/10 border-green-500/20"
      },
      {
        title: "First Prize Winner",
        organization: "Nukkad Natak organized by CSR Committee - 2024",
        type: "Cultural Achievement",
        icon: Trophy,
        color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20"
      },
      {
        title: "Track Coordinator for IRC - 2025",
        organization: "Internal Relations Committee",
        type: "Organizational Leadership",
        icon: Calendar,
        color: "text-pink-400 bg-pink-500/10 border-pink-500/20"
      }
    ]
  };

  const renderActivityCard = (activity: any, index: number) => {
    const IconComponent = activity.icon;
    
    return (
      <Card
        key={index}
        className="bg-gradient-card border-border hover-lift shadow-soft group overflow-hidden"
        style={{ animationDelay: `${index * 150}ms` }}
      >
        <CardHeader className="pb-4">
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl border ${activity.color} group-hover:scale-110 transition-transform duration-300`}>
              <IconComponent className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                {activity.title}
              </CardTitle>
              <p className="text-muted-foreground text-sm mt-1">
                {activity.organization}
              </p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          <Badge
            variant="secondary"
            className={`text-xs px-3 py-1 ${activity.color}`}
          >
            {activity.type}
          </Badge>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="section-padding bg-surface/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Leadership & <span className="text-gradient">Activities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building communities, leading initiatives, and making an impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Co-Curricular Activities */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center justify-center lg:justify-start gap-3">
                <Briefcase className="w-7 h-7 text-accent" />
                Co-Curricular Activities
              </h3>
              <p className="text-muted-foreground">
                Technical leadership and competitive participation
              </p>
            </div>
            
            <div className="space-y-6">
              {activities.coCurricular.map((activity, index) => 
                renderActivityCard(activity, index)
              )}
            </div>
          </div>

          {/* Extra-Curricular Activities */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center justify-center lg:justify-start gap-3">
                <Users className="w-7 h-7 text-accent" />
                Extra-Curricular Activities
              </h3>
              <p className="text-muted-foreground">
                Community building and cultural engagement
              </p>
            </div>
            
            <div className="space-y-6">
              {activities.extraCurricular.map((activity, index) => 
                renderActivityCard(activity, index + 2)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;