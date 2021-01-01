import React from 'react';

import Styled from 'styled-components';

export const Info = () => {
    return (
        <InfoStyle>
            <div className="wrapper">
                <InfoHeadeingStyle>
                    <h5>Everything you need to know about this class</h5>
                    <h2>THIS IS A 3-5DAYS MASTERCLASS FOR FREE</h2>
                    <h4>In this masterclass, we will be having two categories of students: Beginner and Intermediate students.</h4>
                </InfoHeadeingStyle>

                <div className="row" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" style={{ alignItems: 'center', marginLeft: '3%' }}>
                    <Content className="col-md-6 mb-5 mb-md-0">
                        <h5>THE BEGINNER‘S CLASS</h5>
                        <p>This class is for those with the following criteria: </p>
                        <InfoList >
                            <li><div></div>You dont know anything about design</li>
                            <li><div></div>You have never design before</li>
                            <li><div></div>You design but you have issues with allignment, 
                                color usage, hierarchy, white space and all the basic 
                                principles of design</li>

                        </InfoList>
                        <button className="joinBtn"><a href="http://perxels.com">JOIN THE BEGINNER’S CLASS</a></button>
                        <button className="downloadBtn"><a href="http://perxels.com">DOWNLOAD YOUR CLASS PROJECT</a></button>
                    </Content>
                    <ImageContainer className="col-md-6 mt-5 mt-md-0">
                        <div className="under"></div>
                        <img className="img-fluid" src="./images/image1.jpg" alt="lecture"/>
                    </ImageContainer>
                </div>
                <div className="row" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" style={{ alignItems: 'center', marginTop: '160px', marginLeft: '3%' }}>
                    <ImageContainer className="col-md-6 order-2 order-md-1  mt-5 mt-md-0">
                        <div className="under"></div>
                        <img className="img-fluid" src="./images/image2.jpg" alt="lecture"/>
                    </ImageContainer>
                    <Content className="col-md-6 pl-0 pl-md-5 order-1 order-md-2  mb-5 mb-md-0">
                        <h5>THE INTERMEDIATE CLASS</h5>
                        <p>This class is for those with the following criteria: </p>
                        <InfoList >
                            <li><div></div>You can make beautiful and clelan design to an extent</li>
                            <li><div></div>You dont understand how to use design thinking process to solve problem</li>
                            <li><div></div>When working on a project you get stuck often <br/>You have design block often</li>

                        </InfoList>
                        <button className="joinBtn"><a href="http://perxels.com">JOIN THE BEGINNER’S CLASS</a></button>
                        <button className="downloadBtn"><a href="http://perxels.com">DOWNLOAD YOUR CLASS PROJECT</a></button>
                    </Content>
                    
                </div>
            </div>
        </InfoStyle>
    )
}

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
        font-family: "Roboto", "san-serif";
        font-size: 1rem;
        font-weight: bold;
    }

    h2 {
        font-family: "Roboto", "san-serif";
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

    h5 {
        font-family: "Roboto", "san-serif";
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
            font-family: "Roboto", "san-serif";
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

        @media (max-width: 340px) {
            width: 249px;
        }

        &:hover {
            background: #d0cdcd;
        }

        a {
            font-family: "Roboto", "san-serif";
            font-size: 14px;
            font-weight: bold;
            color: #34296B;

            &:hover {
                text-decoration: none;
            }
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
            margin-right: 8px;
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