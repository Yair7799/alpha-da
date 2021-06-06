import config from "config";

export const userService = {
  login,
  logout
};

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function login() {
  const requestOptions = {
    method: "GET"
  };

  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.then(res => {
    const data = JSON.parse(res.data());
    if (!response.ok) {
      if (response.status !== 200) {
        console.log(response.status);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    localStorage.setItem("user", JSON.stringify(data));
    return data;
  });
}
