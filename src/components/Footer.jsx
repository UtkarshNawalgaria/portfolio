import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="py-10 text-center">
      <p>Designed & Built by Utkarsh Nawalgaria</p>
      <div className="my-3">
        <ul id="social-links" className="flex gap-1 text-xl justify-center">
          <li>
            <a href="https://github.com/UtkarshNawalgaria" target="_blank">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/utkarsh-nawalgaria/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
