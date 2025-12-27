import { m } from "framer-motion";

export const techCardsItems = [
  {
    name: "Figma",
    description: "Design Tool",
    imageUrl: "/imgs/logos/figma-logo.svg",
    bgColor: "bg-[#0ACF83]/20",
  },
  {
    name: "GSAP",
    description: "Animation library",
    imageUrl: "/imgs/logos/gsap-greensock.svg",
    bgColor: "bg-[#88CE02]/20",
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    imageUrl: "/imgs/logos/tailwind.svg",
    bgColor: "bg-[#0EA5E9]/20",
  },
  {
    name: "React",
    description: "JavaScript Library",
    imageUrl: "/imgs/logos/react.svg",
    bgColor: "bg-[#61DAFB]/20",
  },
  {
    name: "NextJS",
    description: "React framework",
    imageUrl: "/imgs/logos/nextjs.svg",
    bgColor: "bg-dark-200/10 dark:bg-white/10",
  },
  {
    name: "TypeScript",
    description: "JavaScript but better",
    imageUrl: "/imgs/logos/typescript.svg",
    bgColor: "bg-[#3178C6]/20",
  },
  {
    name: "NodeJS",
    description: "Backend Runtime",
    imageUrl: "/imgs/logos/node-js.svg",
    bgColor: "bg-[#689F63]/30",
  },
  {
    name: "MongoDB",
    description: "NoSQL database",
    imageUrl: "/imgs/logos/mongodb.svg",
    bgColor: "bg-[#599636]/30",
  },
  {
    name: "PostgreSQL",
    description: "SQL database",
    imageUrl: "/imgs/logos/postgresql.svg",
    bgColor: "bg-[#336791]/20",
  },
  {
    name: "Prisma",
    description: "ORM",
    imageUrl: "/imgs/logos/prisma.svg",
    bgColor: "bg-[#0C344B]/20",
  },
  {
    name: "AWS",
    description: "Cloud platform",
    imageUrl: "/imgs/logos/aws-2.svg",
    bgColor: "bg-[#FF9900]/20",
  },
  {
    name: "C#",
    description: "Programming language",
    imageUrl: "/imgs/logos/c--4.svg",
    bgColor: "bg-[#239120]/20",
  },
  {
    name: "ASP.NET",
    description: "Web framework",
    imageUrl: "/imgs/logos/dot-net-core-7.svg",
    bgColor: "bg-[#512BD4]/20",
  },
  {
    name: "Git",
    description: "Version control",
    imageUrl: "/imgs/logos/git.svg",
    bgColor: "bg-[#F1502F]/20",
  },
];

export const portfolioProjects = [
  {
    id: "macbook-parallax-studio",
    heading: "MacBook Parallax Studio",
    subheading: "Interactive MacBook Pro showcase",
    description:
      "Interactive MacBook Pro showcase with advanced GSAP animations, React Three Fiber 3D models, and stunning parallax effects. Features scroll-triggered animations, Zustand state management, and immersive 3D visualization. Built with React, Vite, and Tailwind CSS for optimal performance and visual appeal.",
    imageUrl: "/imgs/projects/MacBook-Parallax-Studio.png",
    techStack: [
      "React",
      "Three.js",
      "React Three Fiber",
      "GSAP",
      "Zustand",
      "Vite",
      "TailwindCSS",
    ],
    liveDemoUrl: "https://mac-book-parallax-studio.vercel.app/",
    sourceCodeUrl: "https://github.com/AshimChoudhary/MacBook-Parallax-Studio",
  },
  {
    id: "vice-city",
    heading: "Vice City",
    subheading: "immersive GTA 6 landing experience",
    description:
      "Interactive GTA 6 landing page built with React and GSAP animations for smooth transitions and dynamic effects. Features immersive UI design with gaming aesthetics and fluid animations.",
    imageUrl: "/imgs/projects/GTA-6.png",
    techStack: ["React", "GSAP", "JavaScript", "TailwindCSS", "Animation"],
    liveDemoUrl: "https://gta-vi-peach.vercel.app",
    sourceCodeUrl: "https://github.com/AshimChoudhary/GTA-VI",
  },
  {
    id: "rentiful",
    heading: "Rentiful",
    subheading: "AWS-based enterprise rental platform",
    description:
      "Built a multi-role rental platform with AWS Cognito for secure role-based authentication and S3 for media storage. Implemented Mapbox geolocation search and optimized backend with PostgreSQL + Prisma for reliable queries.",
    imageUrl: "/imgs/projects/RentiFull.png",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Mapbox",
      "AWS Cognito",
      "AWS S3",
    ],
    liveDemoUrl: "",
    sourceCodeUrl:
      "https://github.com/AshimChoudhary/Enterprise-Level-Rental-app",
  },
  {
    id: "bookwise",
    heading: "BookWise",
    subheading: "full stack library management system",
    description:
      "Developed a scalable library management platform with secure auth, Redis caching, and automated email workflows. Deployed on Vercel with Image CDN; used Drizzle ORM for schema control and reliable migrations.",
    imageUrl: "/imgs/projects/BookWise.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Drizzle ORM",
      "TailwindCSS",
    ],
    liveDemoUrl: "https://smart-library-nexus.vercel.app/",
    sourceCodeUrl: "https://github.com/AshimChoudhary/smart-library-nexus",
  },
  {
    id: "gpulytics",
    heading: "GPUlytics",
    subheading: "real-time GPU monitoring & ML analytics",
    description:
      "Built a telemetry platform that collects GPU/CPU metrics (NVML), performs anomaly detection, and surfaces ML-based failure predictions. Integrated AWS S3 for time-partitioned metric storage and CloudWatch for custom monitoring metrics and alerting.",
    imageUrl: "/imgs/projects/GPU Analatics.png",
    techStack: [
      "Python",
      "Flask",
      "NVML",
      "React",
      "AWS S3",
      "AWS CloudWatch",
      "Machine Learning",
    ],
    liveDemoUrl: "",
    sourceCodeUrl:
      "https://github.com/AshimChoudhary/GPU-Analysis-via-AWS-and-Local-Server",
  },
  {
    id: "quickshow",
    heading: "QuickShow",
    subheading: "Online Ticket Booking Platform",
    description:
      "Full-stack online ticket booking platform with seat reservation, Stripe payments, and automated email reminders.",
    imageUrl: "/imgs/projects/QuickShow.png",
    techStack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Next.js",
      "Inngest",
      "Stripe",
      "Clerk",
    ],
    liveDemoUrl: "https://quick-show-rho-six.vercel.app/",
    sourceCodeUrl: "https://github.com/AshimChoudhary/QuickShow",
  },
  {
    id: "akiba",
    heading: "Akiba",
    subheading: "3D GSAP Website",
    description:
      "Interactive 3D website built with GSAP animations and Three.js. Features stunning scroll-triggered animations, immersive 3D visualization, and smooth parallax effects for an engaging user experience.",
    imageUrl: "/imgs/projects/Akiba.png",
    techStack: [
      "React",
      "GSAP",
      "Three.js",
      "JavaScript",
      "TailwindCSS",
      "Vite",
    ],
    liveDemoUrl: "https://akiba-weld.vercel.app/",
    sourceCodeUrl: "https://github.com/AshimChoudhary/Akiba",
  },
];

