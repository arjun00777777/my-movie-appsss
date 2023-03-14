import react from "react";
import "./styles.css";
export default function Rated(props) {
  return (
    <div className="ratings">
      <div id="rating">
        <img id="image-rating" src={props.image} alt="..." />
        <div>
          <h3 id="image-title">{props.title}</h3>
          <h3 id="rate">Rating:{props.rating}</h3>
        </div>
      </div>
    </div>
  );
}
