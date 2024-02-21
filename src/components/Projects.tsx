import React, { useEffect, useState } from 'react';
import Arvo from '../assets/arvo.png'
import pacetime from '../assets/pace.png'
import Indigo from '../assets/indigo.png'
import bountip from '../assets/Bountip.png'
import Colonees from '../assets/Colonees.png'

interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Mock data for demonstration
    const mockProjects: Project[] = [
      {
        id: 1,
        name: 'Pace Time Sheet',
        imageUrl: pacetime,
        description:
          'This is a web base time-sheet that create a convenient and user friendly application that efficiently tracks the amount of time an employee has worked within a certain period of time, whilst maintaining the privacy of its users and creating a steady relationship between the employee and the employers.',
      },
      {
        id: 2,
        name: 'Olivermead Investment',
        imageUrl: Arvo,
        description:
          'Revolutionize the way users manage their finances with our innovative web application. Our platform offers comprehensive features enabling users to invest in a diverse range of financial instruments, from stocks. Additionally, this application provides flexible loan options tailored to individual needs. With intuitive interfaces, stringent security measures, and real-time tracking capabilities, it is aim to make investing and borrowing accessible, transparent, and rewarding for all users',
      },
      {
        id: 3,
        name: 'Indigo',
        imageUrl: Indigo,
        description:
          'Software built at Summitech is user-centered, functional, fit for purpose, beautiful, provides a well thought out user experience, and ships with very few bugs. We are proficient with various languages and frameworks including but not limited to: React, React Native, Webpack, Babel, PHP, Nodejs, Express, Laravel, Firebase, AWS, Heroku, & Python.',
      },
      {
        id: 4,
        name: 'Bountip',
        imageUrl: bountip,
        description:
          'This application is force on changing the culinary world. Introducing an ingenious Software-as-a-Service (SaaS) solution designed to reinvent the way restaurants operate - with a laser focus on food inventory management.',
      },
      {
        id: 5,
        name: 'Colonees',
        imageUrl: Colonees,
        description:
          'Colonees is an AI for building and managing winning teams. It uses machine learning to identify the best people for a job based on their skills and past performance.'
      },
    ];
    setProjects(mockProjects);
  }, []);

  return (
    <section id="projects" className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full mb-2"
              />{' '}
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
