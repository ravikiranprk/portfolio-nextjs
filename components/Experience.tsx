import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="mt-14 mb-16 flex flex-col gap-8">
      <h2 className='text-3xl font-bold mb-4'>Work Experience</h2>
      {/* Internship Details */}
      <div className="internship">
        {/* Internship Main */}
        <div className='flex items-start justify-center gap-4'>
          <div className="flex justify-center items-center">
            <img src="/unified-mentor-logo.png" alt="Unified Mentor" className='w-16 h-16 sm:w-20 sm:h-20 rounded-lg' />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Fullstack Web Development Intern</h2>
            <h3><span className="italic">Unified Mentor</span> | <span className="font-extralight italic">May 2025 - Present <br /> Remote</span></h3>
            <br />
          </div>
        </div>

        {/* Internship Description */}
        <p>
          I am currently working as an intern at <span className="font-bold"><a href="https://unifiedmentor.com/" target="_blank">Unified Mentor</a></span> as a <span className="font-bold">Fullstack Web Developer Intern</span>, which is a 3-month self-paced online internship program.
        </p>
        <p>
          The internship program includes <span className='text-amber-600'>Fundamentals of Web Development</span>, <span className='text-amber-600'>Frontend Web Development</span>, <span className='text-amber-600'>Backend Web Development</span>, and <span className='text-amber-600'>Fullstack Web Development</span>. This is a <span className='text-emerald-400'>project-based</span> internship program, which evaluates the intern's skills and ability to work on real-world projects.
        </p>
        <p>
          The intern goes through an intensive training proces from fundamentals (HTML, CSS, JavaScript) to fullstack development (MERN, MEAN, and MEVN). The frontend technologies include React.js, Angular, and Vue.js, and the backend technologies include Node.js, Express.js, and MongoDB. The intern also gets hands-on experience from designing to deployment.
        </p>
      </div>

      <br />

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
        <p>
          I worked as an Executive - Computer Science Subject Matter Expert at <span className="font-bold"><a href="https://straive.com/" target="_blank">Straive</a></span> for a year and a half. I was responsible for providing the best possible learning experience to the students by providing them with the best possible solutions for the questions uploaded by the students in the client's portal. My responsibilities also included evaluating the submitted solutions and providing feedback to the experts (who authored the solutions) and the students. 
        </p>
        <p>
          In the Authoring and Quality Check projects, I have worked around various Computer Science topics & fields, and the relevant technologies & tools. The <span>main</span> technologies and tools that I have worked with during this work experience are: <span>Web Development</span> (Frontend and Backned), <span>Operating Systems</span>, <span>Computer Networks</span>, <span>Database Management Systems</span> (MySQL, PostgreSQL), <span>Programming Languages</span> (Python, Java, C, C++, JavaScript, TypeScript), <span>Theory of Computation</span>, and <span>Data Structures and Algorithms</span>.
        </p>
      </div>
    </section>
  )
}

export default Experience;