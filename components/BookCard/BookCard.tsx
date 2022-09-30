import React from "react";
import Image from "next/image";
import { Card } from "./BookCard.styles";
import { BookCardProps } from "./BooksCard.types";

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { title, authors, download_count, formats } = book;

  return (
    <Card>
      {<Image src={formats["image/jpeg"]} width={200} height={250} />}
      <h5>{title.slice(0, 30)}</h5>
      <h5>
        Authors:
        {authors.map((author) => `${author.name} `)}
      </h5>
      <p>Download count: {download_count}</p>
    </Card>
  );
};

export default BookCard;
