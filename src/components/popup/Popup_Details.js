// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import React from 'react';
// import { render } from '@testing-library/react';

// export const Popup_Details=(props)=> {
//   return (
//     <Modal
//       {...props}
//       size="sm"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//           <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       {/* <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer> */}
//     </Modal>
//   );
// }

// function Appx() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <Popup_Details
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<Appx />);

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const Popup_Details = () => {
    const [smShow, setSmShow] = useState(false);


    return (
        <>
            <Button onClick={() => setSmShow(true)} className="me-2">
                Small modal
            </Button>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Small Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </>
    );
};

