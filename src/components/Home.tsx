import React from "react";
import Tasks from "./Tasks";
import Timer from "./Timer";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-row">
      <div className="flex min-h-full  w-2/3 justify-center items-center flex-col">
        <Timer />
        {/* <Register /> */}
        {/* <Login /> */}
      </div>
      <div className="min-h-full w-1/3 bg-blue-500">
        <p className="text-white font-medium tracking-wide font-trocchi text-4xl flex justify-center m-10">
          Tasks
        </p>
        <Tasks />

        <div className="relative flex justify-center">
          <div className="fixed bottom-0 flex my-5 border-b-2 py-1 border-blue-600">
            <Link
              className="flex outline-none tracking-wide text-blue-300 hover:text-blue-100 px-2 font-semibold"
              to="/login"
            >
              login{" "}
            </Link>
            <p className="flex font-bold text-gray-100 font-trocchi text-xl">
              {" "}
              /{" "}
            </p>
            <Link
              className="flex outline-none tracking-wide text-blue-300 hover:text-blue-100 px-2 font-semibold"
              to="/register"
            >
              register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
