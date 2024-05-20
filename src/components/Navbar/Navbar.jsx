import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink as RouterLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = React.useState(false);
  const links = [
    {
      id: 1,
      link: "About",
    },
    {
      id: 2,
      link: "Skills",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Education",
    },
  ];
  return (
    <div className="navbar bg-gradient-to-b from-black to-gray-900 z-10 scroll-smooth fixed ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white" onClick={()=> setNavbar(!navbar)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-gradient-to-b from-black to-gray-800 text-white"
          >
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="hover:text-purple-400 p-1 md:p-2 cursor-pointer font-medium hover:scale-100 duration-200"
              >
                <ScrollLink to={link} smooth duration={500}>
                  {link}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        <a className="btn btn-ghost text-xl text-white ">
          <span className="text-white font-bold text-2xl hover:text-purple-400 ">&lt;Kalp Shah /&gt;</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="hover:text-purple-400 px-2 cursor-pointer font-medium hover:scale-105 duration-200"
            >
              <ScrollLink to={link} smooth duration={500}>
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <RouterLink to="/contact-me">
          <a className="btn btn-primary bg-blue-600 text-white">Contact Me</a>
        </RouterLink>
      </div>
    </div>
  );
};

export default Navbar;
