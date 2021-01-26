import React from "react";

function Tasks() {
  let arr: string[] = [
    "OPG presentation",
    "Math recap",
    "People and Nature topic",
    "Go shopping",
    "Do the laundry",
    "research useReducer",
  ];
  return (
    <div className="flex-col">
      {arr.map((sentence) => {
        return (
          <div className="w-80 mx-auto flex justify-between">
            <p className="font-roboto font-thin text-xl text-left pt-2 pb-2">
              {sentence}
            </p>
            <p className="font-semibold text-sm text-left pt-3 font-roboto pb-2">
              x
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;
