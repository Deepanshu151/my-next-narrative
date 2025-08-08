import { FiUser, FiBookOpen, FiTarget, FiHeart } from 'react-icons/fi';

const AboutSection = () => {
  const stats = [
    { label: 'CGPA', value: '7.5', icon: FiBookOpen },
    { label: 'Projects Completed', value: '3+', icon: FiTarget },
    { label: 'Technologies', value: '15+', icon: FiUser },
    { label: 'HackerRank Stars', value: '5⭐', icon: FiHeart },
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                Hello! I'm Deepanshu Gautam
              </h3>
              <p className="text-text-secondary leading-relaxed">
                I'm an aspiring Software Developer and B.Tech Computer Science student at Maharana Institute 
                of Professional Studies, Kanpur. With a strong passion for creating innovative solutions, 
                my journey in technology has been driven by curiosity and a desire to solve real-world 
                problems through code.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I specialize in full-stack development with expertise in Python, JavaScript, React, 
                Node.js, and modern web technologies. Passionate about data structures, algorithms, 
                AI-powered applications, REST APIs, Machine Learning and building scalable web applications 
                that make a difference.
              </p>
              <p className="text-text-secondary leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, participating in 
                hackathons like Smart India Hackathon, contributing to open-source projects, managing 
                social media for tech communities, or volunteering at events like Google DevFest. 
                I believe in continuous learning and staying updated with industry trends.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Education</h4>
                <p className="text-sm text-text-secondary">
                  B.Tech in Computer Science<br />
                  Maharana Institute of Professional Studies
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-2">Location</h4>
                <p className="text-sm text-text-secondary">
                  Kanpur, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 text-center 
                           hover:shadow-card transition-all duration-300 hover:scale-105"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <stat.icon className="text-primary" size={24} />
                    </div>
                  </div>
                  <h4 className="text-3xl font-bold text-primary mb-2">{stat.value}</h4>
                  <p className="text-text-secondary text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Skills Highlight */}
            <div className="mt-8 bg-card border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-primary mb-4">Core Competencies</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Full-Stack Development</span>
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Problem Solving</span>
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">AI & Machine Learning</span>
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[75%]"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Cloud & DevOps</span>
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[70%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;