import Header from "../../components/Header";
import { Container } from "./styles";
import Main from "../../components/Main";
import CreateChartModal from "../../modals/CreateChartModal.tsx";
import EditModal from "../../modals/EditModal";

function Dashboard() {
  return (
    <Container>
      <Header />
      <Main />

      {/* Modals */}
      <CreateChartModal />
      <EditModal />
    </Container>
  );
}

export default Dashboard;
