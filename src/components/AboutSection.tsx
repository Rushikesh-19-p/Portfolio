import { Shield } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300">
              I am a student with a deep passion for cybersecurity, focused on securing applications and systems from emerging digital threats. Through hands-on projects like SafeScanX and INNOVIXX_bot, I have gained valuable experience in developing security solutions and tools.
            </p>
            <p className="text-gray-300">
              I hold certifications in API Security, Cybersecurity Fundamentals, and Bug Bounty Hunting. With proficiency in Python, JavaScript, and SQL Injection Attacks, I aim to apply my skills to create secure, resilient systems.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
                alt="Cybersecurity workspace"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;