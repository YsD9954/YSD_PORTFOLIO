import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "React", level: 92, logo: "⚛️", category: "Frontend" },
  { name: "TypeScript", level: 85, logo: "🔷", category: "Language" },
  { name: "Node.js", level: 85, logo: "🟢", category: "Backend" },
  { name: "Python", level: 83, logo: "🐍", category: "Language" },
  { name: "MongoDB", level: 85, logo: "🍃", category: "Database" },
  { name: "AWS", level: 75, logo: "☁️", category: "Cloud" },
  { name: "Docker", level: 80, logo: "🐳", category: "DevOps" },
  { name: "Figma", level: 85, logo: "🎨", category: "Design" },
  { name: "Next.js", level: 88, logo: "🔺", category: "Frontend" },
  { name: "PostgreSQL", level: 80, logo: "🐘", category: "Database" },
  { name: "Redis", level: 75, logo: "🔴", category: "Database" },
  { name: "GraphQL", level: 78, logo: "🎯", category: "API" },
  { name: "Git", level: 90, logo: "🌿", category: "Tools" },
  { name: "Kubernetes", level: 70, logo: "⚙️", category: "DevOps" },
  { name: "Firebase", level: 82, logo: "🔥", category: "Backend" },
  { name: "Tailwind", level: 95, logo: "💨", category: "CSS" }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gradient-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-muted-foreground">
            Technologies I use to build modern applications
          </p>
        </div>
        
        {/* Horizontal scrolling skills */}
        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex space-x-6 animate-scroll-horizontal">
              {[...skills, ...skills].map((skill, index) => (
                <Card 
                  key={`${skill.name}-${index}`}
                  className="group min-w-[200px] bg-card/20 backdrop-blur-sm border-border/30 hover:shadow-glow-primary/40 transition-all duration-500 hover:scale-110 hover:-translate-y-2 animate-fade-in"
                  style={{ 
                    animationDelay: `${(index % skills.length) * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <Badge 
                      variant="outline" 
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {skill.category}
                    </Badge>
                    
                    <div className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:drop-shadow-lg">
                      {skill.logo}
                    </div>
                    
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h3>
                    
                    {/* Progress bar instead of circle */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animation: `expand-width 1.5s ease-out ${(index % skills.length) * 100}ms both`
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for infinite scroll effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};