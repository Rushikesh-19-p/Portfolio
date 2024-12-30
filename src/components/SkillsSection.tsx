import { Code, Shield, Server, Database, Bug, Lock } from 'lucide-react';

const skills = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Cybersecurity Awareness and Threat Mitigation",
    description: "Expertise in identifying and mitigating cyber threats to ensure secure systems."
  },
  {
    icon: <Bug className="h-8 w-8" />,
    title: "Malware Detection and Analysis",
    description: "Skilled in analyzing and visualizing malicious threats using advanced algorithms for proactive security."
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Programming for Security Applications",
    description: "Proficient in Python and JavaScript for developing cybersecurity tools and secure web solutions."
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "Real-Time Web Application Security",
    description: "Specialized in designing and securing web applications with proactive, real-time monitoring."
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Data Security and Ethical Hacking",
    description: "Knowledgeable in ethical hacking techniques to secure sensitive data and address vulnerabilities."
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Database Integration and Management",
    description: "Skilled in integrating and managing databases for real-time data analysis and secure storage."
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Code className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <div className="text-green-500 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;