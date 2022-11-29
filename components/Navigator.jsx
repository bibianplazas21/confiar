import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const rutas = [
  { ruta: "/", name: "Home" },
  { ruta: "/nosotros", name: "Nosotros" },
  { ruta: "/contactanos", name: "Contactanos" },
];
const Navigator = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <nav className=" fixed w-full py-4 px-8 bg-primaryDark  flex-col md:flex-row md:justify-between items-center p-2 md:flex z-50">
      <Link href="/">
        <Image
          src="/logoWhite.png"
          height={50}
          width={150}
          alt="Logo Confiar "
        />
      </Link>
      <ul className="flex-row w-full md:w-auto hidden md:flex">
        {rutas.map((ruta) => (
          <Link href={ruta.ruta} key={ruta.ruta}>
            <li
              className={`mr-5 text-white font-bold text-lg text-center inset-0  p-4  hover:border-b-8 hover:border-primaryPink rounded-md w-full 
${pathname === ruta.ruta ? "border-b-8 border-primaryPurple" : ""}
transition-all ease-in-out

`}
            >
              {ruta.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigator;
