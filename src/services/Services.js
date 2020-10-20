import axios from "../utils/API";

const signUp = (user) => {
  axios.post("register", user).then((res) => {
    console.log("res:", res.data);
    if (res.data.status === "Success") {
      console.log("pass");
    } else if (res.data.status === "Failed") {
      console.log("fail");
    }
  });
};

export { signUp };
