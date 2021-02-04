import React from "react";
// LOOK INTO USEREDUCER FOR THIS
interface ITimer {
  running: boolean;
  minutes: string;
  seconds: string;
  cycles: number;
  work: boolean;
}

function Timer() {
  const [time, setTime] = React.useState<number>(1500);
  const [timer, setTimer] = React.useState<ITimer>({
    running: false,
    minutes: "25",
    seconds: "0",
    cycles: 0,
    work: true,
  });
  // adding this comment
  React.useEffect(() => {
    if (timer.running) {
      time > 0 && setTimeout(() => setTime(time - 1), 1000);
      let calc_minutes = Math.floor(time / 60);
      let calc_seconds = time - calc_minutes * 60;
      setTimer({
        ...timer,
        minutes: calc_minutes.toString(),
        seconds: calc_seconds.toString(),
      });

      if (time === 0) {
        if (timer.cycles + 1 === 7) {
          setTimer({
            running: false,
            minutes: "20",
            seconds: "0",
            work: false,
            cycles: 0,
          });
          setTime(1200);
        } else if (timer.work) {
          setTimer({
            running: false,
            minutes: "5",
            seconds: "0",
            work: false,
            cycles: timer.cycles + 1,
          });
          setTime(300);
        } else {
          setTimer({
            running: false,
            minutes: "25",
            seconds: "0",
            work: true,
            cycles: timer.cycles + 1,
          });
          setTime(1500);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer.running, time, timer.work, timer.cycles]);

  return (
    <div>
      <div className="my-10">
        <p className="text-2xl font-trocchi text-blue-500 border-b-2 border-gray-200 text-center rounded pb-2">
          {timer.work ? "Time to get some work done!" : "Take a break!"}
        </p>
      </div>

      <div>
        <div className="bg-blue-500 shadow-md  pt-8 pb-8 px-8  border-b-5 rounded-lg border-blue-700">
          <p className="text-white text-9xl font-bold font-roboto">
            {("0" + timer.minutes).slice(-2) +
              ":" +
              ("0" + timer.seconds).slice(-2)}
          </p>
        </div>
        <div
          onClick={() => {
            timer.running
              ? setTimer({ ...timer, running: false })
              : setTimer({ ...timer, running: true });
          }}
          className="mt-10 cursor-pointer justify-center flex"
        >
          {timer.running ? (
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
    </div>
  );
}
export default Timer;
