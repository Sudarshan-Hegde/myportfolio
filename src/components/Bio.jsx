import React from 'react';

const skillLogos = {
  "C++": `${import.meta.env.BASE_URL}logos/CPP.svg`,
  "C": `${import.meta.env.BASE_URL}logos/C.svg`,
  "Java": `${import.meta.env.BASE_URL}logos/Java-Dark.svg`,
  "Python": `${import.meta.env.BASE_URL}logos/Python-Dark.svg`,
  "HTML": `${import.meta.env.BASE_URL}logos/HTML.svg`,
  "CSS": `${import.meta.env.BASE_URL}logos/CSS.svg`,
  "JavaScript": `${import.meta.env.BASE_URL}logos/JavaScript.svg`,
  "React": `${import.meta.env.BASE_URL}logos/React-Dark.svg`,
  "Node.js": `${import.meta.env.BASE_URL}logos/NodeJS-Dark.svg`,
  "Tailwind CSS": `${import.meta.env.BASE_URL}logos/TailwindCSS-Dark.svg`,
  "Git": `${import.meta.env.BASE_URL}logos/Git.svg`,
  "AWS": `${import.meta.env.BASE_URL}logos/AWS-Dark.svg`,
  "Azure": `${import.meta.env.BASE_URL}logos/Azure-Dark.svg`,
  "TensorFlow": `${import.meta.env.BASE_URL}logos/TensorFlow-Dark.svg`,
  "PyTorch": `${import.meta.env.BASE_URL}logos/PyTorch-Dark.svg`,
  "MySQL": `${import.meta.env.BASE_URL}logos/MySQL-Dark.svg`,
  "VS Code": `${import.meta.env.BASE_URL}logos/VSCode-Dark.svg`,
  "PyCharm": `${import.meta.env.BASE_URL}logos/PyCharm-Dark.svg`,
  "Ubuntu": `${import.meta.env.BASE_URL}logos/Ubuntu-Dark.svg`,
  "Linux": `${import.meta.env.BASE_URL}logos/Linux-Dark.svg`,
  "Maven": `${import.meta.env.BASE_URL}logos/Maven-Dark.svg`,
  "Gradle": `${import.meta.env.BASE_URL}logos/Gradle-Dark.svg`,
  "Jenkins": `${import.meta.env.BASE_URL}logos/Jenkins-Dark.svg`,
  "LaTeX": `${import.meta.env.BASE_URL}logos/LaTeX-Dark.svg`
};

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/ResumeSuper.pdf'; 
  link.download = 'ResumeSuper.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
const viewCV = () => {
  window.open('/ResumeSuper.pdf', '_blank');
}

const skills = Object.keys(skillLogos);

