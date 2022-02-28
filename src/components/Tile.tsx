import React from "react";
import { TileProps } from "../types";

const Tile = ({ letter, evaluation }: TileProps) => {
  const evaluatedBGColor = () => {
    switch (evaluation) {
      case 0:
        return "bg-gray-700";
      case 1:
        return "bg-yellow-600";
      case 2:
        return "bg-green-600";
      default:
        return "bg-transparent";
    }
  };

  return (
    <div
      className={`h-8 w-8 border-2 border-gray-700 flex flex-row justify-center items-center ${evaluatedBGColor()}`}
    >
      <p className="font-bold text-2xl">{letter}</p>
    </div>
  );
};

export default Tile;
