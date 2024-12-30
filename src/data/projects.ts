export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  date: string;
  keyFeatures: string[];
  projectLink: string;
}

export const projects: Project[] = [
  {
    title: 'WEBSEC - Phishing Detector Extension',
    description:
      'Browser-based tool designed to enhance web security by identifying and preventing phishing attacks using advanced detection algorithms.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Browser APIs'],
    image:
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    date: 'Jan 2024 - May 2024',
    keyFeatures: [
      'Detects phishing websites using advanced detection algorithms',
      'Provides real-time alerts for malicious activities',
      'Lightweight browser integration',
      'Customizable security settings',
    ],
    projectLink: 'https://github.com/Rushi19-04/WEBSEC.git',
  },
  {
    title: 'INNOVIXX_bot',
    description:
      'Telegram chat bot providing comprehensive notes and instructional videos for 1st-year engineering students at Mumbai University.',
    tags: ['Bot.js', 'Python', 'replit'],
    image:
      'https://images.unsplash.com/photo-1527430253228-e93688616381?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    date: 'Jun 2023 - Nov 2023',
    keyFeatures: [
      'Comprehensive notes and instructional videos',
      'Rapid response system',
      'Intuitive user interface',
      'Mumbai University curriculum support',
    ],
    projectLink: 'https://t.me/INNOVIXX_bot',
  },
  {
    title: 'Password Complexity Checker',
    description:
      'Tool to evaluate and enforce strong password creation practices, ensuring secure password standards.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Security'],
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    date: 'Dec 2024',
    keyFeatures: [
      'Password strength evaluation',
      'Multiple criteria checking',
      'Clear user feedback',
      'Easy web application integration',
    ],
    projectLink: 'https://github.com/Rushi19-04/PRODIGY_CS_03.git',
  },
  {
    title: 'Simple Keylogger',
    description:
      'Educational project demonstrating keylogging functionality for cybersecurity awareness and understanding system vulnerabilities.',
    tags: ['Python', 'Cybersecurity', 'Ethical Hacking'],
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    date: 'Dec 2024',
    keyFeatures: [
      'Keystroke capture functionality',
      'Secure logging system',
      'Educational demonstration',
      'System vulnerability awareness',
    ],
    projectLink: 'https://github.com/Rushi19-04/PRODIGY_CS_04.git',
  },
];
