/** @jsxImportSource theme-ui */

import Link from "next/link";
import Head from "next/head";

export default function Movies({ movies }) {
  return (
    <>
      <Head>
        <title>Movies List App</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />{" "}
        <meta
          name="description"
          content="Movies list from the Api that populates the details of the movie and Statically generates the list of movies"
        ></meta>
      </Head>
      <h2 sx={{ fontFamily: "fantasy", fontSize: "2rem", textAlign: "center" }}>
        Rancid Movies List
      </h2>

      <ul
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          gap: "2%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {movies.movies.map((movie) => (
          <li
            key={movie.id}
            sx={{
              listStyleType: "none",
              marginBottom: "3rem",
              "@media (min-width:200px)": {
                maxWidth: "70%",
                flexBasis: "100%",
              },
              "@media (min-width:500px)": {
                flexBasis: "32.5%",
              },
              "@media (min-width:800px)": {
                flexBasis: "23.4%",
              },
              cursor: "pointer",
              transition: "transform .2s",
            }}
          >
            <Link href={`/movies/${movie.id}`}>
              <a
                sx={{
                  ":hover": {
                    boxShadow:
                      "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                  },
                }}
              >
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  sx={{
                    width: "100%",
                    ":hover": { transform: "scale(1.04)" },
                  }}
                />
                <figcaption
                  sx={{
                    fontSize: "1.4rem",
                    textAlign: "center",
                  }}
                >
                  {movie.title}
                </figcaption>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://rancid-tomatillos.herokuapp.com/api/v2/movies"
  );

  const data = await res.json();

  return {
    props: { movies: data },
  };
}
