import { Context } from "../../context/ChartContext";
import { useContext } from "react";
import { Container } from "./styles";
import Chart from "../Chart";

function Charts() {
  const { chartsArray } = useContext(Context);

  const renderCharts = chartsArray.map((chart) => {
    return <Chart data={chart} key={chart.name} />;
  });

  return <Container>{renderCharts}</Container>;
}

export default Charts;
