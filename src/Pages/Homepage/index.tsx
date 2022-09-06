import { useEffect, useState } from "react";

import HeaderHomepage from "../../components/HeaderHomepage";
import { IEvent } from "../../context/GlobalInterfaces";
import { api } from "../../services/Api";
import { Container } from "./styles";

const Homepage = () => {
  const [eventsList, setEventsList] = useState<IEvent[]>([]);

  useEffect(() => {
    api.get("/events").then((response) => {
      setEventsList(response.data);
    });
  }, []);

  return (
    <>
      <HeaderHomepage />

      <Container>
        <div className="mainHomepage">
          <img
            className="imgHomepage"
            src="https://s3-alpha-sig.figma.com/img/b080/fcc2/d93373aa6c51deae4201b339606864ae?Expires=1662940800&Signature=fjdfTCRMgKyc0wedlIYuXdxd8OYF1vvmUnmMcW7e7EbAJNWoHlo6rhZukB-Fv5--mpakFL3Src0s4JHMBObD3RW66TgSYOqpXZI7iODs53ZLHVjk4NjWwYOKwmoSTC8UlYeOgPJOPbgoa-NOjCPSa5coLcCYr4LlqtrkheqYbmfivmvy5pU4uWv1zTk0JfQnpyKoo-2SYCY4GfQIHo07EYDoZPaPeQS2rgx3890FEtAfI-cxH1T8Vm7KsvpoXKTDVzTdnsuiSKX5XlfwUSxezJIId1y-dOjIdGx7RIIxHA67JQTsIFmK4atRugLVCv7m5Jf6GlzN0vkYsexOSJ06lw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />

          <div className="buttonsGroup">
            <button type="button" className="btnFilter btnAllEvents">
              Todos os Eventos
            </button>
            <div className="btnsFilterSports">
              <button type="button" className="btnFilter btnFutebolEvents">
                Futebol
              </button>
              <button type="button" className="btnFilter btnBasqueteEvents">
                Basquete
              </button>
              <button type="button" className="btnFilter btnVoleiEvents">
                Vôlei
              </button>
            </div>
          </div>
          <div className="eventsList">
            <ul>
              {eventsList.map((event) => (
                <li key={event.id} className="event">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/fefb/9d2d/43f2984e48e3722d98526e2a46a53fca?Expires=1662940800&Signature=TOLF~NJl2mKt4aG3AHuB9DtWnD7Fpe06P-CwfwsQQGgJiBfXGbZAGrF9g6zuszcEgaGhwx6rrb15-a09CoDMSEVEvNFzld1dzZZTfpStxBlTLp~d5knMYbYMIDxIfCyPpzCkYjL1-AeElDjWKlyjd0-4eGLk9hYELeM4MUqOaYvwX3wDOR3RSeWT4-DZDiIUKu2Onps-NWD1a84iTpKUE105Hnplhnd-U2hYT1Es6OTol-MBWixJCVvVdmxAe10~eDWfDpxU-zUtR6IUmAlyWTdduTd9JTiayD18UsFI-2ZFovoWnGIHcFPaOj5MuZcXI~eaPbEQEQczRWNQ0EP~Vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt={event.category}
                  />

                  <div className="cardDescription">
                    <p className="eventDate">{/* {event["date-start"]} */}</p>
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
      </Container>
    </>
  );
};

export default Homepage;
