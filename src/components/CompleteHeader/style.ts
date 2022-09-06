import styled from "styled-components";

export const Header = styled.header`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const DivLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  height: 100%;
  width: 100%;
  border-bottom: #ff7d00 8px solid;

  .divLogo {
    display: flex;
    align-items: center;

    img {
      width: 40px;
    }

    h1 {
      font-size: 14px;
      color: #ffffff;
      padding-left: 10px;
    }
    @media (min-width: 900px) {
        img {
      width: 50px;
    }
        h1 {
      font-size: 16px;
    }
    }
  }

  .divOptions {
    display: flex;
    align-items: center;

    ul {
      display: none;
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
      width: 100px;

      img {
        width: 35px;
      }
    }
    @media (min-width: 600px) {
      gap: 25px;

      ul {
        display: flex;
        list-style: none;
        gap: 10px;
      }
      
      button {
        width: 100%;
      }
    }
    @media (min-width: 900px) {
      gap: 180px;

      ul {
        display: flex;
        list-style: none;
        gap: 40px;
      }

      button {
        width: 100%;
      }
    }
  }
`;
