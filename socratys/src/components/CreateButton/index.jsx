import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { Container } from "./styles";

function CreateButton() {
  const { openChartModal } = useContext(ModalContext);

  return (
    <Container>
      <h1 onClick={openChartModal}>CreateButton</h1>
    </Container>
  );
}

export default CreateButton;
