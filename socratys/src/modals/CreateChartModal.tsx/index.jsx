import { useContext } from "react";
import { Context } from "../../context/ChartContext";
import { ModalContext } from "../../context/ModalContext";

function CreateChartModal() {
  const { createChart } = useContext(Context);

  const { isCreateChartModalOpen, closeChartModal } = useContext(ModalContext);

  return (
    <>
      {isCreateChartModalOpen && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const target = e.target;

            const obj = {
              name: target.name.value,
              date: target.date.value,
              meta: parseInt(target.meta.value),
              feitas: parseInt(target.feitas.value),
            };

            createChart(obj);
            closeChartModal();
          }}
        >
          <input type="text" id="name" />
          <input type="text" id="date" />
          <input type="number" id="meta" />
          <input type="number" id="feitas" />
          <button>ok!</button>
        </form>
      )}
    </>
  );
}

export default CreateChartModal;
