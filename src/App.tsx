import React from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  // const [running, setRunning] = React.useState<boolean>(false);

  return (
    <div className="min-h-screen  flex flex-row ">
      <div className="flex min-h-full  w-2/3 justify-center items-center flex-col">
        <div className="m-10">
          <p className="text-2xl font-trocchi text-pink-400 ">
            You can chill out now!
          </p>
        </div>

        {/* <p className="text-white text-9xl font-bold font-roboto">24:48</p> */}
        <Timer />
      </div>
      <div className="min-h-full w-1/3 bg-blue-500 flex-col">
        <div className="flex justify-center m-7">
          <p className="text-white font-medium tracking-wide font-trocchi text-3xl">
            Tasks
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
