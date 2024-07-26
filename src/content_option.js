import image from "./home.png";
import projectImage1 from "./project1.png";
import projectImage2 from "./project2.png";
import projectImage3 from "./project3.png";
import projectImage4 from "./project4.jpg";
import projectImage5 from "./project5.jpg";
import projectImage6 from "./project6.jpg";

const logotext = "YASIR";
const meta = {
  title: "Yasir Mahmood",
  description:
    "I’m Yasir Mahmood computer scientist _ Full stack devloper,currently working in Novasinc Technologies",
};

const introdata = {
  title: "I’m Yasir Mahmood",
  animated: {
    first: "Computer Scientist",
    second: "Software Developer",
    third: "Passionate to learn",
  },
  description:
    "I am Yasir Mahmood, a final year computer science student at UET Lahore with a diverse skill set in software development. Proficient in C++, C#, Python, HTML5, CSS, JavaScript, React, Node.js, and .NET, I specialize in object-oriented programming, data structures, databases, and problem-solving. Certified in SQL by HackerRank and as a MERN stack developer from UET Lahore",
  your_img_url: image,
};

const dataabout = {
  title: "Let Me Introduce Myself",
  aboutme:
    "I am Yasir Mahmood, a final year student pursuing a Bachelor's degree in Computer Science at UET Lahore. Originally from Kasur, I completed my FSc Pre-Engineering from Punjab College Kasur with an A+ grade and my matriculation from DPS, also earning an A+ grade.",
};
const worktimeline = [
  {
    jobtitle: "Web Devloper Intern",
    where: "LetsGrowMore",
    date: "May 2022 - August 2022",
  },
  {
    jobtitle: ".NET Developer",
    where: "Eventure Solutions",
    date: "April 2023 - June 2024",
  },
  {
    jobtitle: "Software Engineer Fellow",
    where: "Headstarter",
    date: "July 2024 - Currently Working",
  },
];

const skills = [
  {
    name: "Programming Languages (C++, C#, Python, JavaScript)",
    value: 90,
  },
  {
    name: "Front-End Development (HTML5, CSS3, Javascript, Boostrap)",
    value: 85,
  },
  {
    name: "Backend-End Development (C#, JavaScript)",
    value: 85,
  },
  {
    name: "Database Management (MongoDB, SQL, MY SQL)",
    value: 85,
  },
  {
    name: "Frameworks (.NET, React, NodeJS, ExpressJS)",
    value: 80,
  },
  {
    name: "Tools (Git, Gitlab, Postman, VS code, Visual Studio)",
    value: 95,
  },
];

const services = [
  {
    title: "Software Development",
    description:
      "I provide comprehensive full stack  development services, creating dynamic and responsive websites using the MERN stack and .NET framework. Whether you need a simple website or a complex web application, I ensure robust and scalable solutions tailored to your needs.",
  },
  {
    title: "Web Scraping",
    description:
      "I offer web scraping services, using Selenium and Beautiful Soup in Python to extract data from websites efficiently. My expertise includes generating scripts for data extraction and creating bots to automate web scraping tasks, ensuring accurate and reliable data collection.",
  },
];

const dataportfolio = [
  {
    img: projectImage1,
    description:
      "A comprehensive e-commerce website built with the MERN stack, featuring user authentication, product listings, a shopping cart, and secure payment integration.",
    link: "https://germanyshop.pk/#",
  },
  {
    img: projectImage5,
    description:
      "A sleek, interactive portfolio website built with React, designed to highlight the company's services, projects, and achievements effectively.",
    link: "https://novasinc.codehub.pk/",
  },
  {
    img: projectImage2,
    description:
      "A desktop application for managing hotel operations, including bookings, check-ins, and room assignments, built using the .NET framework.",
    link: "https://github.com/Yasir-Mahmood-124/DESKTOP-APPLICATIONS",
  },
  {
    img: projectImage4,
    description:
      "A Python-based bot utilizing Selenium and Beautiful Soup to automate data entry tasks. It efficiently extracts and inputs data across various platforms, saving time and reducing manual errors.",
    link: "https://github.com/Yasir-Mahmood-124/Console-Application",
  },
  {
    img: projectImage3,
    description:
      "A desktop application developed with WinForms in .NET framework for managing academic institutions. It handles student records, course management, and streamlining administrative tasks.",
    link: "https://github.com/Yasir-Mahmood-124/IMS",
  },
  {
    img: projectImage6,
    description:
      "A comprehensive health care website built with the MERN stack, featuring patient management, appointments, and medical records. It offers a user-friendly interface for both patients and health professionals.",
    link: "https://github.com/Yasir-Mahmood-124/HealthCarePlus_SE_Project.git",
  },
];

const contactConfig = {
  YOUR_EMAIL: " yasir.mahmood.3795@gmail.com",
  YOUR_FONE: " +92 309 9150360",
  description:
    "Feel free to reach out to me for any inquiries, collaborations, or project discussions. I am always open to new opportunities and look forward to connecting with you.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_6grfyle",
  YOUR_TEMPLATE_ID: "template_s44sgwg",
  YOUR_USER_ID: "xR4fnRwsFwrlfEv4l",
};

const socialprofils = {
  github: "https://github.com/Yasir-Mahmood-124",
  linkedin: "https://www.linkedin.com/in/yasirmahmood124/",
  instagram: "https://www.instagram.com/yasir_venture/",
  facebook: "https://www.facebook.com/profile.php?id=100047665453784",
  youtube: "https://www.youtube.com/channel/UCAsNQA28y77SIR5nwTDtO_w",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
