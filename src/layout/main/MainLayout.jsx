import React from "react";
import { Sidebar } from "./SideBar";

export const MainLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-row w-screen h-screen">
        <div className="flex bg-darkbluelight">
          <Sidebar />
        </div>
        <div className="pt-6 px-12 w-full">
          <main className="flex flex-grow w-full">{children}</main>
        </div>
      </div>
    </>
  );
};
