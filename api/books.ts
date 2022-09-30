import axios from "axios";
import { Book, BooksResponceSuccess } from "./books.types";

export const getBooks = (
  url: string,
  searchValue?: string,
  languages?: string
) =>
  axios
    .get<BooksResponceSuccess>(url, {
      params: { search: searchValue, languages: languages },
    })
    .then((res) => res.data);

export const getBook = async (id: string | string[] | undefined) => {
  const { data } = await axios.get<Book>(`https://gutendex.com/books/${id}`);
  return data;
};
