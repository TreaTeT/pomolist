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
      <div className="bg-white flex-col sm:w-6/12 lg:w-3/12 mx-auto shadow-2xl ring-8 ring-blue-300 ring-opacity-50">
        {user ? (
          <div>
            <div className="p-2">
              <Link
                className="outline-none font-roboto text-3xl text-blue-600 font-semibold"
                to="/"
              >
                <svg
                  className="m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.503"
                  height="23.619"
                  viewBox="0 0 13.503 23.619"
                >
                  <path
                    fill="#2563EB"
                    id="Icon_ionic-ios-arrow-back"
                    data-name="Icon ionic-ios-arrow-back"
                    d="M15.321,18l8.937-8.93a1.688,1.688,0,0,0-2.391-2.384L11.742,16.8a1.685,1.685,0,0,0-.049,2.327L21.86,29.32a1.688,1.688,0,0,0,2.391-2.384Z"
                    transform="translate(-11.25 -6.194)"
                  />
                </svg>
              </Link>
            </div>
            <p className="text-center font-roboto font-semibold text-3xl text-blue-500 mx-5">
              {user.name}
            </p>
            <p className="text-center font-roboto font-thin text-md text-blue-800 mx-2 opacity-70">
              {user.email}
            </p>
            <div className="flex justify-center w-11/12 mx-auto my-5 py-10">
              <div className="mx-10 mt-2 mb-5 w-10/12">
                <p className="font-semibold text-blue-600 border-b tracking-wide border-blue-400 text-xl font-roboto">
                  Stats
                </p>
                <div
                  className="
                w-full justify-around"
                >
                  <div className="flex justify-between py">
                    <p className="pt-1 font-roboto font-light text-blue-400 ">{`Cycles`}</p>
                    <p className="pt-1 font-roboto text-blue-400 font-semibold">
                      {user.cycles}
                    </p>
                  </div>

                  <div className="flex justify-between py">
                    <p className="pt-1 font-roboto text-blue-400 font-light">{`Tasks`}</p>
                    <p className="pt-1 font-roboto text-blue-400 font-semibold">
                      {user.tasks}
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-blue-600 border-b tracking-wide border-blue-400 text-xl font-roboto">
                  Total
                </p>
                <p className="text-center font-roboto text-blue-600 font-bold text-2xl mt-5">
                  {Math.round((user.cycles * 25) / 60)}
                </p>
                <p className="text-center font-roboto text-blue-400">
                  {" hours of productivity!"}
                </p>
              </div>
            </div>
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
