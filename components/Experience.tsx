import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="mt-14 mb-16 flex flex-col gap-8">
      <h2 className='text-3xl font-bold mb-4'>Work Experience</h2>
      {/* Previous Work Experience Details */}
      <div className="straive">
        {/* Work Experience Main */}
        <div className="flex items-start justify-center gap-4">
          <div className="flex items-center justify-center">
            <img src="/straive-logo.png" alt="Straive" className="w-32 h-16 sm:w-40 sm:h-20 bg-zinc-100 rounded-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Computer Science Subject Matter Expert</h2>
            <h3><span className="italic">Straive</span> | <span className="font-extralight italic">Sep 2023 - April 2025 <br /> Remote</span></h3>
            <br />
          </div>
        </div>

        {/* Work Experience Description */}
        <div>
          My roles & responsibilities at <span>Straive</span> are as follows:
          <ul>
            <li>Building modern, visually appealing, accessible, and interactive websites using the industry best practices.</li>
            <li>Collaborating with the team members to complete the project within due time.</li>
            <li>Implementing responsive design using HTML, CSS, JavaScript, React.js, and Tailwind CSS.</li>
            <li>Developing websites with quality code and the functionality as per the requirements.</li>
            <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
            <li>Building websites for better SEO abd Performance.</li>
            <li>Working in a fast-paced environment and coping with the complexity of the projects.</li>
          </ul>
        </div>
        <p>
          During my work experience at <span>Straive</span>, I have worked around various Computer Science related projects, and the relevant technologies & tools. The <span>main</span> technologies and tools that I have worked with during this work experience are: <span>Web Development</span> (Frontend and Backned), <span>Computer Networks</span>, <span>Database Management Systems</span> (MySQL, MongoDB), and <span>Programming Languages</span> (Python, Java, C, C++, JavaScript, TypeScript).
        </p>
      </div>
    </section>
  )
}

export default Experience;