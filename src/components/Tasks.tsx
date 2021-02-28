import React from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

function Tasks() {
  interface ITodo {
    task: string;
    _id: string;
    checked: boolean;
  }

  const { register, handleSubmit, reset } = useForm<ITodo>();
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  React.useEffect(() => {
    UserService.getUserTasks(AuthService.getCurrentUser().id)
      .then((res) => {
        setTodos(res.unfinishedTasks);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const onSubmit = ({ task }: ITodo) => {
    let id = uuidv4();
    setTodos([...todos, { task: task, _id: id, checked: false }]);
    UserService.saveUnfinishedTasks(AuthService.getCurrentUser().id, [
      ...todos,
      { task: task, _id: id, checked: false },
    ]);
    reset();
  };

  const handleDelete = (id: string): void => {
    setTodos(todos.filter((todo) => todo._id !== id));
    UserService.saveUnfinishedTasks(
      AuthService.getCurrentUser().id,
      todos.filter((todo) => todo._id !== id)
    );
  };

  const updateTasks = (t = 1) => {
    if (AuthService.getCurrentUser()) {
      let { id, cycles, tasks } = AuthService.getCurrentUser();
      let user = AuthService.getCurrentUser();
      user["tasks"] = tasks + 1;
      console.log(user);
      UserService.updateStats(id, tasks + t, cycles)
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
    <div className="flex-col w-full mt-10">
      <div className="w-full">
        <div className="flex justify-between lg:w-4/12 w-8/12 items-center mx-auto pb-10 mt-2 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-between w-full items-center"
          >
            <input
              ref={register({ required: true })}
              className="leading-relaxed py-2 px-2 placeholder-blue-500 bg-white font-semibold border-t-3 border-blue-500 shadow-xl rounded-b-sm text-blue-600 w-5/6 outline-none my-8"
              type="text"
              name="task"
              placeholder="add a new task"
            ></input>

            <label>
              <input type="submit" value="Submit" className="hidden" />
              <svg
                className="mx-4 opacity-70 hover:opacity-100 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 31.5 31.5"
              >
                <path
                  fill="#2563EB"
                  d="M29.25,14.625H19.125V4.5a2.25,2.25,0,0,0-2.25-2.25h-2.25a2.25,2.25,0,0,0-2.25,2.25V14.625H2.25A2.25,2.25,0,0,0,0,16.875v2.25a2.25,2.25,0,0,0,2.25,2.25H12.375V31.5a2.25,2.25,0,0,0,2.25,2.25h2.25a2.25,2.25,0,0,0,2.25-2.25V21.375H29.25a2.25,2.25,0,0,0,2.25-2.25v-2.25A2.25,2.25,0,0,0,29.25,14.625Z"
                  transform="translate(0 -2.25)"
                />
              </svg>
            </label>
          </form>
        </div>

        {todos.map((todo, index) => {
          return (
            <div
              key={todo._id}
              className="lg:w-4/12 w-8/12 mx-auto flex  m-5  py-2 border-b border-blue-600 justify-between"
            >
              <div className="flex">
                <div className="flex items-center  mr-4 ">
                  <input
                    type="checkbox"
                    id="A3-yes"
                    name="A3-confirmation"
                    className="cursor-pointer opacity-0 absolute h-5 w-5"
                    onChange={() => {
                      let newArr = [...todos];
                      newArr[index] = {
                        ...newArr[index],
                        checked: !newArr[index].checked,
                      };
                      setTodos(newArr);
                      if (newArr[index].checked) {
                        updateTasks();
                      } else {
                        updateTasks(-1);
                      }
                    }}
                  />
                  <div className="bg-white border-2 rounded-md border-blue-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                    <svg
                      className="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
                      version="1.1"
                      viewBox="0 0 17 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <g
                          transform="translate(-9 -11)"
                          fill="#1F73F1"
                          fillRule="nonzero"
                        >
                          <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <label className="select-none"></label>
                </div>

                <p
                  className={`font-roboto text-lg text-blue-500 ${
                    todo.checked ? "line-through" : "no-underline"
                  }`}
                >
                  {todo.task}
                </p>
              </div>
              <div className="flex items-center pr-2">
                <svg
                  onClick={() => handleDelete(todo._id)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 13.426 13.423"
                  fill="##2563EB"
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
    </div>
  );
}

export default Tasks;
