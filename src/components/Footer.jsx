import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const teamMembers = [
    {
      name: "Hasan Talha Çelik",
      linkedinUrl: "https://www.linkedin.com/in/hasantalhacelik",
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
    <footer className="footer-container relative py-8">
      <div className="container mx-auto text-center">
        <div className="mb-3">Made by Arçelik Intern Team w/ ♥</div>
        <div className="flex justify-center items-center flex-wrap">
          {teamMembers.map((member, index) => (
            <a
              key={index}
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 border border-gray-700 rounded-md transition duration-500 hover:bg-gray-100 hover:text-black mb-4 mx-2"
            >
              <FaLinkedin className="h-5 w-5 mr-2" />
              {member.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
