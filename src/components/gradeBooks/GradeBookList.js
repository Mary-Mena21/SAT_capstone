import { useEffect } from "react";
import { useState } from "react";
import "./GradeBookList.css"

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
            <h1 className="page_book">Grade Books!</h1>
            <article className="book_container">
                {books.map((book) => {
                    return (
                        <>
                            <article >
                            {/* <div>{book.bookName}</div> */}
                            <a href={book.gradeBookPdf} target="_blank">
                                <img className="student_book"
                                    src={book.bookImg}
                                    height={"auto"}
                                    width={"150rem"}
                                />
                            </a>
                            </article>
                        </>
                    );
                })}
            </article>
        </>
    );
};
//book.gradeBookLink

//                            <iframe width="400" height="315" src={book.gradeBookLink} frameborder="0" allowfullscreen></iframe>
//{/* <div>{book.gradeBookLink}</div> */}
//
                                {/* <iframe width="400" height="315" src={`${book.gradeBookPdf}`} frameborder="2"></iframe> */}
                            {/*     <iframe src="https://drive.google.com/file/d/1_QHjkwvEGXjIFMP1nw3TFTRlvPAd82Ur/preview" width="640" height="480" allow="autoplay"  frameborder="2"></iframe> */}