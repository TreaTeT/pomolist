import axios from "axios";

const API_URL = "https://pomolist-api.herokuapp.com/api/auth/";

class AuthService {
  login(name, password) {
    return axios
      .post(API_URL + "signin", {
        name,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  // remove user from current session
  logout() {
    localStorage.removeItem("user");
  }

  // register new user
  register(name, email, password) {
    return axios.post(API_URL + "signup", {
      headers: { "Access-Control-Allow-Origin": "*" },
      name,
      email,
      password,
    });
  }

  // return user in current session
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
