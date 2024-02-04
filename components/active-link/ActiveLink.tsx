"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";

interface ActiveLinkProps {
  path: string;
  children: React.ReactNode;
}

export const ActiveLink = ({ path, children }: ActiveLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={`${style.link} ${
        pathname === path ? style["active-link"] : null
      }`}
    >
      {children}
    </Link>
  );
};
