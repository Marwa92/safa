import axios from "../utils/API";

const signUp = (user, success, setSuccess) => {
  axios.post("register", user).then((res) => {
    console.log("res:", res.data);
    if (res.data.status === "Success") {
      console.log("pass");
      setSuccess(true);
    } else if (res.data.status === "Failed") {
      console.log("fail");
    }
  });
};

export { signUp };
