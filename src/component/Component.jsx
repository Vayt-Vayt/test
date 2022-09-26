import React from "react";
import styles from "./Component.module.css";
import MySelect from "./UI/MySelect/MySelect";
import SortButton from "./UI/SortButton/SortButton";

const Component = (props) => {
  const { items, sort, value, types, filterType, setSortBoolean } = props
  const options = [
    { value: "all", name: "All" },
    { value: "green", name: "Green" },
    { value: "yellow", name: "Yellow" },
    { value: "red", name: "Red" },
  ];
  const typeSort = new Set(items.map((item) => item.type));
  const optionsType = [
    { value: "all", name: "All" },
    ...[...typeSort ].map((item) => ({ value: item, name: item })),
  ];

  const colors = (color) => {
    switch (color) {
      case "green":
        return "rgba(0,255,0, 0.1)";
      case "yellow":
        return "rgba(255,165,0, 0.1)";
      case "red":
        return "rgba(255,0,0, 0.1)";
      default:
        return color;
    }
  };
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.select}>
              <MySelect options={options} value={value} onchange={sort} />
              Project
              <SortButton
                callbackDown={() => setSortBoolean({ value: 2, name: "name" })}
                callbackUp={() => setSortBoolean({ value: 1, name: "name" })}
                idMax={'ProjectMax'}
                idMin={'ProjectMin'}
              />
            </th>
            <th>
              <MySelect
                options={optionsType}
                value={types}
                onchange={filterType}
              />
              Token type
            </th>
            <th>conditions</th>
            <th className={styles.select}>
              Volume
              <SortButton
                callbackDown={() =>
                  setSortBoolean({ value: 2, name: "volume" })
                }
                callbackUp={() => setSortBoolean({ value: 1, name: "volume" })}
                idMax={'max'}
                idMin={'min'}
              />
            </th>
            <th>ROI</th>
            <th>Free float</th>
            <th>insurance hedge</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} style={{ background: `${colors(item.status)}` }}>
              <td>
                <div
                  style={{ background: `${item.status}` }}
                  className={styles.cercle}
                />
                {item.name}
              </td>
              <td>{item.type}</td>
              <td>{item.conditions}</td>
              <td>${item.volume}</td>
              <td>{item.roi} %</td>
              <td>{item.free}</td>
              <td>{item.hedge} %</td>
              <td style={{ background: "white" }}>
                <button>Buy</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Component };
