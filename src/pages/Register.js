import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from './Components/images/logoColor.svg';

import { BiArrowBack } from 'react-icons/bi';

const Register = () => {
    return (
        <RegisterStyle>
            <a href="https://perxels.com/"><img className="img-fluid" src={logo} alt="perxels logo"/></a>
            <div className="heading">
                <Link to="/"><BiArrowBack /></Link>
                <p>Please kindly fill your information in boxes below</p>
                <span></span>
            </div>

            <FormStyle>
                <div className="inpuGroup">
                    <label className="labels" htmlFor="fname">Full Name <span>*</span></label>
                    <input className="inputs" id="fname" name="fname" type="text"/>
                </div>
                <div className="inpuGroup">
                    <label className="labels" htmlFor="address">Email Address <span>*</span></label>
                    <input className="inputs" id="address" name="address" type="email"/>
                </div>
                <div className="inpuGroup">
                    <label className="labels" htmlFor="location">Location <span>*</span></label>
                    <input className="inputs" id="location" name="location" type="text"/>
                </div>
                <div className="inpuGroup">
                    <label className="labels" htmlFor="number">Whatsapp Number <span>*</span></label>
                    <input className="inputs" id="number" name="number" type="text"/>
                </div>

                <div className="inpuGroup">
                    <label className="labels" htmlFor="Category" style={{ marginBottom: '24px' }}>Category <span>*</span></label>
                    <div className="checkbox">
                        <input type="checkbox" id="corper" name="category" />
                        <label className="check" for="corper"></label>
                        <label for="corper">Corper</label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" id="undergraduate" name="category" />
                        <label className="check" for="undergraduate"></label>
                        <label for="undergraduate">Undergraduate</label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" id="graduate" name="category" />
                        <label className="check" for="graduate"></label>
                        <label for="graduate">Graduate</label>
                    </div>
                </div>
                
                <div className="inpuGroup">
                    <label className="labels" htmlFor="Category" style={{ marginBottom: '24px' }}>Where did you hear about Perxels? <span>*</span></label>

                    <div className="checkbox">
                        <input type="checkbox" id="beginer" name="class" />
                        <label className="check" for="beginer"></label>
                        <label for="beginer">Beginner’s class</label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" id="intermediate" name="class" />
                        <label className="check" for="intermediate"></label>
                        <label for="intermediate">Intermediate class</label>
                    </div>
                </div>
                <div className="inpuGroup">
                    <label className="labels" htmlFor="session">Why do you want to join the session? <span>*</span></label>
                    <input className="inputs" id="session" name="session" type="text"/>
                </div>

                <div className="inpuGroup">
                    <label className="labels" htmlFor="Category" style={{ marginBottom: '24px' }}>Which of this class are you joining for the masterclass? <span>*</span></label>

                    <div className="radioBox">
                        <input type="radio" id="instergram" name="social" />
                        <label className="check" for="instergram"></label>
                        <label for="instergram">Instagram</label>
                    </div>

                    <div className="radioBox">
                        <input type="radio" id="facebook" name="social" />
                        <label className="check" for="facebook"></label>
                        <label for="facebook">Facebook</label>
                    </div>

                    <div className="radioBox">
                        <input type="radio" id="twitter" name="social" />
                        <label className="check" for="twitter"></label>
                        <label for="twitter">Twitter</label>
                    </div>

                    <div className="radioBox">
                        <input type="radio" id="friend" name="social" />
                        <label className="check" for="friend"></label>
                        <label for="friend">Friend</label>
                    </div>

                    <div className="radioBox">
                        <input type="radio" id="whatsapp" name="social" />
                        <label className="check" for="whatsapp"></label>
                        <label for="whatsapp">Whatsapp Status</label>
                    </div>

                    <div className="radioBox">
                        <input type="radio" id="other" name="social" />
                        <label className="check" for="other"></label>
                        <label for="other">Other</label>
                    </div>
                </div>

                <div className="inpuGroup">
                    <button type="submit">Submit</button>
                </div>
            </FormStyle>
        </RegisterStyle>
    )
}

export default Register;

const RegisterStyle = Styled.div`
    width: 100%;
    padding: 32px 6%;

    .heading {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 16px;
        margin-bottom: 32px;

        a {
            color: #333333;
            margin: 0;
            font-size: 1rem;
            font-weight: bold;
        }

        p {
            font-size: 1.875rem;
            font-weight: 500;
            font-family: 'Montserrat', sans-serif;
            color: rgba(52, 41, 107, 0.8);
        }
    }

    @media (max-width: 768px) {
        padding: 0 3%;
    }

`;

const FormStyle = Styled.form`
    width: 100%;
    min-height: 500px;
    background: #fff;
    box-shadow: 0px 0px 25px rgba(151, 151, 151, 0.15);
    border-radius: 15px;
    padding: 3.8125rem 6rem;

    .inpuGroup {
        width: 100%;
        max-width: 800px;
        margin-bottom: 48px;

        .labels {
            display: block;
            font-size: 1.5rem;
            font-weight: 500;
            font-family: 'Montserrat', sans-serif;
            color: #34296B;

            span {
                color: red;
            }
        }

        button {
            background: #34296B;
            padding: 1.2rem 6rem;
            border: none;
            outline: none;
            border-radius: 40px;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
            color: #FFFFFF;
            text-transform: uppercase;

            &:hover {
                background: #2c1e6f;
            }
        }

        .inputs {
            width: 100%;
            border: none;
            outline: none;
            border-bottom: 2px solid rgba(253, 224, 35, 0.5);
        }

        .checkbox {
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            label {
                margin: 0;
                margin-left: 16px;
                font-family: Montserrat;
                font-style: normal;
                font-weight: normal;
                font-size: 1.5rem;
                color: #34296B;
            }

            input {
                display: none;
            }

            .check {
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 3px;
                border: 1px solid #FFD300;
                margin-left: 0;
            }
            
            input:checked ~ .check {
                background: #FFD300;
            }
        }

        .radioBox {
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            label {
                margin: 0;
                margin-left: 16px;
                font-family: Montserrat;
                font-style: normal;
                font-weight: normal;
                font-size: 1.5rem;
                color: #34296B;
            }

            input {
                display: none;
            }

            .check {
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 50%;
                border: 1px solid #FFD300;
                margin-left: 0;
            }
            
            input:checked ~ .check {
                background: #FFD300;
            }
        }


    }
`;

