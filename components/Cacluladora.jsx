import React, { useState, useEffect } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

const Cacluladora = () => {
  const [cantidad, setCantidad] = useState(1000000);
  const [cuotas, setCuotas] = useState(12);
  const[pagomes, setPagoMes] = useState(0)
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calcular =()=>{
        let totala=(parseFloat(cantidad)+parseFloat(cantidad*0.0328))
        setTotal(totala)
        setPagoMes(totala/cuotas)
    }
    calcular()
  }, [cantidad, cuotas])
  

  return (
    <section className="min-h-[500px] p-10 bg-gradient-to-tr from-primaryPink to-primaryPurple rounded-xl shadow shadow-secondaryDark">
      <div className="mb-4">
        <h2 className="text-center md:text-left text-white font-bold text-3xl">
          Calcula tu crédito
        </h2>
        <p className="text-center md:text-left text-white font-semibold">
          Y programa ese que tanto deseas!
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-4 ">
        <div className="bg-white min-h-[400px] rounded-xl shadow-lg p-10 md:col-start-1 md:col-end-5 flex flex-col justify-around ">
          <div className="w-full  ">
            <div className="flex justify-between">
              <p className="text-secondaryDark text-lg font-bold">
                Cuanto necesitas
              </p>
              <p className="text-primaryPink text-lg font-semibold">
                {formatter.format(cantidad)}
              </p>
            </div>
            <input
              className="w-full"
              type="range"
              value={cantidad}
              min="1000000"
              max="300000000"
              id="range"
              onChange={({ target }) => setCantidad(target.value)}
              //oninput="rangevalue.value=value"
            />
          </div>
          <div className="w-full ">
            <div className="flex justify-between">
              <p className="text-secondaryDark text-lg font-bold">
                Fija tu plazo
              </p>
              <p className="text-primaryPink text-lg font-semibold">{cuotas} meses</p>
            </div>
            <input
              className="w-full"
              type="range"
              value={cuotas}
              min="12"
              max="240"
              id="range"
              onChange={({ target }) => setCuotas(target.value)}
              //oninput="rangevalue.value=value"
            />
          </div>
          <div className="text-right">
            <button className="bg-primaryPurple py-3 px-10 rounded-lg md:w-1/2 text-white font-bold  hover:opacity-95 hover:scale-105 transition-all ease-in-out ">
              Solicitar ahora{" "}
            </button>
          </div>
        </div>
        <div className="bg-white min-h-[400px] rounded-xl shadow-lg p-10 md:col-start-5 md:col-end-7 ">
          <div className=" ">
            <p className="text-primaryPurple font-bold  ">Tu Monto</p>
            <div className="h-20 border border-primaryPink border-opacity-20 rounded-md flex items-center justify-center">
              <p className="text-primaryPurple font-bold text-3xl md:text-4xl">
                {formatter.format(cantidad)}
              </p>
            </div>
          </div>
          <div className=" ">
            <p className="text-primaryPurple font-bold  ">Tus cuotas</p>{" "}
            <div className="h-20 border border-primaryPink border-opacity-20 rounded-md flex items-center justify-center">
              <p className="text-primaryPurple font-bold text-3xl">
              {formatter.format(pagomes)}
                
              </p>
            </div>
          </div>
          <div className=" ">
            <p className="text-primaryPurple font-bold  ">Cuanto Pagarias</p>
            <div className="h-20 border border-primaryPink border-opacity-20 rounded-md flex items-center justify-center">
              <p className="text-primaryPurple font-bold text-3xl">
                {formatter.format(total)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cacluladora;
