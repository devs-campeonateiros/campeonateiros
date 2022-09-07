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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 70vw;
  background: #fefefe;
  border: 3px solid #ff7d00;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const Divheader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-radius: 12px 12px 0px 0px;
  background: rgba(0, 0, 0, 0.88);
  border-bottom: solid 6px rgba(255, 125, 0, 0.95);
  margin-bottom: 1rem;
  h2 {
    font-weight: 500;
    font-size: 22px;
    line-height: 38px;
    color: #ffffff;
    margin-left: 25px;
  }
  button {
    border: none;
    background: none;
    color: white;
    font-size: 16px;
    margin-right: 25px;
  }
`;
