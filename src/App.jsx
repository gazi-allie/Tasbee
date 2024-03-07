import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);

  function decrese() {
    setCount(count - 1);

  }

  function increase() {
    setCount(count + 1);

  }
  function resett() {
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#7eb9f13a] "> GAZI UL ISLAM</div>
      <div className=" text-[#7ebaf1] font-medium  text-2xl">INCREMENT & DECREMENT</div>
      <div className="flex flex-row bg-white  gap-12 py-3 rounded-md justify-center text-[25px]  ">
        <button onClick={decrese} className=" font-sans font-medium border-r-2 text-center w-20  border-[#bfbfbf]
  text-5xl "> - </button>
        <div className="  text-pink-500 text-center text-5xl "  >
          {count}
        </div>
        <div>
          <button onClick={increase} className=" font-sans font-medium border-l-2 text-center w-20  border-[#bfbfbf]
  text-5xl ">
            +
          </button>
        </div >

      </div>
      <button onClick={resett}
        className="bg-[#58abf8] w-20 h-10  rounded-lg font-medium ">
        reset
      </button>


    </div>
  );
}

export default App;
