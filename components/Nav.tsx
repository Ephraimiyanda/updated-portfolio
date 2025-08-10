"use client";
import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import ThemeController from "./ThemeController";
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["Projects", "Contact"];
  return (
    <Navbar
      isBlurred={false}
      isBordered={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="md:absolute top-[0] w-full bg-black"
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <p className=" sm:text-3xl text-xl font-extrabold text-[#a800fe]">
            MY PORTFOLIO
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem
          className="flex justify-center items-center gap-2"
          as={Link}
          href={
            "https://drive.google.com/file/d/1FSBn17QT6MWQXpFA8mwnFQ6zXUxvrIu2/view?usp=drivesdk"
          }
        >
          <IoDocumentTextOutline color="white" size={32} />
          <span className="text-white">My CV</span>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <ThemeController />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        justify="end"
        style={{
          flexGrow: "0.2",
        }}
        className=""
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-bold text-lg text-white bg-[#a800fe] h-12 w-12 rounded-[50%]"
        />
      </NavbarContent>
      <NavbarMenu className="flex flex-col gap-6 justify-center items-center text-3xl font-mono nav_dropdown">
        <NavbarMenuItem className="relative one w-max hover:text-[#a800fe] ">
          <Link
            color="foreground"
            href={"/"}
            onClick={() => setIsMenuOpen(false)}
            className="text-5xl font-bold "
          >
            Home
          </Link>
          <span
            className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-[#a800fe] 
              
              "
          ></span>
          <span
            className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-[#a800fe] 
              
              "
          ></span>
        </NavbarMenuItem>
        <NavbarMenuItem className="relative one w-max hover:text-[#a800fe] ">
          <Link
            color="foreground"
            href={"/About-Me"}
            onClick={() => setIsMenuOpen(false)}
            className="text-5xl font-bold "
          >
            About Me
          </Link>
          <span
            className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-[#a800fe] 
              
              "
          ></span>
          <span
            className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-[#a800fe] 
              
              "
          ></span>
        </NavbarMenuItem>

        {links.map((link) => (
          <NavbarMenuItem
            key={link}
            className="relative one w-max hover:text-[#a800fe] "
          >
            <Link
              color="foreground"
              href={link}
              onClick={() => setIsMenuOpen(false)}
              className="text-5xl font-bold "
            >
              {link}
            </Link>
            <span
              className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-[#a800fe] 
              
              "
            ></span>
            <span
              className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-[#a800fe] 
              
              "
            ></span>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="mt-8">
          <ThemeController />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
