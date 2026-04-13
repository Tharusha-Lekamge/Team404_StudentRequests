import { useState } from "react";

const decodeToken = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
};

export default function useToken() {
  const getToken = () => {
    const tokenString =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken, method) => {
    method === "local"
      ? localStorage.setItem("token", JSON.stringify(userToken))
      : sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };

  const role = token ? decodeToken(token)?.type : null;

  return {
    setToken: saveToken,
    token,
    role,
  };
}
