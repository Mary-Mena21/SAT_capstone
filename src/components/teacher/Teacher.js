import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Teacher.css";

export const Teacher = () => {
    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);
    //console.log(satUserObject.id);

    const navigate = useNavigate();
    const [teachers, setTeachers] = useState([]);

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(
                    `http://localhost:8033/teachers?_expand=user&id=${satUserObject.id}`
                );
                const teacherArray = await response.json();
                setTeachers(teacherArray);
                //console.log(teacherArray);
            };
            fetchData();
        },
        [] // When this array is empty, you are observing initial component state
    );

    return (
        <>
            <article key={"teachers"} className="teacher_container">
                {teachers.map((teacher) => {
                    return <>
                    <img
                    src={require(`../images/Logo_2_B.png`)}
                    /* className="student_img_B" */
                    style={{
                        width: "40px",
                        height: "40px",
                        marginLeft: "-10px",
                        display:"block",
                        marginBottom: "20px",
                        padding: "0",
                        left: "-10px",
                        right: "",
                        backgroundColor: "white",
                        borderRadius:"50%"
                    }}
                    />
                      <img
                        src={require(`../images/${teacher.teacherImg}`)}
                        className="student_img_B"
                        style={{
                            width: "40px",
                            height: "40px",
                            marginLeft: "-10px",
                            marginTop: "-10px",
                            padding: "0",
                            left: "-10px",
                            right: "",
                        }}
                        />

                    </>
                })}
            </article>
        </>
    );
};

{
    /* <h2 className="page_teacher">Teacher!</h2> */
}
///* <ul className="teacher_ul" > */
/*  </ul> */

//     {/* <Teacher
//         Image={teacher.teacherImg}
//     /> */}
//    {/*
//         <Teacher
//         Image={teacher.teacherImg}
//     />  */}

//        {/* <section key={teacher.id} > */}

//             {/*  <li> */}

//               {/*   <img
//                         src={require(`../images/${teacher.teacherImg}`)}
//                         className="student_img_B"
//                         style={{width:"40px", height:"40px", marginLeft:"-10px", padding:"0",left:"-10px", right:""}}
//                 /> */}
//                {/*  </li> */}
//                  {/* <br />
//             <li>Name : {teacher.user.fullName}</li>
//             <li>Email : {teacher.user.email}</li>
//                 <li>Phone : {teacher.phone}</li>*/}

//         {/* </section>  */}

// <>
// {/* <h2 className="page_teacher">Teacher!</h2> */}
// <article /* className="teacher_container" */>
//     {teachers.map((teacher) => {
//         {/* <Teacher
//             Image={teacher.teacherImg}
//         /> */}
//        {/*
//             <Teacher
//             Image={teacher.teacherImg}
//         />  */}

//            <section key={teacher.id} /* className="teacher_card" */>

//                 {/*  <li> */}
//                     {" "}
//                     <img
//                             src={require(`../images/${teacher.teacherImg}`)}
//                             className="student_img_B"
//                             style={{width:"40px", height:"40px", marginLeft:"-10px", padding:"0",left:"-10px", right:""}}
//                     />
//                    {/*  </li> */}
//                      {/* <br />
//                 <li>Name : {teacher.user.fullName}</li>
//                 <li>Email : {teacher.user.email}</li>
//                     <li>Phone : {teacher.phone}</li>*/}

//             </section>

//     })}
// </article>
// </>
