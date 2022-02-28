import React from "react";

export type HeaderProps = {
  setInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
  setStatisticsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type InfoProps = {
  setInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type StatisticsProps = {
  setStatisticsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TileProps = {
  letter: string;
  evaluation: number;
};

export type GameRowProps = {
  row: number;
};

export type GameCellProps = {
  row: number;
  evaluation: number;
};
