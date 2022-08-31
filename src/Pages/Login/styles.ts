import styled from "styled-components";

export const ContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;

    form {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: stretch;
        height: 300px;
    }
    span {
        font-size: 12px;
    }
    .container {
        width: 300px;
        background-color: yellow;
        height: 450px;

        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
    }
    h2 {
        margin-left: 103px;
    }
    input {
        width: 260px;
        height: 35px;
    }
    button {
        margin-top: 10px;
        background: #333333;
        border-radius: 100px;
        height: 41px;
        font-size: 14px;
        font-weight: bold;
        color: white;
    }
    .register {
        display: flex;
        flex-direction: column;
        height: 150px;
        justify-content: center;
        align-items: center;
    }
`;

export const Header = styled.header`
    background-color: black;
    width: 100vw;
    height: 50px;
`;
