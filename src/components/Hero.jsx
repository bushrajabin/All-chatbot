import React from "react";
const robotAi= '/Images/video.gif'

function Hero() {
  return (
    <div className="xl:p-2 ">
      <div className="xl:bg-white xl:rounded-xl">
        <img src={robotAi} alt="" className="xl:m-10  xl:bg-red-800 xl:flex xl:flex-row xl:items-center" />
      </div>
      <div></div>
    </div>
  );
}

export default Hero;
