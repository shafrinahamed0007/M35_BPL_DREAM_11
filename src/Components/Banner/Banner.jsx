import React from "react";
import banner from "../../assets/banner-main.png";

const Banner = () => {
  return (
    <div className="mt-6 container rounded-2xl mx-auto  hero bg-base-200 min-h-[60vh] bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%">
      <div className="hero-content text-center  ">
        <div className="">
          <img className="mx-auto" src={banner} alt="" />
          <div className="mt-6">
            <h2 className="text-white font-bold text-[40px]">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h2>
            <p className="text-white mt-2 mb-2">
              Beyond Boundaries Beyond Limits
            </p>
            <button className="btn btn-warning">Claim Free Credit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
