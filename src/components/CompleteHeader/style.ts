import styled from "styled-components";

export const Header = styled.header`
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const DivLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  height: 100%;
  width: 100%;
  border-bottom: #ff7d00 8px solid;

  .divLogo {
    display: flex;
    align-items: center;
  }
  .divOptions {
    display: flex;
    align-items: center;
    gap: 250px;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 100px;
  }
  li {
    color: #ffffff;
  }
  button {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #ffffff;
    background: none;
    border-radius: 50%;
    border: none;
    width: 110px;

    img {
      width: 40px;
      border-radius: 50%;
    }
  }
  img {
    width: 45px;
  }
  span {
    svg {
      width: 35px;
      height: 35px;
    }
  }

  h1 {
    font-size: 18px;
    color: #ffffff;
    padding-left: 10px;
  }
  @media (min-width: 768px) {
    img {
      display: flex;
      width: 45px;
    }
    h1 {
      padding-left: 10px;
    }
  }
`;
