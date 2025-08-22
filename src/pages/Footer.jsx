import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBriefcase,
} from "@tabler/icons-react";
import React from "react";
import { FooterDetails } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full text-white bg-zinc-800 py-20">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 gap-10 lg:grid-cols-5 px-6">
        {/* column-1  */}
        <div className="flex flex-col text-xs">
          <div className="flex items-center gap-2 text-2xl md:text-3xl mb-6">
            <IconBriefcase size={30} /> Jobpilot
          </div>
          <li className="list-none mb-2">
            <span className="text-neutral-400">Call now:</span> (319)555-0115
          </li>
          <p className="text-neutral-400">
            6391 Elgin St. celina, Delaware 10299, New York, United States of
            America
          </p>
        </div>
        {/* column-2  */}
        {FooterDetails.map((details) => {
          return (
            <div
              key={details.id}
              className="flex flex-col gap-2 xl:gap-4 text-sm lg:pl-14"
            >
              <h1 className="text-xl">{details.title}</h1>
              {details.li.map((links, index) => (
                <li key={index} className="list-none">
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-orange transition duration-300"
                  >
                    {links}
                  </a>
                </li>
              ))}
            </div>
          );
        })}
      </div>
      <div className="w-full max-w-7xl mx-auto h-px flex flex-col lg:flex-row items-center justify-between bg-neutral-100/10 mt-18 text-neutral-400">
        <div className="pt-3 lg:pt-10 pl-6">
          &copy; 2025 Jobpilot &#183; Job Portal. All rights Reserved
        </div>
        <div className="flex items-center gap-4 h-max lg:pt-10 pr-6">
          {[
            <IconBrandFacebook />,
            <IconBrandYoutube />,
            <IconBrandInstagram />,
            <IconBrandTwitter />,
          ].map((sociallinks, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-orange transition duration-300"
            >
              {sociallinks}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
