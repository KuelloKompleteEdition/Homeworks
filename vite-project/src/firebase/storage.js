import { useState, useEffect } from 'react';
import { storage } from './config';
import { ref, uploadBytesResumable, getDownloadURL, listAll, deleteObject } from 'firebase/storage';

const useStorage = () => {
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState(null);
    const [error, setError] = useState(null);
    const [files, setFiles] = useState([]);

    const upload = (file, path) => {
        const storageRef = ref(storage, `${path}/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(percent);
            },
            (err) => {
                setError(err);
            },
            async () => {
                const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
                setUrl(downloadUrl);
            }
        );
    };

    const remove = async (filePath) => {
        const fileRef = ref(storage, filePath);
        try {
            await deleteObject(fileRef);
        } catch (error) {
            setError(error);
        }
    };

    const getAllFiles = async (path) => {
        const listRef = ref(storage, path);
        try {
            const res = await listAll(listRef);
            const urls = await Promise.all(res.items.map(item => getDownloadURL(item)));
            setFiles(urls);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        getAllFiles('images');
    }, []);

    return { progress, url, error, upload, remove, files, getAllFiles };
};

export default useStorage;
