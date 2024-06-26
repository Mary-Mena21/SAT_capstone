import { useEffect, useState } from "react";
import "./StudentsBirthdays.css";

export const StudentsBirthdays = () => {
    const [birthdays, setBirthdays] = useState([]);
    const [filteredBirthdays, setFilteredBirthdays] = useState([]);

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

    /* --------Jan--------- */
    useEffect(() => {
        const Jan = birthdays.filter((birthday) =>
            birthday.dob.startsWith("01", 5)
        );
        if (Jan) {
            setFilteredBirthdays(Jan);
        }
    }, [Jan]);
    /* --------Feb--------- */
    useEffect(() => {
        const Feb = birthdays.filter((birthday) =>
            birthday.dob.startsWith("02", 5)
        );
        if (Feb) {
            setFilteredBirthdays(Feb);
        }
    }, [Feb]);
    /* --------Mar--------- */
    useEffect(() => {
        const Mar = birthdays.filter((birthday) =>
            birthday.dob.startsWith("03", 5)
        );
        if (Mar) {
            setFilteredBirthdays(Mar);
        }
    }, [Mar]);
    /* --------Apr--------- */
    useEffect(() => {
        const Apr = birthdays.filter((birthday) =>
            birthday.dob.startsWith("04", 5)
        );
        if (Apr) {
            setFilteredBirthdays(Apr);
        }
    }, [Apr]);
    /* --------May--------- */
    useEffect(() => {
        const May = birthdays.filter((birthday) =>
            birthday.dob.startsWith("05", 5)
        );
        if (May) {
            setFilteredBirthdays(May);
        }
    }, [May]);
    /* --------Jun--------- */
    useEffect(() => {
        const Jun = birthdays.filter((birthday) =>
            birthday.dob.startsWith("06", 5)
        );
        if (Jun) {
            setFilteredBirthdays(Jun);
        }
    }, [Jun]);
    /* --------Jul--------- */
    useEffect(() => {
        const Jul = birthdays.filter((birthday) =>
            birthday.dob.startsWith("07", 5)
        );
        if (Jul) {
            setFilteredBirthdays(Jul);
        }
    }, [Jul]);
    /* --------Aug--------- */
    useEffect(() => {
        const Aug = birthdays.filter((birthday) =>
            birthday.dob.startsWith("08", 5)
        );
        if (Aug) {
            setFilteredBirthdays(Aug);
        }
    }, [Aug]);
    /* --------Sep--------- */
    useEffect(() => {
        const Sep = birthdays.filter((birthday) =>
            birthday.dob.startsWith("09", 5)
        );
        if (Sep) {
            setFilteredBirthdays(Sep);
        }
    }, [Sep]);
    /* --------Oct--------- */
    useEffect(() => {
        const Oct = birthdays.filter((birthday) =>
            birthday.dob.startsWith("10", 5)
        );
        if (Oct) {
            setFilteredBirthdays(Oct);
        }
    }, [Oct]);
    /* --------Nov--------- */
    useEffect(() => {
        const Nov = birthdays.filter((birthday) =>
            birthday.dob.startsWith("11", 5)
        );
        if (Nov) {
            setFilteredBirthdays(Nov);
        }
    }, [Nov]);
    /* --------Dec--------- */
    useEffect(() => {
        const Dec = birthdays.filter((birthday) =>
            birthday.dob.startsWith("12", 5)
        );
        if (Dec) {
            setFilteredBirthdays(Dec);
        }
    }, [Dec]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:5000/students?&classId=${satUserObject.id}`
            );
            const birthdaysArray = await response.json();
            setBirthdays(birthdaysArray);
        };
        fetchData();
    }, []);

    return (
        <>
            <section className="birthday_container">
                <h1 className="page_birthday">Birthdays!</h1>
                <div className="button_container">
                    <button
                        className="birthday_card_button"
                        onClick={() => {
                            setJan(true);
                        }}
                    >
                        January
                    </button>
                    <button
                        className="birthday_card_button"
                        onClick={() => {
                            setFeb(true);
                        }}
                    >
                        February
                    </button>
                    <button
                        className="birthday_card_button"
                        onClick={() => {
                            setMar(true);
                        }}
                    >
                        March
                    </button>
                    <button
                        className="birthday_card_button"
                        onClick={() => {
                            setApr(true);
                        }}
                    >
                        April
                    </button>
                    <button
                        className="birthday_card_button"
                        onClick={() => {
                            setMay(true);
                        }}
                    >
                        May
                    </button>
                    <button
                        className="birthday_card_button"
                        onClick={() => {
                            setJun(true);
                        }}
                    >
                        June
                    </button>
                    <button
                        className="birthday_card_button"
                        onClick={() => {
                            setJul(true);
                        }}
                    >
                        July
                    </button>
                    <button
                        className="birthday_card_button"
                        onClick={() => {
                            setAug(true);
                        }}
                    >
                        August
                    </button>
                    <button
                        className="birthday_card_button"
                        onClick={() => {
                            setSep(true);
                        }}
                    >
                        September
                    </button>
                    <button
                        className="birthday_card_button"
                        onClick={() => {
                            setOct(true);
                        }}
                    >
                        October
                    </button>
                    <button
                        className="birthday_card_button"
                        onClick={() => {
                            setNov(true);
                        }}
                    >
                        November
                    </button>
                    <button
                        className="birthday_card_button"
                        onClick={() => {
                            setDec(true);
                        }}
                    >
                        December
                    </button>
                </div>
                <article>
                    {filteredBirthdays.map((birthday) => {
                        return (
                            <>
                                <div className=""></div>
                                <section
                                    key={birthday.id}
                                    className="student_birthday_B"
                                >
                                    <img
                                        src={require(`../images/${birthday.studentImg}`)}
                                        className="student_img_B"
                                    />
                                    <br />
                                    <h3 className="student_info_name">
                                        {" "}
                                        {birthday.fullName}
                                    </h3>
                                    <br />
                                    <h3 className="student_info_dob">
                                        {" "}
                                        {birthday.dob}
                                    </h3>
                                </section>
                            </>
                        );
                    })}
                </article>
            </section>
        </>
    );
};