const Bio = () => {
  return (
    <>
    <section id="home" >
      <div className="w-full mx-auto  bg-stone-900/50 rounded-lg shadow-lg overflow-hidden p-8 md:p-36">
        <div className="md:flex">
          {/* Left side - Image and Contact Button */}
          <div className="md:w-1/3 p-6 flex flex-col items-center">
            <div className="w-96 h-96 rounded-full overflow-hidden mb-4 mt-10 md:mt-0">
              <img src={`${import.meta.env.BASE_URL}profile_pic.jpg`} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-white text-3xl mb-1">
                SUDARSHAN R. HEGDE
              </h1>
              <p className="text-white text-2xl mb-6">
                Computer Science Engineer
              </p>
            </div>
            <a
              href="mailto:sudohegde@gmail.com"
              className="bg-gray-600 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
            >
              Contact Me
            </a>
            <div  className=" flex justify-center items-center pt-10 ">
            <button 
                type="button" 
                className="mx-4 text-white bg-[#0f1419] hover:bg-[#0f1419]/90 focus:ring-4 focus:outline-none focus:ring-[#0f1419]/50 box-border border border-transparent font-medium leading-5 rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:hover:bg-[#24292F] dark:focus:ring-[#24292F]/55" 
                onClick={downloadCV}
            >
                <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" clipRule="evenodd"/>
                <path fillRule="evenodd" d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clipRule="evenodd"/>
                </svg>
                     Download CV
            </button>
            <button 
                type="button" 
                className="mx-4 text-white bg-[#0f1419] hover:bg-[#0f1419]/90 focus:ring-4 focus:outline-none focus:ring-[#0f1419]/50 box-border border border-transparent font-medium leading-5 rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:hover:bg-[#24292F] dark:focus:ring-[#24292F]/55" 
                onClick={viewCV}
            >
                <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.34.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.497 6.497 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.497 6.497 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.656.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd"/>
                </svg>
                View CV
            </button>
        </div>
          </div>

          {/* Right side - Text Content */}
          <div className="md:w-2/3 p-6">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">Biography</h2>
            <p className="text-xl text-gray-100 mb-4">
              I am Sudarshan Hegde, a Computer Science and Engineering undergraduate at Sambhram Institute of Technology, affiliated with Visvesvaraya Technological University, with a strong academic and practical inclination toward Machine Learning, Deep Learning, and Artificial Intelligence. My core strength lies in designing, implementing, and understanding intelligent systems that transform data into actionable insights. With a solid foundation in Python, C++, C, and Java, I am comfortable working across the full machine learning pipeline—from data preprocessing and feature engineering to model training, evaluation, and optimization. I am particularly driven by the challenge of building scalable, efficient, and explainable models that address real-world problems.
            </p>
            <p className="text-xl text-gray-100 mb-4">
              My primary technical focus is on machine learning model development and deep learning architectures, where I actively explore concepts such as supervised and unsupervised learning, neural networks, convolutional models, and performance evaluation techniques. I enjoy experimenting with algorithms, tuning hyperparameters, and analyzing model behavior to achieve meaningful improvements in accuracy and robustness. Alongside AI and ML, I have a growing interest in cybersecurity, especially in understanding how intelligent systems can enhance threat detection, anomaly identification, and secure computing. This interdisciplinary mindset allows me to approach problems holistically, combining theoretical knowledge with practical experimentation.
            </p>
            <p className="text-xl text-gray-100 mb-4">
              In addition to my machine learning expertise, I possess strong web development skills using HTML, CSS, JavaScript, React, and Tailwind CSS, which enable me to build clean, intuitive, and responsive interfaces for data-driven applications. Developing a full-fledged portfolio project strengthened my understanding of frontend architecture, component-based design, and user-focused development. I am highly motivated to work on challenging projects, collaborate with diverse teams, and continuously refine my skills. With a commitment to lifelong learning and innovation, I aspire to contribute impactful solutions at the intersection of artificial intelligence, software engineering, and real-world problem-solving.
            </p>
          </div>
        </div>
      </div>
    </section>
      {/* Edu section */}
      <div className="bg-stone-900/50 px-4 py-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-600 mb-4">My Education Journey</h2>
          <div className="w-[200px] h-1 border-b-4 border-yellow-500 mx-auto rounded-3xl"></div>
        </div>
        <div className="mx-auto grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:px-10">
          {/* High School */}
          <div className=" bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:bg-white/10">
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-blue-400">High School</p>
              <svg className="w-6 text-gray-400 transform rotate-90 sm:rotate-0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line fill="none" strokeMiterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
                <polyline fill="none" strokeMiterlimit="10" points="15,5 22,12 15,19"></polyline>
              </svg>
            </div>
            <p className="text-gray-300 mb-2 font-medium">Shri Kalika Bhavani English Medium High School</p>
            <p className="text-gray-400 text-sm mb-3">Kansur, Karnataka | 2018-2020</p>
            <p className="text-gray-300">
              Completed 8th to 10th grade with distinction in Science and Mathematics. Scored 94% in SSLC examinations.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="px-2 py-1 text-xs bg-blue-900/50 text-blue-300 rounded-full">SSLC</span>
              <span className="px-2 py-1 text-xs bg-green-900/50 text-purple-300 rounded-full">94%</span>
            </div>
          </div>

          {/* PUC */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:bg-white/10">
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-purple-400">Pre-University</p>
              <svg className="w-6 text-gray-400 transform rotate-90 sm:rotate-0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line fill="none" strokeMiterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
                <polyline fill="none" strokeMiterlimit="10" points="15,5 22,12 15,19"></polyline>
              </svg>
            </div>
            <p className="text-gray-300 mb-2 font-medium">MES PU College</p>
            <p className="text-gray-400 text-sm mb-3">Sirsi, Karnataka | 2020-2022</p>
            <p className="text-gray-300">
              Completed 1st and 2nd PUC in Science stream (PCMCS) with 88% aggregate. Developed strong foundation in Physics, Chemistry, and Mathematics.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="px-2 py-1 text-xs bg-blue-900/50 text-blue-300 rounded-full">PUC</span>
              <span className="px-2 py-1 text-xs bg-purple-900/50 text-purple-300 rounded-full">88%</span>
            </div>
          </div>

          {/* Engineering */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-green-400 hover:bg-white/10">
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-green-700">Engineering</p>
              <svg className="w-8 text-green-400" stroke="currentColor" viewBox="0 0 24 24">
                <polyline fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="6,12 10,16 18,8"></polyline>
              </svg>
            </div>
            <p className="text-gray-300 mb-2 font-medium">Sambhram Institute Of Technology</p>
            <p className="text-gray-400 text-sm mb-3">Bangalore, Karnataka | 2022-2026</p>
            <p className="text-gray-300">
              Pursuing Bachelor of Engineering in Computer Science with current CGPA of 8.9. Specializing in Object oriented Programming, cloud computing, and AI technologies.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="px-2 py-1 text-xs bg-blue-900/50 text-blue-300 rounded-full">VTU</span>
              <span className="px-2 py-1 text-xs bg-purple-900/50 text-purple-300 rounded-full">8.9 CGPA</span>
              <span className="px-2 py-1 text-xs bg-green-900/50 text-green-300 rounded-full">Ongoing</span>
            </div>
          </div>
        </div>
      </div>
      <TechStackSection />
    </>
  );
};

function TechStackSection() {
  // Group skills by category for better organization
  const skillCategories = {
    "Languages": ["C++", "C", "Java", "Python", "JavaScript"],
    "Frontend": ["HTML", "CSS", "React", "Tailwind CSS"],
    "Backend": ["Node.js"],
    "Cloud & DevOps": ["AWS", "Azure", "Jenkins"],
    "Data Science": ["TensorFlow", "PyTorch"],
    "Databases": ["MySQL"],
    "Tools": ["VS Code", "PyCharm", "Git", "LaTeX"],
    "Systems": ["Ubuntu", "Linux", "Maven", "Gradle"]
  };

  // State for active category filter
  const [activeFilter, setActiveFilter] = React.useState("All");
  
  // Get filtered skills based on active filter
  const filteredSkills = activeFilter === "All" 
    ? skills 
    : skills.filter(skill => skillCategories[activeFilter]?.includes(skill));

  return (
    <section className="bg-stone-900/50 min-h-screen w-full md:px-8 xl:px-20 text-white bg-primary flex items-center">
      <div className="flex container flex-col md:flex-row items-center md:items-start gap-16 w-full">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0">
          <div className="text-white p-6 pl-10 pr-20 sm:pl-10 lg:pr-20">
            {/* Vertical Label */}
            <div className="absolute -left-4 top-16 sm:left-16 top-20 sm:top-24 md:-left-12 xl:-left-16 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
              <div className="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-white mt-2 mx-auto"></div>
              <p>All Skills</p>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold leading-tight">
              Explore My Expertise & Tech Stack
            </h2>
          </div>

          <p className="p-3 text-gray-400 text-sm leading-relaxed">
            These are the tools and technologies that I use daily to develop applications across various domains. 
            With expertise spanning from frontend to backend development, cloud computing, and data science, 
            I focus on delivering robust, scalable solutions with clean, maintainable code.
          </p>

          <span className="py-4 px-2 space-x-2 rounded-lg bg-secondary shadow-lg">
            <button 
              onClick={() => setActiveFilter("All")}
              className={`rounded-lg px-4 py-2 transition-all duration-300 ${
                activeFilter === "All" 
                  ? "bg-blue-500 text-white" 
                  : "bg-transparent text-gray-300 hover:bg-gray-700"
              }`}
            >
              All Skills
            </button>
          </span>
        </div>

        {/* Right Side: Enhanced Tech Grid */}
        <div className="w-full md:w-1/2">
          {/* Category Filters */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {Object.keys(skillCategories).map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-blue-500 text-white"
                    : "bg-secondary text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Dynamic Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8  gap-4">
            {filteredSkills.map((skill, index) => (
              <div 
                key={index} 
                className="text-center transition-all duration-300 hover:scale-105 hover:bg-stone-900/100 hover:rounded-lg"
              >
                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center h-full">
                  <img
                    src={skillLogos[skill]}
                    alt={`${skill} logo`}
                    className="w-10 h-10 object-contain"
                    loading="lazy"
                  />
                  <p className="text-xs mt-2 font-semibold">{skill}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredSkills.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              No skills found in this category
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Bio;