import Styled from 'styled-components';

export const Modal = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .4);
    display: none;
    justify-content: center;
    align-items: center;

    &.show {
        display: flex;
    }

    .modalContainer {
        position: relative;
        width: 95%;
        max-width: 700px;
        min-height: 400px;
        background: rgb(52, 41, 107);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-top: 10px solid orange;
        border-radius: 5px;

        .close {
            position: absolute;
            top: 24px;
            right: 24px;
            font-size: 1.3rem;
            color: #fff;
            cursor: pointer;
        }

        p {
            width: 90%;
            max-width: 500px;
            text-align: center;
            color: #fff;
            font-size: 1.2rem;
        }

        a {
            font-size: 1.4rem;
            font-weight: bold;
            color: rgb(52, 41, 107);
            background: orange;
            padding: 12px 24px;
            border-radius: 10px;
            text-decoration: none;
            margin-top: 24px;
            transition: all ease-in .3s;

            &:hover {
                transform: scale(1.04);
            }
        }
    }
`;