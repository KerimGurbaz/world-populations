import React from "react";

const population = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Main = ({ data }) => {
  console.log(data);

  return (
    <div>
      {data.map((item) => {
        return (
          <div style={population}>
            <h3>{item.country}</h3>
            <div
              style={{
                backgroundColor: "orange",
                width: `${item.population / 10000000}` + "px",
              }}
            ></div>
            <h3>{item.population}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
