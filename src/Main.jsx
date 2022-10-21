import React from "react";

const population = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const Main = ({ data }) => {
  console.log(data);

  return (
    <center>
      <div className="container">
        {data.map((item, index) => {
          return (
            <div key={index} style={population} className="country">
              <h3
                style={{
                  width: "10%",
                }}
              >
                {item.country}
              </h3>
              <div
                className="bar"
                style={{
                  width: "80%",
                  background: "#36EEE0",
                }}
              >
                <div
                  style={{ width: `${item.population / 76993165}%` }}
                  className="space"
                >
                  <span>{(item.population / 76993165).toFixed(1)}</span>
                </div>
              </div>
              <h3
                style={{
                  width: "10%",
                }}
              >
                {item.population}
              </h3>
            </div>
          );
        })}
      </div>
    </center>
  );
};

export default Main;
