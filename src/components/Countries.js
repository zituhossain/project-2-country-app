import React from "react";

import Country from "./Country";
import { v4 as uuidv4 } from "uuid";

const Countries = (props) => {
  return (
    <section>
      {props.countries.map((country) => {
        const countryNew = { country, id: uuidv4() };

        return <Country {...countryNew} key={countryNew.id} />;
      })}
    </section>
  );
};

export default Countries;
