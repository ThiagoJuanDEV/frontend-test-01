import { Container } from "./styles";
import SocratysText from "../../../assets/Socratys.svg";
import Hexagonal from "../../../assets/Hexagonal.svg";
import SearchIcon from "../../../assets/SearchIcon.svg";
import { useContext } from "react";
import { Context } from "../../../context/ChartContext";

function Header() {
  const { searchItem, setSearchItem } = useContext(Context);

  return (
    <Container>
      <div>
        <img src={Hexagonal} alt="Hexagonal-Logo" className="hexLogo" />
        <img src={SocratysText} alt="Socratys-Logo" className="text" />
      </div>

      <div className="searchBarContainer">
        <img src={SearchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Pesquisar"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>
    </Container>
  );
}

export default Header;
