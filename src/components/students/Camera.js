import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Button from "react-bootstrap/Button";
import { saveAs } from "file-saver";
import "./Camera.css";
import { FaCameraRetro } from "react-icons/fa";

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
            <section className="camera_container">
                {img === null ? (
                    <>
                        <div className="lins_background">
                            <Webcam
                                audio={false}
                                mirrored={true}
                                height={350}
                                width={350}
                                borderRadius={50}
                                ref={webcamRef}
                                style={{ borderRadius: "50%" }}
                                screenshotFormat="image/jpeg"
                                videoConstraints={videoConstraints}
                                download={img}
                                className="student_camera_style"
                            />
                            <button
                                style={{
                                    top: "-11.5rem",
                                    position: "relative",
                                    zIndex: 100,
                                }}
                                className="click"
                                type="submit"
                                variant="secondary"
                                size="md"
                                onClick={capture}
                            ></button>
                        </div>
                        <br />
                        <Button
                            type="submit"
                            variant="secondary"
                            size="md"
                            className="capture_camera"
                            onClick={capture}
                        >
                            <FaCameraRetro />
                            &nbsp; Capture Photo
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
                            Retake Photo
                        </Button>
                    </>
                )}
            </section>
        </>
    );
};
