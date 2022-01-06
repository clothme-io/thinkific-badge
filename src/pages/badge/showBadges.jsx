import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import yup from "yup";
import { PagesRoutes } from "../../route/RouteOptions";
import { BadgeCard } from "./component/BadgeCard";

export const ShowBadges = () => {
  return (
    <div className="w-full pt-6">
      <div className="flex justify-start items-start w-full">
        <div className="flex flex-1">
          <h2 className="pt-8 pb-12 text-3xl">All Badges</h2>
        </div>
        <div className="flex flex-1 pl-32">
          <Link to={PagesRoutes.createBadge}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add New Badge
            </button>
          </Link>
        </div>
      </div>
      <div className="w-1/2">
        <BadgeCard />
      </div>
    </div>
  );
};
