import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;

  .userIndice {
    display: flex;
    align-items: center;
    flex-direction: column;

    .divUser {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      color: #1d1e24;

      img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        border: 3px solid #ff7d00;
      }

      span {
        font-size: 5rem;
        color: #b3adad;
      }

      .userSaudation {
        color: #ff7d00;
        font-size: inherit;
        padding: 5px;
        margin-left: 10px;
      }
    }
  }

  .divButtonsIndice {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;

    button {
      background: none;
      border: none;
      color: #ff7d00;
      font-weight: 700;
      font-size: 12px;
    }

    span {
      color: #ff7d00;
    }

    .addEvent {
      background-color: #ff7d00;
      color: #fff;
      padding: 15px;
      width: 90%;
      font-size: 14px;
      border-radius: 50px;
    }
  }

  .divButtons {
    margin-top: 20px;
    display: flex;
    gap: 20px;
    justify-content: center;

    button {
      background-color: #ff7d00;
      color: #fff;
      padding: 10px;
      width: 25%;
      border: none;
      font-size: 12px;
      border-radius: 10px;
      box-shadow: 3px 3px 5px rgb(0, 0, 0, 0.25);
    }

    span {
      display: none;
      color: #ff7d00;
    }
  }

  @media (min-width: 600px) {
    .userIndice {
      flex-direction: row;
      justify-content: center;
      padding: 0 20px;
    }

    .divButtonsIndice {
      gap: 1px;
      flex-wrap: nowrap;

      .addEvent {
        width: 35%;
        font-size: 10px;
        padding: 10px;
      }
    }
  }
  @media (min-width: 900px) {
    .userIndice {
      width: 100%;
      gap: 50px;
    }
    .divButtonsIndice {
      gap: 50px;
      width: 63%;

      button {
        font-size: 14px;
      }

      .addEvent {
        width: 30%;
        font-size: 14px;
        padding: 15px 0;
      }
    }

    .divButtons {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 0px;
      width: 100%;

      button {
        background: none;
        border: none;
        color: #ff7d00;
        width: 15%;
        font-weight: 700;
        font-size: 1rem;
        box-shadow: none;
      }

      span {
        display: initial;
        color: #ff7d00;
      }
    }
  }
  @media (min-width: 1280px) {
    margin: 0 100px;
    .userIndice {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .divUser {
        display: flex;
        align-items: center;
        margin-top: 0.1rem;

        img {
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
          border: 1px solid #ff7d00;
        }
        h2{
          width: 180px;
        }
        span {
          font-size: 5rem;
          color: #b3adad;
          padding: 20px;
        }

        .userSaudation {
          color: #ff7d00;
          font-size: inherit;
        }
      }
    }
    .divButtonsIndice {
      display: flex;
      gap: 20px;
      button {
        background: none;
        border: none;
        color: #ff7d00;
        font-weight: 700;
        width: 100%;
        font-size: 1rem;
      }
      span {
        color: #ff7d00;
      }
      .addEvent {
        background-color: #ff7d00;
        color: #fff;
        padding: 15px 0;
        border-radius: 50px;
        width: 100%;

        z-index: 0;
      }
    }
  }

  .listEvents {
    display: flex;
    flex-direction: column;
    width: 100%;

    .divEvent {
      display: flex;
      gap: 19px;
      flex-direction: column;
      margin: 50px auto;
      width: 90%;

      img {
        width: 100%;
        border-radius: 10px;
        height: 220px;
      }

      .divInfos {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 15px;

        h2 {
          font-family: "Montserrat";
          font-size: 30px;
          color: #1d1e24;
        }

        span {
          color: gray;
          font-size: 16px;
          font-family: "Montserrat";
          font-weight: 600;
        }

        p {
          font-weight: 700;
          width: 25px;
        }

        .localization {
          font-size: 22px;
          color: #1d1e24;
          font-weight: 600;
          width: 320px;
          font-family: "Montserrat";
        }

        .subscription,
        .description,
        .quantity,
        .address {
          display: none;
        }
      }

      .buttonsCard {
        display: flex;
        gap: 20px;

        button {
          background: none;
          border: none;
        }

        .infoEvent {
          background-color: #ff7d00;
          color: #fff;
          padding: 10px;
          border-radius: 50px;
          border: none;
          font-size: 1rem;
        }

        .btnEdit {
          font-size: 1rem;
          color: grey;
          font-weight: 500;
        }

        .btnDel {
          font-size: 1rem;
          color: #ff3e3e;
          font-weight: 500;
        }

        .btnSub {
          display: none;
          font-size: 1rem;
          color: #ff3e3e;
          font-weight: 500;
        }
      }
    }

    @media (min-width: 500px) {
      flex-wrap: wrap;
      flex-direction: row;
      gap: 30px;
      justify-content: center;

      .divEvent {
        width: 43%;
        margin: 50px 0 0 0;
        height: 410px;

        .divInfos {
          height: 80%;
          gap: 10px;

          h2 {
            font-size: 24px;
          }

          span {
            font-size: 14px;
          }

          .localization {
            font-size: 15px;
            width: 200px;
          }
        }

        .buttonsCard {
          .infoEvent {
            padding: 5px;
            font-size: 14px;
          }
        }
      }
    }

    @media (min-width: 600px) {
      .divEvent {
        width: 37%;
      }
    }

    @media (min-width: 800px) {
      flex-direction: column;
      flex-wrap: nowrap;

      .divEvent {
        width: 90%;
        margin: 50px auto;
        flex-direction: row;
        height: 230px;

        img {
          width: 70%;
        }

        .divInfos {
          width: 100%;
          height: 90%;

          .localization {
            font-size: 20px;
            width: 100%;
          }

          .subscription,
          .description,
          .quantity,
          .address {
            display: initial;
            font-size: 13px;
            width: 100%;
            max-width: 60ch;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }

        .buttonsCard {
          flex-direction: column;
          width: 24%;

          .infoEvent {
            padding: 12px 0px;
            width: 100%;
            font-size: 14px;
          }
          
          .btnSub {
            display: initial;
            color: #07bc0c;
          }
        
        }
      }
    }

    @media (min-width: 900px) {
      .divEvent {
        width: 80%;
        flex-direction: row;
        height: 230px;
        margin: 50px 43px;

        img {
          width: 25%;
        }
        .divInfos {
          width: 40%;
          height: 90%;
         

        }
        
      }
    }
    @media (min-width: 1280px) {
    }
  }
`;

export default Container;
