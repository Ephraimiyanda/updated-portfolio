import MyImage from "@/components/myImg";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";
import { GrVmMaintenance } from "react-icons/gr";
import { LiaConnectdevelop } from "react-icons/lia";
import { GiSkills } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
export default function About() {
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
              Hi there! 👋 I&apos;m Ephraim Iyanda, a Frontend Engineer with
              over 3+ years of hands-on experience. I specialize in crafting
              visually appealing and responsive websites using technologies like
              React, Next.js, and Tailwind CSS. My journey in tech has equipped
              me with the skills to turn creative ideas into seamless user
              experiences. Let&apos;s dive into my portfolio, where each project
              tells a story of innovation and passion for code, where each
              project reflects my commitment to excellence and showcases the
              skills that make me stand out in the tech landscape. Let&apos;s
              build the future together—one pixel at a time. 💻✨
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
                    <p className="text-3xl font-medium ">DESIGN</p>
                  </span>
                  <p>
                    I can design the site based on your needs and suggestions. I
                    can also design the site from scratch and consult you during
                    the job.
                  </p>
                </div>
                <div className="perks-div text-center max-w-[350px] m-auto">
                  <span className="flex gap-2 justify-center items-center">
                    <LiaConnectdevelop size={32} />
                    <p className="text-3xl font-medium">DEVELOPEMENT</p>
                  </span>
                  <p>
                    I can build the site based on your designs,specifications
                    and suggestions from scratch.
                  </p>
                </div>
              </div>
              <div className="perks-div text-center max-w-[350px] m-auto">
                <span className="flex gap-2 justify-center items-center">
                  <GrVmMaintenance size={32} />
                  <p className="text-3xl font-medium"> MAINTENANCE</p>
                </span>
                <p>
                  I can make changes to designs and functionality of already
                  built websites with more modern methods
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
                  <span className="w-7 h-7 text-center rounded-[50%] bg-gradient-to-br from-purple-400 to-blue-600  text-white">
                    1
                  </span>
                  <div className="h-[80%] w-1 bg-gradient-to-br from-purple-400 to-blue-600  m-auto"></div>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row gap-4 justify start">
                    <p className=" text-left  w-fit  mystroke stroke-[8px] stroke-transparent font-semibold text-xl">
                      Nhub Nigeria
                    </p>
                    <span className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600 flex py-2 sm:py-0">
                      - Frontend Developer Internship
                    </span>
                  </div>
                  <p>
                    During my immersive tenure at NHub Nigeria, I earned a
                    Frontend Developer certificate while contributing
                    significantly to the development of high-quality, responsive
                    web solutions. Tasked with crafting visually stunning and
                    user-friendly interfaces, I thrived in delivering impactful
                    solutions. Notably, I actively participated in engaging
                    pitches, collaborating with cross-functional teams to
                    develop innovative business solutions through technology
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col gap-2 ">
                  <span className="w-7 h-7 text-center rounded-[50%] bg-gradient-to-br from-purple-400 to-blue-600  text-white">
                    2
                  </span>
                  <div className="h-[80%] w-1 bg-gradient-to-br from-purple-400 to-blue-600  m-auto"></div>
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
                    Embarking on the HNG Internship journey, I demonstrated my
                    prowess in frontend development over a dynamic two-month
                    period. Successfully navigating through different stages of
                    the internship, I showcased strong problem-solving
                    abilities, adaptability to emerging technologies, and
                    effective collaboration skills. My journey at HNG was marked
                    by continuous learning, where I tackled diverse tasks and
                    challenges, enhancing my expertise and contributing to the
                    vibrant tech community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}