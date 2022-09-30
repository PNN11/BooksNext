import Link from "next/link";
import { ChangeEvent, useState } from "react";
import useSWR from "swr";

import { getBooks } from "../../api/books";
import BookCard from "../BookCard";
import Input from "../Input";
import { Filter, ListWrapper, StyledLink, Wrapper } from "./Books.list.styles";

const BooksList = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [en, setEn] = useState<string | null>(null);
  const [ru, setRu] = useState<string | null>(null);
  const [fr, setFr] = useState<string | null>(null);

  const selectLangs = (arr: (string | null)[]) => {
    const arrLangs: string[] = [];
    arr.forEach((lang) => {
      lang && arrLangs.push(lang);
    });
    return arrLangs.length ? arrLangs.join(",") : null;
  };

  const { data, error } = useSWR(
    [`https://gutendex.com/books`, searchValue, selectLangs([en, ru, fr])],
    getBooks
  );

  const handleChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleChangeEnLanguage = (e: ChangeEvent<HTMLInputElement>) => {
    en === "en" ? setEn(null) : setEn("en");
  };
  const handleChangeRuLanguage = (e: ChangeEvent<HTMLInputElement>) => {
    ru === "ru" ? setRu(null) : setRu("ru");
  };
  const handleChangeFrLanguage = (e: ChangeEvent<HTMLInputElement>) => {
    fr === "fr" ? setFr(null) : setFr("fr");
  };

  return (
    <Wrapper>
      <Filter>
        <div>
          <Input
            checked={!!ru}
            name="ru"
            type="checkbox"
            label="RU"
            id="ru_lang"
            onChange={handleChangeRuLanguage}
          />
          <Input
            checked={!!en}
            name="en"
            type="checkbox"
            label="EN"
            id="en_lang"
            onChange={handleChangeEnLanguage}
          />
          <Input
            checked={!!fr}
            name="fr"
            type="checkbox"
            label="FR"
            id="fr_lang"
            onChange={handleChangeFrLanguage}
          />
        </div>
        <Input
          type="search"
          label="Search"
          id="search"
          value={searchValue}
          onChange={handleChangeSearchValue}
        />
      </Filter>
      <ListWrapper>
        {error && "Something happened"}
        {!error && !data && "Loading"}
        {!error && data && !data?.results.length && "Nothing found"}
        {data?.results &&
          !error &&
          data.results.map((book) => (
            <StyledLink key={book.id} href={`/books/${book.id}`}>
              <a>
                <BookCard book={book} />
              </a>
            </StyledLink>
          ))}
      </ListWrapper>
    </Wrapper>
  );
};

export default BooksList;
