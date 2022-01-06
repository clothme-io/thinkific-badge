import React from "react";

export const DashboardRow = (props) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-4">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {props.title}
          </div>
          <p className="text-gray-700 text-base">{props.content}</p>
        </div>
      </div>
    </div>
  );
};
