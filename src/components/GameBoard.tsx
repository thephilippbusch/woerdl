import React, { useEffect, useState } from "react";
import { GameCellProps, GameRowProps } from "../types";
import Tile from "./Tile";

const SAMPLE_WORD = "JACKE";

const GameCell = ({ row, evaluation }: GameCellProps) => {
  const [letter, setLetter] = useState<string>("");

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
      className={`h-12 w-12 border-2 border-gray-700 flex flex-row justify-center items-center ${evaluatedBGColor()}`}
    >
      <p className="font-bold text-3xl">{letter}</p>
    </div>
  );
};

const GameRow = ({ row }: GameRowProps) => {
  return (
    <div className="flex flex-row justify-center items-center space-x-1">
      {[0, 1, 2, 3, 4].map((key: number) => (
        <GameCell key={key} row={row} evaluation={-1} />
      ))}
    </div>
  );
};

const GameBoard = () => {
  return (
    <div className="w-full flex flex-col justify-center px-2 space-y-1">
      {[1, 2, 3, 4, 5, 6].map((row: number, idx: number) => (
        <GameRow key={idx} row={row} />
      ))}
    </div>
  );
};

export default GameBoard;
