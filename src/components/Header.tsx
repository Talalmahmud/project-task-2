"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const path = usePathname();

  return (
    <div className=" sticky top-0 w-full h-[80px] left-0 flex justify-center items-center bg-slate-500 z-40">
      <div className=" w-[1100px] flex justify-between mx-auto">
        <p>shop-{path === "/" ? "Home" : path}</p>
        {path !== "/" && (
          <Link
            href={"/"}
            className=" px-[16px] py-[4px] bg-blue-500 text-white"
          >
            Back to home
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
