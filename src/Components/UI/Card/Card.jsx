import React, { useState } from "react";
import { FaUser, FaFlag } from "react-icons/fa6";
import { toast } from "react-toastify";

const Card = ({
  player,
  setCoin,
  coin,
  selectedPlayers,
  setSelecetdPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  // console.log(player.price);
  const handleChoosePlayer = () => {
    let newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(coin - player.price);
    } else {
      toast.warning("Not enough coin to puchase this player");
      return;
    }

    toast.success(`${player.playerName} is selected`);
    setIsSelected(true);
    setSelecetdPlayers([...selectedPlayers, player]);
  };
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img
          className="w-fit h-[300px]"
          src={player.playerImage}
          alt={player.playerName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser />
          {player.playerName}
        </h2>
        <div className="flex justify-between gap-2 items-center">
          <div className="flex gap-2 items-center">
            <FaFlag />
            <p>{player.playerCountry}</p>
          </div>
          <button className="btn ">{player.playerType}</button>
        </div>

        <div className="divider"></div>
        <h2 className="font-bold">Rating: {player.rating}</h2>
        <div className="flex justify-between gap-4 font-semibold">
          <p>{player.battingStyle}</p>
          <p className="text-right">{player.bowlingStyle}</p>
        </div>

        <div className="card-actions justify-between items-center">
          <p className="font-semibold">Price: ${player.price}</p>
          <button
            onClick={handleChoosePlayer}
            disabled={isSelected ? true : false}
            className="btn"
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
