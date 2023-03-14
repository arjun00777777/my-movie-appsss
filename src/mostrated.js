import { React, useState, useEffect } from "react";
import Rated from "./rated";
const Rate = () => {
  const Api_key = "&api_key=2466a0658d179503ca9e1c5dc593bccd";
  const base_url = "https://api.themoviedb.org/3";
  const url = base_url + "/discover/movie?sort_by=popularity.desc" + Api_key;

  const [Rate, setrate] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2466a0658d179503ca9e1c5dc593bccd"
    )
      .then((resp) => resp.json())
      .then((rate) => {
        setrate(rate.results);
      });
  }, []);

  return (
    <div>
      {Rate.map((items) => (
        <>
          <Rated
            key={items.id}
            title={items.original_title}
            image={"https://image.tmdb.org/t/p/original/" + items.backdrop_path}
            rating={items.vote_average}
          />
        </>
      ))}
    </div>
  );
};

export default Rate;
