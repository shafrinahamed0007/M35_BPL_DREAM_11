import React, { use } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";

const Players = ({ playersPromise }) => {
  //   console.log(playersPromise);
  const players = use(playersPromise);
  console.log(players);
  return (
    <div className="mt-[88px] container mx-auto">
      <h2>Total Players: {players.length}</h2>
      <AvailablePlayers players={players}></AvailablePlayers>
    </div>
  );
};

export default Players;
