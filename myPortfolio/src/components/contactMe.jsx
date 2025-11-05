import React, { useState } from 'react';

function ContactMe() {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mjkojekr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="w-full max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            Want to Collaborate?
          </h2>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed mb-4">
            Have an amazing idea or project in mind? Let's bring it to life together!
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Have a question or want to work together? Send me a message below.
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <span className="h-2 w-2 bg-white/50 rounded-full animate-pulse"></span>
            <span className="h-2 w-2 bg-white/50 rounded-full animate-pulse delay-75"></span>
            <span className="h-2 w-2 bg-white/50 rounded-full animate-pulse delay-150"></span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-white/5 rounded-3xl blur-xl"></div>
          
          <form
            onSubmit={handleSubmit}
            className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl hover:border-white/30 transition-all duration-500"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Field */}
              <div className="group">
                <label className="block text-white font-semibold mb-3 text-lg">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm"
                  placeholder="Your awesome name"
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label className="block text-white font-semibold mb-3 text-lg">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="mt-8">
              <label className="block text-white font-semibold mb-3 text-lg">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm"
                placeholder="Let's collaborate on..."
              />
            </div>

            {/* Message Field */}
            <div className="mt-8">
              <label className="block text-white font-semibold mb-3 text-lg">
                Your Message
              </label>
              <textarea
                name="message"
                rows="6"
                required
                className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300 backdrop-blur-sm resize-none"
                placeholder="Tell me about your amazing idea or project. I'm excited to hear from you!"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative group px-12 py-4 bg-white/20 text-white font-bold rounded-2xl transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed border border-white/30 backdrop-blur-sm"
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Sending Your Message...' : 'Send Message 🚀'}
                </span>
              </button>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="mt-6 p-4 bg-white/10 border border-white/30 rounded-2xl backdrop-blur-sm">
                <p className="text-white text-center font-semibold">
                  🎉 Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="mt-6 p-4 bg-white/10 border border-white/30 rounded-2xl backdrop-blur-sm">
                <p className="text-white text-center font-semibold">
                  ❌ Oops! Something went wrong. Please try again.
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-16 text-center">
          <p className="text-white text-lg mb-4">
            Prefer other ways to connect?
          </p>
          <div className="flex justify-center space-x-8">
            <a 
              href="mailto:sudohegde@gmail.com"
              className="text-white hover:text-white/80 transition-colors duration-300 flex items-center space-x-2"
            >
              <span>📧</span>
              <span>Email</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/sudarshan-hegde-474856226/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors duration-300 flex items-center space-x-2"
            >
              <span>💼</span>
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/Sudarshan-Hegde"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors duration-300 flex items-center space-x-2"
            >
              <img 
                src={`${import.meta.env.BASE_URL}github.png`} 
                alt="GitHub" 
                className="w-5 h-5 rounded-full"
              />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
