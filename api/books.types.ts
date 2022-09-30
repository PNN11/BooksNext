export interface Person {
  birth_year: number | null;
  death_year: number | null;
  name: string;
}

export interface Book {
  id: number;
  title: string;
  subjects: string[];
  authors: Person[];
  translators: Person[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean | null;
  media_type: string;
  formats: any;
  download_count: number;
}

export interface BooksResponceSuccess {
  count: number;
  next: string | null;
  previous: string | null;
  results: Book[];
}
