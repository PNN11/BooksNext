import type { NextPage } from "next";
import Head from "next/head";

import BooksList from "../components/BooksList/BooksList";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Books app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,600;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <BooksList />
    </div>
  );
};

export default Home;
