import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthService from "../services/auth.service";

interface IForm {
  name: string;
  password: string;
}

interface IResponse {
  message: string;
  successful: boolean;
}

function Login() {
  let history = useHistory();

  const { register, handleSubmit, errors } = useForm();
  const [response, setResponse] = React.useState<IResponse | undefined>();

  const onSubmit = ({ name, password }: IForm) => {
    AuthService.login(name, password).then(
      () => {
        console.log("logged in");
        history.push("/");
        window.location.reload();
      },
      (error) => {
        setResponse({
          message: error?.response?.data?.message,
          successful: false,
        });
        console.error(error);
      }
    );
    console.log(`user: ${name} , password: ${password}`);
  };

  return (
    <div className="min-h-screen min-w-full bg-gradient-to-b from-blue-700 to-blue-500 flex items-center">
      <div className="bg-white flex-col w-11/12 sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-3/12 mx-auto shadow-2xl ring-10 ring-blue-300 ring-opacity-50">
        <div className="m-5">
          <Link
            className="outline-none font-roboto text-3xl text-blue-600 font-semibold transition duration-500 opacity-60 hover:opacity-100"
            to="/"
          >
            <svg
              className=""
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
        <div className="mx-auto">
          <p className="text-center font-semibold mb-16 font-roboto underline leading-relaxed tracking-wide text-5xl text-blue-600 ">
            Login
          </p>
        </div>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          {response ? (
            <div className="mx-auto w-3/4">
              <p className="text-center text-red-400 font-bold mt-5">
                {response.message}
              </p>
            </div>
          ) : (
            ""
          )}
          {/* USERNAME */}
          <div className="w-full pb-3">
            <p className="w-3/4  tracking-wide mx-auto text-blue-600 leading-relaxed font-roboto text-lg ">
              username
            </p>
            <input
              type="username"
              className="w-3/4 rounded-b mx-auto pl-3 py-2 font-semibold text-blue-600 outline-none flex mb-5 border-t-3 shadow-md border-blue-600 border-opacity-80 "
              name="name"
              ref={register({ required: true, minLength: 5 })}
            />
            {errors.name && (
              <div className="text-red-500 font-sans font-semibold w-3/4 mx-auto text-xs text-opacity-70">
                Username must at least 5 characters long!
              </div>
            )}
          </div>

          {/* PASSWORD */}
          <div className="w-full">
            <p className="w-3/4 mx-auto  tracking-widetext-blue-500 leading-relaxed font-roboto text-blue-600 text-lg mb-1">
              password
            </p>
            <input
              type="password"
              className="w-3/4 rounded-b shadow-md mx-auto pl-3 py-2  font-semibold text-blue-600 placeholder-blue-400  outline-none flex border-t-3 border-blue-600 border-opacity-80"
              name="password"
              ref={register({ required: true, minLength: 8 })}
            />
            {errors.password && (
              <div className="text-red-500 font-sans font-semibold w-3/4 mx-auto text-xs text-opacity-70">
                That's not a valid password
              </div>
            )}
          </div>

          <button
            type="submit"
            className="flex mx-auto outline-none shadow text-xl  hover:bg-blue-600 py-2 hover:text-white  px-4 my-12 font-semibold transition duration-700 hover:border-blue-600 border bg-gray-50   border-gray-100 text-blue-600"
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
