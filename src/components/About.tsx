import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Smartphone, Brain, Server, GitBranch, Award, Trophy, BookOpen, Medal } from "lucide-react";

const About = () => {
  const skills = {
    "Programming Languages": ["Java", "Python", "C/C++", "JavaScript", "TypeScript", "SQL", "Shell Script"],
    "Frameworks & Libraries": ["React", "Node.js", "Express", "Flask", "TensorFlow", "OpenCV"],
    "Databases": ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    "Tools & Technologies": ["Git", "Docker", "Kubernetes", "AWS", "Vercel", "Android Studio", "Linux"],
    "Mobile Development": ["Android Development", "AOSP", "Mobile App Design"],
    "AI & Machine Learning": ["NLP", "Computer Vision", "Machine Learning", "AI Chatbots"]
  };

  const workExperience = [
    {
      title: "Technical Team Member (Part-time)",
      company: "Aakash Research Labs",
      period: "Nov 2023 - Present",
      description: "Engineered FUSE-based multi-user storage system in Penguin OS, reducing volume management overhead by 20%. Automated CI/CD pipelines, accelerating build and deployment cycles by 30%.",
      link: "https://drive.google.com/file/d/1NbW2ZCwx_YazSCKM4MHoa18OtYmpPGI4/view?usp=drivesdk"
    },
    {
      title: "Project Intern (Remote)",
      company: "Tata Steel Ltd",
      period: "Dec 2023 - Jan 2024",
      description: "Built an AI chatbot for healthcare, increasing disease identification accuracy by 20% using NLP. Created symptom-based diagnosis system, boosting response efficiency by 25%.",
      link: "https://drive.google.com/file/d/12uGODs0wDUg57oo2HUnVIdV1stk0JaIU/view?usp=drivesdk"
    }
  ];

  const volunteerExperience = [
    {
      title: "Community Engagement Volunteer",
      organization: "Tata Steel Foundation",
      period: "July 2024 - August 2024",
      description: "Led on-site evaluations of the Pre-Matric Coaching Program, conducting structured interviews with students, teachers, and administrators to assess educational impact. Compiled data-driven reports with actionable insights.",
      link: "#"
    }
  ];


  const honorsAndAwards = [
    {
      title: "Top 20% Academic Excellence",
      organization: "SRM Institute of Science and Technology",
      date: "Ongoing",
      description: "Recognized for being in the top 20% of the Electronics and Computer Engineering branch. Demonstrates strong academic performance and technical expertise."
    },
    {
      title: "AI HackDay'24 Finalist",
      organization: "Department of ECE, SRMIST",
      date: "April 2024",
      description: "Secured a spot in the final round of the AI Hackathon at SRMIST with the project Radiant AI. Showcased innovative problem-solving skills in artificial intelligence and machine learning."
    },
    {
      title: "Microcontroller-Based Project Expo Finalist",
      organization: "Department of ECE, SRMIST",
      date: "November 2024",
      description: "Advanced to the final round of the Microcontroller-Based Project Expo with the project 'Implementation of Sixth Sense Using Raspberry Pi'."
    }
  ];

  const researchPublications = [
    {
      title: "Integrating Intelligent Chatbots in Healthcare: AI Based Healthcare Chatbot",
      conference: "IEEE SCOPES 2024 Conference Proceedings",
      date: "Dec 2024",
      description: "Research on AI-driven healthcare chatbots for symptom-based diagnosis using NLP and machine learning",
      link: "https://ieeexplore.ieee.org/author/273156730417953"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Android Developer & AI Researcher with expertise in mobile applications, embedded systems, and machine learning solutions
          </p>
        </div>

        {/* Skills Section */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {Object.entries(skills).map(([category, skillList], index) => (
            <Card 
              key={category}
              className={`glass-card hover-glow opacity-0 fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  {category === "Programming Languages" && <Code2 className="h-5 w-5 text-primary" />}
                  {category === "Databases" && <Database className="h-5 w-5 text-primary" />}
                  {category === "Mobile Development" && <Smartphone className="h-5 w-5 text-primary" />}
                  {category === "AI & Machine Learning" && <Brain className="h-5 w-5 text-primary" />}
                  {category === "Tools & Technologies" && <GitBranch className="h-5 w-5 text-primary" />}
                  {category === "Frameworks & Libraries" && <Server className="h-5 w-5 text-primary" />}
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-primary/50 text-primary/80">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Work Experience Section */}
        <div className="grid lg:grid-cols-1 gap-8 mb-16">
          <Card className="glass-card hover-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <Server className="h-6 w-6 text-primary" />
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {workExperience.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h4 className="font-semibold text-lg">
                        {exp.link ? (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            {exp.title}
                          </a>
                        ) : exp.title}
                      </h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mt-2">{exp.description}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Volunteer Experience Section */}
        <div className="grid lg:grid-cols-1 gap-8 mb-16">
          <Card className="glass-card hover-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <Medal className="h-6 w-6 text-primary" />
                Volunteer Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {volunteerExperience.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h4 className="font-semibold text-lg">
                        {exp.link ? (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            {exp.title}
                          </a>
                        ) : exp.title}
                      </h4>
                      <p className="text-primary font-medium">{exp.organization}</p>
                      <p className="text-muted-foreground text-sm mt-2">{exp.description}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>


        {/* Honors and Awards Section */}
        <div className="grid lg:grid-cols-1 gap-8 mb-16">
          <Card className="glass-card hover-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                Honors & Awards
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {honorsAndAwards.map((award, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h4 className="font-semibold text-lg flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-primary" />
                        {award.title}
                      </h4>
                      <p className="text-primary font-medium">{award.organization}</p>
                      <p className="text-muted-foreground text-sm mt-2">{award.description}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full whitespace-nowrap">
                      {award.date}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Research Publications Section */}
        <div className="grid lg:grid-cols-1 gap-8 mb-16">
          <Card className="glass-card hover-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                Research Publications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {researchPublications.map((publication, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h4 className="font-semibold text-lg">
                        <a 
                          href={publication.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {publication.title}
                        </a>
                      </h4>
                      <p className="text-primary font-medium">{publication.conference}</p>
                      <p className="text-muted-foreground text-sm mt-2">{publication.description}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full whitespace-nowrap">
                      {publication.date}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "CGPA", value: "8.9" },
            { label: "Projects Completed", value: "6+" },
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