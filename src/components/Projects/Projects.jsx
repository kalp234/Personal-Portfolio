import React from "react";
import Healthcare from "../../assets/Healthcare.png";
import Youtubeclone from "../../assets/Youtube-clone.png";
import Ecommerce from "../../assets/Ecommerce.png";
import GYM from "../../assets/GYM.png";
import Facebook from "../../assets/Facebook.png";

const Projects = () => {
  return (
    <div name="Projects" className="bg-gray-800 pt-16">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white relative">
        <div>
          <p className="text-4xl font-bold p-2 border-b-4 border-gray-500 inline">
            Projects
          </p>
          <p className="py-6 text-gray-300">
            Check some of my work right here ,{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 w-full sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0  text-black dark:text-black dark:bg-white">
          <div className="card w-full bg-base-100 shadow-xl dark:text-black dark:bg-white">
            <figure>
              <img className="h-40 md:h-52 lg:h-full" src={Healthcare} />
            </figure>
            <div className="card-body -mt-5">
              <h2 className="card-title text-2xl font-bold">Healthcare</h2>
              <p>
                Explore our Healthcare landing page, meticulously crafted with
                HTML and CSS for flawless performance on laptops, tablets, and
                mobiles.
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://kalp234.github.io/TWSIP-1/"
                  className="badge badge-outline w-20 transition duration-400 hover:bg-blue-600 hover:text-white p-4 font-semibold"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/kalp234/TWSIP-1"
                  className="badge badge-outline w-20 transition duration-400  hover:bg-blue-600 hover:text-white p-4 font-semibold"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl dark:text-black dark:bg-white">
            <figure>
              <img className="h-40 md:h-52 lg:h-full" src={GYM} />
            </figure>
            <div className="card-body -mt-5">
              <h2 className="card-title text-2xl font-bold">
                The Fit Club GYM
              </h2>
              <p>
                Discover my dynamic gym website, built with HTML, CSS,
                JavaScript, and React.
                <span className="hidden lg:flex">
                  Fully responsive and feature-rich, designed to provide an
                  exceptional user experience for fitness enthusiasts.
                </span>
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://kalp234.github.io/TWSIP-1/"
                  className="badge badge-outline w-20 transition duration-400  hover:bg-blue-600 hover:text-white p-4 font-semibold"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/kalp234/TWSIP-1"
                  className="badge badge-outline w-20 transition duration-400  hover:bg-blue-600 hover:text-white p-4 font-semibold"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-xl dark:text-black dark:bg-white">
            <figure>
              <img className="h-40 md:h-52 lg:h-full" src={Ecommerce} />
            </figure>
            <div className="card-body -mt-5">
              <h2 className="card-title text-2xl font-bold">Ecommerce Site</h2>
              <p>
                Experience my top-notch Ecommerce website crafted with HTML,
                CSS, and JavaScript.{" "}
                <span className="hidden lg:flex">
                  Fully functional, responsive, and meticulously designed to
                  elevate your online business.
                </span>
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://ecommerce-site-three-mauve.vercel.app/"
                  className="badge badge-outline w-20 transition duration-400   hover:bg-blue-600 hover:text-white p-4 font-semibold"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/kalp234/Ecommerce-Site"
                  className="badge badge-outline transition duration-400 w-20 hover:bg-blue-600 hover:text-white p-4 font-semibold"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl dark:text-black dark:bg-white">
            <figure>
              <img className="h-40 md:h-52 lg:h-full" src={Youtubeclone} />
            </figure>
            <div className="card-body -mt-5">
              <h2 className="card-title text-2xl font-bold">Youtube-Clone</h2>
              <p>
                A replica of layout of YouTube's home page.{" "}
                <span className="hidden lg:flex">
                  The design includes a responsive navigation bar, a dynamic
                  video grid displaying thumbnails and titles, and a sidebar
                  with various categories and recommended channels.
                </span>
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://kalp234.github.io/TWSIP-1/"
                  className="badge badge-outline w-20 transition duration-400  hover:bg-blue-600 hover:text-white p-4 font-semibold"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/kalp234/Youtube-clone"
                  className="badge badge-outline transition duration-400 w-20 hover:bg-blue-600 hover:text-white p-4 font-semibold"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl dark:text-black dark:bg-white">
            <figure>
              <img className="h-40 md:h-52 lg:h-full" src={Facebook} />
            </figure>
            <div className="card-body -mt-5">
              <h2 className="card-title text-2xl font-bold">
                Facebook-LoginPage
              </h2>
              <p>
                This project is a simple clone of the Facebook login page
                created with HTML and CSS.
                <span className="hidden lg:flex">
                  {" "}
                  It features the familiar layout with input fields for
                  email/phone and password, a 'Log In' button, and links for
                  password recovery and account creation.
                </span>
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://kalp234.github.io/TWSIP-1/"
                  className="badge badge-outline transition duration-400 w-20 hover:bg-blue-600 hover:text-white p-4 font-semibold"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/kalp234/TWSIP-1"
                  className="badge badge-outline transition duration-400 w-20 hover:bg-blue-600 hover:text-white p-4 font-semibold"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
