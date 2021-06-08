import alertify from "alertify.js";
import router from "./router";

const serverApi =
  "http://tmz-2-backend-git-tmzapp2.apps.openforce.openforce.biz";
export default {
  login,
  logout
};

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function login(givenUserName, givenPassword) {
  const requestOptions = {
    method: "GET"
  };
  return fetch(
    `${serverApi}/users/login?username=${givenUserName}&password=${givenPassword}`,
    requestOptions
  ).then(response => {
    if(!response.ok || response.status === 400){
      console.log("fail");
      alertify.error("לא הצלחנו להתחבר");
    } else {
      console.log("success");
       alertify.success("התחברנו בהצלחה");
      router.push({ name: "home" });
    }
  }).catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message);
  });
}
