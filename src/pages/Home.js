import React, {useEffect} from 'react';
import Hero from './Components/Hero';
import Character from './Components/Character';
import { Info } from './Components/Info';
import { Footer } from './Components/Footer';

import AOS from 'aos';

const Home = () => {

    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <>
            <Hero />
            <Character />
            <Info />
            <Footer />
        </>
    )
}

export default Home;