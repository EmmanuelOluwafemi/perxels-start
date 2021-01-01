import React from 'react';

import Styled from 'styled-components';

const Character = () => {
    return (
        <div className="wrapper">
            <CharacterStyle data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" >
                <img className="img-fluid" src="./images/main_character.png" alt="main character"/>
                <div className="content">
                    Getting into the design industry especially UI / UX  design can be difficult 
                    because you see all of these beautiful design interface online, but you don’t 
                    know where to start, which tools to use, how to learn it well, where to learn etc. 
                    <span>You are just overwhelled!</span>
                </div>
            </CharacterStyle>
        </div>
    )
}

export default Character;

const CharacterStyle = Styled.div`
    position: relative;
    width: 100%;
    height: 485px;
    background: #FFD300;
    margin-top: 157px;
    margin-bottom: 64px;
    border-radius: 10px;

    img {
        position: absolute;
        left: 0;
        bottom: 0;
    }

    .content {
        position: absolute;
        right: 3rem;
        top: 50%;
        transform: translateY(-50%);
        max-width: 648px;
        text-align: center;
        font-size: 1.6rem;
        font-family: ProximaRegular, "Helvetica", "Arial", sans-serif;

        span {
            font-family: ProximaBold, "Helvetica", "Arial", sans-serif;
        }
    }

    @media (min-width: 1500px) {
        .content {
            right: 8rem;
        }
    }

    @media (max-width: 1244px) {
        height: 455px;

        img {
            width: 400px;
        }

        .content {
            max-width: 548px;
        }
    }

    @media (max-width: 1068px) {
        .content {
            max-width: 450px;
            font-size: 1.4rem;
        }
    }

    @media (max-width: 900px) {
        .content {
            max-width: 400px;
            font-size: 1.3rem;
        }
    }

    @media (max-width: 828px) {
        height: 335px;
        
        img {
            width: 300px;
        }

        .content {
            max-width: 350px;
            font-size: 1.2rem;
        }
    }

    @media (max-width: 696px) {
        height: 335px;
        
        img {
            left: -2.8rem;
            width: 300px;
        }
    }

    @media (max-width: 646px) {
        
        img {
            left: -8rem;
            width: 300px;
        }
    }

    @media (max-width: 558px) {
        
        img {
            left: -10rem;
            width: 300px;
        }
    }

    @media (max-width: 525px) {

        margin-top: 80px;
        
        .content {
            width: 80%;
            max-width: 300px;
            font-size: 1rem;
        }
    }

    @media (max-width: 462px) {
        
        height: 365px;

        .content {
            background: rgba(255, 255, 255, .7);
            padding: 24px;
            border-radius: 10px;
            width: 90%;
            right: 1rem;
        }
    }
`;