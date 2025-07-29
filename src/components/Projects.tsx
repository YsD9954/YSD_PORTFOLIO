import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import { useState } from "react";

import sahayakLogo from "@/components/images/projects/sahayak_plus.png";
import smartFanLogo from "@/components/images/projects/ipd3.png";
import smartCityLogo from "@/components/images/projects/smart_city2.png";
import cpAntennaLogo from "@/components/images/projects/anteena3.png";
import tyreVisionLogo from "@/components/images/projects/tyrevision.png";
import smartAgriLogo from "@/components/images/projects/smart_agri.png";
import medicLogo from "@/components/images/projects/medic2.png";
import portfolioLogo from "@/components/images/projects/portfolio.png";

const projects = [
  {
    id: 1,
    title: "Sahayak Plus | Team Risk Insight Tool",
    description:
      "Flask-based web app that predicts team risk levels using a trained ML model analyzing commit, message, and ticket patterns. Visualized insights using Chart.js and dynamic tables with full browser compatibility.",
    image: sahayakLogo,
    technologies: ["Flask", "Python", "Pandas", "Chart.js", "HTML/CSS", "Machine Learning"],
    category: ["AI", "Web Dev"],
    github: "https://github.com/YsD9954/PulsePoint-Pro",
    year: "2025",
    collaborators: 1,
  },
  {
    id: 2,
    title: "Intelligent Fan and Switch Management",
    description:
      "Designed a high-efficiency SMPS (230V AC to 36V DC) with optimized switching to power a BLDC motor-based smart fan. Reduced thermal load by 15°C using EMI suppression techniques and enabled IoT integration, extending product lifespan by 20%.",
    image: smartFanLogo,
    technologies: ["SMPS", "BLDC Motor", "Embedded C", "IoT", "Power Electronics", "EMI Suppression"],
    category: ["Hardware", "IoT"],
    github: "https://github.com/YsD9954/IPD.git",
    year: "2025",
    collaborators: 2,
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a fully responsive and interactive portfolio website to showcase my projects, internships, and technical skills. Integrated animations, smooth transitions, and dynamic components using modern web technologies for an engaging user experience.",
    image: portfolioLogo,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    category: ["Web Dev"],
    github: "https://github.com/YsD9954/YSD_PORTFOLIO.git",
    year: "2025",
    collaborators: 1,
  },
  {
    id: 4,
    title: "Smart City Infrastructure",
    description:
      "Smart city solution leveraging YOLOv8 for real-time congestion and pothole detection. Integrated RFID and ESP32-CAM to boost parking speed by 65%. Deployed ESP32-based air purifiers reducing PM2.5 by 15%, and piezoelectric modules achieving 25% energy offset.",
    image: smartCityLogo,
    technologies: ["YOLOv8", "ESP32", "RFID", "Python", "OpenCV", "IoT", "Edge AI"],
    category: ["AI", "IoT"],
    github: "https://github.com/YsD9954/UNPLUGGED2.0_SMART_CITY.git",
    year: "2025",
    collaborators: 3,
  },
  {
    id: 5,
    title: "CP Antenna for GPS L5/L2 Band",
    description:
      "Designed a circularly polarized microstrip patch antenna using CST and IE3D simulators, achieving 8 dB gain and axial ratio < 3 dB. Validated real-world performance via VNA testing and GPS satellite lock-on using Neo 6M module across the 1170–1235 MHz band.",
    image: cpAntennaLogo,
    technologies: ["CST", "IE3D", "RF Design", "Antenna Simulation", "Neo 6M", "VNA Testing"],
    category: ["RF/Embedded"],
    github: "https://github.com/YsD9954/CP_GPS_ANTENNA.git",
    year: "2025",
    collaborators: 3,
  },
  {
    id: 6,
    title: "TyreVision",
    description:
      "IIoT system for dumpers using STM32F103 to monitor TKPH, pressure, temperature, and structural cracks. Achieved <2s data latency using 433 MHz RF modules. Figma-based mobile UI reduced diagnostic time by 70%.",
    image: tyreVisionLogo,
    technologies: ["STM32", "C", "RF 433MHz", "Figma", "IoT", "Embedded Systems", "Sensor Integration"],
    category: ["Hardware", "cloud"],
    github: "https://github.com/YsD9954/SIH_TYREVISION.git",
    year: "2024",
    collaborators: 3,
  },
  {
    id: 7,
    title: "Smart Agriculture System",
    description:
      "CNN (MobileNetV2)-based crop disease detector increasing yield by 18%. IoT-enabled irrigation system using ESP32, LoRaWAN, and sensors reduced water usage by 40%. Built a React dashboard for real-time monitoring, improving decision-making speed by 65%.",
    image: smartAgriLogo,
    technologies: ["MobileNetV2", "TensorFlow", "ESP32", "LoRaWAN", "React", "IoT", "Python"],
    category: ["AI", "IoT"],
    github: "https://github.com/YsD9954/UNPLUGGED_SMART_AGRI.git",
    year: "2024",
    collaborators: 6,
  },
  {
    id: 8,
    title: "M.E.D.I.C ",
    description:
      "Built an advanced healthcare system integrating machine learning, data analytics, and real-time monitoring to support medical professionals in diagnosis and patient care. Delivered personalized insights, streamlined diagnostics, and ensured secure healthcare data management for improved patient outcomes.",
    image: medicLogo,
    technologies: ["Machine Learning", "Python", "Data Analytics", "Flask", "SQL", "Healthcare AI"],
    category: ["AI", "Healthcare"],
    github: "https://github.com/YsD9954/SPARK.git",
    year: "2024",
    collaborators: 6,
  },
];

const categories = ["All", "Web Dev", "Hardware", "cloud", "RF/Embedded", "IoT", "AI", "Healthcare"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(
    (p) => selectedCategory === "All" || p.category.includes(selectedCategory)
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-background">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-fancy">
          Among the many projects I’ve built, these featured ones highlight my core strengths and versatility.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="text-xs"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="group hover:shadow-glow-cyan/30 transition-all duration-500 hover:scale-[1.02] bg-card/60 backdrop-blur border border-border/20 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            <div className="w-full h-60 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center rounded-t-md"
              />
            </div>

            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 border border-cyan-600 text-cyan-500 hover:bg-cyan-600 hover:text-white"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                )}
              </div>
              <CardDescription className="text-muted-foreground text-sm leading-relaxed pt-1 font-[Poppins]">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs px-2 py-0.5 border-border/30 text-muted-foreground hover:border-cyan-400 hover:text-cyan-400 transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {project.collaborators} collaborators
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default Projects;
