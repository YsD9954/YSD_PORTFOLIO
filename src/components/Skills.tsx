import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Image Imports
import pythonLogo from "@/components/images/skills/python.png";
import javaLogo from "@/components/images/skills/java.png";
import cLogo from "@/components/images/skills/c.png";
import htmlLogo from "@/components/images/skills/html.png";
import cssLogo from "@/components/images/skills/css.png";
import jsLogo from "@/components/images/skills/javascript.png";
import tsLogo from "@/components/images/skills/typescript.png";
import reactLogo from "@/components/images/skills/react.png";
import figmaLogo from "@/components/images/skills/figma.png";
import firebaseLogo from "@/components/images/skills/firebase.png";
import mysqlLogo from "@/components/images/skills/mysql.png";
import arduinoLogo from "@/components/images/skills/arduino.png";
import postmanLogo from "@/components/images/skills/postman.png";
import renderLogo from "@/components/images/skills/render.png";
import cstLogo from "@/components/images/skills/cst.png";
import kicadLogo from "@/components/images/skills/kicad.png";
import altiumLogo from "@/components/images/skills/altium.png";
import matlabLogo from "@/components/images/skills/matlab.png";
import githubLogo from "@/components/images/skills/github.png";
import androidLogo from "@/components/images/skills/android.png";

const skills = [
  { name: "Python", level: 70, logo: pythonLogo, category: "Language", githubLink: "https://github.com/YsD9954" },
  { name: "Java", level: 90, logo: javaLogo, category: "Language", githubLink: "https://github.com/YsD9954" },
  { name: "C", level: 80, logo: cLogo, category: "Language", githubLink: "https://github.com/YsD9954" },
  { name: "HTML", level: 80, logo: htmlLogo, category: "Frontend", githubLink: "https://github.com/YsD9954" },
  { name: "CSS", level: 80, logo: cssLogo, category: "Frontend", githubLink: "https://github.com/YsD9954" },
  { name: "JavaScript", level: 80, logo: jsLogo, category: "Frontend", githubLink: "https://github.com/YsD9954" },
  { name: "TypeScript", level: 60, logo: tsLogo, category: "Language", githubLink: "https://github.com/YsD9954" },
  { name: "React", level: 76, logo: reactLogo, category: "Frontend", githubLink: "https://github.com/YsD9954" },
  { name: "Figma", level: 68, logo: figmaLogo, category: "Design", githubLink: "https://github.com/YsD9954" },
  { name: "Firebase", level: 65, logo: firebaseLogo, category: "Backend", githubLink: "https://github.com/YsD9954" },
  { name: "MySQL", level: 85, logo: mysqlLogo, category: "Database", githubLink: "https://github.com/YsD9954" },
  { name: "Arduino Cloud", level: 70, logo: arduinoLogo, category: "Cloud", githubLink: "https://github.com/YsD9954" },
  { name: "Postman", level: 82, logo: postmanLogo, category: "API", githubLink: "https://github.com/YsD9954" },
  { name: "Render", level: 90, logo: renderLogo, category: "API", githubLink: "https://github.com/YsD9954" },
  { name: "CST Studio", level: 78, logo: cstLogo, category: "Antenna Design", githubLink: "https://github.com/YsD9954" },
  { name: "KiCad", level: 76, logo: kicadLogo, category: "PCB Design", githubLink: "https://github.com/YsD9954" },
  { name: "Altium Designer", level: 81, logo: altiumLogo, category: "PCB Design", githubLink: "https://github.com/YsD9954" },
  { name: "MATLAB", level: 80, logo: matlabLogo, category: "Database", githubLink: "https://github.com/YsD9954" },
  { name: "GitHub", level: 97, logo: githubLogo, category: "Version Control", githubLink: "https://github.com/YsD9954" },
  { name: "Android Studio", level: 63, logo: androidLogo, category: "Android", githubLink: "https://github.com/YsD9954" },
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

        <Carousel
          plugins={[
            Autoplay({
              delay: 1000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
              playOnInit: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
            duration: 3800,
            dragFree: true,
          }}
          className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {skills.map((skill, index) => (
              <CarouselItem
                key={skill.name}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
              >
                <Card className="group bg-card/60 backdrop-blur-sm border border-transparent hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300 shadow-md hover:scale-[1.025] hover:shadow-xl h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="secondary" className="text-xs font-medium">
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
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-transparent p-1 flex items-center justify-center shadow-sm backdrop-brightness-110">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-full h-full object-contain p-1"
                        />
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
