import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function CharacterList() {
  const [locationList, GetLocationList] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(response => {
        console.log(response.data.results);
        GetLocationList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list">
      {locationList.map((chars, id) => {
        return <LocationCard key={id} chars={chars} />;
      })}
    </section>
  );
}
