import Link from "next/link";
import React from "react";
import BookCard from "../BookCard";

import { Wrapper } from "../BooksList/Books.list.styles";
import { BookHeader, BookWrapper } from "./Book.styles";
import { BookProps } from "./Book.types";

const Book: React.FC<BookProps> = ({ book }) => {
  return (
    <Wrapper>
      <BookHeader>
        <Link href="/">
          <a>Back to books</a>
        </Link>
      </BookHeader>
      <BookWrapper>
        <BookCard book={book} />
        <div>
          <h3>Subjects</h3>
          {book?.subjects.map((subject) => (
            <p key={subject}>{subject}</p>
          ))}
        </div>
      </BookWrapper>
    </Wrapper>
  );
};

export default Book;
