import "./StudentAttendanceCalender.css";
export const StudentAttendanceCalender = ({ setterFunction, dateM }) => {
    return(
        <>
            <div>
                {/* <>container</> */}
                <input className="page_attendance"
                required
                autoFocus
                type="date"
                name="dob"
        onChange={(evt) => {
                        setterFunction(evt.target.value) 
                        
            //setterFunction(evt.target.value) 
            //let dateM = new Date(evt.target.value)
            //console.log(evt.target.value);
                    }}
                    //type="text" placeholder="Enter search terms"
 />
    
    

</div>
            
        </>
    )
}