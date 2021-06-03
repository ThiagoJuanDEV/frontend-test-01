import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { Context } from "../../context/ChartContext";
import { Container } from "./styles";

function EditModal() {
  const { isEditModalOpen, closeEditModal } = useContext(ModalContext);
  const { chartActive } = useContext(Context);

  const renderArray = chartActive.map((data) => {
    return (
      <div key={data.name}>
        <strong>{data.date}</strong>
        <br />
        <input type="number" placeholder={`O atual valor é: ${data.meta}`} />
        <br />
        <input type="number" value={data.feitas} />
        <br />
        <br />
      </div>
    );
  });

  return (
    <>
      {isEditModalOpen && (
        <Container>
          <form>{renderArray}</form>
        </Container>
      )}
    </>
  );
}

export default EditModal;
