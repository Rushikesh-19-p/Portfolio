import { Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-cover bg-center opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <Shield className="h-16 w-16 text-green-500 mx-auto mb-8" />
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            <span className="text-green-500">[</span> Rushikesh Bhogale <span className="text-green-500">]</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-8">Cybersecurity Enthusiast | Ethical Hacker | Security Researcher</p>
          <div className="animate-pulse">
            <span className="text-green-500">$</span> <span className="typing-text">Securing the digital frontier...</span>
          </div>
          <div className="mt-10">
            <a href="#contact" className="bg-green-500 text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-green-400 transition-colors duration-300">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;