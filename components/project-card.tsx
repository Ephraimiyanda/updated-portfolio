import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Link,
  Chip,
  Button,
  Tooltip,
} from "@nextui-org/react";
import MyImage from "./myImg";
import html from "../public/images/html.svg";
import css from "../public/images/css.svg";
import javascript from "../public/images/javascript.svg";
import sass from "../public/images/sass.svg";
import typescript from "../public/images/typescript.svg";
import nextjs from "../public/images/nextjs-fill-svgrepo-com.svg";
import react from "../public/images/react.svg";
import bootstrap from "../public/images/bootstrap-solid 1.svg";
import api from "../public/images/api-app-svgrepo-com.svg";
import nextui from "../public/images/nextui.png";
import internet from "../public/images/internet-svgrepo-com.svg";
import tailwind from "../public/images/tailwind-css-logo-5AD4175897-seeklogo.com.png";
import { motion, Variants } from "framer-motion";

interface ProjectCardProps {
  title: string;
  img: string;
  description: string;
  weblink: string;
  gitlink: string;
  stacks: string[];
}
export default function ProjectCard({
  title,
  img,
  description,
  weblink,
  gitlink,
  stacks,
}: ProjectCardProps) {
  const getImageByStack = (stack: string) => {
    switch (stack) {
      case "HTML":
        return html;
      case "CSS":
        return css;
      case "JavaScript":
        return javascript;
      case "Sass":
        return sass;
      case "Typescript":
        return typescript;
      case "Next.js":
        return nextjs;
      case "React":
        return react;
      case "Bootstrap":
        return bootstrap;
      case "API":
        return api;
      case "Next UI":
        return nextui;
      case "Tailwind CSS":
        return tailwind;
      default:
        return null;
    }
  };

  const ImageComponent = (stack: string) => {
    const imageSrc = getImageByStack(stack);

    if (!imageSrc) {
      return null;
    }
    return <MyImage src={imageSrc} width={17} height={15} />;
  };

  const getStackColor = (stack: string) => {
    switch (stack) {
      case "HTML":
        return "bg-gradient-to-r from-orange-500 to-red-500";
      case "CSS":
        return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "JavaScript":
        return "bg-gradient-to-r from-yellow-400 to-orange-500";
      case "Sass":
        return "bg-gradient-to-r from-pink-500 to-rose-500";
      case "Typescript":
        return "bg-gradient-to-r from-blue-600 to-indigo-600";
      case "Next.js":
        return "bg-gradient-to-r from-gray-800 to-gray-900";
      case "React":
        return "bg-gradient-to-r from-cyan-400 to-blue-500";
      case "Bootstrap":
        return "bg-gradient-to-r from-purple-600 to-indigo-600";
      case "API":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "Next UI":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "Tailwind CSS":
        return "bg-gradient-to-r from-teal-400 to-cyan-500";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  return (
    <motion.li
      className="card-container p-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl lg:w-full flex flex-col lg:flex-row gap-6 xl:flex-wrap  justify-around items-center m-auto lg:max-h-[480px] lg:h-[470px] overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
      variants={{
        hidden: { y: 80, opacity: 0, scale: 0.9 },
        visible: {
          y: 0,
          opacity: 1,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3 },
      }}
    >
      <div className="p-0 w-full lg:w-[45%] lg:min-w-[400px] overflow-hidden flex-[none]">
        <Image
          isZoomed
          shadow="sm"
          radius="lg"
          width="100%"
          height={"100%"}
          alt={title}
          className="w-full object-cover h-full max-h-none min-h-[250px] sm:h-[350px] max-w-[650px] overflow-hidden hover:scale-110 transition-transform duration-700 mx-auto"
          src={img}
        ></Image>
      </div>
      <div className="text-small lg:w-[45%] w-full text-white text-left items-start flex flex-col gap-4 justify-between p-6">
        <div className="sm:w-[500px] mb-auto">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-[#a800fe] to-purple-400 bg-clip-text text-transparent mb-3">
            {title}
          </h3>
          <p className="text-lg leading-relaxed text-gray-300">{description}</p>
        </div>

        <div className="flex gap-3 font-bold">
          <Button
            as={Link}
            href={weblink}
            target="_blank"
            className="bg-[#a800fe] font-semibold text-white hover:scale-105 transition-transform shadow-lg"
            startContent={<MyImage src={internet} width={22} height={22} />}
            radius="lg"
          >
            View Live Site
          </Button>
          <Button
            as={Link}
            variant="bordered"
            className="border-2 border-[#a800fe] font-semibold text-[#a800fe] hover:bg-purple-500/10 hover:scale-105 transition-all"
            href={gitlink}
            target="_blank"
            startContent={<span>&#60;/{">"}</span>}
            radius="lg"
          >
            View Source
          </Button>
        </div>
        <div className="flex gap-2 flex-wrap w-full">
          {stacks.map((stack: string, index: number) => (
            <Chip
              classNames={{ base: "text-white dark:text-white", content: "" }}
              color="secondary"
              variant="faded"
              startContent={ImageComponent(stack)}
            >
              {stack}
            </Chip>
          ))}
        </div>
      </div>
    </motion.li>
  );
}
