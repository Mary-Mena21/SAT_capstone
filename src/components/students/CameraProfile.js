import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import "./AppM.css";

export const CameraProfile = () => {
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
    }, [webcamRef]);

    return (
        <div className="Container">
            {img === null ? (
                <>
                    <Webcam
                        audio={false}
                        mirrored={true}
                        height={200}
                        width={200}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                    />
                    <button onClick={capture}>Capture photo</button>
                </>
            ) : (
                <>
                    <img src={img} alt="screenshot" />
                    <button onClick={() => setImg(null)}>Retake</button>
                </>
            )}
        </div>
    );
};
/* ------------------------------------------ */

// function download(source) {
//     const fileName = source.split("/").pop();
//     var el = document.createElement("a");
//     el.setAttribute("href", source);
//     el.setAttribute("download", fileName);
//     document.body.appendChild(el);
//     el.click();
//     el.remove();
//}

// How to use back camera for mobile
// const videoConstraints = {
//     facingMode: { exact: "environment" }
//   };
//   return <div>
//     <Webcam ref={webRef} videoConstraints={videoConstraints} />
//   </div>

// import React, { useCallback, useRef, useState } from "react";
// import Webcam from "react-webcam";

// export const WebcamComponent=()=> {
//   const [img, setImg] = useState(null);
//   const webcamRef = useRef(null);

//   const videoConstraints = {
//     width: 420,
//     height: 420,
//     facingMode: "user",
//   };

//   const capture = useCallback(() => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setImg(imageSrc);
//   }, [webcamRef]);

//   return (
//     <div className="Container">
//       {img === null ? (
//         <>
//           <Webcam
//             audio={false}
//             mirrored={true}
//             height={400}
//             width={400}
//             ref={webcamRef}
//             screenshotFormat="image/jpeg"
//             videoConstraints={videoConstraints}
//           />
//           <button onClick={capture}>Capture photo</button>
//         </>
//       ) : (
//         <>
//           <img src={img} alt="screenshot" />
//           <button onClick={() => setImg(null)}>Retake</button>
//         </>
//       )}
//     </div>
//   );
// }

//The code below uses the rear camera.
// function App() {
// const videoConstraints = {
//     width: { min: 480 },
//     height: { min: 720 },
//     facingMode: { exact: "environment" }
//   };

//   return (
//     <div className="App">
//       <Webcam width={480} height={720} videoConstraints={videoConstraints} />
//     </div>
//   );
// }

// import React, { useState } from "react";
// import Webcam from "react-webcam";

// const WebcamComponent = () => <Webcam />;
// const videoConstraints = {
//     width: 400,
//     height: 400,
//     facingMode: "user",
// };
// export const CameraProfile = () => {
//     const [picture, setPicture] = useState("");
//     const webcamRef = React.useRef(null);
//     const capture = React.useCallback(() => {
//         const pictureSrc = webcamRef.current.getScreenshot();
//         setPicture(pictureSrc);
//     });
//     return (
//         <div>
//             <h2 className="mb-5 text-center">
//                 React Photo Capture using Webcam Examle
//             </h2>
//             <div>
//                 {picture == "" ? (
//                     <Webcam
//                         audio={false}
//                         height={200}
//                         ref={webcamRef}
//                         width={200}
//                         screenshotFormat="image/jpeg"
//                         videoConstraints={videoConstraints}
//                     />
//                 ) : (
//                     <img src={picture} />
//                 )}
//             </div>
//             <div>
//                 {picture != "" ? (
//                     <button
//                         onClick={(e) => {
//                             e.preventDefault();
//                             setPicture();
//                         }}
//                         className="btn btn-primary"
//                     >
//                         Retake
//                     </button>
//                 ) : (
//                     <button
//                         onClick={(e) => {
//                             e.preventDefault();
//                             capture();
//                         }}
//                         className="btn btn-danger"
//                     >
//                         Capture
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };
//image.png
/* ------------------------------------ */
// import React, { useCallback, useRef, useState } from "react";
// import Webcam from "react-webcam";
// import { connect } from "react-redux";
// import {saveJobImage} from "react-redux"
// import "./AppM.css";
// import { render } from "@testing-library/react";
// state = {
//     imageDate: null,
//     image_name: "",
//     saveImage:false,
// }

// setRef = (Webcam) => {
//     this.Webcam = Webcam;
// }

// capture = () => {
//     const imageSrc = this.Webcam.getScreenshot();
//     this.setState({imageSrc: imageSrc});
// }

// onClickRetake = (e) => {
//     e.persist();
//     this.setState({
//         imageData:null,
//     })
// }

// onClickSave = (e) => {
//     e.persist();
//     this.setState((previousState) => {
//         return {
//             saveImage:previousState.saveImage,
//         }
//     })
// }

// handleChange = (e) => { 
//     e.previousDefault();
//     let imageObject = {
//         image_name: this.state.image_name,
//         job_id: this.state.job.id,
//         image_data: this.state.imageData
//     }
//     this.props.saveJobImage(imageObject)
// }

// render(){
// <></>
// }