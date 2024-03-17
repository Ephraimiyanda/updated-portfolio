"use client"
import ProjectCard from "@/components/project-card";
import { motion } from "framer-motion";

export default function Works() {
       const container = {
         hidden: { opacity: 0 },
         show: {
           opacity: 1,
           transition: {
             delayChildren: 0.8,
             duration: 0.8,
           },
         },
       };
      const projects = [
        {
          title: "Find your country",
          imgSrc: "/images/Screenshot 2023-09-26 143620.png",
          description:
            "A website to view details about countries,built using react and a rest api from a frontend mentor challenge. It provides general knowledge you need to know about a country. ",
          weblink: "https://majestic-sunburst-244202.netlify.app/",
          gitlink: "https://github.com/Ephraimiyanda/rest-country-app",
          stacks: ["React", "CSS", "JavaScript"],
        },
        {
          title: "MovieBox",
          imgSrc: "/images/Screenshot 2023-09-26 142924.png",
          description:
            "A website to watch and view details about movies. View the movie trailers, the actors,writers,directors e.t.c starring in them and their ratings across different platforms.It was created using nextjs,typescript,nextui and moviebox API. ",
          weblink: "https://ephraim-moviebox.netlify.app/",
          gitlink: "https://github.com/Ephraimiyanda/hng-internship-stage-2",
          stacks: ["Next.js", "Typescript", "Next UI", "TMDB API"],
        },
        {
          title: "Amica",
          imgSrc: "/images/Screenshot 2023-09-26 143007.png",
          description:
            "A website to keep track of expenditure goods for small businesses. Amica tracks expenses,deposits,credits and the inventory of the small scale business. It was built using HTML,css javascript and a rest API ",
          weblink: "https://amica01.netlify.app/",
          gitlink: "https://github.com/Ephraimiyanda/Amica",
          stacks: ["HTML", "CSS", "JavaScript", "API"],
        },
        {
          title: "Hero-Social Chat App",
          imgSrc: "/images/Screenshot 2023-09-26 143236.png",
          description:
            "A chat app for messaging people and communicating with people across the world.Heroscoial is a fullstack website craeted using nextjs,tailwind ,nextui,typescript,expressjs,nodejs ,mongodb,socket.io.",
          weblink: "https://herosocial-chat-app.netlify.app/",
          gitlink: "https://github.com/Ephraimiyanda/chat-app",
          stacks: ["Next.js", "Tailwind CSS", "Next UI", "Typescript", "API"],
        },
        {
          title: "Todo App",
          imgSrc: "/images/Screenshot 2023-11-16 213255.png",
          description:
            "A todo app to keep track of events whether todo,completed or ongoing events. It was created using HTML,css and javascript.",
          weblink: "https://ephraimiyanda.github.io/todo-app/",
          gitlink: "https://github.com/Ephraimiyanda/todo-app",
          stacks: ["HTML", "CSS", "JavaScript"],
        },
        {
          title: "Easy Banking",
          imgSrc:
            "/images/Web capture_6-6-2023_16405_zingy-pithivier-a80b4a.netlify.app.jpeg",
          description:
            "A simple landing page for a bank . A challenge given on fontend mentor . It was created using HTML,css and javascript",
          weblink: "https://zingy-pithivier-a80b4a.netlify.app/",
          gitlink: "https://github.com/Ephraimiyanda/first-react-project",
          stacks: ["React", "JavaScript", "CSS"],
        },
        {
          title: "URL Shortening App",
          imgSrc: "/images/Screenshot 2023-09-26 143507.png",
          description:
            "A website to shorten long URLs. Make your long and complex urls short by shortening them here for better accessibility ",
          weblink: "https://ephraimiyanda.github.io/url-shortening-app/",
          gitlink: "https://github.com/Ephraimiyanda/url-shortening-app",
          stacks: ["HTML", "CSS", "JavaScript", "Rest Country API"],
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
      <div className="absolute bottom-[0]  overflow-y-scroll pt-8 pb-16 w-full mx-auto h-[92vh]">
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
            className="works_section flex flex-col gap-6  bg-transparent items-center justify-center w-full overflow-x-hidden mx-auto sm:px-6 px-3 overflow-hidden "
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