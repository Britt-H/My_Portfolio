import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function About_Me() {
  return (
    <section id="about" className="bg-gray-800">
      <div className="container px-5 py-10 mb-10 mx-auto text-center">
        <ChipIcon className="w-10 inline-block mb-4 text-white" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          About Me
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">
          Welcome! I'm a Full Stack Developer with an insatiable passion for
          learning and creating. My journey in the world of programming began
          with an engineering immersion program at Thinkful in February, where I
          delved into the fascinating realms of web development.
          <br />
          <br />
          Driven by the thrill of transforming ideas into reality, I constantly
          seek to expand my knowledge and hone my skills to craft seamless
          digital solutions. My experience as a Full Stack Developer allows me
          to work with both front-end and back-end technologies, enabling me to
          bring dynamic and innovative projects to life.
          <br />
          <br />
          When I'm not immersed in lines of code, you can find me exploring new
          technologies, participating in hackathons, and collaborating with
          like-minded individuals to push the boundaries of what's possible in
          the digital landscape.
          <br />
          <br />
          I believe that technology has the power to reshape the world, and I'm
          determined to make my mark in this ever-evolving field. Join me on
          this exciting journey as I continue to grow, learn, and create in the
          world of Full Stack Development. Let's build something extraordinary
          together!
        </p>
      </div>
    </section>
  );
}