import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
        
        {/* Auto-sliding skills carousel */}
        <Carousel
          plugins={[
            Autoplay({
              delay: 1200,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
              playOnInit: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
            duration: 4000,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {skills.map((skill, index) => (
              <CarouselItem key={skill.name} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Card className="group bg-card/60 backdrop-blur-sm border hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge 
                        variant="secondary" 
                        className="text-xs font-medium"
                      >
                        {skill.category}
                      </Badge>
                      
                      <a
                        href={skill.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        title="View Projects"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-3xl">
                        {skill.logo}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground mb-1">
                          {skill.name}
                        </h3>
                        
                        <a
                          href={skill.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          <ExternalLink size={14} />
                          View Projects
                        </a>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Proficiency</span>
                        <span className="font-medium text-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="h-full bg-gradient-primary rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};