import React, { useState, useEffect } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { NavLink as RouterLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTarget, setScrollTarget] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { id: 1, link: "About" },
    { id: 2, link: "Skills" },
    { id: 3, link: "Projects" },
    { id: 4, link: "Education" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLinkClick = (target) => {
    if (location.pathname !== "/") {
      setScrollTarget(target);
      navigate("/");
    } else {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
      });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (location.pathname === "/" && scrollTarget) {
      scroller.scrollTo(scrollTarget, {
        smooth: true,
        duration: 500,
      });
      setScrollTarget(null);
    }
  }, [location, scrollTarget]);

  return (
    <div className="navbar bg-gradient-to-b from-black to-gray-900 z-10 scroll-smooth fixed w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
            onClick={toggleDropdown}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          {isOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-b from-black to-gray-800 text-white rounded-box w-52">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="hover:text-purple-400 p-2 md:p-2 cursor-pointer font-medium hover:scale-100 duration-200"
                  onClick={() => handleLinkClick(link)}
                >
                  {link}
                </li>
              ))}
            </ul>
          )}
        </div>
        <a className="btn btn-ghost text-xl text-white " onClick={() => handleLinkClick("About")}>
  <span className="text-white font-bold text-2xl hover:text-purple-400">
    &lt;Kalp Shah /&gt;
  </span>
</a>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="hover:text-purple-400 px-5 cursor-pointer font-medium hover:scale-105 duration-200"
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end md:px-2">
        <RouterLink to="/contact-me">
          <a className="btn btn-primary bg-blue-600 text-white">Contact Me</a>
        </RouterLink>
      </div>
    </div>
  );
};

export default Navbar;
