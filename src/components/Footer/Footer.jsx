import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-black to-gray-800 ">
        <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center text-white ">
          <footer className=" rounded-lg shadow m-4  text-white">
            <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
              <span className="text-sm  text-center ">
                {" "}
                © 2024 Portfolio. All Rights Reserved.
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
