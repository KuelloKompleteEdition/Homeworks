import { getStorage, ref, uploadBytesResumable, listAll, deleteObject } from "firebase/storage";
import { storage } from "./config";  // Ensure this imports the correct Firebase storage configuration

const storageRef = ref(storage, 'files/');

export const upload = (file) => {
  const fileRef = ref(storageRef, file.name);
  return uploadBytesResumable(fileRef, file);
};

export const getAll = () => {
  return listAll(storageRef);
};

export const deleteFile = (fileName) => {
  const fileRef = ref(storageRef, fileName);
  return deleteObject(fileRef);
};
