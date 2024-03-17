import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
export default function Index() {
    return (
      <section
        id="Home"
        className="py-10 h-screen flex-col flex items-center justify-between w-full text-white"
      >
<<<<<<< HEAD
        <div className=" flex flex-wrap sm:flex-row flex-col justify-between items-center  px-3 sm:px-6 max-w-[1280px] w-full m-auto">
          <div className="w-full flex sm:gap-6 gap-3 ">
            <div className=" w-1 border border-[#a800fe] rounded"></div>
            <div className="container w-full flex flex-col gap-4">
              <p>
                {" "}
                <span className="text-[#a800fe]">Hi </span>, i am
=======
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
            <p>A frontend engineer</p>
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
            Hi there! 👋 I'm Ephraim Iyanda, a Junior Frontend Engineer with
            over 2 years of hands-on experience. I specialize in crafting
            visually appealing and responsive websites using technologies like
            React, Next.js, and Tailwind CSS. My journey in tech has equipped me
            with the skills to turn creative ideas into seamless user
            experiences. Let's dive into my portfolio, where each project tells
            a story of innovation and passion for code, where each project
            reflects my commitment to excellence and showcases the skills that
            make me stand out in the tech landscape. Let's build the future
            together one pixel at a time. 💻✨
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
                websites with more modern methods.
>>>>>>> 1a52a0c719072491595a2e295d0ccbfa286ca52e
              </p>
              <h1 className="text-5xl font-mono font-bold">
                Ephraim <span className="text-[#a800fe]">Iyanda</span>
              </h1>
              <p>
<<<<<<< HEAD
                A <span className="text-[#a800fe]">frontend developer</span>{" "}
                eager to make a mark in the dynamic world of web development.
=======
                During my immersive tenure at NHub Nigeria, I earned a Frontend
                Developer certificate while contributing significantly to the
                development of high-quality, responsive web solutions. Tasked
                with crafting visually stunning and user-friendly interfaces, I
                thrived in delivering impactful solutions. Notably, I actively
                participated in engaging pitches, collaborating with
                cross-functional teams to develop innovative business solutions
                through technology.
>>>>>>> 1a52a0c719072491595a2e295d0ccbfa286ca52e
              </p>
              <div className="flex gap-5">
                <Link href="https://github.com/Ephraimiyanda">
                  <IoLogoGithub size={38} />
                </Link>
                <Link href="https://www.linkedin.com/in/ephraimiyanda">
                  <FaLinkedin size={38} />
                </Link>

                <Link href="https://twitter.com/the_realzik">
                  <FaXTwitter size={38} />
                </Link>
                <Link href="iyandaephraim@gmail.com">
                  <TfiEmail size={38} />
                </Link>
              </div>
              <div className="flex gap-3 py-2">
                <Button
                  as={Link}
                  href="#Contact"
                  radius="none"
                  variant="solid"
                  className="w-[150px] font-semibold bg-[#a800fe] text-white"
                >
                  Explore
                </Button>
                <Button
                  as={Link}
                  href="/Contact"
                  radius="none"
                  variant="bordered"
                  className="w-[150px] font-semibold border-[#a800fe] text-[#a800fe]"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}