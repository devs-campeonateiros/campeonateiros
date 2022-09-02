import { Header, DivLogo } from "./style";
import logo from "../../assets/logo.png";
import userImg from "../../assets/userImg.png"

const CompleteHeader = () => {

    const user = JSON.parse(localStorage.getItem("@Campeonateiros-user") || "");

  return (
    <Header>
      <DivLogo>
        <div className="divLogo">
          <img src={logo} alt="Logo" />
          <h1>League of Campeonateiros</h1>
        </div>
        <div className="divOptions">
          <ul>
            <li>Jogador</li>
            <li>Organizador</li>
          </ul>
          <button><img src={userImg} alt="" />{user}</button>
        </div>
      </DivLogo>
    </Header>
  );
};
export default CompleteHeader;