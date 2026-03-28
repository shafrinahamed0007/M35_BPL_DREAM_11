import React from "react";

import Card from "../UI/Card/Card";

const AvailablePlayers = ({ players, setCoin, coin, selectedPlayers, setSelecetdPlayers }) => {
  // console.log(players);
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player) => {
          // console.log(player, "player");
          return (
            <Card key={player.playerId} player={player} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelecetdPlayers={setSelecetdPlayers}></Card>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
