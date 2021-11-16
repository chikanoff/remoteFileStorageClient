import FetchAPI from './FetchAPI';

// admin only
const all = async () => {
  try {
    const res = await FetchAPI.get(`/files/adminFiles`);
    return res.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

const get = async fileId => {
  try {
    const res = await FetchAPI.get(`/files/${fileId}`);
    return res.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

const allPublic = async () => {
  try {
    const res = await FetchAPI.get(`/files/all`);
    return res.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

// TODO: This
const fromUser = async userId => {
  try {
    const res = await FetchAPI.get(`/files/filesFromUser/${userId}`);
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
