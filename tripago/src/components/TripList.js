import { useEffect, useState, useCallback } from "react";
import {useFetch} from "../hooks/useFetch";

export default function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data,isPending,error} = useFetch(url);

  return (
    <div>
    <h2>Trip List </h2>
    {isPending && <div>Loading trips...</div>}
    {error&& <div>{error}</div>}
      <ul>
        {data &&
          data.map(({ title, id, price }) => (
            <li key={id}>
              <h3>
                {title} - {price}
              </h3>
            </li>
          ))}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
        >
          European Trips
        </button>
        <button>All trips</button>
      </div>
    </div>
  );
}
