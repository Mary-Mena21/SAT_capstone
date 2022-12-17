import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Button from "react-bootstrap/Button";
import { saveAs } from "file-saver";
import "./Camera.css";

export const Camera = () => {
    const [img, setImg] = useState(null);
    const webcamRef = useRef(null);

    const videoConstraints = {
        width: 200,
        height: 200,
        facingMode: "user",
    };

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImg(imageSrc);
        saveAs(imageSrc, "image.jpg");
    }, [webcamRef]);

    return (
        <>
            <h1 className="page_camera_style">Camera!</h1>
            <section>
                {img === null ? (
                    <>
                        <Webcam
                            audio={false}
                            mirrored={true}
                            height={300}
                            width={300}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                            download={img}
                            className="student_camera_style"
                        />
                        <br />
                        <Button
                            type="submit"
                            variant="secondary"
                            size="md"
                            className="capture_camera"
                            onClick={capture}
                        >
                            Capture photo
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            type="submit"
                            variant="secondary"
                            size="md"
                            className="retake_camera"
                            onClick={() => setImg(null)}
                        >
                            Retake
                        </Button>
                    </>
                )}
            </section>
        </>
    );
};
