/* import { Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'; */

import "./StudentSearch.css"

export const StudentSearch = ({ setterFunction }) => {
    return (
        <div>
           <input
                className="student_search"
                onChange={(evt) => {
                    setterFunction(evt.target.value);
                    console.log(evt.target.value);
                }}
                type="text"
                placeholder="Student Search"
            /> 

{/*             <div style={{width:"40px"}} >
            <InputGroup.Checkbox/>
           </div> */}

{/*             <Button
                
            onChange={(evt) => {
                setterFunction(evt.target.value);
                console.log(evt.target.value);
            }}
            type="text"
            placeholder="Student Search"
                variant="outline-success">Search</Button> */}
        </div>
    );
};
