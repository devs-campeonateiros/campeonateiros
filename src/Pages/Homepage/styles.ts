import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;

  .mainHomepage {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    .divImg {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;

      .imgHomepage {
        position: relative;
        margin: 20px 0;
        width: 90%;
        height: 20vh;
      }

      span {
        font-size: 10px;
        font-weight: 700;
        color: #ffffff;
        position: absolute;
        left: 63%;
        width: 100px;
        text-align: center;
        top: 50px;
      }

      .moreInfo {
        position: absolute;
        left: 64%;
        background: none;
        border: 2px solid #ffffff;
        font-size: 9px;
        width: 92px;
        color: #ffffff;
        top: 95px;
        padding: 2px;
        border-radius: 50px;
      }
      @media (min-width: 600px) {
        .imgHomepage {
          width: 80%;
        }
        span {
          font-size: 16px;
          left: 65%;
          width: 147px;
          top: 62px;
        }
        .moreInfo {
          font-size: 14px;
          width: 150px;
          top: 141px;
        }
        @media (min-width: 900px) {
          .imgHomepage {
            width: 90%;
            height: 40vh;
          }
          span {
            font-size: 27px;
            left: 67%;
            width: 248px;
            top: 74px;
          }
          .moreInfo {
            font-size: 20px;
            width: 200px;
            top: 200px;
            left: 69%;
          }
        }
        @media (min-width: 1280px) {
          .imgHomepage {
            width: 80%;
            height: 50vh;
          }
          span {
            font-size: 30px;
            left: 65%;
            width: 276px;
            top: 122px;
          }
          .moreInfo {
            font-size: 23px;
            width: 244px;
            top: 267px;
            left: 66%;
          }
        }
      }
    }
  }

  .buttonsGroup {
    display: flex;
    flex-direction: column;
    gap: 10px;

    button {
      font-weight: 600;
      font-size: 11px;
      border: none;
      color: #ffffff;
      background: #ff7d00;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      padding: 10px;
    }

    .btnAllEvents {
      width: 100%;
      height: 40px;
    }

    .btnsFilterSports {
      display: flex;
      justify-content: space-between;
      width: 90vw;
      height: 40px;
    }
    @media (min-width: 500px) {
      display: flex;
      flex-direction: row;
      width: 90%;

      .btnAllEvents {
        width: 40%;
      }
      .btnsFilterSports {
        display: flex;
        width: 100%;
        height: 40px;
      }
    }
    @media (min-width: 600px) {
      display: flex;
      flex-direction: row;
      width: 80%;

      .btnAllEvents {
        width: 140px;
      }
      .btnsFilterSports {
        display: flex;
        width: 300px;
        height: 40px;
      }
    }
    @media (min-width: 900px) {
      width: 90%;
      button {
        font-size: 13px;
      }

      .btnAllEvents {
        width: 140px;
      }
      .btnsFilterSports {
        display: flex;
        width: 340px;
        height: 40px;
      }
    }
    @media (min-width: 1280px) {
      width: 80%;
      button {
        font-size: 16px;
      }

      .btnAllEvents {
        width: 190px;
        height: 100%;
      }
      .btnsFilterSports {
        display: flex;
        width: 390px;
        height: 100%;
      }
    }
  }

  .eventsList {
    width: 90%;
    height: 100vh;
    margin-top: 10px;

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      .event {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 48%;
        height: 270px;
        margin-top: 15px;
        border-radius: 10px;

        img {
          width: 100%;
          height: 155px;
          border-radius: 10px;
          opacity: 90%;
        }

        .cardDescription {
          display: flex;
          flex-direction: column;
          margin-top: 8px;
          height: 100px;

          .eventDate,
          .eventName {
            margin-left: 5px;
          }

          .eventDate {
            font-weight: 500;
            font-size: 14px;
            line-height: 146.5%;
            color: rgba(29, 30, 36, 0.4);
          }

          .eventName {
            margin-top: 10px;
            font-weight: 700;
            font-size: 16px;
          }
        }

        .cardFooter {
          display: flex;
          align-items: center;

          .btnViewEvent {
            width: 140px;
            height: 40px;
            border-radius: 100px;
            border: none;
            color: #ffffff;
            background: #ff7d00;
          }
        }
      }
    }
    @media (min-width: 600px) {
      width: 80%;
      ul {
        .event {
          width: 32%;
          height: 300px;
        }
      }
    }
    @media (min-width: 900px) {
      width: 90%;
      ul {
        gap: 20px;
        .event {
          width: 31%;
          height: 360px;
          img {
            height: 200px;
          }
        }
      }
    }
    @media (min-width: 1280px) {
      width: 80%;
      ul {
        gap: 40px;
        .event {
          width: 22%;
          height: 400px;
          img {
            height: 230px;
          }
          .cardDescription {
            .eventDate {
              font-size: 16px;
            }
            .eventName {
              font-size: 20px;
            }
          }
          .cardFooter {
            .btnViewEvent {
              width: 140px;
              height: 50px;
              font-size: 16px;
              border-radius: 100px;
              border: none;
              color: #ffffff;
              background: #ff7d00;
            }
          }
        }
      }
    }
  }
`;
