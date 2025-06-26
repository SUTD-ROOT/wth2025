import seamless_star4 from './src/seamless_star4'
import prize_icon from '.src/icons/prize_icon'
import gold_planet from '.src/icons/gold_planet'
import plat_planet from '.src/icons/plat_planet'
import silver_planet from '.src/icons/silver_planet'
import photo1 from '.src/icons/photo1'
import footer from './src/Footer'

const About = () => {
  <ConfigProvider
    theme={{
      components: {
        Timeline: {
          colorPrimary: "#FFFFFF",
          fontFamily: "Be Vietnam",
          fontSize: "20px",
        },
      },
    }}
  >
    ...
  </ConfigProvider>;

  const items = [
    {
      children: (
        <>
          <p className="nomargin left-align">
            <strong>09:00</strong>
          </p>
          <p className="nomargin left-align">Registration</p>
        </>
      ),
      color: "#F5D143",
    },
    {
      children: (
        <>
          <p className="nomargin left-align">
            <strong>09:30</strong>
          </p>
          <p className="nomargin left-align">Opening Briefing</p>
        </>
      ),
      color: "#F5D143",
    },
    {
      children: (
        <>
          <p className="nomargin left-align">
            <strong>11:15</strong>
          </p>
          <p className="nomargin left-align">Lunch</p>
        </>
      ),
      color: "#F5D143",
    },
    {
      children: (
        <>
          <p className="nomargin left-align">
            <strong>13:00</strong>
          </p>
          <p className="nomargin left-align">Hacking Begins!</p>
        </>
      ),
      color: "#F5D143",
    },
    {
      children: (
        <>
          <p className="nomargin left-align">
            <strong>18:00</strong>
          </p>
          <p className="nomargin left-align">Dinner</p>
        </>
      ),
      color: "#F5D143",
    },
    {
      children: (
        <>
          <p className="nomargin left-align">
            <strong>19:00</strong>
          </p>
          <p className="nomargin left-align">Hacking Continues</p>
        </>
      ),
      color: "#F5D143",
    },
    {
      children: (
        <>
          <p className="nomargin left-align">
            <strong>22:00</strong>
          </p>
          <p className="nomargin left-align">Close</p>
        </>
      ),
      color: "#F5D143",
    },
  ];

  const items1 = [
    {
      children: (
        <>
          <p className="nomargin left-align">
            <strong>08:30</strong>
          </p>
          <p className="nomargin left-align">Hacking Resumes!</p>
        </>
      ),
      color: "#F5D143",
    },
    {
      children: (
        <>
          <p className="nomargin left-align">
            <strong>12:00</strong>
          </p>
          <p className="nomargin left-align">Lunch</p>
        </>
      ),
      color: "#F5D143",
    },
    {
      children: (
        <>
          <p className="nomargin left-align">
            <strong>13:00</strong>
          </p>
          <p className="nomargin left-align">Final Stretch</p>
        </>
      ),
      color: "#F5D143",
    },
    {
      children: (
        <>
          <p className="nomargin left-align">
            <strong>14:00</strong>
          </p>
          <p className="nomargin left-align">Exhibition & Round 1 Judging</p>
        </>
      ),
      color: "#F5D143",
    },
    {
      children: (
        <>
          <p className="nomargin left-align">
            <strong>17:30</strong>
          </p>
          <p className="nomargin left-align">Finale Judging</p>
        </>
      ),
      color: "#F5D143",
    },
    {
      children: (
        <>
          <p className="nomargin left-align">
            <strong>19:45</strong>
          </p>
          <p className="nomargin left-align">Dinner</p>
        </>
      ),
      color: "#F5D143",
    },
  ];

  return (
    <div className="about">
      <p className="intro">
        <strong>WHAT THE HACK</strong> is a hardware and software hackathon held
        by SUTD. Engineers, creators and designers collaborate in a group of 3 -
        5 to make innovative solutions to meaningful real-world problems in 2
        days.
      </p>
      <div className="condition">
        <div className="group">
          <img className="small" src={group} alt="" />
          <p>Open to all students</p>
        </div>
        <div className="group">
          <img className="small" src={skill} alt="" />
          <p>All skills level Welcome</p>
        </div>
        <div className="group">
          <img className="small" src={prize} alt="" />
          <p>$8800 Prize Pool</p>
        </div>
      </div>

      <div className="theme">
        <p>
          This year's theme ...
          <br />
          <strong className="enlarge">HACK IT UP A NOTCH</strong>
        </p>

        <p>Judging Theme</p>
        <div className="problem">
          <p className="statement">Circular Economy & Sustainable Living</p>
          <p className="statement">Healthcare & Accessibility</p>
          <p className="statement">Everyday Automation</p>
          <p className="statement">Reducing Inequalities</p>
        </div>
      </div>

      <p className="lesspadding large">Schedule</p>
      <div className="timeline">
        <ConfigProvider
          theme={{
            components: {
              Timeline: {
                fontSize: 20,
                dotBorderWidth: 5,
              },
            },
          }}
        >
          <div>
            <p className="large">
              <u>Day 1</u>
            </p>
            <Timeline className="individual" items={items} />
          </div>
          <div>
            <p className="large">
              <u>Day 2</u>
            </p>
            <Timeline className="individual" items={items1} />
          </div>
        </ConfigProvider>
      </div>
      <p>
        <strong>Resources Provided</strong>
      </p>
      <div className="all">
        <div className="equipment">
          <p className="spaceless">Fabrication Lab Equipment</p>
          <div className="divider left-align">
            <ul>
              <li>Electronics Lab</li>
              <li>Acrylic Benders</li>
              <li>Drill Press</li>
            </ul>
            <ul>
              <li>Bandsaw</li>
              <li>3D Printer</li>
              <li>Laser Cutter</li>
            </ul>
          </div>
        </div>
        <div className="resources">
          <div className="hackpack">
            <p className="spaceless">Hackpack</p>
            <div className="divider left-align">
              <ul>
                <li>ESP32-S3</li>
                <li>LCD</li>
                <li>Wires</li>
              </ul>
              <ul>
                <li>Breadboard</li>
                <li>IR sensor</li>
                <li>RFID module</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Sponsors />

      <Footer />
    </div>
  );
};

export default About;