import React, { useEffect } from 'react';
import { useUploadHook } from '../hooks/useUploadHook';

const ImagesCrud = () => {
  const { files, percent, handleChange, handleUpload, handleGetAll, handleDelete } = useUploadHook();

  useEffect(() => {
    handleGetAll();
  }, []);

  return (
    <div>
      <h1>Image CRUD</h1>
      <div>
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>Upload</button>
        <p>Upload progress: {percent}%</p>
      </div>
      <div>
        <h2>Images</h2>
        {files.map((file) => (
          <div key={file.name}>
            <img src={file.url} alt={file.name} width="100" />
            <button onClick={() => handleDelete(file.name)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesCrud;
