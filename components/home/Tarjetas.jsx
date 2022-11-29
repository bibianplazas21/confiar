import React from "react";
import Image from "next/image";

const Tarjetas = () => {
  return (
    <div className="my-16 p-10 ">
      {/* tarjeta 1 */}
      <div className="rounded-lg overflow-hidden md:rounded-sm shadow-md grid grid-cols-1 md:grid-cols-2 mb-10 gap-0">
        <div className="w-full">
          <Image
            src="/images/aprobacion.jpg"
            height={400}
            width={700}
            alt="Aprobacion en 5 minutos"
          />
        </div>
        <div className="w-full bg-primaryPink bg-opacity-10 hover:bg-opacity-25 hover:text-primaryPurple  transition-all ease-in-out ">
          <div className="flex flex-col justify-center items-center h-full p-10">
            <h2 className="text-2xl md:text-4xl font-bold text-primaryPurple mb-12 text-center">
              COMISIONES A PRUEBA DE ATRASOS
            </h2>
            <p className="text-xl w-auto md:w-96 text-center">
              Por que contribuimos a la reactivacion economica nuestras
              comisiones son las mas bajas del mercado.
            </p>
            <button 
            className="bg-primaryPurple py-3 px-10 rounded-lg md:w-1/2 text-white font-bold mt-12 hover:opacity-95 hover:scale-105 transition-all ease-in-out ">
              {" "}
              Contacta Ahora
            </button>
          </div>
        </div>
      </div>
      {/* tarjeta 2 */}
      <div className="rounded-lg overflow-hidden md:rounded-sm shadow-md grid grid-cols-1 md:grid-cols-2 mb-10 gap-0">
        <div className="w-full bg-primaryPurple bg-opacity-10 hover:bg-opacity-25 hover:text-primaryPurple  transition-all ease-in-out ">
          <div className="flex flex-col justify-center items-center h-full p-10">
            <h2 className="text-2xl md:text-4xl font-bold text-primaryPurple mb-12 text-center ">
              APROBACIÓN EN 5 MINUTOS
            </h2>
            <p className="text-xl w-auto md:w-96 text-center">
              Comunicate con nuestros asesores en cualquier momento y recibe
              toda la asistencia para que juntos lo hagamos posible.
            </p>
            <button className="bg-primaryPurple py-3 px-10 rounded-lg md:w-1/2 text-white font-bold mt-12 hover:opacity-95 hover:scale-105 transition-all ease-in-out ">
              {" "}
              Solicitar Ahora
            </button>
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/images/time.jpg"
            height={400}
            width={700}
            alt="Aprobacion en 5 minutos"
          />
        </div>
      </div>
      {/* tarjeta 3 */}
      <div className="rounded-lg overflow-hidden md:rounded-sm shadow-md grid grid-cols-1 md:grid-cols-2 mb-10 gap-0">
        <div className="w-full">
          <Image
            src="/images/documentos.jpg"
            height={400}
            width={700}
            alt="Aprobacion en 5 minutos"
          />
        </div>
        <div className="w-full bg-secondaryDark bg-opacity-10 hover:bg-opacity-25 hover:text-primaryPurple  transition-all ease-in-out ">
          <div className="flex flex-col justify-center items-center h-full p-10">
            <h2 className="text-2xl md:text-4xl  font-bold text-primaryPurple mb-12 text-center ">
              SIN FIADOR Y SIN PAPELES
            </h2>
            <p className="text-xl w-auto md:w-96 text-center">
              Por que tu palabra y compromiso es suficiente.en CONFIA no te
              solicitamos fiador y mucho menos finca raiz .
            </p>
            <button className="bg-primaryPurple py-3 px-10 rounded-lg md:w-1/2 text-white font-bold mt-12 hover:opacity-95 hover:scale-105 transition-all ease-in-out ">
              {" "}
              Contacta Ahora
            </button>
          </div>
        </div>
      </div>
      {/* tarjeta 4 */}
      <div className="rounded-lg overflow-hidden md:rounded-sm shadow-md grid grid-cols-1 md:grid-cols-2 mb-10 gap-0">
        <div className="w-full bg-[#00FFFF] bg-opacity-10 hover:bg-opacity-25 hover:text-primaryPurple  transition-all ease-in-out ">
          <div className="flex flex-col justify-center items-center h-full p-10">
            <h2 className="text-2xl text-center md:text-4xl font-bold text-primaryPurple mb-12  ">
              PRESTAMOS DE LIBRE INVERSION
            </h2>
            <p className="text-xl w-auto md:w-96 text-center">
              Por que es tu dinero y lo puedes invertir en lo que mas deseas
              expandir tu negocio o remodelar tu casa.
            </p>
            <button className="bg-primaryPurple py-3 px-10 rounded-lg md:w-1/2 text-white font-bold mt-12 hover:opacity-95 hover:scale-105 transition-all ease-in-out ">
              {" "}
              Contacta Ahora
            </button>
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/images/viaje.png"
            height={400}
            width={600}
            alt="Libre inversion"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Tarjetas;
