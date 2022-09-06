import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: #000000;

  @media (min-width: 500px) {
    gap: 60px;
  }

  .divLogoH1 {
    display: flex;
    align-items: center;
    height: 100%;
  }

  img {
    height: 100%;
    border-radius: 50%;
  }

  h1 {
    width: 160px;
    text-align: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
  }

  .divH2 {
    display: flex;
    align-items: center;
  }

  .linkForLogin {
    text-decoration: none;
  }

  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    display: none;
    margin-left: 20px;

    @media (min-width: 500px) {
      display: block;
    }
  }

  .userIcon {
    color: #ffffff;
    width: 49px;
    height: 49px;
  }
`;
