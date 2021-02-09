import React from "react";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";
interface IUser {
  name: string;
  email: string;
  cycles: number;
  tasks: number;
}

function Profile() {
  const [user, setUser] = React.useState<IUser | undefined>();

  React.useEffect(() => {
    if (AuthService.getCurrentUser()) {
      setUser(AuthService.getCurrentUser());
    } else {
      console.log("no user logged in");
    }
  }, []);
  return (
    <div className="min-h-screen min-w-full bg-gradient-to-b from-blue-700 to-blue-500 flex items-center">
      <div className="bg-white flex-col sm:w-6/12 lg:w-3/12 mx-auto min-h-2/4 shadow-2xl rounded-sm">
        {user ? (
          <div>
            <div className="p-2">
              <Link
                className="outline-none font-roboto text-xl text-blue-600 font-semibold"
                to="/"
              >
                {"🡸"}
              </Link>
            </div>
            <p className="text-center font-semibold text-3xl text-blue-500 m-5">
              {"TreaTeT"}
            </p>
            <div className="flex justify-center">
              <div className="mx-10 mt-2 mb-5 text-center">
                <p className="font-semibold text-blue-600 border-b border-blue-400">
                  Session
                </p>
                <p className="pt-1 text-blue-400 font-semibold">{`Cycles: ${0}`}</p>
                <p className="pt-1 text-blue-400 font-semibold">{`Tasks: ${0}`}</p>
              </div>
              <div className="mx-10 mt-2 mb-5 text-center">
                <p className="font-semibold text-blue-600 border-b border-blue-400">
                  Total
                </p>
                <p className="pt-1 text-blue-400 font-semibold">{`Cycles: 110`}</p>
                <p className="pt-1 text-blue-400 font-semibold">{`Tasks: 10`}</p>
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="flex sm:flex-col justify-center items-center  py-1">
                <p className="px-1 text-md font-semibold text-blue-600">{`That sums up to total of `}</p>
                <p className="px-1 text-3xl font-bold text-red-500 font-trocchi pb-1">{` ${Math.round(
                  (1200 * 25) / 60
                )} `}</p>
                <p className="px-1 text-md font-semibold text-blue-600">{` hours of productive time!`}</p>
              </div>
            </div>
            <p className="text-center text-xl font-trocchi text-green-400 m-3">
              Great Work!
            </p>
          </div>
        ) : (
          <div className="flex justify-center m-10">
            <p className="text-2xl font-trocchi text-blue-600">
              No user logged in!
            </p>
          </div>
        )}{" "}
      </div>
    </div>
  );
}

export default Profile;
