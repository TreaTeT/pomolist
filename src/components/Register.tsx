import React from "react";
import { Link } from "react-router-dom";
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

  const onSubmit = ({ name, email, password }: IForm) => {
    AuthService.register(name, email, password).then(
      (res) => {
        console.log(res);
        setResponse({ message: res.data.message, successful: true });
      },
      (error) => {
        console.error(error);
        // setResponse({ message: error.res.data.message, successful: false });
      }
    );
    reset();
  };

  return (
    <div className="min-h-screen min-w-full bg-gradient-to-b from-blue-700 to-blue-500 flex items-center">
      <div className="bg-white flex-col sm:w-6/12 lg:w-3/12 mx-auto min-h-2/4 shadow-2xl rounded-sm ">
        <div className="m-5">
          <Link
            className="outline-none  font-roboto text-xl text-blue-600 font-semibold"
            to="/"
          >
            {"🡸"}
          </Link>
        </div>
        <div className="mt-4">
          <p className="text-center font-trocchi leading-relaxed tracking-wider text-3xl text-blue-600">
            Registration
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          {/* USERNAME */}
          <div className="w-full">
            <p className="w-3/4  tracking-wide  mx-auto text-blue-500 leading-relaxed font-trocchi text-lg  mt-10">
              username
            </p>
            <input
              type="name"
              className="w-3/4 rounded-b mx-auto pl-3 py-2 font-semibold text-blue-600 placeholder-blue-400 outline-none flex mt-5 mb-2 border-t-2 shadow-md border-blue-500 border-opacity-80 "
              name="name"
              placeholder="name"
              ref={register({ required: true, minLength: 4 })}
            />
            {errors.name && (
              <div className="text-red-500 font-sans font-semibold w-3/4 mx-auto text-xs text-opacity-70">
                {"Username must at least 5 characters long!"}
              </div>
            )}
          </div>

          {/* EMAIL */}
          <div className="w-full">
            <p className="w-3/4 tracking-wide mx-auto text-blue-500 text-underline leading-relaxed font-trocchi text-lg mt-4">
              e-mail
            </p>
            <input
              type="email"
              className="w-3/4 rounded-b mx-auto pl-3 py-2  font-semibold text-blue-600 placeholder-blue-400 outline-none flex mb-2 mt-5 border-t-2 shadow-md border-blue-500 border-opacity-80"
              name="email"
              placeholder="jozko@mrkvicka.com"
              ref={register({ required: true })}
            />
            {errors.email && (
              <div className=" text-red-500 font-sans font-semibold text-xs text-opacity-70">
                Enter a valid title!
              </div>
            )}
          </div>
          {/* PASSWORD */}
          <div className="w-full ">
            <p className="w-3/4 mx-auto  tracking-widetext-blue-500 leading-relaxed font-trocchi text-blue-500 text-lg  my-5">
              password
            </p>
            <input
              type="password"
              className="w-3/4 rounded-b shadow-md mx-auto pl-3 py-2  mb-2 font-semibold text-blue-600 placeholder-blue-400  outline-none flex border-t-2 border-blue-500 border-opacity-80"
              name="password"
              placeholder="verystrongsecurepasswordplease"
              ref={register({ required: true, minLength: 8 })}
            />
            {errors.password && (
              <div className=" w-3/4 mx-auto text-red-500 font-sans font-semibold text-xs text-opacity-70">
                Enter a valid title!
              </div>
            )}
          </div>

          <button
            type="submit"
            className="flex mx-auto outline-none text-white  bg-blue-500 py-2 px-3 rounded border-b-3  border-blue-700 mt-5 font-semibold mb-10 hover:bg-blue-700"
          >
            register
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;
