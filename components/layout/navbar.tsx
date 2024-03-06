"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import HamburgerMenuIcon from "../icons/hamburger";
import React from "react";
import Logo from "../icons/logo";

const navigation = [
  {
    name: "Crypto Taxes",
    href: "/",
  },
  {
    name: "Free Tools",
    href: "/",
  },
  {
    name: "Resource Center",
    href: "/",
  },
];

function HamburgerMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <HamburgerMenuIcon className="h-[2rem] w-[2rem]" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {navigation.map((item) => (
          <a key={item.name} className="w-full" href={item.href}>
            <DropdownMenuItem>{item.name}</DropdownMenuItem>
          </a>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}
const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ ...props }, ref) => {
    return (
      <nav className="w-full bg-card flex justify-between items-center z-10 px-16 py-5  shadow-md">
        <a href="/">
          <Logo />
        </a>
        <NavigationMenu className="hidden md:block items-center ">
          <NavigationMenuList className="gap-10">
            {navigation.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  href={item.href}
                  className="font-bold text-lg"
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <Button className="px-8 h-11 my-2 font-bold rounded-lg  text-lg primary-grdient">
                <NavigationMenuLink>Get Started</NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu className="md:hidden">
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              <HamburgerMenu />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    );
  }
);
Navbar.displayName = "Navbar";

export default Navbar;
