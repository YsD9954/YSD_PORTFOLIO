"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion"; // ✅ Framer Motion

// Logos
import pythonLogo from "@/components/images/skills/python.png";
import flaskLogo from "@/components/images/skills/flask.png";
import pandasLogo from "@/components/images/skills/pandas.png";
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
import powerElectronicsLogo from "@/components/images/skills/powerElectronics.png";
import assemblyLogo from "@/components/images/skills/assembly.png";

const skills = [
  { name: "Java", level: 90, logo: javaLogo, category: "Language", githubLink: "https://github.com/YsD9954/DSA.git" },
  { name: "C", level: 80, logo: cLogo, category: "Language", githubLink: "https://github.com/YsD9954/UNPLUGGED2.0_SMART_CITY.git" },
  { name: "HTML", level: 80, logo: htmlLogo, category: "Frontend", githubLink: "https://github.com/YsD9954/PulsePoint-Pro" },
  { name: "CSS", level: 80, logo: cssLogo, category: "Frontend", githubLink: "https://github.com/YsD9954/PulsePoint-Pro" },
  { name: "JavaScript", level: 80, logo: jsLogo, category: "Frontend", githubLink: "https://github.com/YsD9954/PulsePoint-Pro" },
  { name: "TypeScript", level: 60, logo: tsLogo, category: "Frontend", githubLink: "https://github.com/YsD9954/YSD_PORTFOLIO.git" },
  { name: "React", level: 76, logo: reactLogo, category: "Frontend", githubLink: "https://github.com/YsD9954/YSD_PORTFOLIO.git" },
  { name: "Figma", level: 68, logo: figmaLogo, category: "Design", githubLink: "https://github.com/YsD9954/SIH_TYREVISION.git" },
  { name: "Firebase", level: 65, logo: firebaseLogo, category: "Backend", githubLink: "https://github.com/YsD9954/SPARK.git" },
  { name: "MySQL", level: 85, logo: mysqlLogo, category: "Database", githubLink: "https://github.com/YsD9954/SPARK.git" },
  { name: "Arduino Cloud", level: 70, logo: arduinoLogo, category: "Cloud", githubLink: "https://github.com/YsD9954/UNPLUGGED2.0_SMART_CITY.git" },
  { name: "Postman", level: 82, logo: postmanLogo, category: "API", githubLink: "https://github.com/YsD9954/JMEDIA_INTERNSHIP.git" },
  { name: "Render", level: 90, logo: renderLogo, category: "Cloud", githubLink: "https://github.com/YsD9954/JMEDIA_INTERNSHIP.git" },
  { name: "Python", level: 86, logo: pythonLogo, category: "Language", githubLink: "https://github.com/YsD9954/JMEDIA_INTERNSHIP.git" },
  { name: "Flask", level: 67, logo: flaskLogo, category: "Framework", githubLink: "https://github.com/YsD9954/JMEDIA_INTERNSHIP.git" },
  { name: "Pandas", level: 74, logo: pandasLogo, category: "Library", githubLink: "https://github.com/YsD9954/JMEDIA_INTERNSHIP.git" },
  { name: "CST Studio", level: 78, logo: cstLogo, category: "Antenna Design", githubLink: "https://github.com/YsD9954/CP_GPS_ANTENNA.git" },
  { name: "KiCad", level: 76, logo: kicadLogo, category: "PCB Design", githubLink: "https://github.com/YsD9954/UNPLUGGED_SMART_AGRI.git" },
  { name: "Altium Designer", level: 81, logo: altiumLogo, category: "PCB Design", githubLink: "https://github.com/YsD9954/SIH_TYREVISION.git" },
  { name: "MATLAB", level: 80, logo: matlabLogo, category: "Language", githubLink: "https://github.com/YsD9954/SIH_TYREVISION.git" },
  { name: "GitHub", level: 97, logo: githubLogo, category: "Version Control", githubLink: "https://github.com/YsD9954" },
  { name: "Android Studio", level: 63, logo: androidLogo, category: "Android", githubLink: "https://github.com/YsD9954/SIH_TYREVISION.git" },
  { name: "Power Elctronics", level: 70, logo: powerElectronicsLogo, category: "Domain", githubLink: "https://github.com/YsD9954/IPD.git" },
];

const midIndex = Math.ceil(skills.length / 2);
const firstHalf = skills.slice(0, midIndex);
const secondHalf = skills.slice(midIndex);

const SkillCarousel = ({ items, reverse = false }) => (
  <>
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
        direction: reverse ? "rtl" : "ltr",
      }}
      className="w-full mt-6 overflow-x-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent"
    >
      <CarouselContent className={`-ml-2 md:-ml-4 ${reverse ? "flex-row-reverse" : ""}`}>
        {items.map((skill, index) => (
          <CarouselItem
            key={skill.name}
            className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
          >
            <Card className="group bg-card/60 backdrop-blur-sm shadow-md hover:border-cyan-500 transition-all duration-300 hover:shadow-cyan-500/20 group hover:scale-[1.025] hover:shadow-xl h-full">
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
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-transparent p-1 flex items-center justify-center shadow-sm backdrop-brightness-110 transition-transform hover:scale-110 duration-300">
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

    {/* Scroll Hint */}
    <p className="text-sm text-muted-foreground italic text-center mt-2 animate-pulse">
      Swap to view more 
    </p>
  </>
);

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-16 bg-gradient-secondary overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
          Tech Stack
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-fancy">
            Technologies I use to build modern applications
          </p>
        </div>

        <SkillCarousel items={firstHalf} />
        <SkillCarousel items={secondHalf} reverse />
      </div>
    </motion.section>
  );
};

export default Skills;
