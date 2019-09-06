import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const SoccerData = props => {
  const { data } = props;
  const [value, setValue] = useLocalStorage("players", data);
  console.log(value);

  return (
    <div>
      {value.map(person => {
        return <div key={person.id}>
            <p>{person.name}</p>
            <p>{person.country}</p>
            <p>Searches: {person.searches}</p>
            </div>;
      })}
    </div>
  );
};

export default SoccerData;
