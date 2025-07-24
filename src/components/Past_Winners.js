
import seamlessStar from "../icons/seamless_star4.svg"
import Economy1 from "../icons/WTH_2024_Economy1.png"
import Economy2 from "../icons/WTH_2024_Economy2.png"
import Automation from "../icons/WTH_2024_Automation.png"
import Healthcare from "../icons/WTH_2024_Healthcare.jpg"
import Inequality from "../icons/WTH_2024_Inequality.png"
import Economy2023 from "../icons/WTH_2023_Economy.jpg"
import Inclusitivity2023 from "../icons/WTH_2023_Inclusivity.png"
import AI2023 from "../icons/WTH_2023_AI.jpg"
import FinTech2023 from "../icons/WTH_2023_Fintech.jpg"
import Healthcare2022 from "../icons/WTH_2022_Healthcare.png"
import Sustainable2022 from "../icons/WTH_2022_Sustainable.png"
import Social2022 from "../icons/WTH_2022_Social.png"
import Art2018 from "../icons/WTH_2018_ArtDesign.png"
import Education2018 from "../icons/WTH_2018_Education.png"
import Smartcities2018 from "../icons/WTH_2018_SmartCities.png"
import Education2017 from "../icons/WTH_2017_Education.png"
import Environment2017 from "../icons/WTH_2017_Environment.png"
import Security2017 from "../icons/WTH_2017_Security.png"
import Space2017 from "../icons/WTH_2017_Space.png"
import VR2018 from "../icons/WTH_2018_VR.png"
import Footer2 from './Footer2'
import { Carousel, Tabs } from 'antd';
import { Collapse } from 'antd';
import { ConfigProvider } from "antd";
import { Input } from 'antd';
import { useRef, useState } from 'react';

const { TextArea } = Input;

