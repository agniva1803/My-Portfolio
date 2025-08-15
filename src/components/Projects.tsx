import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "PengoX: Full-Stack Food Ordering & Delivery App",
      description: "Complete MERN stack application for food ordering with dynamic cart, user authentication, Stripe API integration, and admin dashboard. Deployed on Vercel with separate backend hosting.",
      image: "/api/placeholder/400/300",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "Vercel"],
      github: "https://github.com/agniva1803",
      demo: "#",
      featured: true,
      period: "Mar 2025 - May 2025"
    },
    {
      title: "Secure FTP Client-Server Application",
      description: "Optimized file transfer system with secure FTP protocol for encrypted transfers, reducing transfer times by 20%. Features socket programming and multi-threading for efficiency.",
      image: "/api/placeholder/400/300", 
      tags: ["Python", "Sockets", "FTP Protocol", "Multi-threading", "Encryption"],
      github: "https://github.com/agniva1803",
      demo: "#",
      featured: true,
      period: "Oct 2024 - Nov 2024"
    },
    {
      title: "PenguinOS: Custom Android-Based Operating System",
      description: "FUSE-based system for multi-user storage management, reducing file access times by 15%. Enhanced Android vold module in AOSP with CI/CD pipelines.",
      image: "/api/placeholder/400/300",
      tags: ["C++", "Java", "Shell Script", "AOSP", "FUSE", "Git", "Docker", "Kubernetes"],
      github: "https://github.com/agniva1803",
      demo: "#",
      featured: false,
      period: "Nov 2023 - Present"
    },
    {
      title: "Intelligent Healthcare Chatbot: AI-Driven Symptom Checker",
      description: "AI chatbot for symptom-based diagnosis using NLP, increasing diagnostic accuracy by 20%. Features adaptive query model and machine learning optimization.",
      image: "/api/placeholder/400/300",
      tags: ["Python", "SQL", "Flask", "TensorFlow", "NLP", "Machine Learning"],
      github: "https://github.com/agniva1803",
      demo: "#",
      featured: false,
      period: "Dec 2023 - Jan 2024"
    },
    {
      title: "IEEE Research Publication",
      description: "Published research on 'Integrating Intelligent Chatbots in Healthcare: AI Based Healthcare Chatbot' in IEEE SCOPES 2024 Conference Proceedings.",
      image: "/api/placeholder/400/300",
      tags: ["Research", "AI", "Healthcare", "NLP", "Machine Learning", "IEEE"],
      github: "#",
      demo: "https://ieeexplore.ieee.org/author/273156730417953",
      featured: false,
      period: "Dec 2024"
    },
    {
      title: "Implementation of Sixth Sense Using Raspberry Pi",
      description: "Microcontroller-based project implementing sixth sense technology using Raspberry Pi, advancing to the final round of Microcontroller-Based Project Expo.",
      image: "/api/placeholder/400/300",
      tags: ["Raspberry Pi", "Computer Vision", "OpenCV", "Python", "Arduino"],
      github: "https://github.com/agniva1803",
      demo: "#",
      featured: false,
      period: "Nov 2024"
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world projects showcasing my expertise in Android development, AI applications, and full-stack solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className={`glass-card hover-glow group overflow-hidden opacity-0 fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video overflow-hidden bg-muted/20">
                <div className="w-full h-full bg-gradient-secondary flex items-center justify-center">
                  <div className="text-6xl opacity-30">
                    <Play className="h-16 w-16 text-primary" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-muted-foreground font-medium">{project.period}</div>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-primary/50 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary text-primary hover:bg-primary/10"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  {project.demo !== "#" && (
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-primary/80"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {project.title.includes("IEEE") ? "Research" : "Demo"}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title}
                className={`glass-card hover-glow group opacity-0 fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-primary/30 text-primary/80">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs border-primary/30 text-primary/80">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 p-2">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 p-2">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => window.open('https://github.com/agniva1803', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
