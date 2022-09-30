import Link from "next/link";
import { ChangeEvent, useState } from "react";
import useSWR from "swr";

import { getBooks } from "../../api/books";
import BookCard from "../BookCard";
import Input from "../Input";
import { Filter, ListWrapper, StyledLink, Wrapper } from "./Books.list.styles";
import { LanguagesType } from "./BooksList.types";

const BooksList = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [languages, setLanguages] = useState<LanguagesType>({
    en: false,
    ru: false,
    fr: false,
  });

  const selectLangs = (langs: LanguagesType) => {
    const arrLangs: string[] = [];
    Object.keys(langs).forEach((lang) => {
      if (langs[lang]) arrLangs.push(lang);
    });
    return arrLangs.length ? arrLangs.join(",") : null;
  };

  const { data, error } = useSWR(
    [`https://gutendex.com/books`, searchValue, selectLangs(languages)],
    getBooks
  );

  const handleChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleChangeLanguages = (e: ChangeEvent<HTMLInputElement>) => {
    setLanguages({ ...languages, [e.target.name]: !languages[e.target.name] });
  };

  return (
    <Wrapper>
      <Filter>
        <div>
          <Input
            checked={languages.ru}
            name="ru"
            type="checkbox"
            label="RU"
            id="ru_lang"
            onChange={handleChangeLanguages}
          />
          <Input
            checked={languages.en}
            name="en"
            type="checkbox"
            label="EN"
            id="en_lang"
            onChange={handleChangeLanguages}
          />
          <Input
            checked={languages.fr}
            name="fr"
            type="checkbox"
            label="FR"
            id="fr_lang"
            onChange={handleChangeLanguages}
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
