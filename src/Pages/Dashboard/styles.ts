import styled from "styled-components";

const Container = styled.div`
  margin: 0 200px;
  background-color: #fff;

  .userIndice {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .divUser {
      display: flex;
      align-items: center;

      span {
        font-size: 5rem;
        color: #b3adad;
        padding: 20px;
      }
      .userSaudation {
        color: #ff7d00;
        font-size: inherit;
        padding: 5px;
      }
    }
  }
  .divButtons {
    display: flex;
    gap: 50px;
    button {
      background: none;
      border: none;
      color: #ff7d00;
      font-weight: 700;
      font-size: 1rem;
    }
    span {
      color: #ff7d00;
    }
    .addEvent {
      background-color: #ff7d00;
      color: #fff;
      padding: 15px;
      border-radius: 50px;
    }
  }
  .divEvent {
    display: flex;
    gap: 20px;
    margin-top: 50px;
    img {
      width: 200px;
    }
    .divInfos {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      span {
        color: gray;
      }
      p {
        font-weight: 700;
        width: 255px;
      }
      .description {
        font-weight: 500;
        width: 305px;
      }
    
    }
    
      .buttonsCard{
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-left: 50px;
        button{
          background: none;
          border: none;
        }
        .infoEvent {
        background-color: #ff7d00;
        color: #fff;
        padding: 15px;
        border-radius: 50px;
        border: none;
        height: 55px;
        font-size: 1rem;
      }
      .btnEdit{
        font-size: 1rem;
        color: grey;
        font-weight: 500;

      }
      .btnDel{
        font-size: 1rem;
        color: #FF3E3E;
        font-weight: 500;

      }
      }
  }
`;

export default Container;
