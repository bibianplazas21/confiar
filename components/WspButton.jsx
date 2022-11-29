import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const WspButton = () => {
  return (
    <a
      className="fixed animate-bounce cursor-pointer z-40 shadow-md shadow-primaryDark bottom-24  md:bottom-8 right-8 bg-[#25d366] p-3 rounded-full hover:scale-105 transition-transform ease-in-out"
      href="https://wa.me/573243873221?text=Hola!%20gracias%20por%20preferir%20Confiar,%20estamos%20para%20ayudarte,%20dinos%20tu%20nombre%20y%20ciudad%20"
      target="blank"
    >
      <BsWhatsapp color="#fff" size={30} className="animate-pulse" />
    </a>
  );
};

export default WspButton;
