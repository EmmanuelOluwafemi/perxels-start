import React, {useState} from 'react';

import Styled from 'styled-components';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';

export const Info = () => {

    const [isModal, setIsModal] = useState(false);

    const handleOnClick = () => {
        setIsModal(true);
    }

    const closeModal = () => {
        setIsModal(false);
    }

    return (
        <>
        <Modal onClick={closeModal} className={isModal ? 'show' : ''}>
            <div className="modalContent">
                Projects will be available when the class starts.
                <button><a href="https://forms.gle/Sf41pk3gYVhKMa1d7">Join The Class</a></button>
            </div>
        </Modal>
        <InfoStyle id="info">
            <div className="wrapper">
                <InfoHeadeingStyle>
                    <h5>Everything you need to know about this class</h5>
                    <h2>THIS IS A 3-5DAYS MASTERCLASS FOR FREE</h2>
                    <h4>In this masterclass, we will be having two categories of students: Beginner and Intermediate students.</h4>
                </InfoHeadeingStyle>

                <div className="row justify-content-around align-items-center new-row" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                    <Content className="col-md-6 px-4 col-xl-4 mb-5 mb-md-0">
                        <h5>THE BEGINNER‘S CLASS</h5>
                        <p>This class is for those with the following criteria: </p>
                        <InfoList >
                            <li><div></div><span>You don't know anything about design</span></li>
                            <li><div></div><span>You have never designed before</span></li>
                            <li><div></div><span>You design but you have issues with allignment,<br/> 
                                color usage, hierarchy, white space and all the <br/> basic 
                                principles of design</span></li>

                        </InfoList>
                        <button className="joinBtn"><a href="https://forms.gle/Sf41pk3gYVhKMa1d7">JOIN THE BEGINNERS CLASS</a></button>
                        <button onClick={handleOnClick} className="downloadBtn">DOWNLOAD YOUR CLASS PROJECT</button>
                    </Content>
                    <ImageContainer className="col-md-6 mt-5 mt-md-0">
                        <div className="under"></div>
                        <img className="img-fluid" src={image1} alt="lecture"/>
                    </ImageContainer>
                </div>
                <div className="row align-items-center second-row" style={{ marginTop: '160px' }} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                    <ImageContainer className="col-md-6 order-2 order-md-1  mt-5 mt-md-0">
                        <div className="under"></div>
                        <img className="img-fluid" src={image2} alt="lecture"/>
                    </ImageContainer>
                    <Content className="col-md-6 px-4 order-1 order-md-2  mb-5 mb-md-0">
                        <h5>THE INTERMEDIATE CLASS</h5>
                        <p>This class is for those with the following criteria: </p>
                        <InfoList >
                            <li><div></div><span>You can make beautiful and clean designs to an extent</span></li>
                            <li><div></div><span>You don't understand how to use design<br/> thinking process to solve problem</span></li>
                            <li><div></div><span>When working on a project you get stuck often <br/>You have design block often</span></li>

                        </InfoList>
                        <button className="joinBtn"><a href="https://forms.gle/Sf41pk3gYVhKMa1d7">JOIN THE INTERMEDIATE CLASS</a></button>
                        <button onClick={handleOnClick} className="downloadBtn">DOWNLOAD YOUR CLASS PROJECT</button>
                    </Content>
                    
                </div>
            </div>
        </InfoStyle>
        </>
    )
}

const Modal = Styled.div`
    position: fixed;
    z-index: 50;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .6);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: scaleX(0);
    transition: all ease-in .3s;
    transform-origin: left;
    cursor: pointer;

    &.show {
        opacity: 1;
        transform: scaleX(1);
    }

    .modalContent {
        width: 100%;
        max-width: 500px;
        height: 300px;
        padding: 2rem;
        background: #34296B;
        border-top: 10px solid #FFD300;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 1.4rem;
        color: #FFF;
        text-align: center;

        button {
            width: 200px;
            height: 48px;
            border-radius: 50px;
            border: none;
            outline: none;
            background: #FFD300;
            margin-top: 24px;

            &:hover {
                background: #edc602;
            }

            a {
                color: #34296B;
                font-family: "Roboto", sans-serif;
                font-weight: bold;
                font-size: 1.3rem;

                &:hover {
                    text-decoration: none;
                }
            }
        }
    }
`;

const InfoStyle = Styled.div`
    background: #34296B;
    min-height: 400px;
    padding: 120px 0;
`;

const InfoHeadeingStyle = Styled.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #fff;
    margin-bottom: 88px;

    h5 {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: bold;
    }

    h2 {
        font-family: 'Roboto', sans-serif;
        font-size: 1.8rem;
        font-weight: bold;
        text-transform: uppercase;
        color: #edc602;
        margin: 20px 0;
    }

    h4 {
        font-family:  ProximaBold, "Helvetica", "Arial", sans-serif;
        font-size: 1.1rem;
        font-weight: bold;
    }
`;

const Content = Styled.div`
    max-width: 100vw;
    box-sizing: border-box;
    h5 {
        font-family: 'Roboto', sans-serif;
        font-size: 1.3rem;
        text-transform: uppercase;
        color: #edc602;
    }

    p {
        font-family:  ProximaBold, "Helvetica", "Arial", sans-serif;
        font-size: 1.1rem;
        color: #fff;
        width: 100%;
        max-width: 300px;
    }

    .joinBtn {
        width: 249px;
        height: 42px;
        background: #edc602;
        border: none;
        outline: none;
        border-radius: 5px;
        display: block;

        &:hover {
            background: #d0ad02;
        }

        a {
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            font-weight: bold;
            color: #34296B;

            &:hover {
                text-decoration: none;
            }
        }
    }

    .downloadBtn {
        width: 284px;
        height: 42px;
        background: #C4C4C4;
        border: none;
        outline: none;
        border-radius: 5px;
        display: block;
        margin-top: 24px;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: bold;
        color: #34296B;

        @media (max-width: 340px) {
            width: 249px;
        }

        &:hover {
            background: #d0cdcd;
        }
    }
`;

const InfoList = Styled.ul`
    padding: 0;
    width: 100%;
    max-width: 400px;

    li {
        font-family:  ProximaRegular, "Helvetica", "Arial", sans-serif;
        color: #fff;
        list-style: none;
        display: flex;
        align-items: center;
        margin-bottom: 16px;

        div {
            width: 10px;
            height: 3px;
            background: #edc602;
        }

        span {
            margin-left: 8px;
        }
    }
`;

const ImageContainer = Styled.div`
    position: relative;
    
    .under {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 0;
        height: 110%;
        width: 60px;
        background: #edc602;
        left: -10px;
    }

    img {
        position: relative;
        z-index: 1;
    }
`;