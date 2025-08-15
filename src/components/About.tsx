import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Brain, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Android Development",
      description: "Expert in Kotlin, Java, and Android SDK with experience in AOSP and embedded systems"
    },
    {
      icon: <Cloud className="h-8 w-8 text-accent" />,
      title: "Cloud Infrastructure",
      description: "Specialized in AWS, Google Cloud, Docker, Kubernetes, and CI/CD pipeline automation"
    },
    {
      icon: <Brain className="h-8 w-8 text-secondary" />,
      title: "AI & Machine Learning",
      description: "Building intelligent healthcare chatbots and AI-driven applications with NLP and ML"
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Full Stack Development",
      description: "MERN stack applications with secure FTP systems and real-time computing solutions"
    }
  ];

  const technologies = [
    "Python", "C++", "Java", "Kotlin", "JavaScript", "SQL", "HTML", "CSS", 
    "React", "Node.js", "MySQL", "SQLite", "TensorFlow", "Scikit-learn", "OpenCV", 
    "YOLOv5", "Pandas", "NumPy", "AWS", "Google Cloud", "Firebase", "Git", 
    "Docker", "Kubernetes", "CI/CD", "Android Studio", "Flutter", "Linux", 
    "Arduino", "Raspberry Pi", "MATLAB", "SciPy", "SymPy"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Software Developer with expertise in Android development, embedded systems, and AI-driven applications
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
                    Currently pursuing B.Tech in Electronics and Computer Engineering at SRM Institute 
                    of Science and Technology with a CGPA of 8.9. My journey began with a passion for 
                    technology and has evolved into expertise in Android development and embedded systems.
                  </p>
                  <p>
                    At Aakash Research Labs, I engineered FUSE-based multi-user storage systems and 
                    refined Android vold modules in AOSP, significantly improving storage efficiency. 
                    My work at Tata Steel Ltd involved building AI chatbots for healthcare applications.
                  </p>
                  <p>
                    I'm an active contributor to open-source projects and have been recognized as a 
                    Top 20% academic performer. My focus is on integrating LLMs, Kubernetes, and 
                    real-time computing to build scalable solutions.
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
            { label: "CGPA", value: "8.9" },
            { label: "Projects Completed", value: "10+" },
            { label: "Technologies", value: "25+" },
            { label: "Research Papers", value: "1" }
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