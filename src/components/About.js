import seamless_star4 from '.../seamless_star4'
import prize_icon from '../icons/prize_icon'
import gold_planet from '../icons/gold_planet'
import plat_planet from '../icons/plat_planet'
import silver_planet from '../icons/silver_planet'
import skills_icon from '../icons/skills_icon'
import students_icon from '../icons/students_icon'
import photo1 from '../icons/photo1'
import Footer from './components/Footer'
import Sponsors from './components/sponsor'


import React from "react";
import "./LandingPage.css";

export const About = () => {
  return (
    <div className="landing-page">
      {/* About Section */}
      <section className="about">
        <div className="about-text">
          <h2>About us</h2>
          <p>
            WHAT THE TECH is a hardware and software hackathon held by SUTD. Students across all disciplines collaborate to solve in 3 days to make innovative solutions for meaningful real-world problems.
          </p>
          <div className="about-info">
            <div className="info-block">
              <div className="icon-placeholder"><img src={students_icon} alt="Student" className="icon-placeholder" /></div>
              <p>Open to all students</p>
            </div>
            <div className="info-block">
              <div className="icon-placeholder"><img src={skills_icon} alt="Hand" className="icon-placeholder" /></div>
              <p>All skill levels welcome</p>
            </div>
            <div className="info-block">
              <div className="icon-placeholder"><img src={prize_icon} alt="Prize" className="icon-placeholder" /></div>
              <p>$8800 Prize Pool</p>
            </div>
          </div>
        </div>
        <div className="about-image"><img src={photo1} alt="People" className="about-image" /></div>
      </section>

      {/* Judging Themes Section */}
      <section className="themes">
        <h2>Judging Themes</h2>
        <div className="theme-grid">
          <div className="theme blue">CLEAN WATER & SANITATION</div>
          <div className="theme orange">SLEEP</div>
          <div className="theme red">AGING POPULATION</div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline">
        <h2>Timeline</h2>
        <div classname="timeline-planet"><img src={silver_planet} alt="Silver Planet" className="timeline-planet"></img></div>
        <div className="schedule">
          <div className="day">
            <h3>19 Sep</h3>
            <p>5pm – Intro Briefing</p>
            <p>6pm – Dinner</p>
            <p>6pm – Close</p>
          </div>
          <div className="day">
            <h3>20 Sep</h3>
            <p>8am – Room Open</p>
            <p>9am – FabLab Open</p>
            <p>5.30pm – FabLab Close</p>
            <p>10pm – Room Close</p>
          </div>
          <div className="day">
            <h3>21 Sep</h3>
            <p>8am – Room Open</p>
            <p>9am – FabLab Open</p>
            <p>12pm – Judging</p>
            <p>7pm – Dinner</p>
            <p>9pm – Closing</p>
          </div>
        </div>
        <div className="planet-image"><img src={plat_planet} alt="Planet" className="planet-image" /></div>
      </section>

      {/* What to Expect Section */}
      <section className="expect">
        <h2>What to Expect</h2>
        <div className="expect-grid">
          <div className="expect-box red">
            <h3>Hackpack</h3>
            <ul>
              <li>ESP32</li>
              <li>USB-C to USB-A</li>
              <li>Jumper Wires</li>
              <li>IR Remote</li>
              <li>IR Receiver</li>
              <li>...others</li>
            </ul>
            <p>Hackpacks can be collected during the hackathon!</p>
          </div>
          <div className="expect-box orange">
            <h3>Workshops</h3>
            <p>...the</p>
            <p>...</p>
          </div>
          <div className="expect-box yellow">
            <h3>Fablab</h3>
            <ul>
              <li>Exciting tools & devices</li>
              <li>Arduino Kits</li>
              <li>Laser Cutter</li>
              <li>3D Printer</li>
            </ul>
            <p>Consult staff for any assistance!</p>
          </div>
          <div className="expect-box blue">
            <h3>Prizes</h3>
            <ul>
              <li>1st Place: $2000</li>
              <li>2nd Place: $1000</li>
              <li>3rd Place: $500</li>
            </ul>
            <p>Finalists from each theme can win prizes by presenting to judging panel!</p>
          </div>
        </div>
      </section>

      <Sponsors />

      <Footer />
    </div>
  );
};