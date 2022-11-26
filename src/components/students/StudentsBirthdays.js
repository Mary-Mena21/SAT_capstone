import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const StudentsBirthdays = () => {
    const [birthdays, setBirthdays] = useState([]);

    const [Jan, setJan] = useState(false);
    const [Feb, setFeb] = useState(false);
    const [Mar, setMar] = useState(false);
    const [Apr, setApr] = useState(false);
    const [May, setMay] = useState(false);
    const [Jun, setJun] = useState(false);
    const [Jul, setJul] = useState(false);
    const [Aug, setAug] = useState(false);
    const [Sep, setSep] = useState(false);
    const [Oct, setOct] = useState(false);
    const [Nov, setNov] = useState(false);
    const [Dec, setDec] = useState(false);

    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);
    const navigate = useNavigate();

    /* --------Jan--------- */
    useEffect(() => {
        const Jan = birthdays.filter((birthday) =>
            birthday.dob.startsWith("01", 8)
        );
        if (Jan) {
            setBirthdays(Jan);
        }
    }, [Jan]);
    /* --------Feb--------- */
    useEffect(() => {
        const Feb = birthdays.filter((birthday) =>
            birthday.dob.startsWith("02", 8)
        );
        if (Feb) {
            setBirthdays(Feb);
        }
    }, [Feb]);
    /* --------Mar--------- */
    useEffect(() => {
        const Mar = birthdays.filter((birthday) =>
            birthday.dob.startsWith("03", 8)
        );
        if (Mar) {
            setBirthdays(Mar);
        }
    }, [Mar]);
    /* --------Apr--------- */
    useEffect(() => {
        const Apr = birthdays.filter((birthday) =>
            birthday.dob.startsWith("04", 8)
        );
        if (Apr) {
            setBirthdays(Apr);
        }
    }, [Apr]);
    /* --------May--------- */
    useEffect(() => {
        const May = birthdays.filter((birthday) =>
            birthday.dob.startsWith("05", 8)
        );
        if (May) {
            setBirthdays(May);
        }
    }, [May]);
    /* --------Jun--------- */
    useEffect(() => {
        const Jun = birthdays.filter((birthday) =>
            birthday.dob.startsWith("06", 8)
        );
        if (Jun) {
            setBirthdays(Jun);
        }
    }, [Jun]);
    /* --------Jul--------- */
    useEffect(() => {
        const Jul = birthdays.filter((birthday) =>
            birthday.dob.startsWith("07", 8)
        );
        if (Jul) {
            setBirthdays(Jul);
        }
    }, [Jul]);
    /* --------Aug--------- */
    useEffect(() => {
        const Aug = birthdays.filter((birthday) =>
            birthday.dob.startsWith("08", 8)
        );
        if (Aug) {
            setBirthdays(Aug);
        }
    }, [Aug]);
    /* --------Sep--------- */
    useEffect(() => {
        const Sep = birthdays.filter((birthday) =>
            birthday.dob.startsWith("09", 8)
        );
        if (Sep) {
            setBirthdays(Sep);
        }
    }, [Sep]);
    /* --------Oct--------- */
    useEffect(() => {
        const Oct = birthdays.filter((birthday) =>
            birthday.dob.startsWith("10", 8)
        );
        if (Oct) {
            setBirthdays(Oct);
        }
    }, [Oct]);
    /* --------Nov--------- */
    useEffect(() => {
        const Nov = birthdays.filter((birthday) =>
            birthday.dob.startsWith("11", 8)
        );
        if (Nov) {
            setBirthdays(Nov);
        }
    }, [Nov]);
    /* --------Dec--------- */
    useEffect(() => {
        const Dec = birthdays.filter((birthday) =>
            birthday.dob.startsWith("12", 8)
        );
        if (Dec) {
            setBirthdays(Dec);
        }
    }, [Dec]);

    //const Birthday = () => {
        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch(
                    `http://localhost:8033/students?&classId=${satUserObject.id}`
                );
                const birthdaysArray = await response.json();
                setBirthdays(birthdaysArray);
            };
            fetchData();
        }, []);
    //}


    /* ------------------------------ */
    const handleButtonClick = (event) => {
        event.preventDefault();
        setBirthdays(birthdays);
    };
    /* ------------------------------ */


    return (
        <>
            <h1>Birthdays Of The Month</h1>
            {/* <button onClick={(evt) => { setBirthdays(true) }}>setBirthdays</button> */}
            {/* <button onClick={(evt) => {setBirthdays(birthdays)}}>All</button> */}
            
            <button onClick={(evt) => {setJan(true)}}>January</button>
            <button
                onClick={() => {
                    setFeb(true);
                }}
            >
                February
            </button>
            <button
                onClick={() => {
                    setMar(true);
                }}
            >
                Mars
            </button>
            <button
                onClick={() => {
                    setApr(true);
                }}
            >
                April
            </button>
            <button
                onClick={() => {
                    setMay(true);
                }}
            >
                May
            </button>
            <button
                onClick={() => {
                    setJun(true);
                }}
            >
                June
            </button>
            <button
                onClick={() => {
                    setJul(true);
                }}
            >
                July
            </button>
            <button
                onClick={() => {
                    setAug(true);
                }}
            >
                August
            </button>
            <button
                onClick={() => {
                    setSep(true);
                }}
            >
                September
            </button>
            <button
                onClick={() => {
                    setOct(true);
                }}
            >
                October
            </button>
            <button
                onClick={() => {
                    setNov(true);
                }}
            >
                November
            </button>
            <button
                onClick={() => {
                    setDec(true);
                }}
            >
                December
            </button>

            <h3>Grade birthdays</h3>

            <article className="container">
                {birthdays.map((birthday) => {
                    return (
                        <>
                            <section key={birthday.id} className="student_card">
                                {/*  <div className="student_card "> */}
                                <img
                                className="student_img"
                                src={birthday.studentImg}
                                height={"10%"}
                                width={"10%"}
                            />
                                <h3 className="student_info">
                                    {" "}
                                    Name:{birthday.fullName}
                                    <br/>
                                    Birthday: {birthday.dob}
                                </h3>
                            </section>
                        </>
                    );
                })}
            </article>
        </>
    );
};
