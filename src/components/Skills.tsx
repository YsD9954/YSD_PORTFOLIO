import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "JavaScript", level: 90, logo: "⚡" },
  { name: "TypeScript", level: 85, logo: "🔷" },
  { name: "React", level: 92, logo: "⚛️" },
  { name: "Next.js", level: 88, logo: "▲" },
  { name: "Vue.js", level: 80, logo: "💚" },
  { name: "Node.js", level: 85, logo: "🟢" },
  { name: "Python", level: 83, logo: "🐍" },
  { name: "Java", level: 78, logo: "☕" },
  { name: "PostgreSQL", level: 75, logo: "🐘" },
  { name: "MongoDB", level: 85, logo: "🍃" },
  { name: "Docker", level: 80, logo: "🐳" },
  { name: "AWS", level: 75, logo: "☁️" },
  { name: "Git", level: 90, logo: "📝" },
  { name: "Figma", level: 85, logo: "🎨" },
  { name: "Tailwind CSS", level: 95, logo: "💨" },
  { name: "Express.js", level: 82, logo: "🚀" },
  { name: "React Native", level: 78, logo: "📱" },
  { name: "Firebase", level: 80, logo: "🔥" },
  { name: "GraphQL", level: 72, logo: "📊" },
  { name: "Redux", level: 88, logo: "🔄" }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to build amazing digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow-primary/20 transition-all duration-500 hover:scale-105 hover:bg-card/70 animate-fade-in cursor-pointer"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <CardContent className="p-6 text-center space-y-4">
                {/* Logo with animation */}
                <div className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                  {skill.logo}
                </div>
                
                {/* Skill name */}
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
                
                {/* Progress circle */}
                <div className="relative w-16 h-16 mx-auto">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                    {/* Background circle */}
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      className="text-muted/20"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${skill.level * 1.76} 176`}
                      className="text-primary group-hover:text-accent transition-colors duration-500"
                      style={{
                        strokeLinecap: 'round',
                        animation: `draw-circle 1.5s ease-out ${index * 100}ms both`
                      }}
                    />
                  </svg>
                  {/* Percentage text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                
                {/* Proficiency badge */}
                <Badge 
                  variant={skill.level >= 85 ? "default" : skill.level >= 75 ? "secondary" : "outline"}
                  className="text-xs group-hover:scale-110 transition-transform duration-300"
                >
                  {skill.level >= 85 ? "Expert" : skill.level >= 75 ? "Advanced" : "Intermediate"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Floating skill indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-6 bg-card/30 backdrop-blur-sm rounded-full border border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Expert (85%+)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse delay-300"></div>
              <span className="text-sm text-muted-foreground">Advanced (75%+)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-muted rounded-full animate-pulse delay-700"></div>
              <span className="text-sm text-muted-foreground">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};