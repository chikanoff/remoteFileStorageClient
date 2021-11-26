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
const fromUser = async () => {
  try {
    const res = await FetchAPI.get(`/files/filesFromUser`);
    return res.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

const deleteFile = async fileId => {
  try {
    const res = await FetchAPI.delete(`/files/${fileId}`);
    return res.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

const deleteFiles = async fileIds => {
  try {
    const res = await FetchAPI.delete(`/files/deleteMany`, { data: fileIds });
    return res.data;
  } catch (e) {
    console.error(e);
    return false;
  }
};

const filesResource = {
  get,
  all,
  allPublic,
  fromUser,
  deleteFile,
  deleteFiles,
};

export default filesResource;
