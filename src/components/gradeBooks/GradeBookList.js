import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const GradeBookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8033/gradeBooks`);
            const booksArray = await response.json();
            setBooks(booksArray);
        };
        fetchData();
    }, []);
    return (
        <>
            <h1>Grade Books</h1>
            <article className="Students">
                {books.map((book) => {
                    return (
                        <>
                            {/* <div>{book.bookName}</div> */}
                            <Link to={book.gradeBookLink}>
                                <img className="student_card"
                                    src={book.bookImg}
                                    height={"10%"}
                                    width={"10%"}
                                />
                            </Link>
                            {/* <div>{book.gradeBookLink}</div> */}
                        </>
                    );
                })}
            </article>
        </>
    );
};
