import { useState, useEffect } from 'react';
import ProfilePhoto from '../components/ProfilePhoto';
import KButton from '../components/KButton';
import SkillCard from '../components/SkillCard';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
      {/* hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-shrink-0 animate-fade-in">
                <ProfilePhoto size="w-48 h-48 lg:w-64 lg:h-64" />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-8">
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4 text-shadow">
                    Stefan Birsan
                  </h1>
                  <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6 font-medium">
                    Full Stack Developer
                  </h2>
                </div>
                
                <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Passionate developer with expertise in modern web technologies. 
                    I love creating beautiful, functional applications that solve real-world problems. 
                    Always learning and exploring new technologies to build better user experiences.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <KButton href="/projects" variant="primary">
                      View My Work
                    </KButton>
                    <KButton href="/contact" variant="secondary">
                      Get In Touch
                    </KButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto max-w-4xl">
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
              Technologies I Work With
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'React', color: 'blue' },
                { name: 'JavaScript', color: 'yellow' },
                { name: 'Node.js', color: 'green' },
                { name: 'Python', color: 'blue' },
                { name: 'TypeScript', color: 'blue' },
                { name: 'Tailwind CSS', color: 'cyan' },
                { name: 'MongoDB', color: 'green' },
                { name: 'Git', color: 'red' },
                { name: 'Docker', color: 'purple' },
                { name: 'TensorFlow', color: 'orange' }
              ].map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  color={skill.color}
                  animationDelay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
