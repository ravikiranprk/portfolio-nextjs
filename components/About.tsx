"use client"
import React from 'react';


const About = () => {
  return (
    <section id="about" className='mt-14 mb-10'>
      <h2 className='text-3xl font-bold mb-4'>About Me</h2>
      <div className="about1">
        <p className='about-text'>
            Hi, I'm Ravi Kiran Palaparthi, a Fullstack Web Developer with hands-on experience of various <span>Frontend</span> (React.js, Angular, Vue.js, and Three.js), <span>Backend</span> (Node.js, Django), and <span>Fullstack</span> (Next.js, MERN, and Python fullstack) technologies and tools.
        </p>
        <p className='about-interests'>
            I am a quick learner and eager to learn new technologies. I watch documentaries related to Science, Engineering, and Technology & updating with the current trends in the tech industry.
        </p>
        <p className='about-qualifications'>
            My highest educational qualification is <span>B.Tech in Electronics and Communication Engineering</span>, having an excellent knowledge of Electronics, Computer Science Technologies and Tools. I have completed my graduation at <span>Vasireddy Venkatadri International Technological University (VVITU)</span>, Nambur, Guntur, Andhra Pradesh, India.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img src="/about-me.svg" alt="About Me" />
      </div>
    </section>
  )
}

export default About;