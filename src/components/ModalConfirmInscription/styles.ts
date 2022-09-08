import styled from "styled-components";

export const DivModal = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.8);
`;

export const DivInter = styled.div`
  justify-content: center;
  align-items: center;

  width: 20rem;
  height: 8rem;

  background: #fefefe;
  border: 1.5px solid #ff7d00;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  p {
    padding-top: 1rem;
    margin: 10px 10px 10px 34px;
    font-size: 14px;
  }
  button {
    width: 6rem;
    height: 2rem;

    border: none;
    border-radius: 8px;

    background: #333333;
    color: white;
    font-size: 14px;
  }
  button:hover {
    background: green;
    width: 6.1rem;
    height: 2.1rem;
  }
  button + button:hover {
    background: red;
  }
  div {
    display: flex;
    margin-top: 1.5rem;
    justify-content: space-evenly;
  }
`;
