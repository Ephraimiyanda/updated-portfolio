import MyImage from "@/components/myImg";
import { Chip, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import { GrVmMaintenance } from "react-icons/gr";
import { LiaConnectdevelop } from "react-icons/lia";
import { GiSkills } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";

import { IoDocumentTextOutline } from "react-icons/io5";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function About() {
  return (
    <div className="py-10  md:h-[92vh] overflow-y-auto text-white md:absolute bottom-[0] pt-8 pb-20 w-full mx-auto text-lg">
      <section id="About Me">
        <div className="max-w-[1280px] py-10 m-auto flex flex-col gap-2  px-3 sm:px-6 ">
          <h2 className="text-3xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600">
            <p className="text-4xl font-semibold text-white  py-6">
              <span className="text-[#a800fe] ">About </span>
              <span className="border-b-4 border-b-[#a800fe] pb-1">Me</span>
            </p>
          </h2>
          <p>
            Welcome👋! I&apos;m Ephraim Iyanda, Frontend Engineer focused on
            crafting exceptional digital experiences. I specialize in building
            modern, responsive web applications using cutting-edge frontend
            technologies. I'm also a Suns and Arsenal fan.
          </p>
          <p className="mt-4">
            My expertise lies in transforming complex ideas into intuitive,
            user-friendly interfaces that not only look stunning but also
            deliver outstanding performance. I&apos;m driven by the challenge of
            solving real-world problems through code and creating digital
            solutions that make a meaningful impact.
          </p>
          <p className="mt-4">
            Whether it’s crafting landing pages or building complex, multi-page
            applications, I specialize in developing and optimizing scalable web
            solutions that deliver exceptional user experiences. I thrive on
            collaborating with cross-functional teams, combining creativity with
            technical precision to produce results that are both functional and
            visually captivating. Every project is an opportunity to innovate,
            refine, and exceed expectations.let’s bring your vision to life! 🚀
          </p>

          <div className="mt-8">
            <Button
              as={Link}
              href="https://drive.google.com/file/d/1gxzkmANXy2Zhi-V3liI2A_JZ3lKIgoKF/view?usp=sharing"
              target="_blank"
              className="bg-[#a800fe] text-white font-semibold hover:scale-105 transition-transform shadow-lg"
              startContent={<IoDocumentTextOutline size={20} />}
            >
              Download My Resume
            </Button>
          </div>
        </div>
      </section>
      <div className="skills-div px-3 sm:px-6">
        <div className="skills py-10 px-3 sm:px-6">
          <span className=" w-full text-center mx-auto font-medium text-4xl text-[#a800fe] flex justify-center">
            Skills
          </span>
        </div>
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
    return (
      <div className="py-10  md:h-[92vh] overflow-y-auto text-white md:absolute bottom-[0] pt-8 pb-20 w-full mx-auto ">
        <section id="About Me">
          <div className="max-w-[1280px] py-10 m-auto flex flex-col gap-2  px-3 sm:px-6">
            <h2 className="text-3xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600">
              <p className="text-4xl font-semibold text-white  py-6">
                <span className="text-[#a800fe] ">About </span>
                <span className="border-b-4 border-b-[#a800fe] pb-1">Me</span>
              </p>
            </h2>
            <p>
              Welcome! I&apos;m Ephraim Iyanda, a passionate Frontend Engineer with over 3 years of experience 
              crafting exceptional digital experiences. I specialize in building modern, responsive web applications 
              using cutting-edge technologies like React, Next.js, TypeScript, and Tailwind CSS.
            </p>
            <p className="mt-4">
              My expertise lies in transforming complex ideas into intuitive, user-friendly interfaces that not only 
              look stunning but also deliver outstanding performance. I&apos;m driven by the challenge of solving 
              real-world problems through code and creating digital solutions that make a meaningful impact.
            </p>
            <p className="mt-4">
              Whether it&apos;s developing scalable web applications, optimizing user experiences, or collaborating 
              with cross-functional teams, I bring creativity, technical excellence, and attention to detail to 
              every project. Let&apos;s build something amazing together! 🚀
            </p>
            
            <div className="mt-8">
              <Button
                as={Link}
                href="https://drive.google.com/file/d/1FSBn17QT6MWQXpFA8mwnFQ6zXUxvrIu2/view?usp=drivesdk"
                target="_blank"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold hover:scale-105 transition-transform shadow-lg"
                startContent={<IoDocumentTextOutline size={20} />}
              >
                Download My Resume
              </Button>
            </p>
          </div>
        </section>
        <div className="skills-div px-3 sm:px-6">
          <div className="skills py-10 px-3 sm:px-6">
            <span className=" w-full text-center mx-auto font-medium text-4xl text-[#a800fe] flex justify-center">
              Skills
            </span>
          </div>
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
            <MyImage width={100} height={100} src="/images/nextui.png" />
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
      <section id="Perks" className="w-full">
        <div className="max-w-[1280px] w-full py-10 m-auto flex flex-col gap-2  px-3 sm:px-6">
          <span className="text-4xl font-medium text-center text-[#a800fe]">
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
          <div className="perks__container w-full flex flex-col gap-5">
            <div className="inner-perks_container flex w-full justify-between flex-wrap gap-5">
              <div className="perks-div text-center max-w-[350px] m-auto">
                <span className="flex gap-2 justify-center items-center">
                  <MdOutlineDesignServices size={32} />
                  <p className="text-3xl font-medium">UI/UX DESIGN</p>
                </span>
                <p>
                  I create intuitive and visually appealing user interfaces that
                  prioritize user experience. From wireframes to high-fidelity
                  prototypes, I ensure every design decision enhances usability
                  and accessibility while maintaining aesthetic excellence.
                </p>
              </div>
              <div className="perks-div text-center max-w-[350px] m-auto">
                <span className="flex gap-2 justify-center items-center">
                  <LiaConnectdevelop size={32} />
                  <p className="text-3xl font-medium">DEVELOPMENT</p>
                </span>
                <p>
                  I transform designs into fully functional, responsive web
                  applications using modern technologies. My development
                  approach focuses on clean code, optimal performance, and
                  scalable architecture that grows with your business needs.
                </p>
              </div>
            </div>
            <div className="perks-div text-center max-w-[350px] m-auto">
              <span className="flex gap-2 justify-center items-center">
                <GrVmMaintenance size={32} />
                <p className="text-3xl font-medium">OPTIMIZATION</p>
              </span>
              <p>
                I enhance existing applications with performance optimizations,
                modern best practices, and feature upgrades. From legacy code
                refactoring to implementing new technologies, I ensure your
                digital presence stays current and competitive.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="Experience" className="py-12">
        <div className="max-w-[1280px] px-3 sm:px-6 mx-auto">
          <h2 className="text-4xl font-medium text-center text-[#a800fe] mb-10">
            My Experience
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Experience Card */}
            {[
              {
                company: "nHub Nigeria",
                role: "Frontend Developer (Intern)",
                date: "Aug 2022 – Dec 2024",
                location: "Jos, Nigeria",
                description: [
                  "Developed dynamic, user-friendly applications using HTML, CSS, JavaScript, React, TypeScript, and Tailwind CSS.",
                  "Delivered multiple personal and team projects within set deadlines.",
                  "Participated in weekly business idea pitches, gaining exposure to startup and entrepreneurship fundamentals.",
                  "Strengthened team communication and problem-solving capabilities.",
                  "Learned core principles of building sustainable, tech-driven businesses.",
                ],
                skills: [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                ],
              },
              {
                company: "HNG Internship",
                role: "Frontend Developer (Intern)",
                date: "Sep 2023 – Oct 2023",
                location: "Remote",
                description: [
                  "Completed multiple progressively challenging frontend projects under tight deadlines.",
                  "Advanced through internship stages based on project performance and peer reviews.",
                  "Applied technologies like React and TypeScript to build real-world applications.",
                  "Collaborated with peers and mentors, improving industry best practice awareness.",
                ],
                skills: [
                  "React",
                  "TypeScript",
                  "API Integration",
                  "Collaboration",
                ],
              },
              {
                company: "Rahapay Technologies LTD",
                role: "Frontend Developer",
                date: "May 2024 – Dec 2024",
                location: "Remote",
                description: [
                  "Developed and enhanced the company's web platform.",
                  "Designed and implemented a responsive and visually engaging landing page.",
                  "Contributed to the development of the admin dashboard, optimizing functionality and usability for internal users.",
                  "Leveraged React, TypeScript, and Tailwind CSS to build scalable and maintainable UI components.",
                ],
                skills: ["React", "TypeScript", "Tailwind CSS", "UI Design"],
              },
              {
                company: "Swift Vista",
                role: "Frontend Developer",
                date: "Jan 2024 – Aug 2024",
                location: "Remote",
                description: [
                  "Created responsive and intuitive user interfaces using React, JavaScript, and Tailwind CSS.",
                  "Built and maintained UI components aligned with the company’s design and functional goals.",
                  "Improved frontend codebase for readability, reusability, and maintainability.",
                  "Collaborated cross-functionally in a startup setting to solve complex UI challenges.",
                ],
                skills: [
                  "React",
                  "JavaScript",
                  "Tailwind CSS",
                  "UI Components",
                ],
              },
            ].map((exp, i) => (
              <div
                key={i}
                className="backdrop-blur-sm bg-black/10 rounded-xl shadow-lg p-6 flex flex-col gap-4 border border-[#a800fe]/50"
              >
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
        <section id="Perks" className="w-full">
          <div className="max-w-[1280px] w-full py-10 m-auto flex flex-col gap-2  px-3 sm:px-6">
            <span className="text-4xl font-medium text-center text-[#a800fe]">
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
            <div className="perks__container w-full flex flex-col gap-5">
              <div className="inner-perks_container flex w-full justify-between flex-wrap gap-5">
                <div className="perks-div text-center max-w-[350px] m-auto">
                  <span className="flex gap-2 justify-center items-center">
                    <MdOutlineDesignServices size={32} />
                    <p className="text-3xl font-medium">UI/UX DESIGN</p>
                  </span>
                  <p>
                    I create intuitive and visually appealing user interfaces that prioritize user experience. 
                    From wireframes to high-fidelity prototypes, I ensure every design decision enhances usability 
                    and accessibility while maintaining aesthetic excellence.
                  </p>
                </div>
                <div className="perks-div text-center max-w-[350px] m-auto">
                  <span className="flex gap-2 justify-center items-center">
                    <LiaConnectdevelop size={32} />
                    <p className="text-3xl font-medium">DEVELOPMENT</p>
                  </span>
                  <p>
                    I transform designs into fully functional, responsive web applications using modern technologies. 
                    My development approach focuses on clean code, optimal performance, and scalable architecture 
                    that grows with your business needs.
                  </p>
                </div>
              </div>
              <div className="perks-div text-center max-w-[350px] m-auto">
                <span className="flex gap-2 justify-center items-center">
                  <GrVmMaintenance size={32} />
                  <p className="text-3xl font-medium">OPTIMIZATION</p>
                </span>
                <p>
                  I enhance existing applications with performance optimizations, modern best practices, and 
                  feature upgrades. From legacy code refactoring to implementing new technologies, I ensure 
                  your digital presence stays current and competitive.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="Experience">
          <div>
            <div className="max-w-[1280px] px-3 sm:px-6 mx-auto flex flex-col gap-3">
              <span className="text-4xl w-full text-center mx-auto font-medium text-[#a800fe] flex justify-center pt-10">
                My Experience
              </span>
              <div className="flex gap-3">
                <div className="flex flex-col gap-2">
                  <span className="w-8 h-8 text-center flex justify-center items-center  rounded-[50%] bg-gradient-to-br from-purple-400 to-blue-600  text-white">
                    1
                  </span>
                  <div className="h-[60%] w-1 bg-gradient-to-br from-purple-400 to-blue-600  m-auto"></div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-sm text-gray-500">
                    {exp.role} • {exp.date}
                  </p>
                  <p className="text-sm text-gray-500">{exp.location}</p>
                  <div className="flex flex-col md:flex-row gap-4 justify start">
                    <p className=" text-left  w-fit  mystroke stroke-[8px] stroke-transparent font-semibold text-xl">
                      Nhub Nigeria
                    </p>
                    <span className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600 flex py-2 sm:py-0">
                      - Frontend Developer Internship
                    </span>
                  </div>
                  <p>
                    At NHub Nigeria, I completed an intensive Frontend Developer program where I honed my skills 
                    in modern web development. I contributed to multiple high-impact projects, developing responsive 
                    web applications and collaborating with diverse teams to deliver innovative tech solutions. 
                    This experience strengthened my ability to work in fast-paced environments and deliver 
                    quality results under tight deadlines.
                  </p>
                </div>
                <ul className="list-disc pl-5 space-y-1">
                  {exp.description.map((point, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, idx) => (
                    <Chip
                      classNames={{
                        base: "text-white dark:text-white",
                        content: "",
                      }}
                      color="secondary"
                      variant="faded"
                      key={idx}
                    >
                      {skill}
                    </Chip>
                  ))}
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col gap-2 ">
                  <span className="w-8 h-8 flex justify-center items-center rounded-[50%] bg-gradient-to-br from-purple-400 to-blue-600  text-white">
                    2
                  </span>
                  <div className="h-[60%] w-1 bg-gradient-to-br from-purple-400 to-blue-600  m-auto"></div>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row gap-4 justify-start">
                    <p className=" w-fit mystroke stroke-[4px] stroke-transparent font-semibold text-xl">
                      HNG Internship
                    </p>
                    <span className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600 flex py-2 sm:py-0 ">
                      - Frontend Developer Internship
                    </span>
                  </div>

                  <p>
                    The HNG Internship was a transformative experience that challenged me to push my technical 
                    boundaries. Over two intensive months, I successfully completed multiple stages of increasingly 
                    complex tasks, demonstrating proficiency in React, API integration, and collaborative development. 
                    This program enhanced my problem-solving skills and exposed me to industry-standard practices 
                    in a competitive, fast-paced environment.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
