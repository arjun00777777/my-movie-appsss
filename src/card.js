import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="cards">
      <div className="card">
        <Link to="/descdata">
          <img className="card-img-top" src={props.image} alt="..." />
          <div className="card-body">
            <h3 className="card-title">{props.title}</h3>
            <h3 className="card-lang">Language : {props.language}glish</h3>
            <h3 className="card-date">Released On : {props.released}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
