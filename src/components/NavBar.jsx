import React from "react";
const navImage = "/Images/robot.gif";

function Nav() {
  return (
    <div className="  p-1 xl: xl:p-2">
      <div className="bg-white flex flex-row justify-between items-center p-2 m-2 rounded-xl md:bg-white-500 md:p-5 md:m-3 xl:shadow-xl xl:flex xl:flex-row xl:justify-between xl:items-center xl:p-4 xl:m-2 xl:rounded-xl">
        <h1 className="text-2xl  md:text-4xl xl:text-2xl"> AII🤖</h1>
        <img
          src={navImage}
          alt=""
          className=" w-10 h-10 rounded-full md:w-16 md:h-16 xl:w-10 xl:h-10 xl:rounded-full"
        />
      </div>
    </div>
  );
}

export default Nav;
