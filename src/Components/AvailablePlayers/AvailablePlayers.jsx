import React from "react";

import Card from "../UI/Card/Card";

const AvailablePlayers = ({ players }) => {
  // console.log(players);
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player) => {
          // console.log(player, "player");
          return (
            <Card player={player}></Card>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
