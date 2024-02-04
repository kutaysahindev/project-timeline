import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Cards = () => {
  const teamMembers = [
    {
      name: "Hasan Talha Çelik",
      role: "Front-End Developer",
      linkedinUrl: "https://www.linkedin.com/in/hasantalhacelik",
      profilePicture:
        "https://media.licdn.com/dms/image/D5603AQH1_qnmRa-UGQ/profile-displayphoto-shrink_200_200/0/1701852387698?e=2147483647&v=beta&t=cAZWUVPd39MWESBhgYLjMNYy0oxhnCmw64loxi58Uwg",
    },
    {
      name: "Hazal Nur Asma",
      role: "Front-End Developer",
      linkedinUrl: "https://www.linkedin.com/in/hazalnurasma",
      profilePicture:
        "https://media.licdn.com/dms/image/D4D03AQGPplsmPrblNA/profile-displayphoto-shrink_200_200/0/1697381941727?e=2147483647&v=beta&t=bYhUH4WAcrV3xy_q7jQQUbF9NhT3hZXE-ch2gZ_3RZU",
    },
    {
      name: "Kutay Şahin",
      role: "Front-End Developer",
      linkedinUrl: "https://www.linkedin.com/in/kutaysahin/",
      profilePicture:
        "https://media.licdn.com/dms/image/D5603AQG66bAmPHB7NQ/profile-displayphoto-shrink_200_200/0/1700081692138?e=2147483647&v=beta&t=er1Rkp_vTINm4oneCyyvHy9pSPPZ_UmuGefSKlS0bd8",
    },
    {
      name: "Murat Özcan Kara",
      role: "Back-End Developer",
      linkedinUrl: "https://www.linkedin.com/in/muratozcankara",
      profilePicture:
        "https://media.licdn.com/dms/image/C4D03AQHFdpdFnHmiiw/profile-displayphoto-shrink_200_200/0/1519912748347?e=2147483647&v=beta&t=K3jGASMtGFMjB67hvh0twdi1fQYKM3FfKcHjW8glQHQ",
    },
    {
      name: "Teoman Özen",
      role: "Back-End Developer",
      linkedinUrl: "https://www.linkedin.com/in/teomanozen",
      profilePicture:
        "https://media.licdn.com/dms/image/D4D03AQG6Z1t84Mb8cQ/profile-displayphoto-shrink_200_200/0/1700464633416?e=2147483647&v=beta&t=j1VEzrWGVFVkOl2Fr4ZR-XFEOspJUN_z0UrHkc_NW-4",
    },
  ];

  return (
    <div className="footer-container relative py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center flex-wrap">
          {teamMembers.map((member, index) => (
            <a
              key={index}
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-700 rounded-md transition duration-500 hover:bg-gray-100 hover:text-black mb-4 mx-2 flex flex-col items-center"
            >
              <img
                src={member.profilePicture}
                alt={member.name}
                className="w-20 h-20 rounded-full mb-2"
              />
              <div className="font-bold text-center">{member.name}</div>
              <div className="text-sm text-center">{member.role}</div>
              <div className="flex items-center mt-2">
                <FaLinkedin className="h-5 w-5 mr-2" />
                <span>Connect on LinkedIn</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
