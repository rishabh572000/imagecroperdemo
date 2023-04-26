
import { useRef, useState } from "react";
import { FcAddImage } from "react-icons/fc";
import "./Cropper.css";
import CropperModal from './CropperModal'




// Container
const Cropper = () => {
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const inputRef = useRef(null);

  const handleInputClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  const handleImgChange = (e) => {
    setSrc(URL.createObjectURL(e.target.files[0]));
    setModalOpen(true);
  };

  return (
    <>
      <main className="container">
        <CropperModal
          modalOpen={modalOpen}
          src={src}
          setPreview={setPreview}
          setModalOpen={setModalOpen}
        />
        <a href="/" onClick={handleInputClick}>
          <FcAddImage className="add-icon" />
        </a>
        <small>Click to select image</small>
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleImgChange}
        />
        <div className="img-container">
          <img
            src={
              preview ||
              " https://www.signivis.com/img/custom/avatars/member-avatar-01.png"
            }
            alt=""
            width="200"
            height="200"
          />
        </div>
      </main>

   
    </>
  );
};

export default Cropper;
