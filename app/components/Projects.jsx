import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal developer portfolio built using  Next.js, and Tailwind CSS to showcase skills and projects.',
      githubLink: '',
    },
    {
      title: 'veichel parking app',
      description: 'A full-stack viechel parking ap powered  by vue js and flask .',
      githubLink: 'https://github.com/23f1001556/Vehicle-Parking-App---V2',
    },
    {
      title: 'quiz master ',
      description: 'A full stack quiz app made with rest api flask and bootstrap supporting multiuser ',
      githubLink: 'https://github.com/23f1001556/quiz-master-v1',
    },
    
    
  ];

  return (
    <div id="projects" className="w-full px-[8%] py-16 scroll-mt-20 bg-white">
      <h4 className="text-center text-lg text-gray-500 font-Ovo">Works</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo mb-16">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, description, githubLink }, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between bg-white"
          >
            <div>
              <h3 className="text-xl font-semibold font-Ovo mb-3">{title}</h3>
              <p className="text-gray-700 font-Ovo text-base mb-6">{description}</p>
            </div>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              View Project &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
