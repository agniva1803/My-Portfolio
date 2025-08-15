import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Brain, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Full Stack Development",
      description: "Expert in modern web technologies including React, Node.js, and TypeScript"
    },
    {
      icon: <Cloud className="h-8 w-8 text-accent" />,
      title: "Cloud Native",
      description: "Specialized in AWS, Kubernetes, Docker, and microservices architecture"
    },
    {
      icon: <Brain className="h-8 w-8 text-secondary" />,
      title: "AI & Machine Learning",
      description: "Building intelligent applications with Python, TensorFlow, and LLMs"
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "DevOps & Automation",
      description: "CI/CD pipelines, Infrastructure as Code, and automated deployments"
    }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "Go", "AWS", "Kubernetes", 
    "Docker", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs",
    "TensorFlow", "OpenAI", "Microservices", "Serverless", "CI/CD"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with 5+ years of experience building innovative solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <Card className="glass-card hover-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Started my journey as a curious developer fascinated by the intersection of 
                    technology and innovation. Over the years, I've evolved into a full-stack 
                    engineer with deep expertise in cloud-native architectures and AI integration.
                  </p>
                  <p>
                    My passion lies in building scalable, efficient systems that solve real-world 
                    problems. I believe in clean code, robust architecture, and continuous learning.
                  </p>
                  <p>
                    Currently focused on leveraging AI and machine learning to create intelligent 
                    applications that enhance user experiences and drive business value.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="glass-card hover-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Technologies I Love</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className={`border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 opacity-0 fade-in-up`}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title} 
                className={`glass-card hover-glow opacity-0 fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-muted/30">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-foreground">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Years Experience", value: "5+" },
            { label: "Projects Completed", value: "50+" },
            { label: "Technologies", value: "20+" },
            { label: "Happy Clients", value: "30+" }
          ].map((stat, index) => (
            <Card 
              key={stat.label} 
              className={`glass-card text-center hover-glow opacity-0 fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;