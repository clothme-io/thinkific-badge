import React from "react";

export const CourseCard = (props) => {
  return (
    // <div className="max-w-sm w-full lg:max-w-full lg:flex mb-4 text-textSecondaryColor bg-red-600">
    //   <div
    //     className="border-r border-b border-l border-gray-400 lg:border-l lg:border-t
    //   lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded p-1 flex flex-col
    //   justify-between leading-normal"
    //   >
    //     <div className="flex">
    //       <div className="mr-4">
    //         <img
    //           src={props.image}
    //           height={100}
    //           width={100}
    //           alt="course image"
    //         />
    //       </div>
    //       <div className="font-semibold text-xl mb-2 ml-6">
    //         <h4>{props.name}</h4>

    //         <p className="text-base">{props.description}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="border border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal w-full">
        <div className="flex mb-4">
          <div className="text-gray-900 font-bold text-xl mb-2">Can coffee</div>
          <div>
            <h4>{props.name}</h4>
            <p className="text-gray-700 text-base">This {props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
