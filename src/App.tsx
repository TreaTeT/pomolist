import React from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Timer from "./components/Timer";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="min-h-screen flex flex-row">
      {/* <div className="flex min-h-full  w-2/3 justify-center items-center flex-col">
        <Timer /> */}
      <Register />
      {/* <Login /> */}
      {/* </div>
      <div className="min-h-full w-1/3 bg-blue-500">
        <p className="text-white font-medium tracking-wide font-trocchi text-4xl flex justify-center m-10">
          Tasks
        </p>
        <Tasks />
      </div> */}
    </div>
  );
}

export default App;
