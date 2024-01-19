import React, { useState } from "react";

const Box = () => {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  };
  return (
    <>
      <div className="flex justify-center text-gray-500 gap-[50px] text-[25px]">
        <div className="bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text px-3 border-b-2 border-[#06286E] font-bold">
          Study
        </div>
        <div>Quiz</div>
        <div>Test</div>
        <div>Game</div>
        <div>Others</div>
      </div>
      <div>
        <div className={`flex justify-center mt-10 `}>
          <div
            className={`w-[680px] h-[400px] flex flex-col justify-start gap-[100px] text-[25px] cursor-pointer text-white text-center rounded-[50px] rotating-box   ${
              isFlipped ? "rotated" : ""
            } `}
            style={{
              background: isFlipped
                ? "linear-gradient(222.94deg, #051A91 -4.31%, #061C93 14.41%, #2284F1 81.88%, #1F80EB 103.81%)"
                : "linear-gradient(222.94deg, #071844 -4.31%, #071844 -0.03%, #2D87B6 84.9%, #2D87B6 103.81%)",
            }}
            onClick={handleClick}
          >
            <div
              className={`flex justify-between rotating-box  ${
                isFlipped ? "rotated" : ""
              }`}
            >
              <i className="fa-sharp fa-regular fa-lightbulb pl-10 pt-10"></i>
              <i className={`fa-solid fa-volume-high pr-10 pt-10 `}></i>
            </div>
            <div
              className={`text-center text-[40px] rotating-box ${
                isFlipped ? "rotated" : ""
              }`}
            >
              {isFlipped ? "9 + 6 + 7x - 2x - 3" : "5x + 12"}
            </div>
          </div>
        </div>
        <div
          className="w-[800px] h-[50px] m-auto mt-4
     flex justify-around p-3 text-[30px] font-bold"
        >
          <div className="">
            <i className="fa-solid fa-rotate-right text-[#06286E] "></i>
          </div>
          <div>
            <i className="fa-solid fa-angle-left mx-5  w-[60px] h-[60px] text-center text-white p-3 bg-gradient-to-b from-[#06286E] to-[#164EC0] rounded-full"></i>
            01/10
            <i className="fa-solid fa-angle-right mx-5  w-[60px] h-[60px] text-center text-white p-3 bg-gradient-to-b from-[#06286E] to-[#164EC0] rounded-full "></i>
          </div>
          <div>
            <i className="fa-solid fa-expand"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;
