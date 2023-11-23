"use client";
import ProjectCard from "@/components/project-card";
import {
  Button,
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Textarea,
  Tooltip,
} from "@nextui-org/react";
import Card from "framer-motion";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import plate from "../public/images/dugb_o5sj_230522.jpg";
import { MailIcon } from "@/components/mailIcon";
import MyImage from "@/components/myImg";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["Home", "About Me", "Experience", "Projects", "Contact"];
  const projects = [
    {
      title: "Find your country",
      imgSrc: "/images/Screenshot 2023-09-26 143620.png",
      description: "A website to view details about countries",
      weblink: "https://majestic-sunburst-244202.netlify.app/",
      gitlink: "https://github.com/Ephraimiyanda/rest-country-app",
      stacks: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Movie Watching Site",
      imgSrc: "/images/Screenshot 2023-09-26 142924.png",
      description: "A website to watch and view details about movies",
      weblink: "https://ephraim-moviebox.netlify.app/",
      gitlink: "https://github.com/Ephraimiyanda/hng-internship-stage-2",
      stacks: ["Next.js", "Typescript", "Next UI", "TMDB API"],
    },
    {
      title: "Amica",
      imgSrc: "/images/Screenshot 2023-09-26 143007.png",
      description:
        "A website to keep track of expenditure goods for small businesses",
      weblink: "https://amica01.netlify.app/",
      gitlink: "https://github.com/Ephraimiyanda/Amica",
      stacks: ["HTML", "CSS", "JavaScript", "API"],
    },
    {
      title: "Hero-Social Chat App",
      imgSrc: "/images/Screenshot 2023-09-26 143236.png",
      description: "A chat app for messaging people",
      weblink: "https://herosocial-chat-app.netlify.app/",
      gitlink: "https://github.com/Ephraimiyanda/chat-app",
      stacks: ["Next.js", "Tailwind CSS", "Next UI", "Typescript", "API"],
    },
    {
      title: "Todo App",
      imgSrc: "/images/Screenshot 2023-11-16 213255.png",
      description: "A todo app to keep track of events",
      weblink: "https://ephraimiyanda.github.io/todo-app/",
      gitlink: "https://github.com/Ephraimiyanda/todo-app",
      stacks: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Easy Banking",
      imgSrc:
        "/images/Web capture_6-6-2023_16405_zingy-pithivier-a80b4a.netlify.app.jpeg",
      description: "A simple landing page for a bank",
      weblink: "https://ephraimiyanda.github.io/todo-app/",
      gitlink: "https://github.com/Ephraimiyanda/todo-app",
      stacks: ["React", "JavaScript", "CSS"],
    },
    {
      title: "URL Shortening App",
      imgSrc: "/images/Screenshot 2023-09-26 143507.png",
      description: "A website to shorten long URLs",
      weblink: "https://ephraimiyanda.github.io/url-shortening-app/",
      gitlink: "https://github.com/Ephraimiyanda/url-shortening-app",
      stacks: ["HTML", "CSS", "JavaScript", "Rest Country API"],
    },
    {
      title: "Kasuwa",
      imgSrc: "/images/Screenshot 2023-11-17 152442.png",
      description: "An e-commerce website for buying and selling agro products",
      weblink: "https://e-gona.vercel.app/",
      gitlink: "https://github.com/Ephraimiyanda/e-gona",
      stacks: ["Next.js", "Tailwind CSS", "Next UI", "Typescript", "API"],
    },
    {
      title: "GetLinked Hackathon",
      imgSrc: "/images/Screenshot 2023-11-17 153309.png",
      description: "getlinked hackathon 2023",
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
    // Add more projects here...
  ];

  return (
    <main className="">
      <Navbar
        isBlurred={false}
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="xl"
        position="sticky"
      >
        <NavbarContent justify="start">
          <NavbarBrand>
            <p className=" text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600">
              MY PORTFOLIO
            </p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-4" justify="center">
          {links.map((link) => (
            <NavbarItem key={link}>
              <Link
                color="foreground"
                href={`#${link}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <span>My CV</span>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent
          justify="end"
          style={{
            flexGrow: "0.2",
          }}
          className="md:hidden"
        >
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
        </NavbarContent>
        <NavbarMenu>
          {links.map((link) => (
            <NavbarMenuItem key={link}>
              <Link
                color="foreground"
                href={`#${link}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <section id="Home" className="py-10">
        <div className=" flex flex-wrap justify-between items-center  px-3 sm:px-6 max-w-[1280px] m-auto">
          <div className="container w-1/2 flex flex-col gap-2">
            <span>Hi , i am</span>
            <h1 className="text-5xl font-mono font-bold">Ephraim Iyanda</h1>
            <p>I&apos;m a Junior frontend engineer</p>
            <Button
              as={Link}
              href="#Contact"
              radius="none"
              variant="flat"
              color="primary"
              className="w-[150px] border border-blue-400"
            >
              Get In Touch
            </Button>
            <div className="flex gap-2">
              <Link href="https://github.com/Ephraimiyanda">
                <Image
                  width={35}
                  height={35}
                  src="/images/github log.svg"
                  alt=""
                />
              </Link>
              <Link href="https://www.linkedin.com/in/ephraimiyanda">
                <Image
                  width={35}
                  height={35}
                  src="/images/linked in.svg"
                  alt=""
                />
              </Link>

              <Link href="https://twitter.com/the_realzik">
                <Image width={35} height={35} src="images/at icon.svg" alt="" />
              </Link>
            </div>
          </div>
          <Image
            width={270}
            height={200}
            src="/images/dugb_o5sj_230522.jpg"
            className="myImage w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-[50%]"
            alt=""
          />
        </div>
      </section>

      <section id="About Me">
        <div className="max-w-[1280px] py-10 m-auto flex flex-col gap-2  px-3 sm:px-6">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600">
            About Me
          </h2>
          <p>
            I have been working as a frontend engineer for over 2+ years. With
            expertise in HTML, CSS, and JavaScript. I have developed numerous
            responsive and user-friendly websites. I am also proficient in
            various frontend frameworks and libraries such as React, Next.js,
            Tailwind CSS, and Bootstrap.
          </p>
        </div>
      </section>

      <section id="Perks" className="w-full">
        <div className="max-w-[1280px] w-full py-10 m-auto flex flex-col gap-2  px-3 sm:px-6">
          <span className="text-3xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600">
            MY PERKS
          </span>
          <p className="text-center">
            These are some of the various things i can do with the skills i
            have.
          </p>
          <Image
            width={100}
            height={100}
            src="/images/separatorBlack 1.svg"
            alt=""
            className="seperate_Image m-auto"
          />
          <div className="perks__container w-full flex flex-col gap-3">
            <div className="inner-perks_container flex w-full justify-between flex-wrap gap-2">
              <div className="perks-div max-w-[350px] m-auto">
                <span className="text-3xl text-center mystroke stroke-[8px] stroke-transparent  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600">
                  <Image
                    width={100}
                    height={100}
                    src="/images/design.svg"
                    alt=""
                    className="perks_Image relative -mb-11 -left-4"
                  />
                  DESIGN
                </span>
                <p>
                  I can design the site based on your needs and suggestions. I
                  can also design the site from scratch and consult you during
                  the job.
                </p>
              </div>
              <div className="perks-div max-w-[350px] m-auto">
                <span className="text-3xl text-center mystroke stroke-[8px] stroke-transparent  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600">
                  <Image
                    width={100}
                    height={100}
                    src="/images/development.svg"
                    alt=""
                    className="perks_Image relative -mb-11 -left-4"
                  />
                  DEVELOPEMENT
                </span>
                <p>
                  I can build the site based on your designs,specifications and
                  suggestions from scratch.
                </p>
              </div>
            </div>
            <div className="perks-div max-w-[350px] m-auto">
              <span className="text-3xl text-center mystroke stroke-[8px] stroke-transparent  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600">
                <Image
                  width={100}
                  height={100}
                  src="/images/maintenance.svg"
                  alt=""
                  className="perks_Image relative -mb-11 -left-4"
                />
                MAINTENANCE
              </span>
              <p>
                I can make changes to designs and functionality of already built
                websited with more modern methods
              </p>
            </div>
          </div>
          <div className="skills py-10">
            <span className="text-3xl w-full text-center mx-auto font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600 flex justify-center">
              Skills
            </span>
            <div className="skills-div">
              <span className="text-xl py-5 text-center mystroke stroke-[8px] stroke-transparent  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600">
                USING NOW :
              </span>
              <div className="grid skill_grid gap-5 justify-between items-center py-10 max-w-[770px] m-auto">
                <Tooltip
                  className="capitalize"
                  placement="bottom"
                  radius="sm"
                  size="md"
                  color="danger"
                  content={"HTML"}
                >
                  <Image
                    className="m-auto"
                    width={100}
                    height={100}
                    src="/images/html.svg"
                    alt=""
                  />
                </Tooltip>

                <Tooltip
                  className="capitalize"
                  placement="bottom"
                  radius="sm"
                  size="md"
                  color="primary"
                  content={"CSS"}
                >
                  <Image
                    className="m-auto"
                    width={100}
                    height={100}
                    src="/images/css.svg"
                    alt=""
                  />
                </Tooltip>

                <Tooltip
                  className="capitalize"
                  placement="bottom"
                  radius="sm"
                  size="md"
                  color="warning"
                  content={"Javascript"}
                >
                  <Image
                    width={100}
                    height={100}
                    src="/images/javascript.svg"
                    alt=""
                    className="m-auto"
                  />
                </Tooltip>

                <Tooltip
                  className="capitalize"
                  placement="bottom"
                  radius="sm"
                  size="md"
                  color="danger"
                  content={"Sass"}
                >
                  <Image
                    className="m-auto"
                    width={100}
                    height={100}
                    src="/images/sass.svg"
                    alt=""
                  />
                </Tooltip>

                <Tooltip
                  className="capitalize"
                  placement="bottom"
                  radius="sm"
                  size="md"
                  color="primary"
                  content={"Typescript"}
                >
                  <Image
                    width={100}
                    height={100}
                    src="/images/typescript.svg"
                    alt=""
                    className="m-auto"
                  />
                </Tooltip>

                <Tooltip
                  className="capitalize"
                  placement="bottom"
                  radius="sm"
                  size="md"
                  color="default"
                  content={"NEXTjs"}
                >
                  <Image
                    className="m-auto"
                    width={100}
                    height={100}
                    src="/images/nextjs"
                    alt=""
                  />
                </Tooltip>

                <Tooltip
                  className="capitalize"
                  placement="bottom"
                  radius="sm"
                  size="md"
                  color="primary"
                  content={"React"}
                >
                  <Image
                    className="m-auto"
                    width={100}
                    height={100}
                    src="/images/react.svg"
                    alt=""
                  />
                </Tooltip>

                <Tooltip
                  className="capitalize"
                  placement="bottom"
                  radius="sm"
                  size="md"
                  color="secondary"
                  content={"Bootstrap"}
                >
                  <Image
                    width={100}
                    height={100}
                    src="/images/bootstrap-solid 1.svg"
                    alt=""
                    className="m-auto"
                  />
                </Tooltip>

                <Tooltip
                  className="capitalize"
                  placement="bottom"
                  radius="sm"
                  size="md"
                  color="default"
                  content={"Next UI"}
                >
                  <MyImage
                    width={100}
                    height={100}
                    src="/images/nextui.png"
                  />
                </Tooltip>

                <Tooltip
                  className="capitalize"
                  placement="bottom"
                  radius="sm"
                  size="md"
                  color="primary"
                  content={"Tailwind Css"}
                >
                  <Image
                    className="m-auto"
                    width={100}
                    height={100}
                    src="/images/tailwind-css-logo-5AD4175897-seeklogo.com.png"
                    alt=""
                  />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Experience">
        <div className="max-w-[1280px] px-3 sm:px-6 mx-auto flex flex-col gap-3">
        <span className="text-3xl w-full text-center mx-auto font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600 flex justify-center pt-10">My Experience</span>
        <div className="flex gap-3">
          <div className="flex flex-col gap-2">
            <span className="w-8 h-8 text-center rounded-[50%] bg-gradient-to-br from-purple-400 to-blue-600  text-white">1</span>
            <div className="h-full w-1 bg-gradient-to-br from-purple-400 to-blue-600  m-auto"></div>
          </div>

          <div>
            
            <span className="text-lg py-2 text-center mystroke stroke-[8px] stroke-transparent  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600">Nhub Nigeria</span>
          <p>
            I spent over 1+ year at Nhub Nigeria where i was a frontend developer
            intern whre i earned a frontend developer certificate .During my
            time at Nhub i was tasked with the responsibility of bdelivering
            high-quailty,responsive web solutions by crafting visually stunning
            and user interfaces. I also participated in pitch&apos;s, where we are
            grouped into teams and asked to come up with business solutions to
            real life problems which tech could solve (mainly the software part)
            and how tech can solve them and then we collaborate as a team using
            our tech skills to build the solutions
          </p>
          </div>
          
        </div>
        <div className="flex gap-3">
        <div className="flex flex-col gap-2">
            <span className="w-8 h-8 text-center rounded-[50%] bg-gradient-to-br from-purple-400 to-blue-600  text-white">2</span>
            <div className="h-full w-1 bg-gradient-to-br from-purple-400 to-blue-600  m-auto"></div>
          </div>

          <div>
          <span className="text-lg py-2 text-center mystroke stroke-[8px] stroke-transparent  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600">HNG Internship</span>
          <p>
            This is an internship which happens every year where developers sign
            up and are given tasks by their mentors for a lenght of two months.
            the internship is in stages and when you pass the previous stage you
            get to move to the next stage . This internship is requires you to
            have problem-solving skills,adaptation to new technology skills and
            also colaborative skills for you to progress to other stages
          </p>   
          </div>
         
        </div>
        </div>
       
      </section>
      <section id="Projects" className="w-full py-10">
        <div className="w-full max-w-[1280px]  px-3 sm:px-6 m-auto">
          <div className=" w-full">
            <h2 className="text-3xl w-full text-center mx-auto font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600 flex justify-center pt-10">
              Projects
            </h2>
            <p className="text-center py-10">
              These are some of the projects i have worked on using the skills i
              have which are listed in the sections above. Enjoy as you go
              through them{" "}
            </p>

            <div className="grid grid_view items-center justify-center w-full">
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
            </div>
          </div>
        </div>
      </section>

      <section id="Contact" className="bg-white" >
        <div className="container_form max-w-[1280px] px-3 sm:px-6 mx-auto flex flex-col gap-3">
          <h2 className="text-3xl w-full text-center mx-auto font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600 flex justify-center pt-10">Contact Me</h2>
          <p className="max-w-[600px] mx-auto text-center">
            If you have any questions or would like to discuss a potential
            project, feel free to get in touch.
          </p>
          <form className="flex flex-col gap-3 max-w-[600px] w-full mx-auto">
              <Input
          label="Name"
          placeholder="Enter your name"
          labelPlacement="outside"
          variant="bordered"
        />
          <Input
          type="email"
          label="Email"
          placeholder="you@example.com"
          labelPlacement="outside"
          variant="bordered"
          startContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
          <Textarea
          variant="bordered"
          label="Message"
          labelPlacement="outside"
          placeholder="Enter your Message"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />
            <Button type="submit" variant="bordered" color="secondary" className="btn w-[200px]">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <footer className="py-5 text-center">
        <div className="container max-w-[1280px] sm:px-6 px-3">
          <p>&copy; 2023 Ephraim Iyanda. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
