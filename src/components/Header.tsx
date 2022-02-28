import React from "react";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { ChartBarIcon } from "@heroicons/react/solid";
import { HeaderProps } from "../types";

const Header = ({ setInfoModal, setStatisticsModal }: HeaderProps) => {
  return (
    <div
      id="header"
      className="w-full max-w-2xl px-2 flex flex-row justify-between items-center bg-transparent"
    >
      <div
        id="info"
        className="p-2 rounded-full bg-transparent hover:bg-gray-500 hover:cursor-pointer focus:outline-none focus:border-sm"
        onClick={() => setInfoModal(true)}
      >
        <InformationCircleIcon className="h-4 w-4 text-white" />
      </div>
      <h1 id="title" className="text-4xl font-bold my-10 font-serif">
        Wördl
      </h1>
      <div
        id="statistics"
        className="p-2 rounded-full bg-transparent hover:bg-gray-500 hover:cursor-pointer focus:outline-none focus:border-sm"
        onClick={() => setStatisticsModal(true)}
      >
        <ChartBarIcon className="h-4 w-4 text-white" />
      </div>
    </div>
  );
};

export default Header;
