import {
    mobile,
    vsc,
    blender,
    unity,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    massey,
    pokeme,
    seatopia,
    albertson,
    star,
    greenm,
    ink,
    threejs,
    redc,
    fuzz,
    bluec,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Unity Dev",
      icon: unity,
    },
    {
      title: "UE5 Dev",
      icon: mobile,
    },
    {
      title: "Web Design?",
      icon: vsc,
    },
    {
      title: "3D Modeler",
      icon: blender,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Manager",
      company_name: "Poke Me",
      icon: pokeme,
      iconBg: "#383E56",
      date: "May 2019 - Dec 2021",
      points: [
        "Responsible for food prep, sheduling, front of house and inventory.",
        "Had close communication with team members to ensure tasks were done as efficiently as possible.",
        "Built a close relation with customers to ensure satifactory experience, and to address any issues if complaints arised .",
        "Allocated specific tasks to team members best suited for that role based on experience.",
        "During slower hours, let team members with less knowledge take over certain tasks to gain experience and become more comfortable with harder tasks.",
      ],
    },
    {
      title: "Warehouse and Logisitics",
      company_name: "Seatopia",
      icon: seatopia,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Jan 2023",
      points: [
        "Worked closely with the owner and manager to ensure customers would recieve the best expirience .",
        "Kept track of inventory and order volume to ensure enough stock would be available to fufill orders.",
        "Worked with manager to create a more efficient work environment and doubled the volume we could produce.",
        "Doubled orders of reacuring customers in 2 months.",
      ],
    },
    {
      title: "Courtesy Clerk",
      company_name: "Albertson",
      icon: albertson,
      iconBg: "#383E56",
      date: "Oct 2022 - Jan 2023",
      points: [
        "Ensured customers were able to find items and helped with any issues/complaints they had.",
        "Made sure store was tidy by using excess time to clean and look for extra tasks that could be done around the store.",
        "Took over other departments when the store was short staffed.",
        "Ensured that products that customers bought were not damaged while bagging to ensure the best expirience for the customers.",
      ],
    },
    {
      title: "Student",
      company_name: "Massey University",
      icon: massey,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Present",
      points: [
        "",
        "",
        "",
        "",
      ],
    },
  ];
  

  const projects = [
    {
      image: star,
    },
    {
     image: greenm,
     },
    {
       image: ink,
    },
    {
      image: redc
    },
    {
      image: fuzz
    },
    {
     image: bluec
    },
  ];
  
  export { services, technologies, experiences, projects };