import React from 'react';
import { Link } from 'react-router-dom';

import Styled from 'styled-components';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';

import beginer from './files/PERXELS_MASTERCLASS(BEGINNER).pdf';
import intermediate from './files/PERXELS_MASTERCLASS.pdf';

export const Info = () => {

    // const [isModal, setIsModal] = useState(false);
    // const [isModal2, setIsModal2] = useState(false);

    // const handleOnClick = (e) => {
    //     e.preventDefault();
    //     setIsModal(true);
    // }

    // const closeModal = () => {
    //     setIsModal(false);
    // }

    // const handleOnClick2 = (e) => {
    //     e.preventDefault();
    //     setIsModal2(true);
    // }

    // const closeModal2 = () => {
    //     setIsModal2(false);
    // }

    return (
        <>
        {/* <Modal onClick={closeModal} className={isModal ? 'show' : ''}>
            <div className="modalContent">
                The assignment will be available when the class Starts
                <button disabled><a href="#">Join The Class</a></button>
            </div>
        </Modal> */}
        {/* <Modal onClick={closeModal2} className={isModal2 ? 'show' : ''}>
            <div className="modalContent">
                Registration has closed until march
                <button disabled><a href="#">Join The Class</a></button>
            </div>
        </Modal> */}
        <InfoStyle id="info">
            <div className="wrapper">
                <InfoHeadeingStyle>
                    <h5>Everything you need to know about this class</h5>
                    <h2>THIS IS A 3-5 DAYS MASTERCLASS FOR FREE</h2>
                    <h4>In this masterclass, we will be having two categories of students: Beginner and Intermediate students.</h4>
                </InfoHeadeingStyle>

                <div className="row justify-content-around align-items-center new-row" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                    <Content className="col-md-6 px-md-4 col-xl-4 mb-5 mb-md-0">
                        <h5>THE BEGINNER‘S CLASS</h5>
                        <p>This class is for those with the following criteria: </p>
                        <InfoList >
                            <li><div></div><span>You don't know anything about design</span></li>
                            <li><div></div><span>You have never designed before</span></li>
                            <li><div></div><span>You design but you have issues with alignment,<br/> 
                                color usage, hierarchy, white space and all the <br/> basic 
                                principles of design</span></li>

                        </InfoList>
                        <Link to="/register" className="joinBtn">JOIN THE BEGINNERS CLASS</Link>
                        <a href={beginer} className="downloadBtn">DOWNLOAD YOUR CLASS PROJECT</a>
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
                    <Content className="col-md-6 px-md-4 order-1 order-md-2  mb-5 mb-md-0">
                        <h5>THE INTERMEDIATE CLASS</h5>
                        <p>This class is for those with the following criteria: </p>
                        <InfoList >
                            <li><div></div><span>You can make beautiful and clean designs to an extent</span></li>
                            <li><div></div><span>You don't understand how to use design<br/> thinking process to solve problem</span></li>
                            <li><div></div><span>When working on a project you get stuck often <br/>You have design block often</span></li>
                        </InfoList>
                        {/* https://forms.gle/Sf41pk3gYVhKMa1d7 */}
                        <Link to="/register" className="joinBtn">JOIN THE INTERMEDIATE CLASS</Link>
                        <a href={intermediate} className="downloadBtn">DOWNLOAD YOUR CLASS PROJECT</a>
                    </Content>
                    
                </div>
            </div>
        </InfoStyle>
        </>
    )
}

// const Modal = Styled.div`
//     position: fixed;
//     z-index: 50;
//     top: 0;
//     width: 100vw;
//     height: 100vh;
//     background: rgba(0, 0, 0, .6);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     opacity: 0;
//     transform: scaleX(0);
//     transition: all ease-in .3s;
//     transform-origin: left;
//     cursor: pointer;

//     &.show {
//         opacity: 1;
//         transform: scaleX(1);
//     }

//     .modalContent {
//         width: 100%;
//         max-width: 500px;
//         height: 300px;
//         padding: 2rem;
//         background: #34296B;
//         border-top: 10px solid #FFD300;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         font-family: 'Roboto', sans-serif;
//         font-weight: bold;
//         font-size: 1.4rem;
//         color: #FFF;
//         text-align: center;

//         button {
//             width: 200px;
//             height: 48px;
//             border-radius: 50px;
//             border: none;
//             outline: none;
//             background: #FFD300;
//             margin-top: 24px;

//             &:hover {
//                 background: #edc602;
//             }

//             a {
//                 color: #34296B;
//                 font-family: "Roboto", sans-serif;
//                 font-weight: bold;
//                 font-size: 1.3rem;

//                 &:hover {
//                     text-decoration: none;
//                 }
//             }
//         }
//     }
// `;

const InfoStyle = Styled.div`
    background: #34296B;
    min-height: 400px;
    padding: 120px 0;
    overflow-x: hidden;
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
    box-sizing: border-box;
    width: 100vw;
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
        color: #34296B;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: bold;
        border: none;
        outline: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background: #d0cdcd;
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
        background: #c4c4c4;
        border: none;
        outline: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 24px;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: bold;
        color: #34296B;

        @media (max-width: 340px) {
            width: 249px;
        }

        &:hover {
            background: #d0ad02;
        }

        a {
            color: #34296B;
            text-decoration: none;
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
    width: 100%;
    max-width: 100vw; 
    
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