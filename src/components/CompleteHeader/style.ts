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
    .menu-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      /* z-index: 2; */
      justify-content: center;

      img {
        width: 40px;
        border-radius: 50%;
      }

      button {
        cursor: pointer;
        border: none;
        background: none;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
      }

      nav ul {
        display: flex;
        flex-direction: column;
        width: 30vw;
        margin-top: 155px;
        margin-right: -68px;
        transition: 1s ease;
        list-style: none;
        background-color: rgba(0, 0, 0, 0.8);
        align-items: center;
      }

      nav a {
        display: block;
        color: gray;
        text-decoration: none;
        font-size: 1rem;
      }

      ul button {
        color: gray;
        font-size: 1rem;
      }

      ul button:hover {
        color: #ffffff;
      }

      nav a:hover {
        color: #ffffff;
      }

      nav .lastLi {
        border-bottom: 2px solid #ffffff;
      }
    }

    .menu.active {
      opacity: 1;
      visibility: visible;
      z-index: 2;
    }

    .menu {
      opacity: 0;
      z-index: -1;
    }
  }
`;
