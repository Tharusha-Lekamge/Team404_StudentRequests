import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken, method) => {
    alert(method);
    method === "local"
      ? localStorage.setItem("token", JSON.stringify(userToken))
      : sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
