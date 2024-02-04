import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const sleep = (miliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, miliseconds));

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Princing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = async () => {
  return (
    <nav className="flex justify-between m-2 p-2 rounded bg-opacity-30 w-full bg-blue-800">
      <Link href="/" className="flex items-center gap-2">
        <HomeIcon />
        <span>Home</span>
      </Link>

      <div className="flex items-center gap-4">
        {navItems.map((navItem) => (
          <ActiveLink key={navItem.path} path={navItem.path}>
            {navItem.text}
          </ActiveLink>
        ))}
      </div>
    </nav>
  );
};
