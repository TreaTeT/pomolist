import React from "react";

function Timer() {
  // TODO - REWORK THIS THING TO ONE STATE OBJECT

  //   interface ITimer {
  //     running: boolean;
  //     counter: number;
  //     minutes: string;
  //     seconds: string;
  //     cycle: number;
  //     work: boolean;
  //   }

  const [time, setTime] = React.useState<number>(1500);
  const [running, setRunning] = React.useState<boolean>(false);
  const [minutes, setMinutes] = React.useState<string>("25");
  const [seconds, setSeconds] = React.useState<string>("00");
  const [cycles, setCycles] = React.useState<number>(0);
  const [work, setWork] = React.useState<boolean>(true);

  //   const [time, setTime] = React.useState<ITimer>({
  //     running: false,
  //     counter: 25,
  //     minutes: "1",
  //     seconds: "0",
  //     cycle: 0,
  //     work: true,
  //   });

  React.useEffect(() => {
    if (running) {
      time > 0 && setTimeout(() => setTime(time - 1), 1000);

      let calc_minutes = Math.floor(time / 60);
      let calc_seconds = time - calc_minutes * 60;

      setMinutes(calc_minutes.toString());
      setSeconds(calc_seconds.toString());

      if (time === 0) {
        setCycles(cycles + 1);

        // IF IT'S THE 8TH CYCLE -> TIME FOR A BIG PAUSE
        if (cycles + 1 + 1 === 8) {
          // RESET EVERYTHING AND SET BREAK FOR 20 MINUTES
          setCycles(cycles + 1);
          setMinutes("20");
          setSeconds("0");
          setWork(false);
          setTime(1200);
          setRunning(false);
        } else if (work) {
          // RESET TIMES, ADD CYCLE AND SET BREAK FOR 5 MINUTES
          console.log("time for a break");
          setCycles(cycles + 1);
          setMinutes("5");
          setSeconds("0");
          setWork(false);
          setTime(300);
          setRunning(false);
        } else {
          // RESET TIMES, ADD CYCLE AND SET WORK FOR 25 MINUTS
          console.log("time to work again");
          setCycles(cycles + 1);
          setMinutes("25");
          setSeconds("0");
          setWork(true);
          setTime(1500);
          setRunning(false);
        }
      }
    }
  }, [running, time, work, cycles]);

  return (
    <div>
      <div className="bg-blue-500 shadow-md  pt-8 pb-8 px-8  border-b-5 rounded-lg border-blue-700">
        <p className="text-white text-9xl font-bold font-roboto">
          {("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2)}
        </p>
      </div>
      <div
        onClick={() => {
          console.log("pressed");
          setRunning(!running);
        }}
        className="mt-10 cursor-pointer justify-center flex"
      >
        {running ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.895"
            height="42.079"
            viewBox="0 0 25.895 32.368"
          >
            <path
              fill="#2563eb"
              d="M16.273,39.118H9.819A.814.814,0,0,1,9,38.309V7.559a.814.814,0,0,1,.819-.809h6.453a.814.814,0,0,1,.819.809v30.75A.814.814,0,0,1,16.273,39.118Z"
              transform="translate(-9 -6.75)"
            />
            <path
              fill="#2563eb"
              d="M28.648,39.118H22.194a.814.814,0,0,1-.819-.809V7.559a.814.814,0,0,1,.819-.809h6.453a.814.814,0,0,1,.819.809v30.75A.814.814,0,0,1,28.648,39.118Z"
              transform="translate(-3.572 -6.75)"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42.079"
            height="42.079"
            viewBox="0 0 42.079 42.079"
          >
            <path
              fill="#2563eb"
              d="M24.415,3.375a21.04,21.04,0,1,0,21.04,21.04A21.036,21.036,0,0,0,24.415,3.375Zm8.476,21.434L19.013,33.2a.45.45,0,0,1-.678-.394V16.019a.448.448,0,0,1,.678-.394l13.878,8.4A.464.464,0,0,1,32.891,24.809Z"
              transform="translate(-3.375 -3.375)"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
export default Timer;
