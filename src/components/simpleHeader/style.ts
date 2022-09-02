import styled from "styled-components";

export const Header = styled.header`
    height: 4rem;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.8);

`;
export const DivLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    
    height: 100%;
    width: 100%;
    border-bottom: #ff7d00 8px solid;

    img {
        width: 53px;
        
    }
    h1 {
        font-size: 18px;
        color: #ffffff;
    }
    @media (min-width: 768px) {
        img {
            display: flex;
            width: 45px;
            margin: 10px;
        }
    }
`;
