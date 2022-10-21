import React from "react";

const population = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const Main = ({ data }) => {
  console.log(data);

  return (
    <div className="container">
      {data.map((item) => {
        return (
          <div style={population}>
            <h3>{item.country}</h3>
            <div
              style={{
                backgroundColor: "orange",
                width: "100%",
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
