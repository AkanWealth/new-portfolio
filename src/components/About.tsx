import React from 'react';

const About: React.FC = () => {
  // Calculate years of experience dynamically
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  // Define skills
  const skills = [
    'JavaScript/TypeScript',
    'Node.js',
    'React.js',
    'NextJs',
    'Vue.js',
    'NestJs',
    'AdonisJs',
    'ExpressJs',
    'MongoDB',
    'HTML/CSS',
    'Git',
    'Docker',
    'RESTful APIs',
    'GraphQL',
  ];

  return (
    <section id="about" className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>
          Hi there! 👋 I'm Akaninyene Asanga, a passionate software engineer
          with {yearsOfExperience} years of experience working in the software
          industry. I have expertise in various technologies, including:
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 rounded-lg py-3">
          {skills.map((skill, index) => (
            <li key={index} className="bg-white p-4 rounded shadow-md">
              {skill}
            </li>
          ))}
        </ul>
        <p>
          I'm driven by my passion for technology and my desire to continuously
          learn and grow as a software engineer. I'm always eager to explore new
          technologies, tackle challenging problems, and collaborate with
          like-minded individuals to build innovative solutions that push the
          boundaries of what's possible.
        </p>
        <p>
          If you'd like to learn more about my work or discuss potential
          opportunities, feel free to reach out to me. I'm always open to new
          challenges and exciting projects!
        </p>
      </div>
    </section>
  );
};

export default About;
