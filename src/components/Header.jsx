import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Header = () => {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto my-4 flex justify-between items-center">
        <div className="text-3xl text-blue-900 font-bold"><a href="/">Utkarsh Nawalgaria</a></div>
        <div className="navbar flex items-center gap-3">
          <ul id="nav-links" className="flex justify-between gap-8 text-l">
            <li>
              <a href="/#about">About Me</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/#contact">Contact Me</a>
            </li>
          </ul>
          <ul id="social-links" className="flex gap-1 text-xl">
            <li>
              <a href="https://github.com/UtkarshNawalgaria" target="_blank">
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/utkarsh-nawalgaria/" target="_blank">
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
