import { useContext, useState } from "react";
import { Context } from "../../context/ChartContext";
import { ModalContext } from "../../context/ModalContext";

import { v4 as uuidv4 } from "uuid";
import format from "date-fns/format";
import { AnimatePresence, motion } from "framer-motion";

import { Container, HeaderGradient, CreateForm } from "../modalStyles";
import ColorSelecting from "../../components/Dashboard/ColorSelecting";
import { ButtonGradient } from "../../globalStyles";

function CreateChartModal() {
  const [colorActive, setColorActive] = useState("");
  const { createChart } = useContext(Context);

  const { isCreateChartModalOpen, closeChartModal } = useContext(ModalContext);

  return (
    <AnimatePresence>
      {isCreateChartModalOpen && (
        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modalBox"
            initial={{ y: "-100vh", x: "-50%" }}
            animate={{ y: "-50%", x: "-50%" }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
        </Container>
      )}
    </AnimatePresence>
  );
}

export default CreateChartModal;
