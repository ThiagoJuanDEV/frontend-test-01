import { Container } from "./styles";
import { BarChart, XAxis, YAxis, Bar } from "recharts";
import { useContext } from "react";
import { ModalContext } from "../../../context/ModalContext";
import { Context } from "../../../context/ChartContext";

import EditIcon from "../../../assets/EditIcon.svg";
import TrashIcon from "../../../assets/TrashIcon.svg";

function Chart({ data }) {
  const { openEditModal } = useContext(ModalContext);
  const { activateChart, deleteChart } = useContext(Context);

  return (
    <Container>
      <header>
        <h3 style={{ color: data[0].color || "#FFCE54" }}>{data[0].name}</h3>
        <div className="chartIconsContainer">
          <div
            className="chartButton"
            style={{ backgroundColor: data[0].color || "#FFCE54" }}
            onClick={() => {
              activateChart(data);
              openEditModal();
            }}
          >
            <img src={EditIcon} alt="edit-icon" />
          </div>
          <div className="chartButton" style={{ backgroundColor: "#FF3535" }}>
            <img
              src={TrashIcon}
              alt="edit-icon"
              onClick={() => {
                deleteChart(data.id);
              }}
            />
          </div>
        </div>
      </header>
      <main>
        <legend>
          <div
            className="box"
            style={{ backgroundColor: data[0].color || "#FFCE54" }}
          ></div>
          <span className="first">Feitas</span>
          <div className="box" style={{ backgroundColor: "#6F7A84" }}></div>
          <span>Meta</span>
        </legend>
        <BarChart
          data={data}
          className="bob"
          width={325}
          height={200}
          barGap={10}
          margin={{ top: 0, right: 40, bottom: 0, left: -20 }}
        >
          <XAxis dataKey="date" fontSize="0.85rem" />
          <YAxis axisLine={false} fontSize="0.85rem" padding={{ top: 10 }} />
          <Bar
            dataKey="feitas"
            fill={data[0].color || "#FFCE54"}
            label={{ fill: "#f4f4f4", fontSize: "0.85rem" }}
            isAnimationActive={false}
            barSize={64}
          />
          <Bar
            dataKey="meta"
            fill="#6F7A84"
            label={{ fill: "#f4f4f4", fontSize: "0.85rem" }}
            isAnimationActive={false}
            barSize={64}
          />
        </BarChart>
      </main>
    </Container>
  );
}

export default Chart;