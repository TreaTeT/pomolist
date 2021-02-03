import React from "react";
function Register() {
  return (
    <div className="min-h-screen min-w-full bg-gradient-to-b from-blue-700 to-blue-500 flex items-center">
      <div className="bg-white flex-col sm:w-6/12 lg:w-3/12 mx-auto min-h-2/4 shadow-2xl rounded-sm ">
        <div className="mt-8">
          <p className="text-center font-trocchi leading-relaxed tracking-wider text-3xl text-blue-600">
            Registration
          </p>
        </div>
        <form className="w-full">
          {/* USERNAME */}
          <div className="w-full">
            <p className="w-3/4  tracking-wide  mx-auto text-blue-500 leading-relaxed font-trocchi text-lg  mt-10">
              username
            </p>
            <input
              type="username"
              className="w-3/4 rounded-b mx-auto pl-3 py-2 font-semibold text-blue-600 placeholder-blue-400 outline-none flex my-5 border-t-2 shadow-md border-blue-500 border-opacity-80 "
              name="name"
              placeholder="username"
            />
          </div>

          {/* EMAIL */}
          <div className="w-full">
            <p className="w-3/4 tracking-wide mx-auto text-blue-500 text-underline leading-relaxed font-trocchi text-lg">
              e-mail
            </p>
            <input
              type="email"
              className="w-3/4 rounded-b mx-auto pl-3 py-2  font-semibold text-blue-600 placeholder-blue-400 outline-none flex my-5 border-t-2 shadow-md border-blue-500 border-opacity-80"
              name="email"
              placeholder="jozko@mrkvicka.com"
            />
          </div>
          {/* PASSWORD */}
          <div className="w-full">
            <p className="w-3/4 mx-auto  tracking-widetext-blue-500 leading-relaxed font-trocchi text-blue-500 text-lg  my-5">
              password
            </p>
            <input
              type="password"
              className="w-3/4 rounded-b shadow-md mx-auto pl-3 py-2  mb-10 font-semibold text-blue-600 placeholder-blue-400  outline-none flex border-t-2 border-blue-500 border-opacity-80"
              name="password"
              placeholder="verystrongsecurepasswordplease"
            />
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
