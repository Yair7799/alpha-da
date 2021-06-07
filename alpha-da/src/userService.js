import alertify from "alertify.js";

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
    `http://localhost:8080/users/login?username=${givenUserName}&password=${givenPassword}`,
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  return response.then(res => {
    const data = JSON.parse(res.data());
    if (!response.ok) {
      alertify.error("לא הצלחנו להתחבר");
      if (response.status !== 200) {
        console.log(response.status);
      }

      const error = (data && data.message) || response.statusText;
      return console.log(error);
    }

    localStorage.setItem("user", JSON.stringify(data));
    alertify.success("התחברנו בהצלחה");
    return data;
  });
}
