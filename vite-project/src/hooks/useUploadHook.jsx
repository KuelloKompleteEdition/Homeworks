import { useState } from "react";
import { getAll, upload, deleteFile } from "../firebase/files";
import { getDownloadURL } from "firebase/storage";

export const useUploadHook = () => {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [percent, setPercent] = useState(0);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;
    const uploadTask = upload(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
      },
      (err) => console.log(err),
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        setFiles(list => [...list, { name: file.name, url }]);
        setFile(null);
        setPercent(0);
      }
    );
  };

  const handleGetAll = async () => {
    const { items } = await getAll();
    const filesList = await Promise.all(
      items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return { name: itemRef.name, url };
      })
    );
    setFiles(filesList);
  };

  const handleDelete = async (fileName) => {
    try {
      await deleteFile(fileName);
      setFiles(files.filter(file => file.name !== fileName));
    } catch (error) {
      console.error('Error deleting the image:', error);
    }
  };

  return { files, percent, handleChange, handleUpload, handleGetAll, handleDelete };
};
