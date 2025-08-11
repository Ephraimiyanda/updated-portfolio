"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { motion } from "framer-motion";
import { useMenu } from "@/context/MenuContext";
import { useMenu } from "@/context/MenuContext";

export default function Index() {
  const { openMenu } = useMenu();

  const { openMenu } = useMenu();

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeInOut",
        delayChildren: 0.7,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section
      id="Home"
      className="md:py-10 py-20 h-[80svh] md:h-screen flex-col flex items-center justify-between w-full text-white  text-lg"
    >
      <div className=" flex flex-wrap sm:flex-row flex-col justify-between items-center  px-3 sm:px-6 max-w-[1280px] w-full m-auto">
        <div className="w-full flex sm:gap-6 gap-3 ">
          <div className=" w-1 border border-[#a800fe] rounded"></div>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="container w-full flex flex-col gap-4"
          >
            <motion.li variants={item}>
              <p>
                {" "}
                <span className="text-[#a800fe]">Hi </span>, i am
              </p>
            </motion.li>
            <motion.li variants={item}>
              <h1 className="text-5xl font-mono font-bold">
                Ephraim <span className="text-[#a800fe]">Iyanda</span>
              </h1>
            </motion.li>
            <motion.li variants={item}>
              <p>
                A <span className="text-[#a800fe]">frontend developer</span>{" "}
                eager to make a mark in the dynamic world of web development.
              </p>
            </motion.li>
            <motion.li variants={item}>
              <div className="flex gap-5">
                <Link href="https://github.com/Ephraimiyanda">
                  <IoLogoGithub size={38} />
                </Link>
                <Link href="https://www.linkedin.com/in/ephraimiyanda">
                  <FaLinkedin size={38} />
                </Link>

                <Link href="https://twitter.com/crazy_bugdev">
                  <FaXTwitter size={38} />
                </Link>
                <Link type="email" href="mailto:iyandaephraim@gmail.com">
                  <TfiEmail size={38} />
                </Link>
              </div>
            </motion.li>

            <motion.li variants={item}>
              <div className="flex gap-3 py-2">
                <Button
                  onClick={openMenu}
                  radius="none"
                  variant="solid"
                  className="w-[150px] font-semibold bg-[#a800fe] text-white hover:scale-105 transition-transform shadow-lg"
                >
                  Explore
                </Button>
                <Button
                  as={Link}
                  href="/Contact"
                  radius="none"
                  variant="bordered"
                  className="w-[150px] font-semibold border-[#a800fe] text-[#a800fe] hover:bg-purple-500/10 transition-all"
                >
                  Get In Touch
                </Button>
              </div>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
