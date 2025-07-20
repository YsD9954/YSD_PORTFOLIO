import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const skills = [
  { name: "React", level: 92, logo: "⚛️", category: "Frontend", githubLink: "https://github.com/yourusername/react-projects" },
  { name: "TypeScript", level: 85, logo: "🔷", category: "Language", githubLink: "https://github.com/yourusername/typescript-projects" },
  { name: "Node.js", level: 85, logo: "🟢", category: "Backend", githubLink: "https://github.com/yourusername/nodejs-projects" },
  { name: "Python", level: 83, logo: "🐍", category: "Language", githubLink: "https://github.com/yourusername/python-projects" },
  { name: "MongoDB", level: 85, logo: "🍃", category: "Database", githubLink: "https://github.com/yourusername/mongodb-projects" },
  { name: "AWS", level: 75, logo: "☁️", category: "Cloud", githubLink: "https://github.com/yourusername/aws-projects" },
  { name: "Docker", level: 80, logo: "🐳", category: "DevOps", githubLink: "https://github.com/yourusername/docker-projects" },
  { name: "Figma", level: 85, logo: "🎨", category: "Design", githubLink: "https://github.com/yourusername/design-projects" },
  { name: "Next.js", level: 88, logo: "🔺", category: "Frontend", githubLink: "https://github.com/yourusername/nextjs-projects" },
  { name: "PostgreSQL", level: 80, logo: "🐘", category: "Database", githubLink: "https://github.com/yourusername/postgresql-projects" },
  { name: "Redis", level: 75, logo: "🔴", category: "Database", githubLink: "https://github.com/yourusername/redis-projects" },
  { name: "GraphQL", level: 78, logo: "🎯", category: "API", githubLink: "https://github.com/yourusername/graphql-projects" },
  { name: "Git", level: 90, logo: "🌿", category: "Tools", githubLink: "https://github.com/yourusername" },
  { name: "Kubernetes", level: 70, logo: "⚙️", category: "DevOps", githubLink: "https://github.com/yourusername/k8s-projects" },
  { name: "Firebase", level: 82, logo: "🔥", category: "Backend", githubLink: "https://github.com/yourusername/firebase-projects" },
  { name: "Tailwind", level: 95, logo: "💨", category: "CSS", githubLink: "https://github.com/yourusername/tailwind-projects" }
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
                  className="group min-w-[220px] bg-gradient-to-br from-card/30 to-card/10 backdrop-blur-sm border-border/30 hover:shadow-glow-primary/60 transition-all duration-700 hover:scale-110 hover:-translate-y-4 hover:rotate-3 animate-fade-in animate-float relative overflow-hidden"
                  style={{ 
                    animationDelay: `${(index % skills.length) * 100}ms`,
                    animationFillMode: 'both',
                    '--float-delay': `${(index % skills.length) * 0.5}s`
                  } as React.CSSProperties}
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
                  
                  {/* Floating particles */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary/40 rounded-full animate-bounce-slow opacity-60" 
                       style={{ animationDelay: `${index * 200}ms` }} />
                  <div className="absolute bottom-3 left-3 w-1 h-1 bg-accent/50 rounded-full animate-bounce-slow opacity-40" 
                       style={{ animationDelay: `${index * 300}ms` }} />
                  
                  <CardContent className="p-6 text-center space-y-4 relative z-10">
                    <div className="flex justify-between items-start">
                      <Badge 
                        variant="outline" 
                        className="text-xs bg-primary/10 text-primary border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300"
                      >
                        {skill.category}
                      </Badge>
                      
                      {/* GitHub link */}
                      <a
                        href={skill.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 text-muted-foreground hover:text-primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                      </a>
                    </div>
                    
                    <div className="text-4xl group-hover:scale-150 group-hover:rotate-12 transition-all duration-700 group-hover:drop-shadow-2xl animate-wiggle">
                      {skill.logo}
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-105">
                        {skill.name}
                      </h3>
                      
                      {/* View Projects button */}
                      <a
                        href={skill.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors duration-300 opacity-0 group-hover:opacity-100"
                      >
                        <ExternalLink size={12} />
                        View Projects
                      </a>
                    </div>
                    
                    {/* Enhanced progress bar with glow */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Proficiency</span>
                        <span className="group-hover:text-primary transition-colors duration-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden relative">
                        <div 
                          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out relative group-hover:shadow-glow-primary/50"
                          style={{
                            width: `${skill.level}%`,
                            animation: `expand-width 1.5s ease-out ${(index % skills.length) * 100}ms both, pulse-bar 2s ease-in-out infinite ${index * 0.2}s`
                          }}
                        >
                          {/* Moving shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
                        </div>
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