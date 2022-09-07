import styled from "styled-components";

export const DivModal = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 110vh;
  left: 0;
  top: 0;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.8);
`;
export const DivInter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20rem;
  height: 30rem;

  background: #fefefe;
  border: 3px solid #ff7d00;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const Divheader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 3rem;

  border-radius: 12px 12px 0px 0px;
  background: rgba(0, 0, 0, 0.88);
  border-bottom: solid 6px rgba(255, 125, 0, 0.95);
  margin-bottom: 1rem;
  h2 {
    font-weight: 400;
    font-size: 22px;
    line-height: 38px;
    color: #ffffff;
  }
  button {
    border: none;
    background: none;
    color: white;
    font-size: 16px;
  }
`;

export const FormEvent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 2px;
  font-weight: 500;
  font-size: 18px;
  color: black;

  p {
    font-size: 12px;
    margin-left: 5px;
  }
  select {
    width: 18rem;
    height: 2rem;
    padding-left: 2px;

    border: 1.5px solid #ff7d00;
    border-radius: 5px;
  }
  #userId {
    display: none;
  }
  input {
    width: 18rem;
    height: 2.2rem;

    background: #ffffff;
    border: 1.5px solid #ff7d00;
    border-radius: 5px;
    font-size: 12px;
    padding-left: 5px;
  }
  label {
    margin-left: 5px;
    font-size: 12px;
  }
  button {
    position: fixed;
    align-self: center;
    border: none;
    width: 7rem;
    height: 2rem;

    margin-top: 25rem;
    background: #333333;
    border-radius: 100px;

    color: white;
    font-size: 16px;
  }
  button:hover {
    background-color: green;
  }
`;
export const Perrors = styled.p`
  font-size: 12px;
  color: red;
`;
