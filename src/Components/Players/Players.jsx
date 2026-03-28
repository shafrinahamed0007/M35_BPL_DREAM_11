import React, { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayer from "../SelectPlayer/SelectedPlayer";

const Players = ({ playersPromise, setCoin, coin }) => {
  //   console.log(playersPromise);
  const players = use(playersPromise);
  // console.log(players);
  const [selectButton, setSelectButton] = useState("available");
  const [selectedPlayers, setSelecetdPlayers] = useState([]);

  // console.log(selectButton, "selectedButton");
  return (
    <div className="mt-[88px] container mx-auto my-[60px] w-11/12">
      <div className="flex justify-between gap-4 items-center mb-5">
        {selectButton === "available" ? (
          <h2 className="font-bold text-3xl">AVailable Players</h2>
        ) : (
          <h2 className="font-bold text-3xl">Selected Players ({selectedPlayers.length}/{players.length})</h2>
        )}
        <div>
          <button
            onClick={() => setSelectButton("available")}
            className={`btn ${selectButton === "available" ? "bg-[#E7FE29]" : "btn-neutral"} rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectButton("selected")}
            className={`btn ${selectButton === "selected" ? "bg-[#E7FE29]" : "btn-neutral"} rounded-l-none rounded-r-xl`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      {selectButton === "available" ? (
        <AvailablePlayers
          players={players}
          setCoin={setCoin}
          coin={coin}
          setSelecetdPlayers={setSelecetdPlayers}
          selectedPlayers={selectedPlayers}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayer selectedPlayers={selectedPlayers} setSelecetdPlayers={setSelecetdPlayers} coin = {coin} setCoin={setCoin}></SelectedPlayer>
      )}
    </div>
  );
};

export default Players;
