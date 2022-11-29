import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsPhone, BsMap, BsMailbox, BsWhatsapp } from "react-icons/bs";

const rutas = [
  { ruta: "/", name: "Home" },
  { ruta: "/nosotros", name: "Nosotros" },
  { ruta: "/contactanos", name: "Contactanos" },
];
const Footer = () => {
  const { pathname } = useRouter();

  return (
    <footer className="pb-28 md:p-10  pt-10 bg-primaryDark text-white mi-h-52 flex flex-col md:flex-row items-center justify-around">
      {/* logo */}
      <Link href={rutas[0].ruta}>
        <Image
          src="/logoWhite.png"
          height={80}
          width={220}
          alt="Logo Confiar Financiera"
        />
      </Link>
      {/* enlaces  */}
      <div>
        <ul className=" w-full">
          {rutas.map((ruta) => (
            <Link href={ruta.ruta} key={ruta.ruta}>
              <li
                className={`mb-2 text-white  text-lg text-center inset-0  px-4 hover:border-l-4   hover:border-r-4 hover:border-primaryPink rounded-md w-full 
${pathname === ruta.ruta ? "border-r-4 border-l-4  border-primaryPurple" : ""}
`}
              >
                {ruta.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* datos de contacto */}
      <div className="flex flex-col">
        <div className="flex  items-center mb-2">
          <BsMailbox size={20} className="text-primaryPink" />
          <p className="ml-2 ">confiar.1995@gmail.com</p>
        </div>
        <div className="flex  items-center mb-2">
          <BsMap size={20} className="text-primaryPink" />
          <p className="ml-2 "> Calle 38 # 50 - 31 </p>
        </div>
        <div className="flex  items-center mb-2">
          <BsWhatsapp size={20} className="text-primaryPink" />
          <p className="ml-2 ">3124037481</p>
        </div>
        <div className="flex  items-center pb-2">
          <BsPhone size={20} className="text-primaryPink" />
          <p className="ml-2 ">3124037481</p>
        </div>
      </div>
      {/* redes sociales  */}
      <div></div>
    </footer>
  );
};

export default Footer;
