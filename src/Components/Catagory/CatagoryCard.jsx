import React from "react";
import classes from "./Catagory.module.css";
// import { Link } from "react-router-dom";



function CatagoryCard({ data }) {
  return (
    <div className={classes.category_card}>
      <a href="">
        <span>
          <h2 className={classes.title}>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CatagoryCard;
