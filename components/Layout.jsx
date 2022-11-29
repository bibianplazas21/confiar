import React from "react";
import DownBar from "./DownBar";
import Footer from "./Footer";
import Navigator from "./Navigator";
import WspButton from "./WspButton";

const Layout = ({ children }) => {
  return (
    <div className=" w-screen">
      <Navigator />
      <div className="min-h-screen  pt-24 px-4">{children}</div>
      <div className=" w-full h-16 fixed bottom-0 z-50 flex justify-center items-center rounded-md md:hidden">
        <DownBar />
      </div>
      <Footer />
      <WspButton/>
    </div>
  );
};

export default Layout;
