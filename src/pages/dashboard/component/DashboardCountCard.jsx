import React from "react";

export const DashboardCountCard = (props) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded p-4 flex flex-col justify-between leading-normal">
        <div className="flex mb-4">
          <div className="flex flex-grow text-gray-900 font-bold text-xl mb-2">
            {props.title}
          </div>
          <p className="flex flex-1 text-gray-700 text-base">{props.content}</p>
        </div>
      </div>
    </div>
  );
};
