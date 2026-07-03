import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: 'Project One',
      description: 'A modern web application built with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'E-commerce platform with payment integration',
      tech: ['Next.js', 'Stripe', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'Mobile-first responsive design system',
      tech: ['React Native', 'TypeScript', 'Tailwind'],
      link: '#'
    }
  ];

  const skills = [
    'JavaScript', 'React', 'Node.js', 'TypeScript',
    'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Git'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-blue-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Your Name</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer & Creative Problem Solver
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors">
                View My Work
              </button>
              <button className="px-8 py-3 border border-blue-500 hover:bg-blue-500/10 rounded-lg font-semibold transition-colors">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate developer with a love for creating elegant solutions to complex problems.
                With expertise in modern web technologies, I build responsive and user-friendly applications.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source,
                or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-3 bg-gray-700/50 rounded-lg text-center hover:bg-gray-700 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-all hover:transform hover:scale-105"
              >
                <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Get In Touch</h3>
          <p className="text-gray-300 text-lg mb-8">
            I'm always open to new opportunities and collaborations. Let's build something amazing together!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2026 Your Name. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
