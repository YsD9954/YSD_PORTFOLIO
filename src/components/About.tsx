import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin, Users, Trophy, FileText } from "lucide-react";

const educationTimeline = [
  {
    level: "Secondary School",
    institution: "XYZ High School",
    year: "2014 - 2016",
    location: "Your City",
    percentage: "95%",
    highlights: ["Science Stream", "Mathematics Olympiad Finalist"]
  },
  {
    level: "Higher Secondary",
    institution: "ABC College",
    year: "2016 - 2018", 
    location: "Your City",
    percentage: "92%",
    highlights: ["PCM Stream", "School Topper in Physics"]
  },
  {
    level: "B.Tech Computer Science",
    institution: "Your University",
    year: "2018 - 2022",
    location: "Your City",
    percentage: "8.5 CGPA",
    highlights: ["Dean's List", "Final Year Project on AI"]
  }
];

const societies = [
  {
    name: "Computer Science Society",
    role: "President",
    year: "2021-2022",
    description: "Led a team of 50+ members, organized tech events and workshops"
  },
  {
    name: "Robotics Club",
    role: "Technical Lead", 
    year: "2020-2021",
    description: "Developed autonomous robots, participated in national competitions"
  },
  {
    name: "Coding Club",
    role: "Core Member",
    year: "2019-2020",
    description: "Organized hackathons and coding competitions for students"
  }
];

const participations = [
  {
    event: "National Hackathon Championship",
    position: "Winner",
    year: "2021",
    description: "Developed an AI-powered healthcare solution"
  },
  {
    event: "Inter-University Coding Contest",
    position: "2nd Place",
    year: "2020",
    description: "Competitive programming team event"
  },
  {
    event: "Tech Innovation Summit",
    position: "Best Project Award",
    year: "2021",
    description: "IoT-based smart campus solution"
  }
];

const certifications = [
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    year: "2023",
    validity: "Valid until 2026"
  },
  {
    title: "Google Cloud Professional",
    issuer: "Google Cloud",
    year: "2023", 
    validity: "Valid until 2026"
  },
  {
    title: "React Professional Certificate",
    issuer: "Meta",
    year: "2022",
    validity: "Valid until 2025"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me & Qualifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My educational journey and extracurricular achievements that have shaped my expertise in technology and leadership.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-foreground flex items-center gap-3">
              <GraduationCap className="h-7 w-7 text-primary" />
              Educational Timeline
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-primary"></div>
              
              <div className="space-y-12">
                {educationTimeline.map((edu, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Timeline Dot */}
                    <div className="relative z-10 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    
                    {/* Content Card */}
                    <Card className="flex-1 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow-primary/20 transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <CardTitle className="text-xl text-foreground">{edu.level}</CardTitle>
                            <CardDescription className="text-primary font-medium">{edu.institution}</CardDescription>
                          </div>
                          <Badge variant="secondary" className="shrink-0">
                            {edu.year}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </div>
                          <div className="text-accent font-semibold">
                            {edu.percentage}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right: Extracurricular Activities */}
          <div className="space-y-12">
            {/* Societies */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                <Users className="h-6 w-6 text-accent" />
                Societies & Leadership
              </h3>
              
              {societies.map((society, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow-accent/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="text-lg text-foreground">{society.name}</CardTitle>
                        <CardDescription className="text-accent font-medium">{society.role}</CardDescription>
                      </div>
                      <Badge variant="outline">
                        {society.year}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 text-sm">{society.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Participations */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                <Trophy className="h-6 w-6 text-primary" />
                Competitions & Awards
              </h3>
              
              {participations.map((participation, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow-primary/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="text-lg text-foreground">{participation.event}</CardTitle>
                        <CardDescription className="text-primary font-medium">{participation.position}</CardDescription>
                      </div>
                      <Badge variant="secondary">
                        {participation.year}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 text-sm">{participation.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                <FileText className="h-6 w-6 text-secondary" />
                Certifications
              </h3>
              
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow-secondary/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="text-lg text-foreground">{cert.title}</CardTitle>
                        <CardDescription className="text-secondary font-medium">{cert.issuer}</CardDescription>
                      </div>
                      <Badge variant="outline">
                        {cert.year}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {cert.validity}
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};