export const tooltipItems = [
  {
    id: 1,
    name: "Bogdan Aleksic",
    designation: "Great job!",
    image: "/imgs/avatars/bogdan.svg",
  },
  {
    id: 2,
    name: "Djordje Djurovic",
    designation: "Incredibly responsible",
    image: "/imgs/avatars/djordje.jpeg",
  },
  {
    id: 3,
    name: "Anthony Sean",
    designation: "Highly recommended!",
    image: "/imgs/avatars/Anthony.jpg",
  },
  {
    id: 4,
    name: "Alex Finn",
    designation: "Enjoyable experience.",
    image: "/imgs/avatars/Alex.jpg",
  },
];

export const testimonialItems = [
  {
    id: 1,
    stars: 5,
    name: "Alex Finn",
    proffesion: "Lead Web Designer at knots.io",
    description:
      "“Working with Andrija was a very smooth experience from start to finish.  He not only brings strong technical skills to front-end development, but his attention to detail and commitment to delivering pixel-perfect  designs made a huge difference in our project. He is enthusiastic in  suggesting improvements. Always ready to answer questions or provide  updates. If you're looking for a reliable developer who brings  creativity and efficiency to the table, Andrija is the right person!”",
    image: "/imgs/avatars/Alex.jpg",
  },
  {
    id: 2,
    stars: 5,
    name: "Djordje Djurovic",
    proffesion: "CEO at DigitalityLab",
    description:
      "“Andrija is an outstanding frontend specialist and presents consistently high level of work. During our work together, he has demonstrated extraordinary skills in simplifying complex ideas into clean, functional, and visually appealing designs. His communication is to the point and time management is perfect, even for the most pressing deadlines. I would highly recommend him to any company looking to bring on a frontend developer with strong technical skills and an keen eye for design.”",
    image: "/imgs/avatars/djordje.jpeg",
  },
  {
    id: 3,
    stars: 5,
    name: "Anthony Sean",
    proffesion: "Chief Technology Officer at DealJet",
    description:
      "“On several occasions, I have had the privilege to work with Andrija, and he has never failed to impress. While he possesses a great level of knowledge in frontend development, what I find most remarkable about him is his obsession with getting every detail right in order to achieve perfection in the end-user experience. He always pays attention to the project requirements, raises up some pertinent issues, and most importantly delivers beyond the call of duty. Andrija is the kind of person who adds value to the team he's in!”",
    image: "/imgs/avatars/Anthony.jpg",
  },
  {
    id: 4,
    stars: 5,
    name: "Bogdan Aleksic",
    proffesion: "Investment Educator and Crypto Expert",
    description:
      "“I got on board Andrija from Upwork to help me develop a website for my course on blockchain, cryptocurrency, and investment techniques. Because of his effort, I was able to generate considerable sales from my course after launching it, and I have received good reviews about the design and functionality of the website. Andrija is someone I would highly recommend!”",
    image: "/imgs/avatars/bogdan.svg",
  },
];

export const mainNavigationLinks = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "#work",
    label: "Work",
  },
  {
    url: "#about",
    label: "About",
  },
  {
    url: "#contact",
    label: "Contact",
  },
];

export const socialLinks = [
  {
    url: "https://www.linkedin.com/in/ashim-choudhary-707191336/",
    label: "LinkedIn",
  },
  {
    url: "https://github.com/ashimchoudhary",
    label: "Github",
  },
];
