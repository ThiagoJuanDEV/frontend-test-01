import { createContext, useState } from "react";

export const Context = createContext({});

export function ContextProvider({ children }) {
  const [chartsArray, setChartsArray] = useState([]);
  const [chartActive, setChartActive] = useState([{}]);

  const createChart = (data) => {
    const newArray = [...chartsArray, data];
    console.log(newArray);
    setChartsArray(newArray);
  };

  const activateChart = (data) => {
    setChartActive(data);
  };

  return (
    <Context.Provider
      value={{
        chartsArray,
        chartActive,
        createChart,
        activateChart,
      }}
    >
      {children}
    </Context.Provider>
  );
}
