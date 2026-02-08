import React, { useState } from "react";

function Publications() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [cardImageIndex, setCardImageIndex] = useState({});
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const certificates = [
    {
      title: "Geo-Agri Analyst: An End-to-End Decision Support System for Agriculture via Super-Resolution and Active Learning",
      description:
        "This research proposes an end-to-end framework that integrates RFB-ESRGAN for 4 X spatial resolution enhancement of multi-spectral imagery with a Deep Bayesian Active Learning loop to optimize data efficiency. By synergizing perceptual super-resolution and hybrid query strategies, the system achieves state-of-the-art classification accuracy while reducing expert annotation requirements by 85% on accessible cloud infrastructure.",
      moreDescription:
        "Abstract: In the contemporary era of digital agriculture, the ability to accurately classify and monitor land cover types is paramount for ensuring food security, optimizing resource allocation, and conducting precise yield estimation. However, the scalability of such systems in developing regions is frequently stifled by the coarse spatial resolution of public satellite data and the prohibitive expense of expert ground-truth annotation. To bridge this gap, we propose a comprehensive, end-to-end decision support system that synergizes a Perceptual Extreme Super-Resolution Network with Receptive Field Blocks (RFB-ESRGAN) and a label-efficient Deep Bayesian Active Learning strategy. We deploy a Generative Adversarial Network enhanced with multi-scale Receptive Field Blocks to infer and reconstruct latent high-frequency textures, achieving a fourfold increase in the spatial resolution of multi-spectral imagery. To concurrently address data scarcity, we employ a hybrid query strategy combining Distance-Based Sampling and Spatial-Spectral Entropy, which iteratively identifies and requests labels for only the most mathematically informative samples. Validated on accessible cloud infrastructure using the BigEarthNet archive, this approach significantly enhances classification accuracy for complex heterogeneous crop patterns while reducing labeled data requirements by approximately 85% compared to random sampling baselines, offering a robust pathway for democratizing precision agriculture analytics.",
      images: [
        `${import.meta.env.BASE_URL}research01.png`,
        `${import.meta.env.BASE_URL}research02.png`,
      ],
      certLink: "https://www.example.com/your-certificate-link-1",
    },
  ];

  const handleOpenModal = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
    const currentIndex = cardImageIndex[certificates.indexOf(cert)] || 0;
    setModalImageIndex(currentIndex);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCert(null);
    setModalImageIndex(0);
    document.body.style.overflow = "auto";
  };

  const handleCardNextImage = (certIndex, e) => {
    e.stopPropagation();
    const cert = certificates[certIndex];
    setCardImageIndex(prev => ({
      ...prev,
      [certIndex]: ((prev[certIndex] || 0) + 1) % cert.images.length
    }));
  };

  const handleCardPrevImage = (certIndex, e) => {
    e.stopPropagation();
    const cert = certificates[certIndex];
    setCardImageIndex(prev => ({
      ...prev,
      [certIndex]: ((prev[certIndex] || 0) - 1 + cert.images.length) % cert.images.length
    }));
  };

  const handleModalNextImage = () => {
    setModalImageIndex((prev) => (prev + 1) % selectedCert.images.length);
  };

  const handleModalPrevImage = () => {
    setModalImageIndex((prev) => (prev - 1 + selectedCert.images.length) % selectedCert.images.length);
  };

  return (
    <>
      {/* Main Content */}
      <div id="publications" className="bg-stone-900/50 px-4 md:px-10 py-16">
        <div className="flex justify-center mb-4">
          <p className="text-3xl font-bold text-gray-600">Publications</p>
        </div>
        <div className="w-[200px] h-1 border-b-4 border-yellow-500 mx-auto mb-16 rounded-3xl"></div>

        <div className="flex justify-center items-center">
          <div className="w-full h-full max-w-6xl px-4">
            {certificates.map((cert, index) => (
              <div
                key={index}
                onClick={() => handleOpenModal(cert)}
                className="flex flex-col md:min-h-[600px] items-center bg-white p-8 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 md:flex-row cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl mb-10"
              >
                {/* Image Section with Navigation */}
                <div className="relative w-full md:w-96 mb-6 md:mb-0">
                  <img 
                    className="object-cover w-full rounded-lg h-full md:h-auto" 
                    src={cert.images[cardImageIndex[index] || 0]} 
                    alt={cert.title} 
                  />
                  
                  {/* Navigation Buttons */}
                  {cert.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => handleCardPrevImage(index, e)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-yellow-400/90 hover:bg-yellow-300 shadow-md flex items-center justify-center text-black font-bold text-xl transition-colors"
                      >
                        &lt;
                      </button>
                      <button
                        onClick={(e) => handleCardNextImage(index, e)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-yellow-400/90 hover:bg-yellow-300 shadow-md flex items-center justify-center text-black font-bold text-xl transition-colors"
                      >
                        &gt;
                      </button>
                      
                      {/* Image Counter */}
                      <div className="absolute bottom-2 right-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                        {(cardImageIndex[index] || 0) + 1} / {cert.images.length}
                      </div>
                    </>
                  )}
                </div>
                
                <div className="flex flex-col justify-between md:p-8 leading-normal flex-1">
                  <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {cert.title}
                  </h5>
                  <p className="mb-8 text-lg text-gray-700 dark:text-gray-400">
                    {cert.description}
                  </p>
                  <div>
                    <button 
                      type="button" 
                      className="inline-flex items-center w-auto text-gray-700 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 box-border border border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 shadow-sm font-medium leading-5 rounded-lg text-base px-6 py-3 focus:outline-none"
                    >
                      Read more
                      <svg className="w-5 h-5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl max-w-7xl h-full max-h-7xl w-full p-6 overflow-auto z-50 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 w-8 h-8 rounded-full bg-yellow-400 hover:bg-yellow-300 shadow-md flex items-center justify-center text-black font-bold text-xl transition-colors z-10"
              title="Close"
            >
              &times;
            </button>

            {/* Image Section with Navigation */}
            <div className="relative w-full md:w-auto mb-4 md:mb-0 md:mr-6">
              <img
                src={selectedCert.images[modalImageIndex]}
                alt={selectedCert.title}
                className="object-cover w-full rounded-lg h-64 md:h-auto"
              />
              
              {/* Navigation Buttons */}
              {selectedCert.images.length > 1 && (
                <>
                  <button
                    onClick={handleModalPrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-yellow-400/90 hover:bg-yellow-300 shadow-md flex items-center justify-center text-black font-bold text-xl transition-colors"
                  >
                    &lt;
                  </button>
                  <button
                    onClick={handleModalNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-yellow-400/90 hover:bg-yellow-300 shadow-md flex items-center justify-center text-black font-bold text-xl transition-colors"
                  >
                    &gt;
                  </button>
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {modalImageIndex + 1} / {selectedCert.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between leading-normal flex-1">
              <div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {selectedCert.title}
                </h2>
                <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                  {selectedCert.description}
                </p>
                <p className="mb-6 text-base text-gray-600 dark:text-gray-400">
                  {selectedCert.moreDescription}
                </p>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={selectedCert.certLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-auto text-gray-700 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 box-border border border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 shadow-sm font-medium leading-5 rounded-lg text-base px-6 py-3 focus:outline-none"
                >
                  View Full Certificate
                  <svg className="w-5 h-5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Publications;