import React from "react";
import profilepic from '../../assets/profilepic.jpg'


const Hero = () => {
  return (
    <div name="About" className="hero min-h-screen bg-gradient-to-b from-black to-gray-800 pt-16 lg:pt-0">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={profilepic} className=" max-w-72 rounded-3xl shadow-2xl" />
        <div>
          <h1 className="text-4xl md:text-5xl font-bold  text-white ">Hi, I am </h1>
          <h1 className="text-4xl md:text-5xl font-bold  text-white pb-4 ">Kalp Shah..</h1>
          <h2 className="text-4xl font-bold  text-white">
            I'm a {" "}
            <span className="text-purple-500">Frontend React Developer!</span>
          </h2>
          <p className="py-6 max-w-2xl text-gray-400">
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>
          <a href="resume.pdf" download="Resume">
  <button className="btn btn-primary bg-blue-600  text-white w-fit px-6 py-3 my-2">
            Resume
          </button>
</a>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
