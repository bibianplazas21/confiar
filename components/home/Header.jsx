import React from "react";
import p1 from "../../public/images/p1.jpg";

const Header = () => {
  return (
    <header className="p-10">
      <div className="flex flex-col md:flex-row md:h-screen rounded-xl bg-primaryPurple bg-opacity-10">
        <div className="w-full md:w-1/2 flex items-center ">
          <div className=" w-full h-96 bg-white hover:scale-105 transition-transform ease-in-out relative md:left-12 rounded-2xl shadow-lg shadow-primaryDark flex flex-col justify-center p-12">
            <p className="text-primaryPink text-md font-bold tracking-tighter ">
              Que tus sueños den un paso adelante!
            </p>
            <h1 className="text-primaryPurple text-[40px] md:text-[50px] font-extrabold tracking-tight">
              Confiar Financiera{" "}
            </h1>
            <h2 className="text-primaryPink font-bold">
              Creditos Libre inversión
            </h2>

            <button className="bg-primaryPurple py-3 px-10 rounded-lg md:w-1/2 text-white font-bold mt-12 hover:opacity-95 hover:scale-105 transition-all ease-in-out ">
              {" "}
              Solicitar Credito{" "}
            </button>
          </div>
        </div>
        <div
          className={`rounded-xl w-1/2 bg-no-repeat h-full bg-[url('/images/p1.jpg')] bg-center bg-cover `}
        ></div>
      </div>
    </header>
  );
};

export default Header;
