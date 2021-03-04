import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "/api/users/";

class UserService {
  getUserTasks(id) {
    return axios
      .get(API_URL + "get_user_tasks/" + id)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  updateStats(id, tasks, cycles) {
    console.log(`number of tasks is ${tasks}`);
    console.log(`number of cycles is ${cycles}`);
    return axios
      .put(API_URL + "update_stats/" + id, {
        cycles,
        tasks,
      })
      .then((response) => {
        return response.data;
      });
  }

  saveUnfinishedTasks(id, unfinishedTasks) {
    console.log(unfinishedTasks);
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
