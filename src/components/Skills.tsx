import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "React", level: 92, logo: "⚛️" },
  { name: "TypeScript", level: 85, logo: "🔷" },
  { name: "Node.js", level: 85, logo: "🟢" },
  { name: "Python", level: 83, logo: "🐍" },
  { name: "MongoDB", level: 85, logo: "🍃" },
  { name: "AWS", level: 75, logo: "☁️" },
  { name: "Docker", level: 80, logo: "🐳" },
  { name: "Figma", level: 85, logo: "🎨" }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-muted-foreground">
            Technologies I use to build modern applications
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="group bg-card/30 backdrop-blur-sm border-border/30 hover:shadow-glow-primary/30 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <CardContent className="p-4 text-center space-y-3">
                <div className="text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {skill.logo}
                </div>
                
                <h3 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                
                <div className="relative w-12 h-12 mx-auto">
                  <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      className="text-muted/20"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray={`${skill.level * 1.26} 126`}
                      className="text-primary transition-colors duration-300"
                      style={{
                        strokeLinecap: 'round',
                        animation: `draw-circle 1s ease-out ${index * 150}ms both`
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-semibold text-foreground">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};