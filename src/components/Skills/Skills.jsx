import React from "react";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import tailwindcss from "../../assets/tailwind-css.svg";
import react from "../../assets/react.svg";
import node from "../../assets/download.png";
import mongodb from "../../assets/mongodb.webp";
import github from "../../assets/github.svg";
import vscode from "../../assets/vs-code.svg";

const Skills = () => {
  return (
    <div name="Skills" className="bg-gray-800 relative pt-16">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold p-2 border-b-4 border-gray-500 inline">
            Skills
          </p>
          <p className="py-6 text-gray-300">
            These are the technologies I've learned and worked with ,{" "}
          </p>
        </div>

        <div className="grid grid-cols-2 w-full sm:grid-cols-3 gap-8 text-center py-8 px-7 md:px-12 sm:px-0  text-white">
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg items-center flex flex-col shadow-orange-500">
            <img src={html} alt="" className="h-36 w-36" />
            <p className="mt-4">HTML</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg items-center flex flex-col shadow-blue-500">
            <img src={css} alt="" className="h-36 w-36" />
            <p className="mt-4">CSS</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg items-center flex flex-col shadow-yellow-500">
            <img src={javascript} alt="" className="h-36 w-36" />
            <p className="mt-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg items-center flex flex-col shadow-blue-600">
            <img src={tailwindcss} alt="" className="h-36 w-36" />
            <p className="mt-4">TAILWINDCSS</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg items-center flex flex-col shadow-sky-400">
            <img src={react} alt="" className="h-36 w-36" />
            <p className="mt-4">REACTJS</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg items-center flex flex-col shadow-green-500">
            <img src={node} alt="" className="h-36 w-36" />
            <p className="mt-4">NODEJS</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg items-center flex flex-col shadow-green-400">
            <img src={mongodb} alt="" className="h-36 w-36" />
            <p className="mt-4">MongoDB</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg items-center flex flex-col shadow-white">
            <img src={github} alt="" className="h-36 w-36 " />
            <p className="mt-4">GITHUB</p>
          </div>

          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg items-center flex flex-col shadow-sky-500">
            <img src={vscode} alt="" className="h-36 w-36" />
            <p className="mt-4">VS CODE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
