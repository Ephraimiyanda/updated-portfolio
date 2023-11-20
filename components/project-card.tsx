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
import nextui from "../public/images/next ui.png";
import internet from "../public/images/internet-svgrepo-com.svg";
import tailwind from "../public/images/tailwind-css-logo-5AD4175897-seeklogo.com.png"
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

  return (
    <Card
      className="p-0 max-w-[370px] m-auto max-h-[430px] h-[420px] bg-[#f5f5f5]"
      style={{
        padding: "0px",
      }}
    >
      <CardBody className="p-0 overflow-y-hidden flex-[none]">
        <Image
          isZoomed
          shadow="sm"
          radius="none"
          width="100%"
          alt={title}
          className="w-full object-cover h-[220px]  rounded-s-none rounded-e-none overflow-y-hidden"
          src={img}
        ></Image>
      </CardBody>
      <CardFooter className="text-small text-left items-start flex flex-col gap-2 justify-between ">
        <div className="h-[60px] mb-auto">
          <b>{title}</b>
        <p className="text-black text-sm">{description}</p>   
        </div>
       
        <div className="flex gap-2">
          <Button
            as={Link}
            href={weblink}
            isIconOnly
            color="primary"
            variant="flat"
            className="border border-blue-400"
            startContent={<MyImage src={internet} width={22} height={22} />}
          ></Button>
          <Button
            as={Link}
            isIconOnly
            color="warning"
            variant="flat"
            className="border border-orange-400"
            href={gitlink}
            startContent={<span>&#60;/{">"}</span>}
          ></Button>
        </div>
        <div className="flex gap-1 flex-wrap">
          {stacks.map((stack: string) => (
            <Chip
              endContent={ImageComponent(stack)}
              variant="flat"
              color="secondary"
              radius="sm"
              className="w-fit px-1"
            >
              {stack}
            </Chip>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
