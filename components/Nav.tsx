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
import { useMenu } from "@/context/MenuContext";
import ThemeController from "./ThemeController";

import { useMenu } from "@/context/MenuContext";
import ThemeController from "./ThemeController";

export default function Nav() {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();
  const links = ["Projects", "Contact"];


  return (
    <Navbar
      isBlurred={false}
      isBordered={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={toggleMenu}
      onMenuOpenChange={toggleMenu}
      maxWidth="xl"
      className="md:absolute top-[0] w-full bg-none"
      classNames={{
        base: "bg-transparent",
        toggleIcon: "before:h-1 before:w-9 after:h-1 after:w-9",
      }}
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#a800fe] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EI</span>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          {/* <ThemeController /> */}
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
          className="text-bold text-lg text-white bg-[#a800fe] h-20 w-20 absolute top-10 rounded-full hover:scale-105 transition-transform"
        />
      </NavbarContent>
      <NavbarMenu className="flex flex-col gap-8 justify-center items-center text-3xl font-mono nav_dropdown backdrop-blur-xl">
        <NavbarMenuItem className="relative nav-item w-max">
      <NavbarMenu className="flex flex-col gap-8 justify-center items-center text-3xl font-mono nav_dropdown backdrop-blur-xl">
        <NavbarMenuItem className="relative nav-item w-max">
          <Link
            color="foreground"
            href={"/"}
            onClick={closeMenu}
            className="text-5xl font-bold hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:bg-[#a800fe] transition-all duration-300"
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="relative nav-item w-max">
        <NavbarMenuItem className="relative nav-item w-max">
          <Link
            color="foreground"
            href={"/About-Me"}
            onClick={closeMenu}
            className="text-5xl font-bold hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:bg-[#a800fe] transition-all duration-300"
          >
            About Me
          </Link>
        </NavbarMenuItem>

        {links.map((link) => (
          <NavbarMenuItem key={link} className="relative nav-item w-max">
            <Link
              color="foreground"
              href={link}
              onClick={closeMenu}
              className="text-5xl font-bold hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:bg-[#a800fe] transition-all duration-300"
            >
              {link}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="mt-8">
          {/* <ThemeController /> */}
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
