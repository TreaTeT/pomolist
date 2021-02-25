import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://localhost:5000/api/users/";

class UserService {
  updateStats(id, tasks, cycles) {
    return axios
      .put(API_URL + "update_stats/" + id, {
        tasks,
        cycles,
      })
      .then((response) => {
        console.log(response.data);
      });
  }

  saveUnfinishedTasks(id, unfinishedTasks) {
    return axios
      .put(API_URL + "save_unfinished_tasks/" + id, {
        unfinishedTasks, // task is {tasks: "some task", _id: "id of the task"}
      })
      .then((response) => {
        console.log(response);
      });
  }

  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }
}

export default new UserService();
