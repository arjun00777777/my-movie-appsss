import React, { useState, useEffect } from "react";
import Card from "./card";

const Data = () => {
  const Api_key = "&api_key=2466a0658d179503ca9e1c5dc593bccd";
  const base_url = "https://api.themoviedb.org/3";
  const url = base_url + "/discover/movie?sort_by=popularity.desc" + Api_key;

  const [rsdata, setrdata] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2466a0658d179503ca9e1c5dc593bccd"
    )
      .then((resp) => resp.json())
      .then((mrdata) => {
        setrdata(mrdata.results);
        console.log(mrdata);
      });
  }, []);

  return (
    <div>
      {rsdata.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.original_title}
          image={"https://image.tmdb.org/t/p/original/" + item.backdrop_path}
          descri={item.overview}
          language={item.original_language}
          released={item.release_date}
        />
      ))}
    </div>
  );
};

export default Data;
