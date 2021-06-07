import alertify from "alertify.js";
const serverApi = 'http://tmz-2-backend-git-tmzapp2.apps.openforce.openforce.biz';
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
  ).then(handleResponse);
}

function handleResponse(response) {
  return response.then(res => {
    const data = JSON.parse(res.data());
    if (!response.ok) {
      console.log("fail");
      alertify.error("לא הצלחנו להתחבר");
      if (response.status !== 200) {
        console.log(response.status);
      }

      const error = (data && data.message) || response.statusText;
      console.log(error);
    }

    localStorage.setItem("user", JSON.stringify(data));
    console.log("success");
    alertify.success("התחברנו בהצלחה");
    //this.$router.push({ name: 'home' })
    return data;
  });
}
