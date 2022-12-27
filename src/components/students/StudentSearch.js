import "./Students.css";

export const StudentSearch = ({ setterFunction }) => {
    return (
        <div>
            <input
                className="student_search"
                onChange={(evt) => {
                    setterFunction(evt.target.value);
                    //console.log(evt.target.value);
                }}
                type="text"
                placeholder="Student Search"
            />
        </div>
    );
};
