import styled from "styled-components";

export const ContainerLogin = styled.div`
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;

    .container {
        width: 310px;
        background-color: #ff7d00;
        height: 450px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        border: 3px solid #fff4dba3;
        box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
        form {
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            align-items: stretch;
            height: 300px;
        }

        h2 {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
        }

        label {
            font-size: 1.1rem;
        }

        input {
            width: 260px;
            height: 35px;
            border-radius: 10px;
            outline: none;
            border: none;
            font-size: 1rem;
            padding-left: 15px;
        }
        span{
            font-size: 14px;
            font-weight: 700;
            color: red;
        }
        button {
            margin-top: 10px;
            background: #333333;
            border-radius: 100px;
            height: 41px;
            font-size: 14px;
            font-weight: bold;
            color: white;
            border: none;
        }
    }

    .register {
        display: flex;
        flex-direction: column;
        height: 150px;
        justify-content: center;
        align-items: center;

        span {
            font-size: 14px;
            font-weight: 500;
            color: black;
        }

        button {
            width: 100px;
        }
    }
`;
