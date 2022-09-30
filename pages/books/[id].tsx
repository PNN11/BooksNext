import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import { getBook, getBooks } from "../../api/books";
import Book from "../../components/Book";

const BookPage = ({ book }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <>{book && <Book book={book} />}</>;
};

export default BookPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const books = await getBooks("https://gutendex.com/books");
  const paths = books.results.map((book) => ({
    params: { id: book.id.toString() },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const book = await getBook(params?.id);
  return { props: { book } };
};
