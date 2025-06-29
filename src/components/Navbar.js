import { Link, useHistory } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = ({handleScroll}) => {    

    return ( 
        <div className="header" >
                <div className="left">
                    <img className='logo' src={logo} alt="Logo" />
                </div>
                <div className="right">
                    <p onClick={() => handleScroll("about")}>About</p>
                    <p onClick={() => handleScroll("past")}>Past Winners</p>
                    <p onClick={() => handleScroll("faq")}>FAQ</p>
                    <p onClick={() => handleScroll("contact us")} className="contact-button">Contact Us</p>
                    <p className="hide"><a href="https://forms.office.com/r/Vv5002fu2b" target="_blank">Sign Up</a></p>
                </div>
            </div>
     );
}
 
export default Navbar;