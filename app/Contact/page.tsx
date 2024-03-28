"use client";
import { MailIcon } from "@/components/mailIcon";
import { Button, Input, Textarea } from "@nextui-org/react";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [personName, setPersonName] = useState("");
  const [message, setMessage] = useState("");
  const [personEmail, setPersonEmail] = useState("");
  const [status, setStatus] = useState("normal");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("sending");
    const data = {
      personName: personName,
      personEmail: personEmail,
      message: message,
    };

    try {
      const response = await fetch("/api/contactApi", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (response.status === 200) {
        setStatus("sent");
      } else {
        setStatus("failed");
      }
      //  console.log("Response received");
      //  console.log("Response succeeded!");
      //  setPersonName("");
      //  setPersonEmail("");
      //  setMessage("");
    } catch (err: any) {
      setStatus("failed");
      console.error("Error sending email:", err);
    }
  };

  function messageStatus() {
    if (status === "normal") {
      return "send Message";
    } else if (status === "failed") {
      return "retry";
    } else if (status === "sent") {
      return "message sent";
    } else if (status === "sending") {
      return "sending message";
    }
  }

  return (
    <section
      id="Contact"
      className=" py-10 flex flex-col items-center md:h-screen md:absolute h-full w-full"
    >
      <div className="container_form max-w-[1280px] px-3 md:px-6 mx-auto flex flex-col items-start justify-center gap-3 h-full">
        <div className="flex items-start max-w-[1000px] w-full justify-between md:flex-row flex-col md:bg-transparent bg-[#a800fe]  bg-opacity-20 md:rounded-none  rounded-xl  mx-auto">
          <div className="flex flex-col justify-start max-w-[500px] gap-3 items-start px-3">
            {/* <h2 className="text-3xl w-full text-center mx-auto font-semibold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600 flex  pt-10">
              Contact Me
            </h2> */}
            <h2 className="text-3xl  font-semibold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600 pb-4">
              <p className="text-4xl font-semibold text-white  pt-6 pb-2">
                <span className="">Contact </span>
                <span className="text-[#a800fe] pb-1">Me</span>
              </p>
              <div className="w-14 bg-[#a800fe] h-2 "></div>
            </h2>
            <p className="  w-full mx-auto text-lg text-white">
              If you have any questions or would like to discuss a potential
              project that requires my skillset. I am open to freelancing roles,
              contract projects ,part time and full time roles in any company,
              feel free to get in touch.
            </p>
            <div className="flex gap-5 relative top-5">
              <Link href="https://github.com/Ephraimiyanda">
                <IoLogoGithub size={38} color="white" />
              </Link>
              <Link href="https://www.linkedin.com/in/ephraimiyanda">
                <FaLinkedin size={38} color="white" />
              </Link>

              <Link href="https://twitter.com/crazy_bugdev">
                <FaXTwitter size={38} color="white" />
              </Link>
              <a type="ty" href="mailto:iyandaephraim@gmail.com">
                <TfiEmail size={38} color="white" />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 md:min-w-[400px] w-full mx-auto text-white p-6 py-14 md:bg-[#a800fe]  md:rounded-xl shadow-lg md:bg-opacity-20"
          >
            <Input
              label="Name"
              placeholder="Enter your name"
              labelPlacement="outside"
              variant="bordered"
              className="text-white"
              color="secondary"
              classNames={{
                label: "text-white dark:text-white text-lg",
              }}
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
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
              className="text-white"
              classNames={{
                label: "text-white dark:text-white text-lg",
              }}
              color="secondary"
              value={personEmail}
              onChange={(e) => setPersonEmail(e.target.value)}
            />
            <Textarea
              variant="bordered"
              label="Message"
              labelPlacement="outside"
              placeholder="Enter your Message"
              className="col-span-12 md:col-span-6 mb-6 md:mb-0 text-white"
              classNames={{
                label: "text-white dark:text-white text-lg",
              }}
              color="secondary"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxRows={4}
            />
            <Button
              isLoading={status === "sending" && true}
              type="submit"
              variant="bordered"
              className="btn w-[200px] text-[#a800fe] border-[#a800fe]"
            >
              {messageStatus()}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
