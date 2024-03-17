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
        <div className=" flex flex-wrap sm:flex-row flex-col justify-between items-center  px-3 sm:px-6 max-w-[1280px] w-full m-auto">
          <div className="w-full flex sm:gap-6 gap-3 ">
            <div className=" w-1 border border-[#a800fe] rounded"></div>
            <div className="container w-full flex flex-col gap-4">
              <p>
                {" "}
                <span className="text-[#a800fe]">Hi </span>, i am
              </p>
              <h1 className="text-5xl font-mono font-bold">
                Ephraim <span className="text-[#a800fe]">Iyanda</span>
              </h1>
              <p>
                A <span className="text-[#a800fe]">frontend developer</span>{" "}
                eager to make a mark in the dynamic world of web development.
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