import Image from "next/image";
import React from "react";

const NosotrosPage = () => {
  return (
    <div>
      {/* superior */}
      <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden h-auto md:h-96">
        <div className="bg-primaryPink h-96 flex items-center justify-center">
          <h1 className="text-white text-3xl font-semibold p-4">
            Tansparencia y calidad de servicio
          </h1>
        </div>
        <div>
          <Image
            src="/images/about.webp"
            height={384}
            width={675}
            alt="Logo Confiar Financiera"
          />
        </div>
      </div>
      {/* medio */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-primaryPurple flex justify-center items-center h-full w-full">
          <p
            className="text-white font-bold text-4xl -rotate-90 md:rotate-180 "
            style={{ writingMode: "vertical-lr" }}
          >
            Nosotros
          </p>
        </div>
        <div className="min-h-96 p-10">
          <p className="text-lg text-primaryPurple">
            Somos un equipo de trabajo vinculado a la generación de créditos de
            libre consumo. Buscamos generar a cada uno de nuestros clientes
            soluciones personalizadas para la otorgación ágil y efectivo de
            créditos. Te brindamos las mejores condiciones financieras
            existentes en el mercado y el producto de financiación adecuado a tú
            necesidad. lleva a cabo ese proyecto, financia ese tan espererado
            viaje, inyecta mas dinero a tu negocio, estamos para servirte!
          </p>
        </div>
        <div className="bg-[#00FFFF]"></div>
      </div>
      {/* final */}
      <div></div>
    </div>
  );
};

export default NosotrosPage;
