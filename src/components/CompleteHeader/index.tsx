import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";

import { Header, DivLogo } from "./style";
import logo from "../../assets/logo.png";
import { GlobalContext } from "../../context/GlobalContext";

const CompleteHeader = () => {
  const { user, setEditUserModal } = useContext(GlobalContext);

  return (
    <Header>
      <DivLogo>
        <div className="divLogo">
          <img src={logo} alt="Logo" />
          <h1>League of Campeonateiros</h1>
        </div>
        <div className="divOptions">
          {/* <ul>
            <li>Jogador</li>
            <li>Organizador</li>
          </ul> */}
          <button onClick={() => setEditUserModal(true)}>
            {user.url_image ? (
              <img src={user.url_image} alt="aa" />
            ) : (
              <span>
                <FaUserCircle />
              </span>
            )}
            {user.name}
          </button>
        </div>
      </DivLogo>
    </Header>
  );
};
export default CompleteHeader;
