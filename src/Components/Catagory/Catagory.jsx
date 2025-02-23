import React from "react";
import { catagoryImage } from "./CatagoryFullInfos";
import CatagoryCard from "./CatagoryCard";
import classes from "./Catagory.module.css";

function Catagory() {
  return (
    <section className={classes.category_section}>
      <div className={classes.category_container}>
        {catagoryImage.map((infos) => (
          <CatagoryCard key={infos.name} data={infos} />
        ))}
      </div>
    </section>
  );
}

export default Catagory;
