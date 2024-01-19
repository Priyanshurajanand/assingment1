import "./App.css";
import logo from "../src/assets/logo.png";

import Header from "./Components/Header";
import Box from "./Components/Box";
import Faq from "./Components/Faq";
function App() {

  return (
    <>
      <div className=" w-full h-full px-[150px]">
        <Header />

        <div className=" mt-[60px]  w-[487px] h-[30px] text-[18px] text-gray-500 font-semibold text-tracking-wider">
          <i className="fa fa-home mr-1" aria-hidden="true"></i>
          <i className="fa-solid fa-angle-right mr-1"></i>
          <span>Flashcard </span>
          <i className="fa-solid fa-angle-right mr-1"></i>
          <span>Mathematics </span>
          <i className="fa-solid fa-angle-right mr-1"></i>
          <span className="bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text font-bold">
            Relation and Function{" "}
          </span>
        </div>

        <div className="bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text text-[35px] tracking-wider font-bold my-10">
          {" "}
          Relations and Functions (Mathematics){" "}
        </div>


        <Box />
        <div className="flex justify-between mt-[100px] text-[30px]">
          <div className="flex gap-5">
            <div className="w-[75px] h-[75px]  rounded-full bg-white   shadow-[31px 31px 31px 31px rgba(8 , 56 , 153 , 0.6)] shadow-lg shadow-[#06286E]/50 pl-5 pt-6">
              <img src={logo} alt="logo" className="h-[30px] w-[40px]"></img>
            </div>
            <div className="tracking-tight leading-7">
              <div className="text-[14px] font-semibold">Published by</div>
              <div className="tracking-tighter font-semibold  text-[#06286E] ">
                <span>Hygge</span>
                <span className="">
                  <strong>X</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className=" bg-gradient-to-b from-[#06286E] to-[#164EC0] h-[45px] w-[45px] text-center text-white rounded-full ">
              <i className="fa-solid fa-plus"></i>
            </div>
            <div className="bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text font-semibold">
              Create Flashcard
            </div>
          </div>
        </div>

        <Faq />
      </div>
      
    </>
  );
}

export default App;
