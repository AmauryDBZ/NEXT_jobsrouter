import React, { useState } from "react";
import Searchbar from "../Searchbar";

const Cards = () => {

  const getResult = (data) => {
    console.log('results');
    console.log(data);
  }

  return (
    <section>
      <Searchbar getResult={getResult} />
    </section>
  )
}

export default Cards;
