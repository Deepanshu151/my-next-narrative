import { 
  FiCode, 
  FiDatabase, 
  FiCloud, 
  FiSettings,
  FiLayers,
  FiGlobe
} from 'react-icons/fi';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FiCode,
      skills: ['Python', 'JavaScript', 'Java', 'C/C++', 'SQL', 'R'],
      color: 'border-blue-500 text-blue-500'
    },
    {
      title: 'Web Development',
      icon: FiGlobe,
      skills: ['React', 'HTML', 'CSS', 'Node.js', 'Express', 'Next.js'],
      color: 'border-green-500 text-green-500'
    },
    {
      title: 'Database Management',
      icon: FiDatabase,
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis'],
      color: 'border-purple-500 text-purple-500'
    },
    {
      title: 'Cloud & DevOps',
      icon: FiCloud,
      skills: ['AWS', 'Docker', 'Git', 'Linux', 'CI/CD'],
      color: 'border-orange-500 text-orange-500'
    },
    {
      title: 'AI & Data Science',
      icon: FiLayers,
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
      color: 'border-pink-500 text-pink-500'
    },
    {
      title: 'Tools & Frameworks',
      icon: FiSettings,
      skills: ['React Native', 'Flask', 'TensorFlow', 'OpenCV', 'Pandas'],
      color: 'border-cyan-500 text-cyan-500'
    }
  ];

  const achievements = [
    {
      title: '5-star rating in Python',
      platform: 'HackerRank',
      description: 'Problem Solving and Data Structures'
    },
    {
      title: 'Code-O-Fiesta 2024',
      platform: 'Inter College Competition',
      description: '700+ Participants'
    },
    {
      title: 'Internal Smart India Hackathon',
      platform: 'Qualified',
      description: 'Oct 2023 and Sep 2024'
    },
    {
      title: 'Google DevFest 2024',
      platform: 'Volunteer',
      description: 'Organized by Google Developer Group'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-hero-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-card 
                       transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-lg border-2 ${category.color} mb-4`}>
                <category.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm 
                             border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-card border border-border rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Achievements & <span className="text-primary">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg 
                         hover:bg-muted transition-colors duration-200"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-primary text-sm font-medium mb-1">
                    {achievement.platform}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">
            Soft <span className="text-primary">Skills</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Leadership & Communication',
              'Innovation & Creativity',
              'Team Collaboration',
              'Entrepreneurial Spirit',
              'Problem Solving',
              'Time Management'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-full 
                         font-medium hover:scale-105 transition-transform duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;