export const StudentSearch = ({setterFunction}) => {
    return (
        <div>
            <input
                onChange={(evt) => {
                    setterFunction(evt.target.value)
                    console.log(evt.target.value);
                }}
                type="text" placeholder="Student Search" />
            
            

        </div>
    );
};
