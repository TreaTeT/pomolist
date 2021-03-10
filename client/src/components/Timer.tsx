import React from "react";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";

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

  React.useEffect(() => {
    let savedTime = localStorage.getItem("time");
    let savedTimer = localStorage.getItem("timer");

    if (savedTime !== null) {
      setTime(parseInt(savedTime));
      localStorage.removeItem("time");
      let calc_minutes = Math.floor(parseInt(savedTime) / 60);
      let calc_seconds = parseInt(savedTime) - calc_minutes * 60;

      let updatedTimer = timer;
      updatedTimer["minutes"] = calc_minutes.toString();
      updatedTimer["seconds"] = calc_seconds.toString();

      setTimer(updatedTimer);
    }
    if (savedTimer !== null) {
      setTimer(JSON.parse(savedTimer));
      localStorage.removeItem("timer");
    }
  }, []);

  React.useEffect(() => {
    if (time) {
      localStorage.setItem("time", JSON.stringify(time));
    }
  }, [time]);

  React.useEffect(() => {
    if (timer.running) {
      time > 0 && setTimeout(() => setTime(time - 1), 100);
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
          updateCycles();
          localStorage.setItem("timer", JSON.stringify(timer));
        } else if (timer.work) {
          setTimer({
            running: false,
            minutes: "5",
            seconds: "0",
            work: false,
            cycles: timer.cycles + 1,
          });
          updateCycles();
          setTime(300);
          localStorage.setItem("timer", JSON.stringify(timer));
        } else {
          setTimer({
            running: false,
            minutes: "25",
            seconds: "0",
            work: true,
            cycles: timer.cycles + 1,
          });
          setTime(1500);
          localStorage.setItem("timer", JSON.stringify(timer));
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer.running, time, timer.work, timer.cycles]);

  const updateCycles = () => {
    if (AuthService.getCurrentUser()) {
      let { id, cycles, tasks } = AuthService.getCurrentUser();
      let user = AuthService.getCurrentUser();
      user["cycles"] = cycles + 1;
      console.log(user);
      UserService.updateStats(id, tasks, cycles + 1)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(user));
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div>
      <div className="mb-12 mt-24">
        <p className="text-3xl font-trocchi text-blue-500 border-b-2 border-gray-200 text-center  rounded pb-2">
          {timer.work ? "Time to get some work done!" : "Take a break!"}
        </p>
      </div>

      <div>
        <div className=" bg-blue-500 shadow-md px-8  mt-2 border-b-5 rounded-lg border-blue-700">
          <p className="text-white text-11xl font-bold font-roboto">
            {("0" + timer.minutes).slice(-2) +
              ":" +
              ("0" + timer.seconds).slice(-2)}
          </p>
          <svg
            onClick={() => {
              if (!timer.running) {
                setTime(1500);
                setTimer({
                  running: false,
                  minutes: "25",
                  seconds: "0",
                  cycles: 0,
                  work: true,
                });
              } else {
                console.log("you need to stop the timer before reseting");
              }
            }}
            className="mx-auto mb-1 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="15.955"
            height="16"
            viewBox="0 0 35.955 36"
            fill="#1D4ED8"
          >
            <path
              id="Icon_open-reload"
              data-name="Icon open-reload"
              d="M18,0A18,18,0,1,0,30.78,30.78l-3.24-3.24A13.51,13.51,0,1,1,17.955,4.5a13.091,13.091,0,0,1,9.4,4.095L22.455,13.5h13.5V0L30.6,5.355A17.9,17.9,0,0,0,17.955,0Z"
            />
          </svg>
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
