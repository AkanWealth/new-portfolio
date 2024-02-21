import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <li className="bg-white p-4 rounded shadow-md">JavaScript</li>
          <li className="bg-white p-4 rounded shadow-md">TypeScript</li>
          <li className="bg-white p-4 rounded shadow-md">React.js</li>
          <li className="bg-white p-4 rounded shadow-md">Node.js</li>
          {/* Add more skills */}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
