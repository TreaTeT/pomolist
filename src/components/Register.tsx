import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthService from "../services/auth.service";

interface IForm {
  name: string;
  email: string;
  password: string;
}

interface IResponse {
  message: string;
  successful: boolean;
}

function Register() {
  const { register, handleSubmit, errors, reset } = useForm();
  const [response, setResponse] = React.useState<IResponse | undefined>();
  let history = useHistory();

  const onSubmit = ({ name, email, password }: IForm) => {
    AuthService.register(name, email, password).then(
      (res) => {
        console.log(res);
        setResponse({ message: res.data.message, successful: true });
        history.push("/login");
        window.location.reload();
      },
      (error) => {
        console.error(error);
        setResponse({
          message: error?.response?.data?.message,
          successful: false,
        });
      }
    );
    reset();
  };

  return (
    <div className="min-h-screen min-w-full bg-gradient-to-b from-blue-700 to-blue-500 flex items-center">
      <div className="bg-white flex-col w-11/12 sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-3/12 mx-auto min-h-2/4 shadow-2xl ring-10 ring-blue-300 ring-opacity-50 ">
        <div className="m-5">
          <Link
            className="outline-none font-roboto text-3xl text-blue-600 font-semibold transition duration-500 opacity-60 hover:opacity-100"
            to="/"
          >
            {"⇠"}
          </Link>
        </div>
        <div className="mt-4">
          <p className="text-center font-semibold mb-16 font-roboto underline leading-relaxed tracking-wide text-5xl text-blue-600 ">
            Registration
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          {response ? (
            <div className="mx-auto w-3/4">
              <p className="text-center text-red-400 font-bold p-2">
                {response.message}
              </p>
            </div>
          ) : (
            ""
          )}
          {/* USERNAME */}
          <div className="w-full pb-4">
            <p className="w-3/4 tracking-wide mx-auto text-blue-600 leading-relaxed font-roboto text-lg ">
              username
            </p>
            <input
              type="name"
              className="w-3/4 rounded-b mx-auto pl-3 py-2 font-semibold text-blue-600 outline-none flex mb-2 border-t-2 shadow-md border-blue-600 border-opacity-80 "
              name="name"
              ref={register({ required: true, minLength: 4 })}
            />
            {errors.name && (
              <div className="text-red-500 font-sans font-semibold w-3/4 mx-auto text-xs text-opacity-70">
                {"Username must at least 5 characters long!"}
              </div>
            )}
          </div>

          {/* EMAIL */}
          <div className="w-full pb-4">
            <p className="w-3/4  tracking-wide mx-auto text-blue-600  leading-relaxed font-roboto text-lg ">
              e-mail
            </p>
            <input
              type="email"
              className="w-3/4 rounded-b mx-auto pl-3 py-2  font-semibold text-blue-600 outline-none flex mb-2  border-t-2 shadow-md border-blue-600 border-opacity-80"
              name="email"
              ref={register({ required: true })}
            />
            {errors.email && (
              <div className=" text-red-500 font-sans font-semibold text-xs text-opacity-70">
                Enter a valid title!
              </div>
            )}
          </div>
          {/* PASSWORD */}
          <div className="w-full">
            <p className="w-3/4 mx-auto tracking-widetext-blue-500 leading-relaxed font-roboto text-blue-600 text-lg">
              password
            </p>
            <input
              type="password"
              className="w-3/4 rounded-b shadow-md mx-auto pl-3 py-2  mb-2 font-semibold text-blue-600 placeholder-blue-400  outline-none flex border-t-2 border-blue-600 border-opacity-80"
              name="password"
              ref={register({ required: true, minLength: 8 })}
            />
            {errors.password && (
              <div className=" w-3/4 mx-auto text-red-500 font-sans font-semibold text-xs text-opacity-70">
                Password must be at least 8 characters long!
              </div>
            )}
          </div>

          <button
            type="submit"
            className="flex mx-auto outline-none shadow text-xl  hover:bg-blue-600 py-2 hover:text-white  px-4 my-12 font-semibold transition duration-700 hover:border-blue-600 border bg-gray-50   border-gray-100 text-blue-600"
          >
            register
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;
