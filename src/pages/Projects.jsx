import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import FilterButton from '../components/FilterButton';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration with Stripe.",
      image: "https://via.placeholder.com/400x200/667eea/ffffff?text=E-Commerce",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      categories: ["Full Stack", "React", "API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/ecommerce-project"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.",
      image: "https://via.placeholder.com/400x200/764ba2/ffffff?text=Task+Manager",
      technologies: ["React", "Firebase", "Tailwind CSS", "React DnD"],
      categories: ["React", "Frontend"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/task-manager"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current weather conditions and forecasts. Integrates with multiple weather APIs and includes location-based services.",
      image: "https://via.placeholder.com/400x200/4facfe/ffffff?text=Weather+App",
      technologies: ["React", "Weather API", "Chart.js", "CSS3"],
      categories: ["React", "API", "Frontend"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/weather-dashboard"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features dark mode, smooth animations, and optimized performance.",
      image: "https://via.placeholder.com/400x200/00f2fe/ffffff?text=Portfolio",
      technologies: ["React", "Tailwind CSS", "Vite", "React Router"],
      categories: ["React", "Frontend"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/portfolio"
    },
    {
      title: "Blog Platform",
      description: "A full-featured blogging platform with content management, user authentication, comments system, and SEO optimization. Built with modern web technologies.",
      image: "https://via.placeholder.com/400x200/667eea/ffffff?text=Blog+Platform",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      categories: ["Full Stack", "React", "API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/blog-platform"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with multiple rooms, file sharing, and emoji support. Features WebSocket connections for instant messaging.",
      image: "https://via.placeholder.com/400x200/f093fb/ffffff?text=Chat+App",
      technologies: ["React", "Socket.io", "Node.js", "Express"],
      categories: ["Full Stack", "React", "API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/chat-app"
    }
  ];

  const allCategories = ['All', ...new Set(projects.flatMap(project => project.categories))];
 
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  const getCategoryCount = (category) => {
    if (category === 'All') return projects.length;
    return projects.filter(project => project.categories.includes(category)).length;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              My Projects
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each one represents a learning experience 
              and demonstrates different aspects of my development skills.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {allCategories.map((category) => (
              <FilterButton
                key={category}
                label={category}
                isActive={activeFilter === category}
                onClick={() => setActiveFilter(category)}
                count={getCategoryCount(category)}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={`${activeFilter}-${project.title}`}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                />
              </div>
            ))}
          </div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found for the selected filter.
              </p>
            </div>
          )}

          <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Interested in working together?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <a 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 inline-block"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
