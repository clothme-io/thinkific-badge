import React from "react";
import { useQuery } from "react-query";
import { DashboardCountCard, DashboardRow } from "./component";

export const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="flex flex-1">
        <h2 className="pt-8 pb-12 text-3xl">Dashboard</h2>
      </div>
      <div className="flex flex-wrap w-full -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <DashboardCountCard title={"yeah"} content={"Yeah"} />
        </div>
        <div className="w-full md:w-1/3 px-3">
          <DashboardCountCard title={"yeah"} content={"Yeah"} />
        </div>
        <div className="w-full md:w-1/3 px-3">
          <DashboardCountCard title={"yeah"} content={"Yeah"} />
        </div>
      </div>
      <div className="flex flex-wrap w-full -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <DashboardRow />
        </div>
      </div>
    </div>
  );
};
