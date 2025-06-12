import React from "react";
import Healthcare from "../../assets/Healthcare.png";
import Youtubeclone from "../../assets/Youtube-clone.png";
import Ecommerce from "../../assets/Ecommerce.png";
import GYM from "../../assets/GYM.png";
import KalpInvestment from "../../assets/kalpinvestment.png";
import Facebook from "../../assets/Facebook.png";
import News from "../../assets/News-Buzz.png"

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
              <p className="text-black dark:text-black text-left">
                Explore our Healthcare landing page, meticulously crafted with
                HTML and CSS for flawless performance on laptops, tablets, and
                mobiles.
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://health-care-ten-rho.vercel.app/"
                  className="badge badge-outline w-20 transition duration-400 hover:bg-blue-600 hover:text-white p-4 font-semibold"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/kalp234/HealthCare"
                  className="badge badge-outline w-20 transition duration-400  hover:bg-blue-600 hover:text-white p-4 font-semibold"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl dark:text-black dark:bg-white">
            <figure>
              <img className="h-40 md:h-52 lg:h-full" src={KalpInvestment} />
            </figure>
            <div className="card-body -mt-5">
              <h2 className="card-title text-2xl font-bold">Kalp Investment</h2>
              <p className="text-black dark:text-black text-left">
  Explore our Kalp Investment website, carefully crafted for my family business using React and modern web technologies, featuring LIC plans, a premium estimator, and mutual fund portfolios.{" "}

</p>

              <div className="card-actions justify-end">
                <a
                  href="https://kalp-investment.vercel.app/"
                  className="badge badge-outline w-20 transition duration-400 hover:bg-blue-600 hover:text-white p-4 font-semibold"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/kalp234/Kalp-Investment"
                  className="badge badge-outline w-20 transition duration-400  hover:bg-blue-600 hover:text-white p-4 font-semibold"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* <div className="card w-full bg-base-100 shadow-xl dark:text-black dark:bg-white">
            <figure>
              <img className="h-40 md:h-52 lg:h-full" src={GYM} />
            </figure>
            <div className="card-body -mt-5">
              <h2 className="card-title text-2xl font-bold">
                The Fit Club GYM
              </h2>
              <p className="text-black dark:text-black text-left">
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
          </div> */}

          <div className="card w-full bg-base-100 shadow-xl dark:text-black dark:bg-white">
            <figure>
              <img className="h-40 md:h-52 lg:h-full" src={Ecommerce} />
            </figure>
            <div className="card-body -mt-5">
              <h2 className="card-title text-2xl font-bold">Ecommerce Site</h2>
              <p className="text-black dark:text-black text-left">
  Experience my premium Cara e-commerce website crafted with React, Node.js, and MongoDB.{" "}
  <span className="hidden lg:flex">
    Fully functional, responsive, and meticulously designed to deliver a seamless online shopping experience.
  </span>
</p>
              <div className="card-actions justify-end">
                <a
                  href="https://cara-project-nine.vercel.app/"
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
              <img className="h-40 md:h-52 lg:h-full" src={News} />
            </figure>
            <div className="card-body -mt-5">
              <h2 className="card-title text-2xl font-bold">News-Buzz</h2>
              <p className="text-black dark:text-black text-left">
              Stay informed with our cutting-edge news app, delivering real-time updates on the top 10 headlines worldwide, powered by React and seamless API integration.{" "}
                
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://news-buzz-five.vercel.app/"
                  className="badge badge-outline w-20 transition duration-400   hover:bg-blue-600 hover:text-white p-4 font-semibold"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/kalp234/News-Buzz"
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
              <p className="text-black dark:text-black text-left">
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
              <img className="h-40 md:h-52 lg:h-56" src={Facebook} />
            </figure>
            <div className="card-body -mt-5">
              <h2 className="card-title text-2xl font-bold">
                Facebook-LoginPage
              </h2>
              <p className="text-black dark:text-black text-left">
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
