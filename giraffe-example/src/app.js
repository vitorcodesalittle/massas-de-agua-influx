import React, { useState, useEffect, useMemo } from "react";
import { fromFlux } from "@influxdata/giraffe";
import { getCaptacoesSubterreaneas } from "./api";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const App = () => {
  const [data, setData] = useState("");
  const [table, setTable] = useState(null);

  useEffect(() => {
    getCaptacoesSubterreaneas().then((data) => {
      setData(data);
      setTable(fromFlux(data));
    });
  }, []);

  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const zip = (a, b) => {
    const newArr = [];
    const total = Math.min(a.length, b.length);
    for (let i = 0; i < total; i++) {
      newArr.push([a[i], b[i]]);
    }
    return newArr;
  };
  const markers = useMemo(() => {
    if (!table) return;
    const latIndexes = table.table.columns._field.data
      .map((fieldName, idx) => fieldName === "lat" && idx)
      .filter(Boolean);
    const lonIndexes = table.table.columns._field.data
      .map((fieldName, idx) => fieldName === "lon" && idx)
      .filter(Boolean);
    const latitudes = latIndexes.map(
      (idx) => table.table.columns._value.data[idx]
    );
    const longitudes = lonIndexes.map(
      (idx) => table.table.columns._value.data[idx]
    );
    return zip(latitudes, longitudes).map(([lat, lon]) => ({ lat, lon }));
  }, [table]);

  const [showData, setShowData] = useState(false);
  const toggleData = () => setShowData(!showData);
  return (
    <div>
      {table === null && "Loading..."}
      {table !== null && (
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#DDD"
                  stroke="#FFF"
                />
              ))
            }
          </Geographies>
          {markers.map((m, idx) => (
            <Marker key={`${idx}`} coordinates={[m.lat, m.lon]}>
              <circle r={8} fill="#F53" />
            </Marker>
          ))}
        </ComposableMap>
      )}

      <button onClick={toggleData}>
        {showData ? "Hide data" : "Show data"}
      </button>
      {showData && <pre>{data}</pre>}
    </div>
  );
};

export default App;
