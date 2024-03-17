import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Link,
  Chip,
  Button,
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
import tailwind from "../public/images/tailwind-css-logo-5AD4175897-seeklogo.com.png"
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
  const item = {
    hidden: { opacity: 0,x:40 },
    show: { opacity: 1,x:0 }
  }
  return (
    <motion.li
      className="card-container p-0  bg-transparent  lg:w-full flex flex-col lg:flex-row gap-3 xl:flex-wrap justify-between items-center m-auto lg:max-h-[430px] lg:h-[420px]  "
      variants={{
        hidden: { y: 60, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ ease: "linear", delay: 0.8 }}
      viewport={{ once: false }}
    >
      <div className="p-0 w-full lg:w-[45%] lg:min-w-[400px] overflow-y-hidden flex-[none]">
        <Image
          isZoomed
          shadow="sm"
          radius="none"
          width="100%"
          alt={title}
          className="w-full object-cover min-h-[250px] sm:min-h-[350px] max-w-[650px]  rounded-s-none rounded-e-none overflow-y-hidden"
          src={img}
        ></Image>
      </div>
      <div className="text-small lg:w-[45%] w-full text-white text-left items-start flex flex-col gap-2 justify-between  ">
        <div className="sm:w-[500px] bg-opacity-10 mb-auto bg-[#2b084c]  p-3">
          <b className="text-2xl text-[#a800fe]">{title}</b>
          <p className="text-base">{description}</p>
        </div>

        <div className="flex gap-2 font-bold p-3">
          <Button
            as={Link}
            href={weblink}
            className=" bg-[#a800fe]  font-semibold text-white"
            startContent={<MyImage src={internet} width={22} height={22} />}
            radius="none"
          >
            View Live Site
          </Button>
          <Button
            as={Link}
            variant="flat"
            className="border border-[#a800fe]  font-semibold text-[#a800fe] bg-[#a800fe] bg-opacity-10"
            href={gitlink}
            startContent={<span>&#60;/{">"}</span>}
            radius="none"
          >
            View Source
          </Button>
        </div>
        <div className="flex gap-1 flex-wrap w-full p-3">
          {stacks.map((stack: string, index: number) => (
            <Chip
              key={index}
              endContent={ImageComponent(stack)}
              variant="solid"
              color="secondary"
              radius="sm"
              className="w-fit px-1"
            >
              {stack}
            </Chip>
          ))}
        </div>
      </div>
    </motion.li>
  );
}
