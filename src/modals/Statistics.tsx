import React, { useEffect, useState } from "react";
import { StatisticsProps } from "../types";
import { ShareIcon, XIcon } from "@heroicons/react/outline";

const overview: any = [
  {
    label: "gespielt",
    value: 9,
  },
  {
    label: "Sieg %",
    value: 77,
  },
  {
    label: "Serie",
    value: 3,
  },
  {
    label: "Rekord",
    value: 3,
  },
];

const distribution: any = {
  "1": 0,
  "2": 1,
  "3": 2,
  "4": 3,
  "5": 0,
  "6": 1,
};

const Statistics = ({ setStatisticsModal }: StatisticsProps) => {
  const getWidth = (key: string) => {
    const values: number[] = Object.values(distribution);
    const max = Math.max(...values);
    const widthPercentage = (distribution[key] / max) * 100;
    return widthPercentage > 0 ? `${widthPercentage}%` : "fit-content";
  };

  let woerdlID = 0;

  const [timer, setTimer] = useState<string>("--:--:--");

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  setInterval(() => {
    var now = new Date().getTime();
    var distance = tomorrow.getTime() - now;

    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTimer(
      `${hours > 9 ? hours : `0${hours}`}:${
        minutes > 9 ? minutes : `0${minutes}`
      }:${seconds > 9 ? seconds : `0${seconds}`}`
    );

    if (distance < 0) {
      clearInterval();
      setTimer("EXPIRED");
    }
  }, 1000);

  useEffect(() => {
    return clearInterval();
  }, []);

  return (
    <div className="w-full h-full flex flex-row justify-center items-center bg-black bg-opacity-50 transition-opacity">
      <div className="w-full mx-2 max-w-2xl p-4 bg-gray-900 flex flex-col justify-start items-center">
        <div
          id="statistics-header"
          className="w-full mb-4 flex flex-row justify-between items-center bg-transparent"
        >
          <div className="h-6 w-6" />
          <h1 id="statistics-title" className="text-lg font-bold">
            STATISTIK
          </h1>
          <div
            id="statistics-close"
            className="p-2 rounded-full bg-transparent hover:bg-gray-500 hover:cursor-pointer focus:outline-none focus:border-sm"
            onClick={() => setStatisticsModal(false)}
          >
            <XIcon className="h-4 w-4 text-white" />
          </div>
        </div>

        <div id="statistics-content" className="space-y-2 w-full">
          <div
            id="statistics-overview"
            className="flex flex-row justify-center items-center space-x-2"
          >
            {overview.map((item: any, idx: number) => (
              <div
                key={idx}
                className="flex flex-col justify-center items-center"
              >
                <p className="text-2xl">{item.value}</p>
                <p className="text-xs">{item.label}</p>
              </div>
            ))}
          </div>

          <div id="border" className="border-t border-gray-700" />

          <p className="text-center">Verteilung der Versuche</p>
          <div id="statistics-distribution">
            {Object.keys(distribution).map((key: string, idx: number) => (
              <div
                key={idx}
                className="flex flex-row justify-start items-center space-x-1 py-1"
              >
                <p className="w-3">{key}</p>
                <div
                  className={`flex flex-row justify-end items-center bg-gray-700`}
                  style={{
                    width: getWidth(key),
                  }}
                >
                  <p className="mx-2">{distribution[key]}</p>
                </div>
              </div>
            ))}
          </div>

          <div id="border" className="border-t border-gray-700" />

          <div className="flex flex-row justify-around items-center">
            <div className="flex flex-col justify-center items-center w-1/2 border-r border-gray-400 py-2">
              <p className="text-xs">NÄCHSTES WÖRDL</p>
              <p id="timer" className="text-2xl">
                {timer}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <button
                className="rounded bg-green-600 py-2 px-4 flex flex-row items-center space-x-2"
                onClick={() => {
                  navigator.share({
                    title: `Wördl #${woerdlID}`,
                    text: "Wördl 254 X/6 \n\n🟨🟨⬛⬛🟨\n ⬛🟨🟨🟨⬛\n ⬛🟨🟨🟨⬛\n ⬛🟨🟨🟨⬛\n 🟩⬛🟩⬛⬛\n 🟩⬛🟩⬛🟨\n",
                  });
                }}
              >
                <ShareIcon className="h-4 w-4 mr-2" /> Teilen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
