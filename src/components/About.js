/*import seamless_star4 from '../seamless_star4.png'*/
import prize_icon from '../icons/prize_icon.png'
import gold_planet from '../icons/gold_planet.png'
import plat_planet from '../icons/plat_planet.png'
import silver_planet from '../icons/silver_planet.png'
import skills_icon from '../icons/skills_icon.png'
import students_icon from '../icons/students_icon.png'
import photo1 from '../icons/photo1.png'
import Footer from './Footer'
import Sponsor from './sponsor'
import React from "react";
import "../LandingPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import seamlessStar from "../icons/seamless_star4.svg"

  const schedule = [
    {
      date: '19 Sep',
      events: [
        { time: '4pm', activity: 'Registration' },
        { time: '5pm', activity: 'Opening Briefing' },
        { time: '6pm', activity: 'Dinner' },
        { time: '8pm', activity: 'End' },
      ],
    },
    {
      date: '20 Sep',
      events: [
        { time: '8.30am', activity: 'Hacking Begins' },
        { time: '12pm', activity: 'Lunch' },
        { time: '1pm', activity: 'Hacking Resumes' },
        { time: '6pm', activity: 'Dinner' },
        { time: '7pm', activity: 'Hacking Continues' },
        { time: '10pm', activity: 'Close' },
      ],
    },
    {
      date: '21 Sep',
      events: [
        { time: '8.30am', activity: 'Final Stretch' },
        { time: '12pm', activity: 'Lunch' },
        { time: '1pm', activity: 'Last Stretch' },
        { time: '2pm', activity: 'Round 1 Judging' },
        { time: '5pm', activity: 'Round 2 Judging' },
        { time: '7pm', activity: 'Dinner & End' },
      ],
    },
  ];



export const About = () => {
  return (
    <div className="landing-page" style={{background: `url(${seamlessStar}), linear-gradient(to bottom, #3d1697, #0f35be)`,backgroundSize: 'auto'}}>
      {/* About Section */}
      <section className="about">
        <div className="about-text">
          <h2>About us</h2>
          <div className="about-body">
            <p>
            WHAT THE HACK is a hardware and software hackathon held by SUTD. Engineers, creators and designers collaborate in a group of 3 - 5 to make innovative solutions to meaningful real-world problems within 3 days.
          </p>
          </div>
          <div className="about-info">
            <div className="info-block">
              <div className="info-header"><p>Open</p></div>
              <p>to all students</p>
              <div className="icon-placeholder"><img src={students_icon} alt="Student" className="icon-placeholder" /></div>
            </div>
            <div className="info-block">
              <div className="info-header"><p>All </p> </div>
              <p>skill levels welcome</p>
              <div className="icon-placeholder"><img src={skills_icon} alt="Hand" className="icon-placeholder" /></div>
            </div>
            <div className="info-block">
              <div className="info-header"><p>$8800</p></div>
              <p>Prize Pool</p>
              <div className="icon-placeholder"><img src={prize_icon} alt="Prize" className="icon-placeholder" /></div>
            </div>
          </div>
        </div>
        <div className="about-image"><img src={photo1} alt="People" className="about-image" /></div>

        
      </section>
      

      {/* Judging Themes Section */}
      <section className="themes">
        <div className="theme-header"> Judging Themes </div>
        <div className="theme-grid">
          <div className="theme blue">CLEAN WATER & SANITATION</div>
          <div className="theme orange">SLEEP</div>
          <div className="theme red">AGING POPULATION</div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline">
        <div className= "timeline-header"> Timeline </div>
        <div className= "plat-planet"><img src={plat_planet} alt="planet" className= "plat-planet" /></div>
        <div className="schedule">
          {schedule.map((day, index) => (
            <div key={index} className="schedule-day">
              <h3 className="schedule-date">{day.date}</h3>
              <div className="schedule-events">
                {day.events.map((event, idx) => (
                  <div key={idx} className="schedule-event">
                    <div className="event-time">{event.time}</div>
                    <div className="event-activity">{event.activity}</div>
              </div>
            ))}
              </div>
            </div>
         ))}
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="expect">
        <h2>What to Expect</h2>
        <div className= "silver-planet"><img src={silver_planet} alt="planet" className= "silver-planet" /></div>
        <div className="expect-grid">
          <div className="expect-box red">
            <h3>Hackpack</h3>
            <ul>
              <li>ESP32-S3</li>
              <li>LCD</li>
              <li>Wires</li>
              <li>Breadboard</li>
              <li>IR sensor</li>
              <li>RFID module</li>
            </ul>
            <h4>Additional components available @ Fablab during the hackathon!</h4>
          </div>
          <div className="expect-box orange">
            <h3>Workshops</h3>
            <h4>Intro to FabLab Equipment and 3D Modelling </h4>
            <ul>
              <li>Date TBC</li>
              <li>Timing TBC</li>
              <li>Location at SUTD Campus Building, exact location will be informed.</li>
              <li>This workshop is for students with no experience building circuits. Participants will learn creating basic circuits with the ESP32-S3 along with writing code to control electronic components. Participants will learn the basics of BLE as well as the ESP-NOW wireless protocol.</li>
            </ul>
            <h4>ESP32 Basics and Wireless Communication for Absolute Beginners  </h4>
            <ul>
              <li>Date TBC</li>
              <li>Timing TBC</li>
              <li>Location at SUTD Campus Building, exact location will be informed.</li>
              <li>This workshop is for participants with some experience building circuits. Signups will be with confirmation form and each workshop is limited to 50 pax. Selected participants will be informed.</li>
            </ul>
          </div>
          <div className="expect-box yellow">
            <h3>Fablab</h3>
            <ul>
              <li>Electronics Lab</li>
              <li>Acrylic Benders</li>
              <li>Drill Press</li>
              <li>Bandsaw</li>
              <li>3D Printer</li>
              <li>Laser Cutter</li>
            </ul>
            <h4>Consult our staff for any assistance!</h4>
          </div>
          <div className="expect-box blue">
            <h3>Prizes</h3>
            <ul>
              <li>1st Place: $2000</li>
              <li>2nd Place: $1000</li>
              <li>3rd Place: $500</li>
            </ul>
            <h4>Cash Prizes can be won by teams for one judging theme!</h4>
             <h3 style={{marginTop:"30px",fontSize:"2vw",textAlign:"center"}}>Wildcard Prizes</h3>
            <ul>
              <li>Most Electrifying Hack: Shouldering Kit</li>
              <li>Hack of Art: 3D Printing Pen</li>
              <li>Big Brain Hack: Mystery Prize</li>
              <li>Heartware Hack: Polaroid Camera</li>
            </ul>
            <h4>Additional Prizes to be WON!</h4>
          </div>
        </div>
      </section>

      <Sponsor />

      <Footer />
    </div>
  );
};
export default About;