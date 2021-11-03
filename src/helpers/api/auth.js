import axios from "axios";
import { apiUrl } from "../../constants";

export const testAuth = async () => {
  try {
    const res = await axios.get(`${apiUrl}/auth/isAuthenticated`);
    return res.data.is_authenticated;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const login = async (username, password, remember = false) => {
  try {
    const res = await axios.post(`${apiUrl}/auth/login`, {
      username,
      password,
      remember: !!remember,
    });

    // validate data and isAuthenticated = true if all right
    return res.data;
  } catch (e) {
    console.error(e);
    return false;
  }
};

// TODO
export const register = async (
  firstName,
  lastName,
  email,
  username,
  password
) => {
  try {
    const res = await axios.post(`${apiUrl}/auth/register`, {
      firstName,
      lastName,
      email,
      username,
      password,
    });
    // Add user in db
    return res.data;
  } catch (e) {
    console.error(e);
    return false;
  }
};
