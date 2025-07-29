"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Trophy,
  Users,
  MapPin,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

// Education Data
const educationTimeline = [
  {
    level: "Secondary School",
    institution: "S. H. Jondhale Vidyamandir",
    year: "2010 - 2020",
    location: "Dombivli, Thane",
    percentage: "91.80%",
    highlights: [],
  },
  {
    level: "Higher Secondary",
    institution: "Model College",
    year: "2020 - 2022",
    location: "Dombivli, Thane",
    percentage: "86.50%",
    highlights: [],
  },
  {
    level:
      "B.TECH in Electronics and Telecommunication with Honours in AIML",
    institution: "D J Sanghvi College Of Engineering",
    year: "2022 - 2026",
    location: "Vile Parle, Mumbai",
    percentage: "8.91 CGPA",
    highlights: [],
  },
];

// Co-curriculars
const extracurriculars = [
  {
    title: "Team DJS ARYA",
    icon: Users,
    year: "2023",
    description:
      "Electronics team member representing India at NASA’s international CANSAT competition",
  },
  {
    title: "JPMC Student Trainee",
    icon: Users,
    year: "2024",
    description:
      "Selected as student industry trainee at JP Morgan & Chase Co.",
  },
  {
    title: "Kabaddi - 2nd Runner Up",
    icon: Trophy,
    year: "2024",
    description: "Secured 3rd place in intra-college Kabaddi tournament",
  },
  {
    title: "DBMS IIT Kharagpur",
    icon: FileText,
    year: "2024",
    description: "Completed DBMS certification from IIT KGP",
  },
  {
    title: "2 Technical Publications",
    icon: FileText,
    year: "2024–2025",
    description:
      "Published Technical papers in national journals on ML and Antenna Design",
  },
  {
    title: "5+ Hackathon Finalist",
    icon: Trophy,
    year: "2023–2025",
    description: "Finalist in multiple national-level hackathons",
  },
];

export const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-background"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-fancy">
            I’m a passionate Engineer driven by innovation and focused
            on transforming complex challenges into seamless tech solutions
            by integrating embedded systems, AI, and software.       
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-cyan-400" />
              Education
            </h3>

            <div className="relative">
              <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500" />
              <div className="space-y-12">
                {educationTimeline.map((edu, index) => (
                  <div
                    key={index}
                    className="relative flex items-start gap-6"
                  >
                    <div className="z-10 w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <Card className="flex-1 bg-card/50 backdrop-blur-sm border border-border/30">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="max-w-xs">
                            <CardTitle className="text-md leading-tight  text-gray-200 leading-relaxed font-[Poppins]">
                              {edu.level}
                            </CardTitle>
                            <CardDescription className="text-cyan-400">
                              {edu.institution}
                            </CardDescription>
                          </div>
                          <Badge
                            variant="secondary"
                            className="whitespace-nowrap"
                          >
                            {edu.year}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-2">
                          <div className="flex gap-2 text-muted-foreground items-center">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </div>
                          <span className="text-accent font-semibold">
                            {edu.percentage}
                          </span>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Co-curricular Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <Trophy className="h-6 w-6 text-cyan-400" />
              Co-curricular Activities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 leading-tight">
              {extracurriculars.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="transition-transform duration-300"
                >
                  <Card className="w-full h-full bg-card/50 backdrop-blur-sm border border-border/30 hover:shadow-lg hover:border-cyan-400/50 hover:bg-card/60 px-4 py-3">
                    <CardHeader className="space-y-2">
                      <div className="flex flex-col gap-2">
                        <CardTitle className="text-cyan-400 text-lg flex gap-2 items-center font-semibold leading-tight">
                          <item.icon className="w-5 h-5 text-muted-foreground" />
                          {item.title}
                        </CardTitle>
                        <Badge variant="outline" className="w-fit">
                          {item.year}
                        </Badge>
                        <CardDescription className="text-sm text-gray-200 leading-relaxed font-[Poppins]">

                          
                          {item.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
