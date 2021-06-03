import { Container } from "./styles";
import * as R from "recharts";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { Context } from "../../context/ChartContext";

function Chart({ data }) {
  const newData = [data, { date: "Dia 2", meta: 80, feitas: 20 }];

  const { openEditModal } = useContext(ModalContext);
  const { activateChart } = useContext(Context);

  return (
    <Container>
      <button
        onClick={() => {
          openEditModal();
          activateChart(newData);
        }}
      >
        edit
      </button>
      <R.BarChart
        data={newData}
        barGap={50}
        className="bob"
        width={350}
        height={250}
      >
        <R.XAxis dataKey="date" fontSize="0.85rem" />
        <R.YAxis axisLine={false} fontSize="0.85rem" />
        <R.Legend />

        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="red" stopOpacity={0.4} />
            <stop offset="75%" stopColor="red" stopOpacity={0.2} />
          </linearGradient>
        </defs>

        <R.Bar
          dataKey="meta"
          fill="url(#color)"
          label={{ fill: "gray", fontSize: "0.85rem" }}
        />
        <R.Bar
          dataKey="feitas"
          fill="url(#color)"
          label={{ fill: "gray", fontSize: "0.85rem" }}
        />
      </R.BarChart>
    </Container>
  );
}

export default Chart;