const Past_Winners = () => {
    const ref = useRef();

    const items1 = [
        {
            key: '1',
            label: 'Circular Economy & Sustainable Living ',
            children: (
              <div className = "winners">
                <div className = "text-column">
                  <h3>Digital Fridge</h3>
                  <p>With our Digital Fridge App, we can help families reduce food waste, save money, and minimize health risks. It’s a simple solution that leverages existing technology to make a big difference in how we manage the food in our homes. </p>
                  <p className="See"><a href="https://devpost.com/software/digital-fridge" target="_blank">See More</a></p>
                </div>
                <div className= "image-column">
                  <div className="economy-image"><img src={Economy1} alt="Winner" className="economy-image" /></div>
                  <div className="economy-image"><img src={Economy2} alt="Winner" className="economy-image" /></div>
                </div>
              </div>
            ),
        },
        {
            key: '2',
            label: 'Everyday Automation ',
            children: (
              <div className = "winners">
                <div className = "text-column">
                  <h3>NUTRAIL</h3>
                  <p>NUTRAIL automates health monitoring by tracking steps, heart rate, sleep, and dietary habits. It leverages AI to provide personalized meal plans based on medical records, dietary restrictions, and lifestyle habits, along with actionable health insights tailored to the use. </p>
                  <p className="See"><a href="https://devpost.com/software/nutrail" target="_blank">See More</a></p>
                </div>
                <div className = "image-column">
                  <div className="winnerimage"><img src={Automation} alt="Winner" className="winnerimage" /></div>
                </div>
              </div>
              
            ),
        },
        {
            key: '3',
            label: 'Healthcare and Accessibility',
            children: (
                <div className = "winners">
                  <div className = "text-column">
                    <h3>eloQUAINT</h3>
                    <p>eloQUAINT provides a system that simplifies the writing process for individuals with dysgraphia by eliminating the cognitive and motor struggles associated with writing. This enables children to practice their handwriting while reducing the frustration often associated with traditional methods.</p>
                    <p className="See"><a href="https://devpost.com/software/eloquaint" target="_blank">See More</a></p>
                  </div>
                  <div className="image-column">
                    <div className="winnerimage"><img src={Healthcare} alt="Winner" className="winnerimage" /></div>
                  </div> 
              </div>
            ),
        },
        {
            key: '4',
            label: 'Reducing Inequalities ',
            children: (
                <div className = "winners">
                  <div className="text-column">
                    <h3>Project Heartland Hampers </h3>
                    <p>Project Heartland Hampers (HH) consists of 2 key halves that our target audience will interact with: Care Lockers and Heartland Hampers Mobile App. Users can use our app to customise the type and quantity of items they want to receive, which will be dispensed by the Care Lockers. </p>
                    <p className="See"><a href="https://devpost.com/software/lasst-project " target="_blank">See More</a></p>
                  </div>
                  <div className="image-column">
                    <div className="winnerimage"><img src={Inequality} alt="Winner" className="winnerimage" /></div>
                  </div>             
              </div>
            ),
        },
    ];

    const items2 = [
        {
            key: '1',
            label: 'Circular Economy & Sustainable Living ',
            children: (
              <div className = "winners">
                <div className = "text-column">
                  <h3>Foodio</h3>
                  <p>The inventory management system monitors sales data and stock levels, to forecast demand and recommend optimal restocking quantities. Customers can place orders via a digital interface which provide a better understanding of the actual food quantities. </p>
                  <p className="See"><a href="https://devpost.com/software/foodio-67c350" target="_blank">See More</a></p>
                </div>
                <div className= "image-column">
                  <div className="winnerimage"><img src={Economy2023} alt="Winner" className="winnerimage" /></div>
                </div>
              </div>
            ),
        },
        {
            key: '2',
            label: 'Inclusivity & Accessible Tech ',
            children: (
              <div className = "winners">
                <div className = "text-column">
                  <h3>EmoSense</h3>
                  <p>EmoSense is an innovative app designed to help individuals with emotional challenges understand emotions better. It interprets spoken words and offers personalized support, enabling users to connect more effectively with those around them. </p>
                  <p className="See"><a href="https://devpost.com/software/emosensel" target="_blank">See More</a></p>
                </div>
                <div className = "image-column">
                  <div className="winnerimage"><img src={Inclusitivity2023} alt="Winner" className="winnerimage" /></div>
                </div>
              </div>
              
            ),
        },
        {
            key: '3',
            label: 'AI-enabled Internet-of-Things ',
            children: (
                <div className = "winners">
                  <div className = "text-column">
                    <h3>Project PulseWatch</h3>
                    <p>The device monitors heart health by detecting irregular pulses and rates, using a pulse sensor and LCD screen. It measures every 30 seconds, providing continuous monitoring for heart attacks and other coronary heart diseases.</p>
                    <p className="See"><a href="https://devpost.com/software/project-pulsewatch-sraz5b" target="_blank">See More</a></p>
                  </div>
                  <div className="image-column">
                    <div className="winnerimage"><img src={AI2023} alt="Winner" className="winnerimage" /></div>
                  </div> 
              </div>
            ),
        },
        {
            key: '4',
            label: 'Financial Technologies  ',
            children: (
                <div className = "winners">
                  <div className="text-column">
                    <h3>GaruPay</h3>
                    <p>GaruPay simplifies bill splitting on Telegram with a user-friendly bot that automatically calculates amounts owed. It eliminates manual tracking, offers flexible payment input, and integrates with PayPal for easy transfers. </p>
                    <p className="See"><a href="https://devpost.com/software/garupay" target="_blank">See More</a></p>
                  </div>
                  <div className="image-column">
                    <div className="winnerimage"><img src={FinTech2023} alt="Winner" className="winnerimage" /></div>
                  </div>             
              </div>
            ),
        },
    ];

    const items3 = [
        {
            key: '1',
            label: 'Sustainable & Smart Cities ',
            children: (
              <div className = "winners">
                <div className = "text-column">
                  <h3>Car-Tell</h3>
                  <p>The solution is a user-friendly mobile app and IoT system that helps drivers locate available parking spots in crowded car parks without needing to interact while driving. Users simply launch the app to see real-time availability across all floors. </p>
                  <p className="See"><a href="https://devpost.com/software/car-tell" target="_blank">See More</a></p>
                </div>
                <div className= "image-column">
                  <div className="winnerimage"><img src={Sustainable2022} alt="Winner" className="winnerimage" /></div>
                </div>
              </div>
            ),
        },
        {
            key: '2',
            label: 'Healthcare & Executable Tech ',
            children: (
              <div className = "winners">
                <div className = "text-column">
                  <h3>WHack Only</h3>
                  <p>The system uses magazines for different solid medicines, managed by a pharmacist. Patients take them home and insert them into a dispenser that syncs with their schedule. They then load a container, swipe their RFID card, and receive the correct dose. </p>
                  <p className="See"><a href="https://devpost.com/software/whack-only" target="_blank">See More</a></p>
                </div>
                <div className = "image-column">
                  <div className="winnerimage"><img src={Healthcare2022} alt="Winner" className="winnerimage" /></div>
                </div>
              </div>
              
            ),
        },
        {
            key: '3',
            label: 'Social Activities & Games',
            children: (
                <div className = "winners">
                  <div className = "text-column">
                    <h3>Slay</h3>
                    <p>The app simplifies discovering fun activities to enjoy with friends, making it easy to reconnect with old friends and foster new connections. It promotes social interaction and helps strengthen bonds within existing and budding friendships. </p>
                    <p className="See"><a href="https://devpost.com/software/go-gai-gai" target="_blank">See More</a></p>
                  </div>
                  <div className="image-column">
                    <div className="winnerimage"><img src={Social2022} alt="Winner" className="winnerimage" /></div>
                  </div> 
              </div>
            ),
          },
      ];

    const items4 = [
        {
            key: '1',
            label: 'Art & Design, Best Overall Hack',
            children: (
              <div className = "winners">
                <div className = "text-column">
                  <h3>AR Wand</h3>
                  <p>Augmented Reality (AR) currently faces limitations in content creation due to its restricted interaction capabilities. In contrast, Virtual Reality (VR) offers innovative avenues for content creation and prototyping. Our goal is to enhance AR by unlocking new interactive possibilities, enabling richer, more engaging experiences and creative opportunities. </p>
                  <p className="See"><a href="https://devpost.com/software/ar-wand" target="_blank">See More</a></p>
                </div>
                <div className= "image-column">
                  <div className="winnerimage"><img src={Art2018} alt="Winner" className="winnerimage" /></div>
                </div>
              </div>
            ),
        },
        {
            key: '2',
            label: 'Education',
            children: (
              <div className = "winners">
                <div className = "text-column">
                  <h3>WhatTheSpace</h3>
                  <p>We developed this budgeting app specifically for college students, addressing their tendency to overspend on snacks despite limited budgets. It encourages smart financial management and healthier choices using open data, aligning with the principles of a smart nation. </p>
                  <p className="See"><a href="https://devpost.com/software/whatthespace" target="_blank">See More</a></p>
                </div>
                <div className = "image-column">
                  <div className="winnerimage"><img src={Education2018} alt="Winner" className="winnerimage" /></div>
                </div>
              </div>
              
            ),
        },
        {
            key: '3',
            label: 'Smart Cities',
            children: (
                <div className = "winners">
                  <div className = "text-column">
                    <h3>Value$</h3>
                    <p>Inspired by the tendency of college students to overspend on snacks despite tight budgets, we created this budgeting application. It promotes smart financial management and healthy choices through open data, reflecting the hallmarks of a smart nation. </p>
                    <p className="See"><a href="https://devpost.com/software/value-nxa5b4" target="_blank">See More</a></p>
                  </div>
                  <div className="image-column">
                    <div className="winnerimage"><img src={Smartcities2018} alt="Winner" className="winnerimage" /></div>
                  </div> 
              </div>
            ),
        },
        {
            key: '4',
            label: 'Best VR Hack',
            children: (
                <div className = "winners">
                  <div className="text-column">
                    <h3>Circuit Defense</h3>
                    <p>We set out to design a fun, open-ended game that teaches players fundamental physics concepts. Our focus on circuits stemmed from our enjoyment of the subject in school, and they seamlessly integrate into the turret defense theme, enhancing gameplay and learning. </p>
                    <p className="See"><a href="https://devpost.com/software/circuit-defense" target="_blank">See More</a></p>
                  </div>
                  <div className="image-column">
                    <div className="winnerimage"><img src={VR2018} alt="Winner" className="winnerimage" /></div>
                  </div>             
              </div>
            ),
        },
    ];

    const items5 = [
        {
            key: '1',
            label: 'Education',
            children: (
              <div className = "winners">
                <div className = "text-column">
                  <h3>WriteOn</h3>
                  <p>This app helps teachers read messy handwriting when grading assignments. By simply taking a photo of the handwritten work, the app converts it into clear text, saving time and reducing frustration. This allows teachers to focus more on providing valuable feedback to their students, enhancing the grading experience. </p>
                  <p className="See"><a href="https://devpost.com/software/handwritingapp" target="_blank">See More</a></p>
                </div>
                <div className= "image-column">
                  <div className="winnerimage"><img src={Education2017} alt="Winner" className="winnerimage" /></div>
                </div>
              </div>
            ),
        },
        {
            key: '2',
            label: 'Environment + Best Hardware',
            children: (
              <div className = "winners">
                <div className = "text-column">
                  <h3>Windshield</h3>
                  <p>Singapore has experienced haze from slash-and-burn practices in neighboring countries. Typically, people wear N95 masks in hazardous conditions, but the inconvenience and limited availability of masks led us to brainstorm alternative air filtration solutions. </p>
                  <p className="See"><a href="https://devpost.com/software/windshield" target="_blank">See More</a></p>
                </div>
                <div className = "image-column">
                  <div className="winnerimage"><img src={Environment2017} alt="Winner" className="winnerimage" /></div>
                </div>
              </div>
              
            ),
        },
        {
            key: '3',
            label: 'Security + Best Software',
            children: (
                <div className = "winners">
                  <div className = "text-column">
                    <h3>Eye VR</h3>
                    <p>Many individuals with disabilities often feel trapped and unable to fully live their lives. Our project, Eye VR, aims to help them thrive by enhancing their vision. This VR headset allows users to control a virtual wheelchair, unlock devices, and take exams using just their eyes, with multiple applications designed for versatility and ease of use. </p>
                    <p className="See"><a href="https://devpost.com/software/eye-gesture-control-application" target="_blank">See More</a></p>
                  </div>
                  <div className="image-column">
                    <div className="winnerimage"><img src={Security2017} alt="Winner" className="winnerimage" /></div>
                  </div> 
              </div>
            ),
        },
        {
            key: '4',
            label: 'Space',
            children: (
                <div className = "winners">
                  <div className="text-column">
                    <h3>Plasma Ion Space Thrusters</h3>
                    <p>Space rockets require thrusters that utilize cheaper and lighter fuel to improve efficiency and reduce costs. By developing more accessible fuel options, we can enhance rocket performance, decrease launch expenses, and promote more sustainable space exploration. </p>
                    <p className="See"><a href="https://devpost.com/software/plasma-ion-space-thrusters" target="_blank">See More</a></p>
                  </div>
                  <div className="image-column">
                    <div className="winnerimage"><img src={Space2017} alt="Winner" className="winnerimage" /></div>
                  </div>             
              </div>
            ),
        },
    ];

    const onChange = (key) => {
        console.log(key);
    };

    return ( 
        <div className="past-winners" style={{background: `url(${seamlessStar}), linear-gradient(to bottom, #3d1697, #0f35be)`, backgroundSize: 'auto'}}>
            <div className="winners-text">
                <p className="winners-intro"><strong>Want to see what our previous participants have created?</strong></p>
                <p className="wth2024">What The Hack 2024</p>
                <div className="winner-details">
                    <ConfigProvider
                        theme={{
                            components: {
                                Tabs: {
                                    fontSize: 18,
                                    colorText: "white",
                                    colorBorderSecondary: "transparent",
                                    colorPrimary: "#FEDD5C",
                                    inkBarColor: "white"
                                },
                            },
                        }}
                    >
                        <Tabs 
                            defaultActiveKey="1" 
                            items={items1} 
                            onChange={onChange} 
                            tabBarStyle={{ color: 'white' }}
                        />
                    </ConfigProvider>
                </div>
                <p className="wth2024">What The Hack 2023</p>
                <div className="winner-details">
                    <ConfigProvider
                        theme={{
                            components: {
                                Tabs: {
                                    fontSize: 18,
                                    colorText: "white",
                                    colorBorderSecondary: "transparent",
                                    colorPrimary: "#FEDD5C",
                                    inkBarColor: "white"
                                },
                            },
                        }}
                    >
                        <Tabs 
                            defaultActiveKey="1" 
                            items={items2} 
                            onChange={onChange} 
                            tabBarStyle={{ color: 'white' }}
                        />
                    </ConfigProvider>
                </div>
                <p className="wth2024">What The Hack 2022</p>
                <div className="winner-details">
                    <ConfigProvider
                        theme={{
                            components: {
                                Tabs: {
                                    fontSize: 18,
                                    colorText: "white",
                                    colorBorderSecondary: "transparent",
                                    colorPrimary: "#FEDD5C",
                                    inkBarColor: "white"
                                },
                            },
                        }}
                    >
                        <Tabs 
                            defaultActiveKey="1" 
                            items={items3} 
                            onChange={onChange} 
                            tabBarStyle={{ color: 'white' }}
                        />
                    </ConfigProvider>
                </div>
                <p className="wth2024">What The Hack 2018</p>
                <div className="winner-details">
                    <ConfigProvider
                        theme={{
                            components: {
                                Tabs: {
                                    fontSize: 18,
                                    colorText: "white",
                                    colorBorderSecondary: "transparent",
                                    colorPrimary: "#FEDD5C",
                                    inkBarColor: "white"
                                },
                            },
                        }}
                    >
                        <Tabs 
                            defaultActiveKey="1" 
                            items={items4} 
                            onChange={onChange} 
                            tabBarStyle={{ color: 'white' }}
                        />
                    </ConfigProvider>
                </div>
                <p className="wth2024">What The Hack 2017</p>
                <div className="winner-details">
                    <ConfigProvider
                        theme={{
                            components: {
                                Tabs: {
                                    fontSize: 18,
                                    colorText: "white",
                                    colorBorderSecondary: "transparent",
                                    colorPrimary: "#FEDD5C",
                                    inkBarColor: "white"
                                },
                            },
                        }}
                    >
                        <Tabs 
                            defaultActiveKey="1" 
                            items={items5} 
                            onChange={onChange} 
                            tabBarStyle={{ color: 'white' }}
                        />
                    </ConfigProvider>
                </div>
            </div>
            <Footer2/>
        </div>
    );
}

export default Past_Winners;