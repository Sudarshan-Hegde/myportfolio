import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Certificates", id: "certificates" },
    { name: "Publications", id: "publications" },
    { name: "Contact ", id: "contact" },
    
  ];
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after click
  };

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out w-full  px-4">
      <nav className={`
        ${scrolled 
          ? 'bg-black/20 backdrop-blur-xl border border-white/20 shadow-2xl scale-95' 
          : 'bg-white/10 backdrop-blur-lg border border-white/10 shadow-lg scale-100'
        }
        px-4 sm:px-6 lg:px-8 py-3 rounded-xl flex justify-between items-center 
        transition-all duration-500 ease-in-out
        w-full
        hover:bg-white/15 hover:border-white/30
      `}>
        <div className={`
          ${scrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'} 
          text-white font-bold drop-shadow-lg transition-all duration-300
        `}>
          SUDARSHAN HEGDE
        </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex font-semibold space-x-2 xl:space-x-6">
        {navLinks.map(({ name, id }) => (
            <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="text-white/90 font-semibold text-xs xl:text-sm hover:text-white hover:scale-110 flex items-center transition-all duration-200 px-2 xl:px-3 py-1 rounded-full hover:bg-white/10"
            >
                {name}
            </button>
            
        ))}
      </ul>

      {/* Social Icons - Desktop */}
      <ul className="hidden xl:flex space-x-2 2xl:space-x-3">
        {[
          { platform: "email", url: "mailto:sudohegde@gmail.com" },
          { platform: "github", url: "https://github.com/Sudarshan-Hegde" },
          { platform: "linkedin", url: "https://www.linkedin.com/in/sudarshan-hegde-474856226/" },
          { platform: "reddit", url: "https://www.reddit.com/user/Sudarshan_Hegde_2004/" },
          { platform: "instagram", url: "https://www.instagram.com/sudarshan.hegde.2004/" },
          
        ].map(({ platform, url }, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
            <img
              className={`
                ${scrolled ? 'h-6 w-6 xl:h-7 xl:w-7' : 'h-7 w-7 xl:h-8 xl:w-8'} 
                rounded-full cursor-pointer hover:scale-125 transition-all duration-300 
                border border-white/20 hover:border-white/50
              `}
              src={`${import.meta.env.BASE_URL}${platform}.png`}
              alt={platform}
              onError={(e) => (e.target.src = `${import.meta.env.BASE_URL}${platform}.jpg`)}
            />
          </a>
        ))}
      </ul>

      {/* Medium Screen Menu Button (for tablets) */}
      <div className="lg:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 rounded-full hover:bg-white/20 transition-all duration-200"
        >
          <span className="text-xl sm:text-2xl">{isOpen ? "✖" : "☰"}</span>
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div className={`
          absolute top-full left-0 right-0 mt-2 z-40 
          animate-in slide-in-from-top-2 duration-300
          ${scrolled 
            ? 'bg-black/60 backdrop-blur-2xl border border-white/40 shadow-2xl' 
            : 'bg-white/25 backdrop-blur-2xl border border-white/30 shadow-xl'
          }
          rounded-2xl py-4 sm:py-6 px-4 sm:px-6 lg:hidden
          hover:bg-white/30 hover:border-white/50 transition-all duration-300
        `}>
          {/* Enhanced Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/20 rounded-2xl"></div>
          <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
          
          <div className="relative z-10">
            <ul className="flex flex-col space-y-2 sm:space-y-4">
              {navLinks.map(({ name, id }) => (
                <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className="text-white font-bold text-base sm:text-lg hover:text-white hover:scale-105 transition-all duration-200 px-3 sm:px-4 py-3 rounded-xl hover:bg-white/25 backdrop-blur-sm border border-white/20 hover:border-white/40 bg-black/20"
                >
                    {name}
                </button>
              ))}
            </ul>

            {/* Social Icons - Mobile/Tablet */}
            <div className="flex justify-center space-x-3 sm:space-x-4 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/40">
              {[
                { platform: "linkedin", url: "https://www.linkedin.com/in/sudarshan-hegde-474856226/" },
                { platform: "reddit", url: "https://www.reddit.com/user/Sudarshan_Hegde_2004/" },
                { platform: "instagram", url: "https://www.instagram.com/sudarshan.hegde.2004/" },
                { platform: "github", url: "https://github.com/Sudarshan-Hegde" },
              ].map(({ platform, url }, index) => (
                <a key={index} href={url} target="_blank" rel="noopener noreferrer">
                  <img
                    className="h-7 w-7 sm:h-8 sm:w-8 rounded-full cursor-pointer hover:scale-110 transition-all duration-300 border-2 border-white/30 hover:border-white/60 bg-black/20 p-1"
                    src={`${import.meta.env.BASE_URL}${platform}.png`}
                    alt={platform}
                    onError={(e) => (e.target.src = `${import.meta.env.BASE_URL}${platform}.jpg`)}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;
