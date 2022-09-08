import { useEffect, useState, useContext } from "react";
import { IEvent } from "../../context/GlobalInterfaces";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/Api";
import { Container } from "./styles";
import fut from "../../assets/fut.png";
import CompleteHeader from "../../components/CompleteHeader";
import { ModalEditUser } from "../../components/ModalEditUser";
import { GlobalContext } from "../../context/GlobalContext";
import ModalMoreInfo from "../../components/ModalMoreInfo";

const Homepage = () => {
  const [eventsList, setEventsList] = useState<IEvent[]>([]);
  const [eventsFiltered, setEventsFiltered] = useState<IEvent[]>([]);

  const token = localStorage.getItem("@Campeonateiros-token") || "";

  const { editUserModal, setEvent, setModalMoreInfo, modalMoreInfo } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  useEffect(() => {
    api.get("/events").then((response) => {
      setEventsList(response.data);
    });
  }, [token]);

  function filterSports(sport: string) {
    setEventsFiltered(eventsList.filter((elem) => elem.category === sport));
  }

  return (
    <>
      <CompleteHeader />

      <Container>
        <div className="mainHomepage">
          <div className="divImg">
            <img className="imgHomepage" src={fut} alt="" />
            <span>Venha fazer o seu campeonato com a gente!</span>

            <button className="moreInfo" onClick={() => setModalMoreInfo(true)}>
              Mais Informações
            </button>
          </div>

          <div className="buttonsGroup">
            <button
              onClick={() => filterSports("Todos")}
              type="button"
              className="btnFilter btnAllEvents"
            >
              Todos os Eventos
            </button>
            <div className="btnsFilterSports">
              <button
                onClick={() => filterSports("Futebol")}
                type="button"
                className="btnFilter btnFutebolEvents"
              >
                Futebol
              </button>
              <button
                onClick={() => filterSports("Basquete")}
                type="button"
                className="btnFilter btnBasqueteEvents"
              >
                Basquete
              </button>
              <button
                onClick={() => filterSports("Voleibol")}
                type="button"
                className="btnFilter btnVoleiEvents"
              >
                Vôlei
              </button>
            </div>
          </div>
          <div className="eventsList">
            <ul>
              {eventsFiltered.length > 0
                ? eventsFiltered?.map((event) => (
                    <li key={event.id} className="event">
                      {event.image ? (
                        <img src={event.image} alt={event.category} />
                      ) : (
                        <img
                          src="https://images.pexels.com/photos/7267588/pexels-photo-7267588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt={event.category}
                        />
                      )}

                      <div className="cardDescription">
                        <p className="eventDate">{event.dateStart}</p>
                        <p className="eventName">{event.name}</p>
                      </div>
                      <div className="cardFooter">
                        <button
                          className="btnViewEvent"
                          onClick={() => {
                            setEvent(event);
                            navigate(`/events/${event.id}`);
                          }}
                        >
                          Ver evento
                        </button>
                      </div>
                    </li>
                  ))
                : eventsList.map((event) => (
                    <li key={event.id} className="event">
                      {event.image ? (
                        <img src={event.image} alt={event.category} />
                      ) : (
                        <img
                          src="https://images.pexels.com/photos/7267588/pexels-photo-7267588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt={event.category}
                        />
                      )}

                      <div className="cardDescription">
                        <p className="eventDate">{event.dateStart}</p>
                        <p className="eventName">{event.name}</p>
                      </div>
                      <div className="cardFooter">
                        <button
                          className="btnViewEvent"
                          onClick={() => {
                            setEvent(event);
                            navigate(`/events/${event.id}`);
                          }}
                        >
                          Ver evento
                        </button>
                      </div>
                    </li>
                  ))}
            </ul>
          </div>
        </div>

        {editUserModal && <ModalEditUser />}
        {modalMoreInfo && <ModalMoreInfo />}
      </Container>
    </>
  );
};

export default Homepage;
