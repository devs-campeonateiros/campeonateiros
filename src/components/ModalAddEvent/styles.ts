import styled from "styled-components";

export const DivModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;

`;
export const DivInter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 20rem;
    height: 30rem;

    background: #fefefe;
    border: 3px solid #ff7d00;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
`;

export const Divheader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 3rem;

    border-radius: 12px 12px 0px 0px;
    background: rgba(0, 0, 0, 0.88);
    border-bottom: solid 6px rgba(255, 125, 0, 0.95);
    margin-bottom: 1rem;
    h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 38px;
        color: #ffffff;
    }
    button {
        border: none;
        background: none;
        color: white;
        font-size: 16px;
    }
`;

export const FormEvent = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    gap: 5px;
    font-weight: 500;
    font-size: 18px;
    color: black;

    p {
        margin-left: 5px;
    }
    select {
        width: 18rem;
        height: 2rem;
        padding-left: 2px;

        border: 1.5px solid #ff7d00;
        border-radius: 5px;
    }
    #userId {
        display: none;
    }
    input {
        width: 18rem;
        height: 2.2rem;

        background: #ffffff;
        border: 1.5px solid #ff7d00;
        border-radius: 5px;
        font-size: 14px;
        padding-left: 5px;
    }
    label {
        margin-left: 5px;
    }
    button {
        align-self: center;
        border: none;
        width: 10rem;
        height: 2rem;

        margin-top: 20px;
        background: #333333;
        border-radius: 100px;

        color: white;
        font-size: 20px;
    }
`;
