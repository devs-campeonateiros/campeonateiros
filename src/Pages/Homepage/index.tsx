import { useEffect, useState, useContext } from "react";
import { IEvent } from "../../context/GlobalInterfaces";
import { api } from "../../services/Api";
import { Container } from "./styles";

import fut from "../../assets/fut.png";
import CompleteHeader from "../../components/CompleteHeader";
import SimpleHeader from "../../components/simpleHeader";
import { ModalEditUser } from "../../components/ModalEditUser";
import { GlobalContext } from "../../context/GlobalContext";

const Homepage = () => {
  const [eventsList, setEventsList] = useState<IEvent[]>([]);
  const [eventsFiltered, setEventsFiltered] = useState<IEvent[]>([]);

  const token = localStorage.getItem("@Campeonateiros-token") || "";

  const { editUserModal } = useContext(GlobalContext);

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
            <button className="moreInfo">Mais Informações</button>
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
                      <img
                        src="https://s3-alpha-sig.figma.com/img/fefb/9d2d/43f2984e48e3722d98526e2a46a53fca?Expires=1662940800&Signature=TOLF~NJl2mKt4aG3AHuB9DtWnD7Fpe06P-CwfwsQQGgJiBfXGbZAGrF9g6zuszcEgaGhwx6rrb15-a09CoDMSEVEvNFzld1dzZZTfpStxBlTLp~d5knMYbYMIDxIfCyPpzCkYjL1-AeElDjWKlyjd0-4eGLk9hYELeM4MUqOaYvwX3wDOR3RSeWT4-DZDiIUKu2Onps-NWD1a84iTpKUE105Hnplhnd-U2hYT1Es6OTol-MBWixJCVvVdmxAe10~eDWfDpxU-zUtR6IUmAlyWTdduTd9JTiayD18UsFI-2ZFovoWnGIHcFPaOj5MuZcXI~eaPbEQEQczRWNQ0EP~Vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt={event.category}
                      />

                      <div className="cardDescription">
                        <p className="eventDate">{event.dateStart}</p>
                        <p className="eventName">{event.name}</p>
                      </div>
                      <div className="cardFooter">
                        <button
                          className="btnViewEvent"
                          onClick={() => console.log(event.id)}
                        >
                          Ver evento
                        </button>
                      </div>
                    </li>
                  ))
                : eventsList.map((event) => (
                    <li key={event.id} className="event">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/fefb/9d2d/43f2984e48e3722d98526e2a46a53fca?Expires=1662940800&Signature=TOLF~NJl2mKt4aG3AHuB9DtWnD7Fpe06P-CwfwsQQGgJiBfXGbZAGrF9g6zuszcEgaGhwx6rrb15-a09CoDMSEVEvNFzld1dzZZTfpStxBlTLp~d5knMYbYMIDxIfCyPpzCkYjL1-AeElDjWKlyjd0-4eGLk9hYELeM4MUqOaYvwX3wDOR3RSeWT4-DZDiIUKu2Onps-NWD1a84iTpKUE105Hnplhnd-U2hYT1Es6OTol-MBWixJCVvVdmxAe10~eDWfDpxU-zUtR6IUmAlyWTdduTd9JTiayD18UsFI-2ZFovoWnGIHcFPaOj5MuZcXI~eaPbEQEQczRWNQ0EP~Vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt={event.category}
                      />

                      <div className="cardDescription">
                        <p className="eventDate">{event.dateStart}</p>
                        <p className="eventName">{event.name}</p>
                      </div>
                      <div className="cardFooter">
                        <button
                          className="btnViewEvent"
                          onClick={() => console.log(event.id)}
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
      </Container>
    </>
  );
};

export default Homepage;
