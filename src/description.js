import React from "react";
const Description = (props) => {
  return (
    <div>
      <img className="card-img-top" src={props.image} alt="..." />
      <p>{props.descri}</p>
    </div>
  );
};
export default Description;
