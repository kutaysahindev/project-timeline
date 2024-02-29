export const cards = [
  {
    id: 1,
    tagline: "05/12/2023",
    title: "Project Headstart",
    description: `
      We embarked on the recreation of our internal tool, the Intern AI Platform, starting from scratch. Using Figma, we redesigned the entire structure for better usability and efficiency. Our tech stack includes .NET 7 and React.js. To ensure secure access, we integrated Okta Auth, and Azure serves as our database.
    `,
    image: "",
  },
  {
    id: 2,
    tagline: "29/12/2023",
    title: "Mark I",
    description: `
      The initial phase involved setting up Redux to manage user data and fetching AI Models from the backend. We utilized axios to handle form data submission seamlessly. Additionally, a LoadingLayer.jsx component was implemented to provide users with a smooth experience during Okta token checks and form redirection.
    `,
    image: "",
  },
  {
    id: 3,
    tagline: "10/01/2024",
    title: "Mark II",
    description: `
      We focused on optimizing our codebase by centralizing axios requests and removing redundant functions. A fully functional video component was added, controlling form access until users complete the video course. Enhanced security measures were implemented with access tokens and middleware. Furthermore, a video status function was introduced to keep track of the latest version in the database.
    `,
    image: "",
  },
  {
    id: 4,
    tagline: "18/01/2024",
    title: "Mark III",
    description: `
      This phase emphasized enhancing security and storage capabilities. We adopted Dependabot for managing security updates and began storing videos in Azure Blob Storage, fetching them dynamically from the database. This not only improved security but also optimized storage and access speed for video content.
    `,
    image: "",
  },
  {
    id: 5,
    tagline: "06/02/2024",
    title: "Mark IV",
    description: `
      This iteration saw significant improvements in performance and usability. Migrating the project to Vite from create-react-app drastically reduced loading times and RAM usage by at least 45%. We conducted a thorough codebase refactor to enhance readability and maintainability. Additionally, a Quiz functionality was added post-video course to assess users' understanding of AI Wizard concepts. This feature helps ensure users have grasped essential concepts before proceeding, enhancing the overall user experience.
    `,
    image: "",
  },
  {
    id: 6,
    tagline: "01/03/2024 - New!",
    title: "Mark V",
    description: `
    In the latest patch, Mark V, the introduction of the Admin Dashboard stands out as a pivotal enhancement, offering administrators centralized tools for platform management. Alongside this key addition, video time manipulation is now restricted by backend logic, ensuring precise control and preventing unauthorized changes. Other features such as Guide Tours at front-end, dynamic route generation, question addition to the database, video uploads, and title updates have been implemented, collectively enhancing usability and functionality across the platform.
      `,
    image: "",
  },
];
