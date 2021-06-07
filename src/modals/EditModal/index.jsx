import { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { Context } from "../../context/ChartContext";
import { Container, HeaderGradient, CreateForm } from "../modalStyles";

import { v4 as uuidv4 } from "uuid";

import ColorSelecting from "../../components/Dashboard/ColorSelecting";
import { ButtonGradient } from "../../globalStyles";

function EditModal() {
  const [colorActive, setColorActive] = useState("");
  const { isEditModalOpen, closeEditModal } = useContext(ModalContext);
  const { chartActive, updateChartInfo } = useContext(Context);

  return (
    <>
      {isEditModalOpen && (
        <Container>
          <div className="modalBox">
            <HeaderGradient>
              <h4>CRIAR GRÁFICO</h4>
              <div onClick={closeEditModal}>
                <span>X</span>
              </div>
            </HeaderGradient>
            <CreateForm
              onSubmit={(e) => {
                e.preventDefault();
                const target = e.target;

                const obj = {
                  meta: parseInt(target.meta.value),
                  feitas: parseInt(target.feitas.value),
                  color: colorActive,
                  id: uuidv4(),
                };

                updateChartInfo(obj);
                closeEditModal();
              }}
            >
              <div className="formBoxContainer">
                <div>
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    className="nameInput"
                    name="name"
                    defaultValue={chartActive[0].name}
                    readOnly
                    style={{
                      opacity: 0.3,
                      cursor: "not-allowed",
                    }}
                  />
                </div>
                <ColorSelecting
                  colorActive={colorActive}
                  setColorActive={setColorActive}
                />
              </div>
              <div className="formBoxContainer questionsBox">
                <div>
                  <label htmlFor="meta">Meta do Dia</label>
                  <input
                    type="number"
                    name="meta"
                    defaultValue={chartActive[0].meta}
                  />
                </div>
                <div>
                  <label htmlFor="feitas">Questões feitas hoje</label>
                  <input
                    type="number"
                    name="feitas"
                    defaultValue={chartActive[0].feitas}
                  />
                </div>
              </div>
              <ButtonGradient>EDITAR</ButtonGradient>
            </CreateForm>
          </div>
        </Container>
      )}
    </>
  );
}

export default EditModal;
