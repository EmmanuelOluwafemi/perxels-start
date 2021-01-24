import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from './Components/images/logoColor.svg';

import { BiArrowBack } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';

import { Modal } from '../Style/Modal';

const Register = () => {
    const { register, handleSubmit, errors } = useForm();

    const [showModal, setModal] = useState(false);
    const [isIntermediate, setIntermediate] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleOnclick = () => { setModal(!showModal) }

    const handleClass = () => { setImmediate(!isIntermediate) }

    const onSubmit = (data) => {
        setLoading(true);
        fetch("https://api.apispreadsheets.com/data/7085/", {
            method: "POST",
            body: JSON.stringify({"data": {...data}}),
        }).then(res => {
            if (res.status === 201) {
                // Success
                console.log('sent');
                if(isIntermediate) {
                    setIntermediate(true);
                }

                setModal(!showModal);
                setLoading(false);
            }

            else {
                // Error
                setLoading(false);
                console.log(Error);
            }
        })

    };

    return (
        <RegisterStyle>
            <Modal className={showModal ? 'show' : ''}>
                <div className="modalContainer">
                    <IoCloseSharp className="close" onClick={handleOnclick} />
                    <p>Thank You for registering (Check perxels design school, Click 
                        on enroll to see the inspiration), Join your class with the link below</p>
                    
                    {isIntermediate ? 
                        <a href="https://chat.whatsapp.com/C1va8npW7LO294COEVcOZE">Join Class</a> :
                        <a href="https://chat.whatsapp.com/KPq3nABurxHBz1abK1GRsh">Join Class</a>
                    }
                </div>
            </Modal>
            <a href="https://perxels.com/"><img className="img-fluid" src={logo} alt="perxels logo"/></a>
            <div className="heading">
                <Link to="/"><BiArrowBack /></Link>
                <p>Please kindly fill your information in boxes below</p>
                <span></span>
            </div>

            <FormStyle onSubmit={handleSubmit(onSubmit)}>
                <div className="inpuGroup">
                    <label className="labels" htmlFor="name">Full Name <span>*</span></label>
                    <input className={errors.name ? "inputs error" : "inputs"} id="name" name="name" ref={register({ required: true, minLength: 5 })} type="text"/>
                </div>
                <div className="inpuGroup">
                    <label className="labels" htmlFor="email">Email Address <span>*</span></label>
                    <input className={errors.email ? "inputs error" : "inputs"} id="email" name="email" ref={register({ required: true, minLength: 8 })} type="email"/>
                </div>
                <div className="inpuGroup">
                    <label className="labels" htmlFor="location">Location <span>*</span></label>
                    <input className={errors.location ? "inputs error" : "inputs"} id="location" name="location" ref={register({ required:true, minLength: 2 })} type="text"/>
                </div>
                <div className="inpuGroup">
                    <label className="labels" htmlFor="number">Whatsapp Number <span>*</span></label>
                    <input className={errors.number ? "inputs error" : "inputs"} id="number" name="text" ref={register({ required: true, minLength:5, maxLength: 12 })} type="text"/>
                </div>

                <div className="inpuGroup">
                    <label className="labels" htmlFor="Category" style={{ marginBottom: '24px' }}>Category <span>*</span></label>
                    <div className="checkbox">
                        <input type="checkbox" value="Corper" id="corper" ref={register({ required: true })} name="category" />
                        <label className="check" for="corper"></label>
                        <label for="corper">Corper</label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" value="Undergraduate" id="undergraduate" ref={register({ required: true })} name="category" />
                        <label className="check" for="undergraduate"></label>
                        <label for="undergraduate">Undergraduate</label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" value="Graduate" id="graduate" ref={register({ required: true })} name="category" />
                        <label className="check" for="graduate"></label>
                        <label for="graduate">Graduate</label>
                    </div>
                </div>
                
                <div className="inpuGroup">
                    <label className="labels" htmlFor="Category" style={{ marginBottom: '24px' }}>Where did you hear about Perxels? <span>*</span></label>

                    <div className="checkbox">
                        <input type="checkbox" id="beginer" value="Beginner's Class" ref={register({ required: true })} name="class" />
                        <label className="check" for="beginer"></label>
                        <label for="beginer">Beginner’s class</label>
                    </div>

                    <div className="checkbox">
                        <input onClick={handleClass} type="checkbox" value="Intermediate Class" id="intermediate" ref={register({ required: true })} name="class" />
                        <label className="check" for="intermediate"></label>
                        <label for="intermediate">Intermediate class</label>
                    </div>
                </div>
                <div className="inpuGroup">
                    <label className="labels" htmlFor="why">Why do you want to join the session? <span>*</span></label>
                    <input className={errors.why ? "inputs error" : "inputs"} id="why" ref={register({ required: true, minLength: 5 })} name="why" type="text"/>
                </div>

                <div className="inpuGroup">
                    <label className="labels" htmlFor="Category" style={{ marginBottom: '24px' }}>Which of this class are you joining for the masterclass? <span>*</span></label>

                    <div className="radioBox">
                        <input type="radio" id="instergram" value="instagram" ref={register({ required: true })} name="refer" />
                        <label className="check" for="instagram"></label>
                        <label for="instergram">Instagram</label>
                    </div>

                    <div className="radioBox">
                        <input type="radio" id="facebook" value="facebook" ref={register({ required: true })} name="refer" />
                        <label className="check" for="facebook"></label>
                        <label for="facebook">Facebook</label>
                    </div>

                    <div className="radioBox">
                        <input type="radio" id="twitter" value="twitter" ref={register({ required: true })} name="refer" />
                        <label className="check" for="twitter"></label>
                        <label for="twitter">Twitter</label>
                    </div>

                    <div className="radioBox">
                        <input type="radio" id="friend" value="friend" ref={register({ required: true })} name="refer" />
                        <label className="check" for="friend"></label>
                        <label for="friend">Friend</label>
                    </div>

                    <div className="radioBox">
                        <input type="radio" id="whatsapp" value="whatsapp status" ref={register({ required: true })} name="refer" />
                        <label className="check" for="whatsapp"></label>
                        <label for="whatsapp">Whatsapp Status</label>
                    </div>

                    <div className="radioBox">
                        <input type="radio" id="other" value="other" ref={register({ required: true })} name="refer" />
                        <label className="check" for="other"></label>
                        <label for="other">Other</label>
                    </div>
                </div>

                <div className="inpuGroup">
                    <button type="submit">{loading ? 'loading...' : 'Submit'}</button>
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
        padding: 24px 3%;

        .heading {
            p {
                font-size: 1rem;
                margin-left: 16px;
            }
        }
    }

`;

const FormStyle = Styled.form`
    width: 100%;
    min-height: 500px;
    background: #fff;
    box-shadow: 0px 0px 25px rgba(151, 151, 151, 0.15);
    border-radius: 15px;
    padding: 3.8125rem 6rem;

    @media (max-width: 768px) {
        padding: 2rem 1rem;
    }

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

            @media (max-width: 768px) {
                font-size: 1rem;
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

            @media (max-width: 768px) {
                font-size: 16px;
            }

            &:hover {
                background: #2c1e6f;
            }
        }

        .inputs {
            width: 100%;
            border: none;
            outline: none;
            border-bottom: 2px solid rgba(253, 224, 35, 0.5);

            &.error {
                border-bottom: 2px solid red;
            }

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

                @media (max-width: 768px) {
                    font-size: 0.9rem;
                }
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

                @media (max-width: 768px) {
                    font-size: 0.9rem;
                }
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

