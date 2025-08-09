import { useState } from 'react';
import { FiGithub, FiExternalLink, FiCode, FiUsers, FiClock } from 'react-icons/fi';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Real-Time Chat Application',
      description: 'A responsive chat application with real-time messaging using WebSockets. Features user authentication, group chats, and persistent storage with dynamic front-end components.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/Deepanshu151/Fullstack-Real-Time-Chat-Application',
      live: 'https://fullstack-real-time-chat-application.vercel.app',
      category: 'Full-Stack',
      status: 'In progress',
      features: [
        'Real-time messaging with WebSocket',
        'User authentication & authorization',
        'Group chat functionality',
        'Responsive design with React'
      ]
    },
    {
      title: 'SciAstra-Inspired Website',
      description: 'A visually appealing 3D website inspired by SciAstra, featuring smooth animations, interactive UI, and well-structured course content with enrollment button.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Three.js'],
      github: 'https://github.com/Deepanshu151/SciAstra-inspired-website',
      live: 'https://deepanshu151.github.io/SciAstra-inspired-website/',
      category: 'Frontend',
      status: 'Completed',
      features: [
        '3D interactive elements',
        'Smooth animations & transitions',
        'Responsive design',
        'Course content structure'
      ]
    },
    {
      title: 'Hand Gesture Cursor Control',
      description: 'Enhanced hand tracking module for cursor control using computer vision with MediaPipe Framework and OpenCV for real-time gesture recognition through hand gestures, eliminating the need for physical mouse.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow'],
      github: 'https://github.com/Deepanshu151/Cursor-movement-on-Hand-gestures-',
      live: 'https://github.com/Deepanshu151/Cursor-movement-on-Hand-gestures-',
      category: 'Python',
      status: 'Completed',
      features: [
        'Real-time gesture recognition',
        'Computer vision tracking',
        'Mouse-free interaction',
        'Hand landmark detection'
      ]
    },
    {
      title: 'AI-Powered Web Scraper',
      description: 'Intelligent web scraping tool with machine learning capabilities for automated data extraction and analysis.',
      tech: ['Python', 'BeautifulSoup', 'Selenium', 'Pandas', 'Machine Learning'],
      github: '#',
      live: '#',
      category: 'AI/ML',
      status: 'In progress',
      features: [
        'Automated data extraction',
        'ML-based content analysis',
        'Multi-site scraping',
        'Data visualization'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with modern web technologies, featuring dark theme, animations, and responsive design.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Deepanshu151/my-next-narrative',
      live: 'http://deepanshucreates.vercel.app',
      category: 'Frontend',
      status: 'Completed',
      features: [
        'Modern responsive design',
        'Dark theme implementation',
        'Smooth animations',
        'SEO optimized'
      ]
    },
    {
      title: 'E-Commerce API',
      description: 'RESTful API for e-commerce platform with authentication, product management, and payment integration.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe API'],
      github: '#',
      live: '#',
      category: 'Backend',
      status: 'In Progress',
      features: [
        'User authentication & authorization',
        'Product catalog management',
        'Shopping cart functionality',
        'Payment gateway integration'
      ]
    }
  ];

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'AI/ML'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A showcase of my work in web development, AI, and software engineering
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-card text-text-secondary border border-border hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden 
                       hover:shadow-card transition-all duration-300 hover:scale-105 
                       animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <FiCode className="text-primary" size={20} />
                    <span className="text-sm text-primary font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      project.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></div>
                    <span className="text-xs text-text-secondary">
                      {project.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                  <ul className="text-xs text-text-secondary space-y-1">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Project Footer */}
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors"
                    >
                      <FiGithub size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors"
                    >
                      <FiExternalLink size={16} />
                      <span className="text-sm">Live</span>
                    </a>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <FiUsers size={12} />
                      <span>Solo</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiClock size={12} />
                      <span>2-4 weeks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-text-secondary mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <a
            href="https://github.com/Deepanshu151"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-primary 
                     text-primary-foreground font-semibold rounded-lg hover:scale-105 
                     transition-transform duration-300 shadow-glow"
          >
            <FiGithub size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;