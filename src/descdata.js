import React, { useState, useEffect } from "react";
import Description from "./description";
const Ddata = () => {
  const Api_key = "&api_key=2466a0658d179503ca9e1c5dc593bccd";
  const base_url = "https://api.themoviedb.org/3";
  const url = base_url + "/discover/movie?sort_by=popularity.desc" + Api_key;

  const [Ddata, setdata] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2466a0658d179503ca9e1c5dc593bccd"
    )
      .then((resp) => resp.json())
      .then((mrdata) => {
        setdata(mrdata.results);
      });
  }, []);
  return (
    <div>
      {Ddata.map((items) => (
        <Description
          key={items.id}
          title={items.original_title}
          image={"https://image.tmdb.org/t/p/original/" + items.backdrop_path}
          descri={items.overview}
        />
      ))}
    </div>
  );
};

export default Ddata;
