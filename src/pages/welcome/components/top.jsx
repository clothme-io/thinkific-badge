import React from "react";
import { Link } from "react-router-dom";
import { PagesRoutes } from "../../../route/RouteOptions";
import Welcome_one from "../../../common/image/thinkific_welcome_1.jfif";
import Welcome_two from "../../../common/image/thinkific_welcome_2.jfif";
import Welcome_three from "../../../common/image/thinkific_welcome_3.jfif";

export const Top = (props) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400"></div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-textSecondaryColor sm:text-4xl sm:leading-none">
              Help your students
              <br className="hidden md:block" />
              to tell others{" "}
              <span className="inline-block text-deep-purple-accent-400 pt-2">
                about your course
              </span>
            </h2>
            <p className="text-base text-textSecondaryColor md:text-lg">
              With <strong>Dinnt</strong> your students can add your
              certificates <br /> on their LinkedIn profile.
              <br className="hidden md:block" />
              Showing the world how much they appreciate your course <br />
              And helping you spread the word to others.
            </p>
          </div>
          <div>
            <Link
              to={PagesRoutes.courses}
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-textSecondaryColor hover:bg-darkbluelight focus:shadow-outline focus:outline-none"
            >
              Go to courses
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={Welcome_one}
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src={Welcome_two}
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={Welcome_three}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
