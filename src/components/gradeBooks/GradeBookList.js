import { useEffect } from "react";
import { useState } from "react";
import "./GradeBookList.css";

export const GradeBookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/gradeBooks`);
            const booksArray = await response.json();
            setBooks(booksArray);
        };
        fetchData();
    }, []);
    return (
        <>
            <section>
                <h1 className="page_book">Curriculum!</h1>
                <article className="book_container">
                    {books.map((book) => {
                        return (
                            <>
                                <article className="student_book">
                                    <div>{book.grade}</div>
                                    <a href={book.gradeBookPdf} target="_blank">
                                        <img
                                            src={book.bookImg}
                                            height={"auto"}
                                            width={"120rem"}
                                        />
                                    </a>
                                </article>
                            </>
                        );
                    })}
                </article>
            </section>
        </>
    );
};
