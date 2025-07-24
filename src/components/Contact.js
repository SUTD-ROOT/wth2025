import { useRef, useState } from 'react';
import ContactModal from "./contactModal";
import rocket from "../icons/rocket.png";
import seamlessStar from "../icons/seamless_star4.svg"

import emailjs from '@emailjs/browser';
import Footer2 from './Footer2'

const Contact = () => {
    const form = useRef();
      const [openModal, setOpenModal] = useState(false);
      const [error, setError] = useState(false);
      const [errorMsg, setErrorMsg] = useState("");

    const sendEmail = (e) => {
      e.preventDefault();
      
      console.log(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current,process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current,process.env.REACT_APP_EMAILJS_PUBLIC_KEY) 
      .then((result) => {
          console.log('SUCCESS!');
            console.log(result.text);
            setErrorMsg("");
            setError(false);
            setOpenModal(true);

        }, (error) => {
          console.log('FAIL!');
            console.log(error.text,errorMsg);
            setError(true);
            if (errorMsg == ""){
              setErrorMsg("Sorry, service lost, please email us at sutdwth@studentgov.sutd.edu.sg");
            }
            else{
              setErrorMsg(error.text);
            }
            setOpenModal(true);
        });

        e.target.reset()
        setErrorMsg("");
    };

    return (
      <div className= "contact-us" style={{background: `url(${seamlessStar}), linear-gradient(to bottom, #3d1697, #0f35be)`,backgroundSize: 'auto'}}>
        <div className="ask">
          <div className="Ask-header">Got any doubts?</div>
          <div className="Ask-body">
            <p>Interested in joining the hackathon, but still having some doubts?</p>
            <p>Fill in this form to let us know your burning questions!</p>
            <p>Alternatively, drop us an email at at sutdwth@studentgov.sutd.edu.sg.</p>
            <img className="rocket" src={rocket} alt="Rocket" />
          </div>
        </div>
        <div className='contact'>
              <form className='form' ref={form} onSubmit={(e) => sendEmail(e)}>
                <div className="input">
                    <label>Name*</label>
                    <input type="text" placeholder="e.g. Bun" name="user_name" required/>
                </div>
                <div className="input">
                    <label>Email*</label>
                    <input type="email" placeholder="e.g. sutdwth@studentgov.sutd.edu.sg" name="user_email" required/>
                </div>
                <div className="input">
                    <label>What message would you like to send?*</label>
                    <textarea rows="4" required name="message" type="text" placeholder="Tell us more!" />
                </div>
                <button className='submit' type="submit">Send</button>
            </form>
    
                <ContactModal {...{openModal, setOpenModal, error, errorMsg}}/>
        </div>
        <Footer2/>
      </div>)
}

export default Contact;
