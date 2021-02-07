import React from "react";
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
  React.useEffect(() => {
    console.log(AuthService.getCurrentUser());
    if (AuthService.getCurrentUser()) {
      setUser(AuthService.getCurrentUser());
    } else {
      console.log("no user logged in");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-row">
      <div className="flex min-h-full  w-2/3 justify-center items-center flex-col">
        <Timer />
      </div>
      <div className="min-h-full w-1/3 bg-blue-500">
        <p className="text-white font-medium tracking-wide font-trocchi text-4xl flex justify-center m-10">
          Tasks
        </p>
        <Tasks />

        <div className="relative flex justify-center">
          {user ? (
            <div>
              <p className="text-center font-semibold text-xl text-white m-2">
                {user.name}
              </p>
              <div className="flex">
                <div className="mx-10 mt-2 mb-5 text-center">
                  <p className="font-semibold text-white border-b border-white">
                    Session
                  </p>
                  <p className="pt-1 text-gray-200">{`Cycles: ${0}`}</p>
                  <p className="pt-1 text-gray-200">{`Tasks: ${0}`}</p>
                </div>
                <div className="mx-10 mt-2 mb-5 text-center">
                  <p className="font-semibold text-white border-b border-white">
                    Total
                  </p>
                  <p className="pt-1 text-gray-200">{`Cycles: ${user.cycles}`}</p>
                  <p className="pt-1 text-gray-200">{`Tasks: ${user.tasks}`}</p>
                </div>
              </div>
              <p
                className="cursor-pointer text-center text-blue-200 hover:text-blue-800"
                onClick={() => {
                  AuthService.logout();
                  window.location.reload();
                }}
              >
                logout
              </p>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
