import styled from "styled-components";

export const ContainerEvent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    width: 300px;
    height: 130px;
    border-radius: 10px;
  }
  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    /* margin-top: 25px; */
    height: 200px;
    justify-content: space-evenly;
  }
  .description {
    display: flex;
    width: 300px;
    flex-direction: column;
    /* height: 230px; */
    justify-content: space-between;
    p {
      margin-bottom: 7px;
    }
    h3 {
      margin-bottom: 7px;
    }
    span {
      color: #1d1e24;
      font-size: 12px;
      margin-bottom: 7px;
    }
  }
  .value {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-evenly;
    align-items: center;
    height: 160px;
  }
  button {
    background-color: #ff7d00;
    border-radius: 100px;
    height: 60px;
    width: 120px;
    color: white;
    font-weight: bold;
    border: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    img {
    width: auto;
    height: 250px;
    border-radius: 10px;
  }  
  }
`;
