import React from "react";
import { XIcon } from "@heroicons/react/outline";
import { InfoProps, TileProps } from "../types";
import Tile from "../components/Tile";

const exampleFirst: TileProps[] = [
  { letter: "j", evaluation: -1 },
  { letter: "a", evaluation: -1 },
  { letter: "c", evaluation: 2 },
  { letter: "k", evaluation: -1 },
  { letter: "e", evaluation: -1 },
];

const exampleSecond: TileProps[] = [
  { letter: "s", evaluation: -1 },
  { letter: "p", evaluation: -1 },
  { letter: "i", evaluation: -1 },
  { letter: "e", evaluation: 1 },
  { letter: "l", evaluation: -1 },
];

const exampleThird: TileProps[] = [
  { letter: "a", evaluation: -1 },
  { letter: "b", evaluation: 0 },
  { letter: "e", evaluation: -1 },
  { letter: "n", evaluation: -1 },
  { letter: "d", evaluation: -1 },
];

const Info = ({ setInfoModal }: InfoProps) => {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center bg-black bg-opacity-50 transition-opacity">
      <div className="w-full mx-2 max-w-2xl p-4 bg-gray-900 flex flex-col justify-start items-center">
        <div
          id="info-header"
          className="w-full mb-4 flex flex-row justify-between items-center bg-transparent"
        >
          <div />
          <h1 id="info-title" className="text-lg font-bold">
            SO WIRD GESPIELT
          </h1>
          <div
            id="info-close"
            className="p-2 rounded-full bg-transparent hover:bg-gray-500 hover:cursor-pointer focus:outline-none focus:border-sm"
            onClick={() => setInfoModal(false)}
          >
            <XIcon className="h-4 w-4 text-white" />
          </div>
        </div>

        <div id="info-content" className="space-y-2 w-full">
          <div className="flex flex-row">
            Errate das <p className="font-bold mx-1 font-serif">WÖRDL</p> in
            sechs Versuchen.
          </div>
          <div>
            Jeder Versuch muss ein gültiges Wort mit fünf Buchstaben sein.
            Drücke den "Enter"-Button um den Versuch einzureichen.
          </div>
          <div>
            Nach jedem Versuch wird sich die Farbe der einzelnen Felder
            verändern um zu zeigen, wie nah der Versuch am zu findenden Wort
            war.
          </div>

          <div id="border" className="border-t border-gray-700" />

          <div id="info-examples">
            <p className="font-bold">Beispiele:</p>
            <div className="flex flex-row justify-start items-center space-x-1 my-2">
              {exampleFirst.map((tile: TileProps, idx: number) => (
                <Tile
                  key={idx}
                  letter={tile.letter.toUpperCase()}
                  evaluation={tile.evaluation}
                />
              ))}
            </div>
            <p>
              Der Buchstabe <strong>C</strong> ist im Wort enthalten und an der
              richtigen Stelle.
            </p>

            <div className="flex flex-row justify-start items-center space-x-1 my-2">
              {exampleSecond.map((tile: TileProps, idx: number) => (
                <Tile
                  key={idx}
                  letter={tile.letter.toUpperCase()}
                  evaluation={tile.evaluation}
                />
              ))}
            </div>
            <p>
              Der Buchstabe <strong>E</strong> ist im Wort enthalten aber an der
              falschen Stelle.
            </p>

            <div className="flex flex-row justify-start items-center space-x-1 my-2">
              {exampleThird.map((tile: TileProps, idx: number) => (
                <Tile
                  key={idx}
                  letter={tile.letter.toUpperCase()}
                  evaluation={tile.evaluation}
                />
              ))}
            </div>
            <p>
              Der Buchstabe <strong>B</strong> ist nicht im Wort enthalten.
            </p>
          </div>

          <div id="border" className="border-t border-gray-700" />

          <p className="font-bold">Jeden Tag gibt es ein neues Wördl!</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
