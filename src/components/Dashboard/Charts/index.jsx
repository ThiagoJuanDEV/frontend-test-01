import { Context } from "../../../context/ChartContext";
import { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import Chart from "../Chart";

function Charts() {
  const { chartsArray, searchItem } = useContext(Context);

  const [arrayFilter, setArrayFilter] = useState([]);

  useEffect(() => {
    setArrayFilter(
      chartsArray.filter((chart) => {
        return chart.name.toLowerCase().includes(searchItem.toLowerCase());
      })
    );
  }, [searchItem, chartsArray]);

  let renderCharts = arrayFilter.map((chart) => {
    const newData = [{ ...chart }];
    return <Chart data={newData} key={chart.name} />;
  });

  return <Container>{renderCharts}</Container>;
}

export default Charts;
