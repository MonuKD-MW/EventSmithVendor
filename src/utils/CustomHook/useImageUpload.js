import { useState } from 'react';

function useImageUpload(initialImage = null) {
  const [image, setImage] = useState(initialImage);
  const [file, setFile] = useState(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImage(URL.createObjectURL(selectedFile));
    }
  };

  const removeImage = () => {
    setImage(null);
    setFile(null);
  };

  return {
    image,
    file,
    handleImageChange,
    removeImage,
  };
}

export default useImageUpload;
