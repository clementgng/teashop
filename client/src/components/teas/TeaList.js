import React from "react";
import Tea from "./Tea.js";
// import { robots, cats } from './robots';
// in JSX use map instead of forEach, map returns an array, forEach retuns nothing
const TeaList = ({ teas }) => {
  const teaComponent = teas.map((tea, i) => {
    return (
      <span className=" px-3 py-3 mb-3">
        <Tea
          picture={teas[i].picture}
          name={teas[i].name}
          description={teas[i].description}
          key={i}
        />
      </span>
    );
  }); // forEach/map ends here.. always return when using map
  return <div>{teaComponent}</div>;
};

export default TeaList;
