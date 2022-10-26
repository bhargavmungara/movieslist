/** @jsxImportSource theme-ui */

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Date from "../../components/date";
import { darken, lighten } from "@theme-ui/color";

export default function Movie() {
  const router = useRouter();
  const [movie, setMovie] = useState("");

  const { query } = router;

  useEffect(() => {
    requestMovieDetails();
  }, [query.id]);

  async function requestMovieDetails() {
    try {
      const res = await fetch(
        `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${query.id}`
      );
      const { movie } = await res.json();

      setMovie(movie);
    } catch (e) {
      console.error(e);
    }
  }

  // let mi = String(movie.runtime / 60);
  // let ie = mi.indexOf(".");
  // let er = mi.slice(ie);

  // let ef = `0${er}`;
  // console.log(ef);
  // let eg = Math.trunc(Number(ef).toFixed(2) * 60);
  // console.log(eg);
  // let ege = Math.trunc(movie.runtime / 60);
  // console.log(ege);

  // console.log(`${ege}hr and ${eg}minutes`);

  // let x = movie.runtime / 60;
  // let init = Math.trunc(x);
  // let floa = Math.trunc(Number((x - init).toFixed(2) * 60));
  // console.log(init);
  // console.log(floa);

  return (
    <>
      {movie ? (
        <div className="all">
          <article>
            <img src={movie.poster_path} alt={movie.title} />
          </article>
          <section
            sx={{
              color: darken("primary", 0.25),
              bg: lighten("primary", 0.875),
            }}
          >
            <h2 sx={{ color: "primary" }}>{movie.title.toUpperCase()}</h2>
            <h3>{movie.tagline}</h3>
            <span>Relase Date: </span>
            <Date dateString={movie.release_date} />
            <p>The OverView: </p>
            <p class="over">{movie.overview}</p>
            <span>Duration: {""}</span>
            {Math.trunc(movie.runtime / 60)}
            {Math.trunc(movie.runtime / 60) > 1 ? (
              <span>hours</span>
            ) : (
              <span>hour</span>
            )}{" "}
            {Math.trunc(
              Number(
                (movie.runtime / 60 - Math.trunc(movie.runtime / 60)).toFixed(
                  2
                ) * 60
              )
            )}
            minutes
            <p>Average Rating: {movie.average_rating}/10</p>
            <span>The Genres: </span>
            {movie.genres.length > 0 && (
              <ul>
                {movie.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            )}
            {/* <img src={movie.poster_path} /> */}
            <p>Budget: {movie.budget}</p>
            <button
              onClick={(e) => router.push("/")}
              sx={{
                padding: "0.2rem 0.7rem 0.2rem 0.7rem",
                background: "lightred",
                fontSize: "0.9rem",
              }}
            >
              Back
            </button>
          </section>
        </div>
      ) : (
        <p>please wait</p>
      )}
    </>
  );
}
