import './index.css';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Banner from './components/banner';
import Faq from './components/Faq';
import Past from './components/Past_Winners';
import Scrollbtn from './components/scrollbtn';
import { useRef, useState } from 'react';
import background1 from './bacground1.svg'
import Navbar from './components/Navbar';

function App() {

  const [activeComponent, setActiveComponent] = useState('about');

  
  const top = useRef();
  const up = useRef();
  const offset = useRef();
  
  const handleScroll = (refPoint) => {
    console.log(up)
    if (refPoint != 'about') {
      up.current.scrollIntoView({
        block: "start",
    })
    }
    else{
      top.current.scrollIntoView({
        block: "start",
    })
    }
    setActiveComponent(refPoint)
}

  return (
        <div className="App" ref={top}>
          <Navbar ref={offset} className="stay" {...{handleScroll}} />
          <Banner><img src={background1} alt="Solar System" className="background1" /></Banner>
          <div  ref={up} className='startingpoint'></div>
          <Scrollbtn {...{top}}/>
          <div>
            {activeComponent === 'about' && <About />} 
            {activeComponent === 'past' && <Past />}  
            {activeComponent === 'faq' && <Faq />}
            {activeComponent === 'contact us' && <Faq />}   
          </div>
        </div>   
  );
}

export default App;
