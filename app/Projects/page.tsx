"use client";
import ProjectCard from "@/components/project-card";
import { motion } from "framer-motion";

export default function Works() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };
  const projects = [
    {
      title: "RealSwitch",
      imgSrc: "/images/realestate.png",
      description:
        "A real estate platform where home hunters or investors that may want to invest, buy or rent can look up real estate properties on the market,their descriptions, properties and surrounding environment and other details provided by the listers .",
      weblink: "https://realswitch.netlify.app/",
      gitlink: "https://github.com/Ephraimiyanda/Real-estate",
      stacks: ["Next.js", "Tailwind CSS", "Next UI", "Typescript", "API"],
    },
    {
      title: "Kasuwa",
      imgSrc: "/images/Screenshot 2023-11-17 152442.png",
      description:
        "An e-commerce website for buying and selling agro products, a fullstack website created with nextjs, nextui, typescript, tailwind, expressjs, nodejs, mongodb.",
      weblink: "https://e-gona.vercel.app/",
      gitlink: "https://github.com/Ephraimiyanda/e-gona",
      stacks: ["Next.js", "Tailwind CSS", "Next UI", "Typescript", "API"],
    },
    {
      title: "Evently",
      imgSrc: "/images/evently.png",
      description:
        "The landing page for an event  platform that streamlines event planning, creating simplicity and efficiency.",
      weblink: "https://evently-sable-two.vercel.app/",
      gitlink: "https://github.com/Ephraimiyanda/evently",
      stacks: ["Next.js", "Tailwind CSS", "Next UI", "Typescript", "API"],
    },
    {
      title: "GetLinked Hackathon",
      imgSrc: "/images/Screenshot 2023-11-17 153309.png",
      description:
        "getlinked hackathon 2023, a challenge to create an amazing user interface from a design.",
      weblink: "https://getlinked-hackathon-ephraim.netlify.app",
      gitlink: "https://github.com/Ephraimiyanda/getLinkedHackathon",
      stacks: [
        "Next.js",
        "Tailwind CSS",
        "Next UI",
        "Typescript",
        "API",
        "Sass",
      ],
    },
    {
      title: "Chat-Ava",
      imgSrc: "/images/Screenshot 2024-03-17 105616.png",
      description:
        "A landind page for chatava an ai app that helps explain the contents of your pdf file",
      weblink: "https://chat-ava-web.vercel.app/",
      gitlink:
        "https://github.com/ShedrachJonah11/ChatAVA-web/tree/Ephraims-branch",
      stacks: ["Next.js", "Tailwind CSS", "Next UI", "Typescript", "API"],
    },
    // Add more projects here...
  ];
  return (
    <div className="md:absolute md:bottom-[0]  overflow-y-scroll pt-8 pb-16 w-full mx-auto md:h-[92vh]">
      <p className="text-4xl font-semibold text-white text-center py-6">
        <span className="text-[#a800fe] ">My </span>
        <span className="border-b-4 border-b-[#a800fe] pb-1">Works</span>
      </p>
      <div className="max-w-[1280px] w-full mx-auto">
        <motion.ul
          variants={container}
          viewport={{ once: false }}
          initial="hidden"
          whileInView="show"
          className="works_section flex flex-col gap-8 bg-transparent items-center justify-center w-full overflow-x-hidden mx-auto sm:px-6 px-3 overflow-hidden "
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              img={project.imgSrc}
              description={project.description}
              weblink={project.weblink}
              gitlink={project.gitlink}
              stacks={project.stacks}
            />
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
