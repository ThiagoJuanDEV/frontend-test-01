import { Container } from "./styles";
import SocratysText from "../../../assets/Socratys.svg";
import Hexagonal from "../../../assets/Hexagonal.svg";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <Container>
      <div>
        <img src={Hexagonal} alt="Hexagonal-Logo" className="hexLogo" />
        <img src={SocratysText} alt="Socratys-Logo" className="text" />
      </div>

      <SearchBar />
    </Container>
  );
}

export default Header;
