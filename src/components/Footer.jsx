import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const teamMembers = [
    {
      name: "Hasan Talha Çelik",
      linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
      name: "Hazal Nur Asma",
      linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
      name: "Kutay Şahin",
      linkedinUrl: "https://www.linkedin.com/in/kutaysahin/",
    },
    {
      name: "Murat Özcan Kara",
      linkedinUrl: "https://www.linkedin.com/in/",
    },
    {
      name: "Teoman Özen",
      linkedinUrl: "https://www.linkedin.com/in/",
    },
  ];

  return (
    <footer className="footer-container relative">
      <div className="footer-text justify-center mb-3 text-center">
        Made by Arçelik Intern Team w/ ♥
      </div>
      <div className="flex justify-center space-x-4 animate-slide-up">
        {teamMembers.map((member, index) => (
          <a
            key={index}
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 py-2 border border-gray-700 rounded-md transition duration-500 hover:bg-gray-100 hover:text-black mb-4"
          >
            <FaLinkedin className="h-5 w-5 mr-2" />
            {member.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
