import { useEffect } from "react";
import { useState } from "react";

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
                            <a href={book.gradeBookPdf} target="_blank">
                                <img className="student_card"
                                    src={book.bookImg}
                                    height={"10%"}
                                    width={"10%"}
                                />
                            </a>
                            
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