import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import backgroundData from './assets/background.json';
import certificationsData from './assets/certifications.json';
import CaseStudyDetail from './components/CaseStudyDetail';

function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: homeRef, name: 'home' },
        { ref: aboutRef, name: 'about' },
        { ref: skillsRef, name: 'skills' },
        { ref: experienceRef, name: 'experience' },
        { ref: contactRef, name: 'contact' }
      ];

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section.ref.current) {
          const { offsetTop, offsetHeight } = section.ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  const scrollToSection = (sectionName) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      skills: skillsRef,
      experience: experienceRef,
      contact: contactRef
    };

    refs[sectionName]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const { profile, experience, case_studies, core_competencies, certifications_and_awards, education } = backgroundData;

  const groupedCerts = certificationsData.reduce((acc, cert) => {
    const category = cert.certification_name.includes('Architect') ? 'Architect' :
                     cert.certification_name.includes('Consultant') ? 'Consultant' :
                     cert.certification_name.includes('Developer') ? 'Developer' :
                     cert.certification_name.includes('Administrator') ? 'Administrator' :
                     'Specialist';
    if (!acc[category]) acc[category] = [];
    acc[category].push(cert);
    return acc;
  }, {});

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed w-full backdrop-blur-xl z-50 border-b transition-all duration-300 ${
        isDark
          ? 'bg-gray-900/80 border-gray-800'
          : 'bg-white/80 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-xl font-bold transition-colors ${
                isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-500'
              }`}
            >
              {profile.name.split(' ').map((n, i) => i === 0 ? n[0] : '').join('')}
            </button>
            <div className="flex items-center gap-8">
              <div className="hidden md:flex gap-8">
                {['home', 'about', 'skills', 'experience', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize font-medium transition-all duration-300 relative ${
                      activeSection === section
                        ? 'text-blue-500'
                        : isDark
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {section}
                    {activeSection === section && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full"></span>
                    )}
                  </button>
                ))}
              </div>
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 ${
                  isDark
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center animate-fadeIn">
          <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-6 transition-colors animate-slideUp ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {profile.name}
          </h1>
          <p className={`text-xl md:text-2xl mb-6 transition-colors max-w-3xl mx-auto animate-slideUp animation-delay-200 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {profile.title}
          </p>
          <p className={`text-sm mb-12 transition-colors animate-slideUp animation-delay-400 ${
            isDark ? 'text-gray-500' : 'text-gray-500'
          }`}>
            {profile.location} • {profile.email}
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slideUp animation-delay-600"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className={`py-32 px-6 transition-colors ${
        isDark ? 'bg-gray-800/30' : 'bg-white'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center transition-colors ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {profile.summary.split('\n\n').filter(p => p.trim()).map((paragraph, index) => (
              <p key={index} className={`text-lg leading-relaxed transition-colors ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center transition-colors ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className={`text-2xl font-bold mb-6 transition-colors ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                AI & Architecture
              </h3>
              <div className="space-y-3">
                {core_competencies.ai_and_architecture.map((skill, index) => (
                  <div
                    key={skill}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fadeIn ${
                      isDark
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className={`text-2xl font-bold mb-6 transition-colors ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Commercial & Execution
              </h3>
              <div className="space-y-3">
                {core_competencies.commercial_and_execution.map((skill, index) => (
                  <div
                    key={skill}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fadeIn ${
                      isDark
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center transition-colors ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Professional Experience
          </h2>
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] ${
                  isDark
                    ? 'bg-gray-800 border border-gray-700'
                    : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 transition-colors ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.role}
                    </h3>
                    <p className="text-blue-500 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <span className={`mt-2 md:mt-0 inline-block px-4 py-2 rounded-full text-sm font-medium ${
                    isDark
                      ? 'bg-blue-500/10 text-blue-400'
                      : 'bg-blue-50 text-blue-600'
                  }`}>
                    {exp.tenure}
                  </span>
                </div>
                <ul className="space-y-4">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className={`flex gap-3 text-sm leading-relaxed transition-colors ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={`py-32 px-6 transition-colors ${
        isDark ? 'bg-gray-800/30' : 'bg-white'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center transition-colors ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Case Studies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {case_studies.map((study, index) => (
              <button
                key={index}
                onClick={() => navigate(`/case-study/${index}`)}
                className={`rounded-2xl p-8 text-left transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'bg-gray-800 border border-gray-700 hover:border-blue-500'
                    : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-500'
                }`}
              >
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  isDark
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-blue-50 text-blue-600'
                }`}>
                  {study.industry}
                </span>
                <h3 className={`text-xl font-bold mb-4 transition-colors ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {study.client_alias}
                </h3>
                <p className={`text-sm mb-4 line-clamp-3 transition-colors ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {study.challenge}
                </p>
                <span className="text-blue-500 text-sm font-medium flex items-center gap-2 group">
                  Read Case Study
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center transition-colors ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Certifications & Education
          </h2>
          <p className={`text-center mb-16 transition-colors ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {certificationsData.length} Salesforce Certifications
          </p>

          <div className="flex justify-center mb-12">
            <button
              onClick={() => setShowAllCerts(!showAllCerts)}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
                  : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
              }`}
            >
              {showAllCerts ? 'Show Less' : 'View All Certifications'}
            </button>
          </div>

          {showAllCerts ? (
            <div className="space-y-12 mb-16">
              {Object.entries(groupedCerts).map(([category, certs]) => (
                <div key={category}>
                  <h3 className={`text-2xl font-bold mb-6 transition-colors ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category} <span className="text-blue-500">({certs.length})</span>
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certs.map((cert, index) => (
                      <div
                        key={index}
                        className={`p-5 rounded-xl transition-all duration-300 hover:scale-105 ${
                          isDark
                            ? 'bg-gray-800 border border-gray-700'
                            : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
                        }`}
                      >
                        <p className={`text-sm font-medium mb-2 transition-colors ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {cert.certification_name.replace('Salesforce Certified ', '')}
                        </p>
                        <p className={`text-xs transition-colors ${
                          isDark ? 'text-gray-500' : 'text-gray-500'
                        }`}>
                          {cert.date}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {certificationsData.slice(0, 8).map((cert, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? 'bg-gray-800 border border-gray-700'
                      : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  <p className={`text-sm font-medium mb-2 transition-colors ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {cert.certification_name.replace('Salesforce Certified ', '')}
                  </p>
                  <p className={`text-xs transition-colors ${
                    isDark ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {cert.date}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Awards & Education */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`rounded-2xl p-8 ${
              isDark
                ? 'bg-gray-800 border border-gray-700'
                : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 transition-colors ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                🏆 Awards & Recognition
              </h3>
              <div className="space-y-3">
                {certifications_and_awards.enterprise_recognition.map((award, index) => (
                  <div
                    key={index}
                    className={`text-sm transition-colors ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    • {award}
                  </div>
                ))}
                {certifications_and_awards.industry_honors.map((honor, index) => (
                  <div
                    key={index}
                    className={`text-sm transition-colors ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    • {honor}
                  </div>
                ))}
              </div>
            </div>

            <div className={`rounded-2xl p-8 ${
              isDark
                ? 'bg-gray-800 border border-gray-700'
                : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 transition-colors ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                🎓 Education
              </h3>
              <div className="space-y-6">
                <div>
                  <p className={`font-semibold mb-1 transition-colors ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {education.graduate.degree}
                  </p>
                  <p className={`text-sm transition-colors ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {education.graduate.institution}
                  </p>
                  <p className="text-sm text-blue-500 font-medium">
                    GPA: {education.graduate.gpa}
                  </p>
                </div>
                <div>
                  <p className={`font-semibold mb-1 transition-colors ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {education.undergraduate.degree}
                  </p>
                  <p className={`text-sm transition-colors ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {education.undergraduate.institution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className={`py-32 px-6 transition-colors ${
        isDark ? 'bg-gray-800/30' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Let's Connect
          </h2>
          <p className={`text-lg mb-12 transition-colors ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Open to new opportunities, strategic partnerships, and advisory engagements.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={`mailto:${profile.email}`}
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Email Me
            </a>
            <a
              href={`tel:${profile.phone}`}
              className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                  : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300'
              }`}
            >
              {profile.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t transition-colors ${
        isDark ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`transition-colors ${
            isDark ? 'text-gray-500' : 'text-gray-600'
          }`}>
            &copy; 2026 {profile.name}. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
    }
  }, []);

  return (
    <Router basename="/nagendra">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/case-study/:id" element={<CaseStudyDetail isDark={isDark} />} />
      </Routes>
    </Router>
  );
}

export default App;
