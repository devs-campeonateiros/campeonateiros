import styled from "styled-components";

export const ContainerRegister = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: white;

    .container {
        width: 310px;
        background-color: #ff7d00;
        overflow: hidden;
        display: flex;
        height: 660px;

        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        border: 3px solid #fff4dba3;
        box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
        form {
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            height: 100%;
        }

        h2 {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            padding: 10px;
        }

        label {
            font-size: 1rem;
            margin-bottom: 8px;
        }

        input {
            width: 260px;
            height: 35px;
            border-radius: 10px;
            outline: none;
            border: none;
            font-size: 1rem;
            padding-left: 15px;
            margin-bottom: 10px;
        }
        span {
            font-size: 14px;
            color: red;
            font-weight: 700;
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

        a {
            text-decoration: none;
            color: #fff;
            font-size: 1.6rem;
        }
    }
`;

