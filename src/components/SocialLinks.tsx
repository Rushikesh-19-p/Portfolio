import { Github, Linkedin, Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '../utils/constants';

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6">
      <a 
        href={SOCIAL_LINKS.github}
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-green-500 transition-colors duration-300"
      >
        <Github className="h-6 w-6" />
      </a>
      <a 
        href={SOCIAL_LINKS.linkedin}
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-green-500 transition-colors duration-300"
      >
        <Linkedin className="h-6 w-6" />
      </a>
      <a 
        href={SOCIAL_LINKS.instagram}
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-green-500 transition-colors duration-300"
      >
        <Instagram className="h-6 w-6" />
      </a>
    </div>
  );
};

export default SocialLinks;