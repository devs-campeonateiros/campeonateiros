import { useContext, useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Header, DivLogo } from "./style";
import logo from "../../assets/logo.png";
import { GlobalContext } from "../../context/GlobalContext";
import foto from "../../assets/userImg.png";

const CompleteHeader = () => {
  const { user, setEditUserModal, editUserModal } = useContext(GlobalContext);
  const [isActive, setIsActive] = useState<boolean>(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("@Campeonateiros-token") || "";
  const userId = window.localStorage.getItem("@Campeonateiros-id");

  return (
    <Header>
      <DivLogo>
        <div className="divLogo">
          <img src={logo} alt="Logo" />
          <h1>League of Campeonateiros</h1>
        </div>
        <div className="divOptions">
          <div className="menu-container">
            <nav className={`menu ${isActive ? "active" : "inactive"}`}>
              <ul>
                <li>
                  <Link to={"/home"}>Home</Link>
                </li>
                {user.name ? (
                  <>
                    <li>
                      <Link to={"/dashboard"}>Dashboard</Link>
                    </li>
                    <button
                      onClick={() => {
                        setEditUserModal(!editUserModal);
                        setIsActive(!isActive);
                      }}
                    >
                      Editar Perfil
                    </button>
                    <button
                      onClick={() => {
                        window.localStorage.clear();
                        setIsActive(!isActive);
                        navigate("/login");
                      }}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to={"/login"}>Login</Link>
                    </li>
                    <li>
                      <Link to={"/register"}>Registrar-se</Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
            <button
              onClick={() => {
                setIsActive(!isActive);
              }}
              className="menu-button"
            >
              {user.name ? (
                <img src={user.url_image} alt="logo" />
              ) : (
                <img src={foto} alt="nao logado" />
              )}
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </DivLogo>
    </Header>
  );
};
export default CompleteHeader;
