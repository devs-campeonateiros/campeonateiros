import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;

    .mainHomepage {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 90vw;
        height: 100vh;

        @media (min-width: 712px) {
            width: 80vw;
        }
    }

    .imgHomepage {
        margin-top: 30px;
        width: 100%;
        height: 30vh;

        @media (min-width: 712px) {
            height: 250px;
        }
        @media (min-width: 1200px) {
            margin-top: 60px;
            height: 400px;
        }
    }

    .buttonsGroup {
        @media (min-width: 712px) {
            display: flex;
            width: 100%;
            gap: 15px;
        }
    }

    button {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        border: none;
        color: #ffffff;
        background: #ff7d00;
        filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.25));
    }

    .btnFilter {
        border-radius: 10px;
    }

    .btnAllEvents {
        width: 90vw;
        height: 40px;

        @media (min-width: 712px) {
            width: 220px;
        }
    }

    .btnsFilterSports {
        display: flex;
        justify-content: space-between;
        width: 90vw;
        margin-top: 10px;

        @media (min-width: 712px) {
            display: flex;
            justify-content: flex-start;
            margin-top: 0;
            gap: 15px;
        }
    }

    .btnFutebolEvents,
    .btnBasqueteEvents,
    .btnVoleiEvents {
        width: 100px;
        height: 40px;
    }

    .eventsList {
        width: 100%;
        height: 100vh;
        margin-top: 10px;
    }

    ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
        @media (min-width: 712px) {
            gap: 50px;
        }
    }

    .event {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 10rem;
        margin-top: 15px;
    }

    img {
        width: 100%;
        height: 175px;

        @media (min-width: 712px) {
            height: 180px;
        }
    }

    .cardDescription {
        display: flex;
        flex-direction: column;
        margin-top: 8px;
        height: 100px;
    }

    .eventDate,
    .eventName {
        margin-left: 5px;
    }

    .eventDate {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 146.5%;
        color: rgba(29, 30, 36, 0.4);
    }

    .eventName {
        margin-top: 10px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
    }

    .cardFooter {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btnViewEvent {
        width: 140px;
        height: 52px;
        border-radius: 100px;
    }
`;
