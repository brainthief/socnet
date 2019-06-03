import * as axios from "axios";

const API = {
 getUsers() {
  return axios.get("https://social-network.samuraijs.com/api/1.0/users")
 }
}

export default API