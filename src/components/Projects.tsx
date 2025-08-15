import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      description: "Full-stack analytics platform with real-time ML insights, built with React, Node.js, and TensorFlow. Processes millions of data points daily.",
      image: "/api/placeholder/400/300",
      tags: ["React", "Node.js", "TensorFlow", "AWS", "PostgreSQL"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Cloud Native E-Commerce",
      description: "Microservices-based e-commerce platform deployed on Kubernetes with automated CI/CD pipeline and 99.9% uptime.",
      image: "/api/placeholder/400/300", 
      tags: ["Go", "Kubernetes", "Docker", "Redis", "GraphQL"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Real-time Chat Application",
      description: "Scalable chat app with WebSocket connections, message encryption, and AI-powered moderation features.",
      image: "/api/placeholder/400/300",
      tags: ["React", "Socket.io", "Node.js", "MongoDB", "OpenAI"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "DevOps Automation Suite",
      description: "Complete DevOps toolkit for automated deployments, monitoring, and infrastructure management across multiple cloud providers.",
      image: "/api/placeholder/400/300",
      tags: ["Python", "Terraform", "AWS", "GCP", "Jenkins"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Machine Learning Pipeline",
      description: "End-to-end ML pipeline for computer vision tasks with automated model training, validation, and deployment.",
      image: "/api/placeholder/400/300",
      tags: ["Python", "PyTorch", "MLflow", "Docker", "Airflow"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Serverless API Gateway",
      description: "High-performance API gateway built with serverless architecture, handling millions of requests with auto-scaling.",
      image: "/api/placeholder/400/300",
      tags: ["Lambda", "API Gateway", "DynamoDB", "CloudFormation"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in full-stack development and cloud technologies
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
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-primary/50 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/80">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
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
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
