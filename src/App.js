import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'aos/dist/aos.css';

import Home from './pages/Home';
import Seo from './Seo';

function App() {

  return (
    <>
    <Seo />
    <Home data-aos='fade-up' />
    </>
  );
}

export default App;
