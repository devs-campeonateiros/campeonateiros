import CompleteHeader from "../../components/CompleteHeader";
import Container from "./styles";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { FaUserCircle } from "react-icons/fa";
import ney from "../../assets/ney.png";
import { ModalEditUser } from "../../components/ModalEditUser";
import { ModalEditEvent } from "../../components/ModalEditEvent";
import { ModalAddEvent } from "../../components/ModalAddEvent";

const Dashboard = () => {
  const {
    user,
    setAddEvent,
    setEditEvent,
    deleteEvent,
    addEvent,
    editEventModal,
    editUserModal,
  } = useContext(GlobalContext);

  return (
    <>
      <CompleteHeader />
      <Container>
        <div className="userIndice">
          <div className="divUser">
            {user.url_image ? (
              <img src={user.url_image} alt={user.name} />
            ) : (
              <span>
                <FaUserCircle />
              </span>
            )}
            <h2>
              <span className="userSaudation">Olá!</span>
              {user.name}
            </h2>
          </div>
          <div className="divButtons">
            <button>MEUS EVENTOS</button>
            <button>EVENTOS QUE TENHO INTERESSE</button>
            <button
              className="addEvent"
              onClick={() => {
                setAddEvent(true);
              }}
            >
              Criar Campeonato
            </button>
          </div>
        </div>
        <div className="divButtons">
          <button>FUTEBOL</button>
          <span>|</span>
          <button>BASQUETE</button>
          <span>|</span>
          <button>VÔLEI</button>
          <span>|</span>
          <button>BEACH TÊNIS</button>
        </div>
        <div className="divEvent">
          <img src={ney} alt="" />
          <div className="divInfos">
            <h2>Varzea Word Cup</h2>
            <span>Data - Dec 02/2021</span>
            <p>Local: Campo varzinha - Santa Terezinha - SC</p>
            <p className="description">
              Descrição: Campeonato de futebol em santa terezinha no dia
              02/12/2022
            </p>
          </div>
          <div className="buttonsCard">
            <button className="infoEvent">Ver Evento</button>
            <button
              className="btnEdit"
              onClick={() => {
                setEditEvent(true);
              }}
            >
              Editar
            </button>
            <button
              className="btnDel"
              onClick={() => {
                deleteEvent();
              }}
            >
              Excluir
            </button>
          </div>
        </div>

        {editUserModal && <ModalEditUser />}
        {editEventModal && <ModalEditEvent />}
        {addEvent && <ModalAddEvent />}
      </Container>
    </>
  );
};

export default Dashboard;
