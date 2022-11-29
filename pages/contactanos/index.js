import React from "react";
import Layout from "../../components/Layout";

const Contactanos = () => {
  return (
    <Layout>
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-primaryPurple ">
            Contactanos
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-primaryDark sm:text-xl">
            Déjanos tus comentarios y un asesor se contactara lo mas pronto
            contigo, tu opinión es muy importante para nosotros.
          </p>
          <form action="#" className="space-y-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  for="email"
                  className="block mb-2   text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm   bg-gray-50 border border-primaryDark text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@ejemplo.com"
                  required
                />
              </div>
              <div>
                <label
                  for="phone"
                  className="block  mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Contacto
                </label>
                <input
                  type="number"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  id="subject"
                  className="block  p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Número de contacto"
                  required
                />
              </div>
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Dejanos saber como podemos ayudarte"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Tu Mensaje
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Dejanos tu comentario..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primaryPurple py-3 px-10 rounded-lg md:w-1/2 text-white font-bold mt-12 hover:opacity-95 hover:scale-105 transition-all ease-in-out "
            >
              {" "}
              Enviar
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contactanos;
