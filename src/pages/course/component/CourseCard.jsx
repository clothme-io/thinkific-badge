import React from "react";

export const CourseCard = () => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-4">
          <div className="text-gray-900 font-bold text-xl mb-2">
            Can coffee make you a better developer?
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque.
          </p>
        </div>
      </div>
    </div>
  );
};
