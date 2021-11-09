import axios from 'axios';
import { apiUrl } from '../../constants';

// admin only
const all = async () => {
  try {
    const res = await axios.get(`${apiUrl}/adminFiles`);
    return res.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

const get = async fileId => {
  try {
    const res = await axios.get(`${apiUrl}/files/${fileId}`);
    return res.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

const allPublic = async () => {
  try {
    const res = await axios.get(`${apiUrl}/files`);
    return res.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

const fromUser = async userId => {
  try {
    const res = await axios.get(`${apiUrl}/filesFromUser/${userId}`);
    return res.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

const filesResource = {
  get,
  all,
  allPublic,
  fromUser,
};

export default filesResource;
