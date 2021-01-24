import React from 'react';
import Styled from 'styled-components';

import logo from './images/logo.svg';
import heroImage from './images/hero_image.jpg';

import { Link } from 'react-router-dom';

const Hero = () => {

    return (
        <HeroStyle style={{ background: `url(${heroImage})` }} data-aos="fade-right" data-aos-duration="2000">
            <div className="overlay"></div>
            <div className="wrapper">
                <nav>
                    <a href="https://perxels.com/"><img className="img-fluid" src={logo} alt="perxels logo"/></a>
                    <p><a href="http://wa.link/fschxi">Get in contact</a> <span>if you have any questions</span></p>
                </nav>
            </div>
            <div className="content">
                <h2 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" >Welcome To <span>PERXELS FREE</span> UIUX Design masterclass</h2>
                <button><Link href="/register">Join The Class</Link></button>
            </div>
        </HeroStyle>
    )
}

export default Hero;

const HeroStyle = Styled.header`
    position: relative;
    width: 100%;
    min-height: 500px;
    background-position: center;
    background-size: cover;
    overflow-x: hidden;

    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(52, 41, 107, 0.8);
    }

    .wrapper {
        nav {
            position: relative;
            z-index: 3;
            height: 60px;
            padding-top: 24px;
            display: flex;
            justify-content: space-between;

            img {
                width: 180px;
                height: auto;
            }

            p {
                font-size: 1.2rem;
                color: #fff;
                font-weight: 400;

                a {
                    color: #fff;
                    text-decoration: underline;

                    &:hover {
                        color: #FFD300;

                    }
                }

            }
            @media (max-width: 468px) {
                img {
                    width: 100px;
                }

                p {
                    span {
                        display: none;
                    }

                    a {
                        display: block;
                    }
                }
            }
        }
    }

    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        width: 100%;
        max-width: 800px;

        h2 {
            text-align: center;
            font-family: ProximaBold, "Helvetica", "Arial", sans-serif;
            font-size: 3.125rem;
            color: #fff;

            span {
                color: #FFD300;
            }
        }

        @media (max-width: 468px) {
            h2 {
                padding: 0 1rem;
                font-size: 2rem;
            }
        }

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