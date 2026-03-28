import React from "react";
import { MdDelete } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const SelectedPlayer = ({ selectedPlayers, setSelecetdPlayers, coin, setCoin }) => {
  // console.log(selectedPlayers);
  const handleDeleteSelectedPlayer = (player) => {
    // console.log(player);
    const filterdPlayers = selectedPlayers.filter(
      (selectedplayer) => selectedplayer.playerId != player.playerId,
    );
    setSelecetdPlayers(filterdPlayers);
    setCoin(coin + player.price)
  };
  return (
    <div>
      {selectedPlayers.map((player) => {
        return (
          <div
            key={player.playerId}
            className="flex items-center my-6 justify-between p-10 rounded-2xl border"
          >
            <div className="flex item-center gap-6">
              <img
                className="h-[75px] w-auto rounded-md"
                src={player.playerImage}
                alt={player.playerName}
              />
              <div>
                <h2 className="flex items-center gap-2 font-semibold   text-xl">
                  <FaRegUser /> {player.playerName}
                </h2>
                <p>{player.playerType}</p>
              </div>
            </div>
            <button
              className="btn  text-red-500"
              onClick={() => handleDeleteSelectedPlayer(player)}
            >
              <MdDelete />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedPlayer;
