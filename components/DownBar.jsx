import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineHome, HiOutlineUserGroup } from "react-icons/hi";
import {CiMail } from "react-icons/ci";

// Componente que renderiza las listas con los enlaces
export const MenuItem = ({  url, name }) => {
    const {pathname} = useRouter()
    console.log(pathname)
  return (
    <li className="group/list relative h-16 w-16 z-10 mx-4">
      <Link href={url}>
        <span className="h-full relative flex justify-center items-center flex-col text-center font-semibold w-full ">
          <span
            className={`icon relative block  transition-all ease-in-out duration-150 group-hover/list:-translate-y-8 text-white
      group-hover/list:bg-primaryDark group-hover/list:p-3 group-hover/list:text-primaryPink group-hover/list:rounded-full group-hover/list:border-8 group-hover/list:border-transparent
      ${
        pathname === url
          ? "-translate-y-8 bg-primaryDark p-3 text-primaryPink  rounded-full border-8 border-white"
          : ""
      }`}
          >
            {url === "/" && <HiOutlineHome size={23} />}
            {url === "/nosotros" && (
              <HiOutlineUserGroup size={23} />
            )}
            {url === "/contactanos" && (
              <CiMail size={23} />
            )}
           
          </span>
          <span
            className={`absolute text-xs tracking-wider transition-all duration-150 ease-in-out opacity-0 
  group-hover/list:opacity-100 group-hover/list:translate-y-2 
  ${pathname === url ? "opacity-100 translate-y-2 text-white font-semibold" : ""}`}
          >
            {name}
          </span>
        </span>
      </Link>
    </li>
  );
};

// Componente que muestra el menu
const DownBar = ({ pathname }) => {
  return (
    <ul className="flex w-full bg-primaryDark justify-center md:hidden">
      <MenuItem pathname={pathname} url={"/"} name="Home" />
      <MenuItem
        pathname={pathname}
        url={"/nosotros"}
        name="Nosotros"
      />
      <MenuItem
        pathname={pathname}
        url={"/contactanos"}
        name="Contactanos"
      />
     
    </ul>
  );
};

export default DownBar;