import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Info from "./modals/Info";
import Statistics from "./modals/Statistics";

const App = () => {
  const [infoModal, setInfoModal] = useState<boolean>(false);
  const [statisticsModal, setStatisticsModal] = useState<boolean>(false);

  return (
    <div
      id="app"
      className="flex flex-col justify-start items-center w-screen h-screen bg-gray-900 text-white"
    >
      <Header
        setInfoModal={setInfoModal}
        setStatisticsModal={setStatisticsModal}
      />

      <GameBoard />

      {/* <KeyBoard /> */}

      {infoModal && (
        <div className="w-full h-full absolute left-0 top-0">
          <Info setInfoModal={setInfoModal} />
        </div>
      )}
      {statisticsModal && (
        <div className="w-full h-full absolute left-0 top-0">
          <Statistics setStatisticsModal={setStatisticsModal} />
        </div>
      )}
    </div>
  );
};

export default App;
