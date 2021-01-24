import React from "react";
import "./App.css";

function App() {
  const [running, setRunning] = React.useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-row ">
      <div className="flex min-h-full  w-2/3 border-r border-blue-700 border-opacity-80 justify-center items-center flex-col">
        <div className="m-10">
          <p className="font-semibold text-6xl font-sans text-red-500">
            Take a Break!
          </p>
        </div>
        <div className="bg-blue-500 shadow-md  pt-6 pb-9 px-6  border-b-5 rounded-lg border-blue-600">
          <p className="text-white text-8xl font-bold font-sans ">24:48</p>
        </div>

        <div
          onClick={() => {
            setRunning(!running);
          }}
          className="mt-10 cursor-pointer"
        >
          {running ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 80 80"
            >
              <defs></defs>
              <g fill="none" stroke="#1d4ed8">
                <circle stroke="none" cx="40" cy="40" r="40" />
                <circle fill="none" cx="40" cy="40" r="39.5" />
              </g>
              <rect
                fill="#1d4ed8"
                width="9"
                height="23"
                transform="translate(27 29)"
              />
              <rect
                width="9"
                height="23"
                fill="#1d4ed8"
                transform="translate(44 29)"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 80 80"
            >
              <defs></defs>
              <g className="a" stroke="#dc2626" fill="none">
                <circle className="c" stroke="none" cx="40" cy="40" r="40" />
                <circle className="d" fill="none" cx="40" cy="40" r="39.5" />
              </g>
              <path
                className="b"
                fill="#dc2626"
                d="M11,0,22,22H0Z"
                transform="translate(54 30) rotate(90)"
              />
            </svg>
          )}

          {/* <svg
            className="w-8 h-8 animate-bounce cursor-pointer "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 511.999 511.999"
          >
            <path
              fill="#EF4444"
              d="M443.86,196.919L141.46,10.514C119.582-2.955,93.131-3.515,70.702,9.016c-22.429,12.529-35.819,35.35-35.819,61.041
			           v371.112c0,38.846,31.3,70.619,69.77,70.829c0.105,0,0.21,0.001,0.313,0.001c12.022-0.001,24.55-3.769,36.251-10.909
			           c9.413-5.743,12.388-18.029,6.645-27.441c-5.743-9.414-18.031-12.388-27.441-6.645c-5.473,3.338-10.818,5.065-15.553,5.064
			           c-14.515-0.079-30.056-12.513-30.056-30.898V70.058c0-11.021,5.744-20.808,15.364-26.183c9.621-5.375,20.966-5.135,30.339,0.636
			           l302.401,186.405c9.089,5.596,14.29,14.927,14.268,25.601c-0.022,10.673-5.261,19.983-14.4,25.56L204.147,415.945
			           c-9.404,5.758-12.36,18.049-6.602,27.452c5.757,9.404,18.048,12.36,27.452,6.602l218.611-133.852
			           c20.931-12.769,33.457-35.029,33.507-59.55C477.165,232.079,464.729,209.767,443.86,196.919z"
            />
          </svg> */}
        </div>
      </div>
      <div className="bg-white min-h-full w-1/3 border-l-4 border-blue-700 border-opacity-80">
        <p>here is some text as wells</p>
      </div>
    </div>
  );
}

export default App;
