import { useContext, useState } from "react";
import { Context } from "../../context/ChartContext";
import { ModalContext } from "../../context/ModalContext";

import { v4 as uuidv4 } from "uuid";
import format from "date-fns/format";

import { Container, HeaderGradient, CreateForm } from "../modalStyles";
import ColorSelecting from "../../components/Dashboard/ColorSelecting";
import { ButtonGradient } from "../../globalStyles";

function CreateChartModal() {
  const [colorActive, setColorActive] = useState("");
  const { createChart } = useContext(Context);

  const { isCreateChartModalOpen, closeChartModal } = useContext(ModalContext);

  return (
    <>
      {isCreateChartModalOpen && (
        <Container>
          <div className="modalBox">
            <HeaderGradient>
              <h4>CRIAR GRÁFICO</h4>
              <div onClick={closeChartModal}>
                <span>X</span>
              </div>
            </HeaderGradient>
            <CreateForm
              onSubmit={(e) => {
                e.preventDefault();
                const target = e.target;

                const obj = {
                  name: `${target.name.value} - ${format(new Date(), "dd/LL")}`,
                  meta: parseInt(target.meta.value),
                  feitas: parseInt(target.feitas.value),
                  color: colorActive,
                  id: uuidv4(),
                };

                createChart(obj);
                closeChartModal();
              }}
            >
              <div className="formBoxContainer">
                <div>
                  <label htmlFor="name">Nome</label>
                  <input type="text" className="nameInput" name="name" />
                </div>
                <ColorSelecting
                  colorActive={colorActive}
                  setColorActive={setColorActive}
                />
              </div>
              <div className="formBoxContainer questionsBox">
                <div>
                  <label htmlFor="meta">Meta do Dia</label>
                  <input type="number" name="meta" />
                </div>
                <div>
                  <label htmlFor="feitas">Questões feitas hoje</label>
                  <input type="number" name="feitas" />
                </div>
              </div>
              <ButtonGradient>CRIAR</ButtonGradient>
            </CreateForm>
          </div>
        </Container>
      )}
    </>
  );
}

export default CreateChartModal;
