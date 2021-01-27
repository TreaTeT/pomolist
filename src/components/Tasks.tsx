import React from "react";
import { useForm } from "react-hook-form";

function Tasks() {
  interface ITodo {
    todo: string;
  }

  const { register, handleSubmit } = useForm<ITodo>();

  const [todos, setTodos] = React.useState<string[]>([
    "Wassup",
    "My dear",
    "Friends",
    "How",
    "Are",
    "You today?",
  ]);

  const onSubmit = ({ todo }: ITodo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="flex-col h-3/5 overflow-y-auto ">
      <div className="flex justify-between w-2/3 items-center mx-auto pb-10 mt-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-between w-full items-center"
        >
          <input
            ref={register({ required: true })}
            className=" leading-relaxed rounded-xl pb-0.5 px-3 placeholder-gray-700 bg-white font-semibold ring-4 ring-blue-400 box-border shadow-inner text-gray-700 w-4/6 outline-none"
            type="text"
            name="todo"
            placeholder="add a new task"
          ></input>

          <label>
            <input type="submit" value="Submit" className="hidden" />
            <svg
              className="mx-4 opacity-50 hover:opacity-100 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 31.5 31.5"
            >
              <path
                fill="#fff"
                d="M29.25,14.625H19.125V4.5a2.25,2.25,0,0,0-2.25-2.25h-2.25a2.25,2.25,0,0,0-2.25,2.25V14.625H2.25A2.25,2.25,0,0,0,0,16.875v2.25a2.25,2.25,0,0,0,2.25,2.25H12.375V31.5a2.25,2.25,0,0,0,2.25,2.25h2.25a2.25,2.25,0,0,0,2.25-2.25V21.375H29.25a2.25,2.25,0,0,0,2.25-2.25v-2.25A2.25,2.25,0,0,0,29.25,14.625Z"
                transform="translate(0 -2.25)"
              />
            </svg>
          </label>
        </form>
      </div>

      {todos.map((sentence) => {
        return (
          <div className="w-2/3 mx-auto flex justify-between m-5 px-2  py-2 border-b border-blue-600">
            <input
              className="outline-none ring-0 rounded focus:ring-2 ring-blue-300"
              type="checkbox"
              id="customvalue"
              name="todo"
              value="todo"
            ></input>
            <p className="font-roboto text-lg text-white  text-left ">
              {sentence}
            </p>
            <div className="flex items-center pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 13.426 13.423"
                fill="#fff"
                className="cursor-pointer opacity-40 hover:opacity-100"
              >
                <path
                  d="M19.589,18l4.8-4.8A1.124,1.124,0,0,0,22.8,11.616l-4.8,4.8-4.8-4.8A1.124,1.124,0,1,0,11.616,13.2l4.8,4.8-4.8,4.8A1.124,1.124,0,0,0,13.2,24.384l4.8-4.8,4.8,4.8A1.124,1.124,0,1,0,24.384,22.8Z"
                  transform="translate(-11.285 -11.289)"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;
