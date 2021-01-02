import React from 'react';
import Styled from 'styled-components';

export const Footer = () => {
    return (
        <FooterStyle>
            <p><a href="http://wa.link/fschxi">Get in contact</a> if you have any questions</p>
        </FooterStyle>
    )
}

const FooterStyle = Styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff; 
    height: 80px;

    p {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', 'san-serif';
        font-size: 1.2rem;
        color: #34296B;
        text-align: center;
        
        a {
            color: #34296B;
            text-decoration: underline;

            &:hover {
                color: #FFD300;
            }
        }
    }
`;