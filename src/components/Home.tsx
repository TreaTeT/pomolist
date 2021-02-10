import React, { createRef } from "react";
import Tasks from "./Tasks";
import Timer from "./Timer";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";

interface IUser {
  name: string;
  email: string;
  cycles: number;
  tasks: number;
}

function Home() {
  const [user, setUser] = React.useState<IUser | undefined>();
  const taskView = createRef<HTMLDivElement>();

  React.useEffect(() => {
    console.log(AuthService.getCurrentUser());
    if (AuthService.getCurrentUser()) {
      setUser(AuthService.getCurrentUser());
    } else {
      console.log("no user logged in");
    }
  }, []);

  return (
    <div className="min-h-screen flex-col overflow-y-hidden">
      <div className="flex w-full justify-center items-center flex-col min-h-screen">
        <Timer />
        <p
          onClick={() => {
            if (taskView.current) {
              taskView.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
              });
            }
          }}
          className="text-blue-600 text-3xl absolute bottom-5 cursor-pointer"
        >
          ⇣
        </p>
      </div>
      <div
        ref={taskView}
        className="w-full min-h-screen lg:w-7/12 mx-auto  mt-20"
      >
        <div className="bg-blue-500 rounded-b-2xl border-b-8 border-blue-800">
          <p className="text-white font-medium tracking-wide font-trocchi text-4xl flex justify-center p-10">
            Tasks
          </p>
        </div>

        <Tasks />

        <div className="absolute top-0 right-0 w-40">
          {user ? (
            <div className="fixed flex py-5 items-center">
              <Link
                to="/profile"
                className="mx-1 flex outline-none tracking-wide bg-blue-500 rounded border-b-2 box-content border-blue-800  py-2  text-white hover:text-blue-100 px-2 font-semibold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 36 36"
                  fill="white"
                >
                  <path d="M18,20.25A10.125,10.125,0,1,0,7.875,10.125,10.128,10.128,0,0,0,18,20.25Zm9,2.25H23.126a12.24,12.24,0,0,1-10.252,0H9a9,9,0,0,0-9,9v1.125A3.376,3.376,0,0,0,3.375,36h29.25A3.376,3.376,0,0,0,36,32.625V31.5A9,9,0,0,0,27,22.5Z" />
                </svg>
              </Link>

              <p
                className="mx-1 cursor-pointer flex outline-none tracking-wide bg-blue-500 rounded border-b-2 box-content border-blue-800 pb-2 pt-1  text-white hover:text-blue-100 px-2 font-semibold"
                onClick={() => {
                  AuthService.logout();
                  window.location.reload();
                }}
              >
                logout
              </p>
            </div>
          ) : (
            <div className="fixed flex py-5 items-center">
              <Link
                className="mx-1 flex outline-none tracking-wide bg-blue-500 rounded border-b-2 box-content border-blue-800 pb-2 pt-1  text-white hover:text-blue-100 px-2 font-semibold"
                to="/login"
              >
                login{" "}
              </Link>

              <Link
                className="mx-1 flex outline-none tracking-wide bg-blue-500 rounded border-b-2 box-content border-blue-800 pb-2 pt-1  text-white hover:text-blue-100 px-2 font-semibold"
                to="/register"
              >
                register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
