import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 3.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px 0px 0px 8px;
    background-color: #000000;
`;
export const DivLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;
    border: #ffffff 2px white;

    img {
        display: none;
    }
    h1 {
        font-size: 18px;
        color: #ffffff;
    }
    @media (min-width: 768px) {
        img {
            display: flex;
            width: 40px;
        }
    }
`;
