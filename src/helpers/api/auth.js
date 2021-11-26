import FetchAPI from './FetchAPI';

export const testAuth = async () => {
  try {
    const res = await FetchAPI.get(`/auth/isAuthenticated`);
    console.log(res.data.is_authenticated);
    return res.data.is_authenticated;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const fetchCurrentUser = async () => {
  try {
    const res = await FetchAPI.get(`/auth/currentUser`);
    return res.data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const login = async (username, password, remember = false) => {
  try {
    const res = await FetchAPI.post(`/auth/login`, {
      username,
      password,
      remember: !!remember,
    });

    return res.data.status === 'success';
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
  password,
) => {
  try {
    const res = await FetchAPI.post(`/auth/register`, {
      firstName,
      lastName,
      email,
      username,
      password,
    });

    return res.data;
  } catch (e) {
    console.error(e);
    return false;
  }
};

const authResource = {
  login,
  register,
  testAuth,
};

export default authResource;
