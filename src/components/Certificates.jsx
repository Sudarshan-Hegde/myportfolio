import React, { useState } from "react";

function Certificates() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Deep Learning - IIT Ropar",
      description:
        "Completed the NPTEL Deep Learning course offered by IIT Ropar, gaining foundational and advanced knowledge in neural networks and deep learning techniques.",
      moreDescription:
        "This NPTEL course by IIT Ropar provided a strong foundation in deep learning, covering neural networks, perceptrons, activation functions, backpropagation, CNNs, RNNs, and generative models. The program balanced theory with hands-on practice using frameworks like TensorFlow and Keras. Through lectures and assignments, I learned to design, train, and evaluate deep learning models for tasks such as image classification and natural language processing, preparing me to apply deep learning to real-world AI problems.",
      imageSrc: `${import.meta.env.BASE_URL}deepLearning.jpeg`,
      certLink: "https://www.example.com/your-certificate-link-1",
    },
    {
      title: "OSCode Appointment Certificate ",
      description:
        "Appointed as a Creative Team Member at OSCode Community, bridging technical innovation with visual storytelling to empower the developer ecosystem.",
      moreDescription:
        "I officially joined the OSCode Community as a Creative Team Member, a role that sits at the intersection of technology and design. In this capacity, I am responsible for crafting the visual identity of our technical events, translating complex engineering concepts into accessible, engaging digital content. My journey with OSCode is driven by a commitment to continuous learning—leveraging my skills to build not just better software, but a stronger, more inclusive developer community.",
      imageSrc: `${import.meta.env.BASE_URL}certOSCode.jpg`,
      certLink: "https://www.example.com/your-certificate-link-1",
    },
    {
      title: "UI path - variables constants and arguments in studio",
      description:
        "In a world where automation is becoming increasingly important, this course provides a comprehensive introduction to the UiPath platform, covering everything from the basics of RPA to advanced automation techniques.",
      moreDescription:
        "The course explores UiPath Studio, attended vs unattended bots, workflow automation, and practical examples that simulate real-world business processes. This helps build a solid foundation in RPA development.",
      imageSrc: `${import.meta.env.BASE_URL}cert-auto-01.jpg`,
      certLink: "https://www.example.com/your-certificate-link-1",
    },
    {
      title: "UI path - Introduction to Automation",
      description: "A comprehensive introduction to the UiPath platform, covering everything from the basics of RPA to advanced automation techniques.",
      moreDescription:
        "The course explores UiPath Studio, attended vs unattended bots, workflow automation, and practical examples that simulate real-world business processes. This helps build a solid foundation in RPA development.",
      imageSrc: `${import.meta.env.BASE_URL}cert-auto-02.jpg`,
      certLink: "https://www.example.com/your-certificate-link-2",
    },
    {
      title: "UI path - Build your first prosses",
      description: "In a world where automation is becoming increasingly important, this course provides a comprehensive introduction to the UiPath platform, covering everything from the basics of RPA to advanced automation techniques.",
      moreDescription:
        "The course explores UiPath Studio, attended vs unattended bots, workflow automation, and practical examples that simulate real-world business processes. This helps build a solid foundation in RPA development.",
      imageSrc: `${import.meta.env.BASE_URL}cert-auto-02.jpg`,
      certLink: "https://www.example.com/your-certificate-link-2",
    },

    {
      title: "Robotic Process Automation (RPA)",
      description: "In a world where automation is becoming increasingly important, this course provides a comprehensive introduction to the UiPath platform, covering everything from the basics of RPA to advanced automation techniques.",
      moreDescription:
        "the course explores UiPath Studio, attended vs unattended bots, workflow automation, and practical examples that simulate real-world business processes. This helps build a solid foundation in RPA development.",
      imageSrc: `${import.meta.env.BASE_URL}cert004.jpg`,
      certLink: "https://www.example.com/your-certificate-link-2",
    },
    {
      title: "Power BI and Data Visualization Skill Development Program",
      description: "A comprehensive intrductio to power BI, covering everything from the basics of data visualization to advanced analytics techniques.",
      moreDescription:
        "The course explores Power BI Desktop, data modeling, DAX expressions, and practical examples that simulate real-world business scenarios. This helps build a solid foundation in data visualization and analytics.",
      imageSrc: `${import.meta.env.BASE_URL}cert005.jpg`,
      certLink: "https://www.example.com/your-certificate-link-2",
    },
    {
      title: "Data Analytics with Power BI Workshop",
      description: "Data Analytics with Power BI Workshop is a hands-on training program designed to equip participants with the skills needed to analyze and visualize data effectively using Power BI.",
      moreDescription:
        "The workshop covers data modeling, DAX expressions, and practical examples that simulate real-world business scenarios. This helps build a solid foundation in data analytics and visualization.",
      imageSrc: `${import.meta.env.BASE_URL}cert006.jpg`,
      certLink: "https://www.example.com/your-certificate-link-2",
    },
  ];

  const handleOpenModal = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCert(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Main Content */}
      <div id="certificates" className="bg-stone-900/50 px-4 md:px-10">
        <div className="flex justify-center  mb-4">
            <p className="text-3xl font-bold text-gray-600">Certificates</p>
        </div>
        <div className="w-[200px] h-1 border-b-4 border-yellow-500 mx-auto mb-16 rounded-3xl"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => handleOpenModal(cert)}
              className="mb-10 cursor-pointer max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg mx-auto"
            >
              <img className="rounded-t-lg w-full h-48 object-cover" src={cert.imageSrc} alt={cert.title} />
              <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{cert.title}</h5>
                <p className="mb-3 text-gray-700 dark:text-gray-400">{cert.description}</p>
                <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300">
                  View Certificate
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && selectedCert && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={handleCloseModal}
        ></div>
      )}

      {/* Modal Content */}
      {showModal && selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-4xl w-[90%] p-8 overflow-auto z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Yellow Windows 11-style Close Button */}
            <button
              onClick={handleCloseModal}
              className=" cursor-pointer absolute top-4 right-4 w-6 h-6 rounded-full bg-yellow-400 hover:bg-yellow-300 shadow-md flex items-center justify-center text-black font-bold text-lg transition-colors"
              title="Close"
            >
              &minus;
            </button>

            <img
              src={selectedCert.imageSrc}
              alt={selectedCert.title}
              className="w-full max-h-[70vh] object-contain rounded-lg mb-4"
            />

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {selectedCert.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{selectedCert.description}</p>
            <p className="text-gray-600 dark:text-gray-400">{selectedCert.moreDescription}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Certificates;
