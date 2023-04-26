import { Box, Modal, Slider, Button } from "@mui/material";
import AvatarEditor from "react-avatar-editor";
import { AiFillGithub } from "react-icons/ai";
import {useRef, useState} from 'react'

const boxStyle = {
    width: "300px",
    height: "300px",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center"
  };
  const modalStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  
  
const CropperModal = ({ src, modalOpen, setModalOpen, setPreview }) => {
const [slideValue, setSlideValue] = useState(10);
const cropRef = useRef(null);

//handle save
const handleSave = async () => {
    if (cropRef) {
    const dataUrl = cropRef.current.getImage().toDataURL();
    const result = await fetch(dataUrl);
    const blob = await result.blob();
    setPreview(URL.createObjectURL(blob));
    setModalOpen(false);
    }
};

return (
    <Modal sx={modalStyle} open={modalOpen}>
    <Box sx={boxStyle}>
        <AvatarEditor
        ref={cropRef}
        image={src}
        style={{ width: "100%", height: "100%" }}
        border={50}
        //   borderRadius={150}
        color={[0, 0, 0, 0.72]}
        scale={slideValue / 10}
        rotate={0}
        />

        <Slider
        min={10}
        max={50}
        sx={{
            margin: "0 auto",
            width: "80%",
            color: "cyan"
        }}
        size="medium"
        defaultValue={slideValue}
        value={slideValue}
        onChange={(e) => setSlideValue(e.target.value)}
        />
        <Box
        sx={{
            display: "flex",
            padding: "10px",
            border: "3px solid white",
            background: "black"
        }}
        >
        <Button
            size="small"
            sx={{ marginRight: "10px", color: "white", borderColor: "white" }}
            variant="outlined"
            onClick={(e) => setModalOpen(false)}
        >
            cancel
        </Button>
        <Button
            sx={{ background: "#5596e6" }}
            size="small"
            variant="contained"
            onClick={handleSave}
        >
            Save
        </Button>
        </Box>
    </Box>
    </Modal>
);
}; 
export default CropperModal;