import axios from "axios";

const API_URL = "https://pomolist.herokuapp.com/api/auth/";

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

  logout() {
    localStorage.removeItem("user");
  }

  register(name, email, password) {
    return axios.post(API_URL + "signup", {
      headers: { "Access-Control-Allow-Origin": "*" },
      name,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
