import { Carousel, Tabs } from 'antd';
import { Collapse } from 'antd';
import { ConfigProvider } from "antd";
import { Input } from 'antd';
import { useRef, useState } from 'react';

import seamlessStar from "../icons/seamless_star4.svg"
import Footer2 from './Footer2'

const { TextArea } = Input;

const FAQ = () => {
    const ref = useRef();

    const general = [{
        key: '1',
        label: "What is a hackathon? Would I actually be hacking?",
        children: <p>A hackathon is a fun-spirited event where anyone can come together and engage in collaborative product ideas! Participants must work quickly under the pressure of a time limit to create something the world has never seen, in an informal and fun environment that encourages weird and wacky ideas. What The Hack breaks the barrier for hardware prototyping while staying accessible to beginners.</p>,
    },
    {
        key: '2',
        label: "What is the expected submission?",
        children: <p>Within the three-day period of What The Hack, you are not expected to have a fully polished solution. A functioning prototype is expected, along with an idea of how the complete product would function. Hardware, software, or a combination of both are completely accepted!</p>,
    },
    {
        key: '3',
        label: "Is this a physical or online hackathon?",
        children: <p>WTH 2025 is held in-person on the SUTD campus! All participants are required to be on-site for the start and end of the hackathon.</p>,
    },
    {
        key: '4',
        label: "What platforms will be used for this hackathon?",
        children: <p>Announcements will be made on Telegram. Keep a lookout for an email from us closer to the event for the link. The final submissions will be uploaded to Devpost for public sharing of your ideas!</p>,
    },
    {
        key: '5',
        label: "Are we allowed to continue hacking after hacking spaces close on Day 2?",
        children: <p>While you may continue ideating and working on your prototypes at home, all hacking spaces and their equipment will not be accessible. Please come back again the next day to use the equipment when the FabLab reopens!</p>,
    },
    {
        key: '6',
        label: "Will there be swag?",
        children: <p>Of course! Swag will be distributed during the hackathon.</p>,
    }];

    const eligibility = [{
        key: '1',
        label: "Who is eligible to participate?",
        children: <p>All students aged 13 and above (as of 14th July 2025) registered at an educational institution in Singapore can participate. Students waiting for entry into university, including Full-Time National Servicemen (NSFs) are also eligible to participate.</p>,
    },
    {
        key: '2',
        label: "Do I need to sign up with a team?",
        children: <p>Yes. You must register as a team of 3 to 5 members to participate.</p>,
    },
    {
        key: '3',
        label: "How would I know if my registration is confirmed?",
        children: <p>An email with more information will be sent to you after you submit the online signup form. If you do not receive the email within 3 days of signing up, do contact us.</p>,
    },
    {
        key: '4',
        label: "Do I need to have any background in Computer Science / Hacking?",
        children: <p>You do not need a background in either, although knowing some basic coding would help a lot. Just come with an open mind to learn and try new things!</p>,
    },
    {
        key: '5',
        label: "Do all members of the team need to be from the same school?",
        children: <p>No, teams can be made up of members from different institutions.</p>,
    },
    {
        key: '6',
        label: "Do all members of the team have to be present during the event?",
        children: <p>Teams must have at least 3 team members present during registration and during judging rounds</p>,
    }];

    const registration = [{
        key: '1',
        label: "When is the registration deadline?",
        children: <p>14th July 2025 at 2359 hours!</p>,
    },
    {
        key: '2',
        label: "Is this hackathon free?",
        children: <p>Yes, this hackathon is completely free. Join us and have fun with this opportunity, you’ll never know what your ideas might turn into!</p>,
    }];

    const resources = [{
        key: '1',
        label: "What resources will I get when I join What The Hack?",
        children: <p>All teams will receive one Hackpack each, as well as access to a Makerspace, which has various tools to help you to make your ideas into reality.</p>,
    },
    {
        key: '2',
        label: "How do I access the Makerspace?",
        children: <p>In addition to the Hacking Spaces that you will be provided to work on your ideas, you will have access to a Makerspace, which is provided by SUTD’s fabrication Lab. Participants who wish to access the Makerspace will be required to sign an indemnity form at the SUTD's Fabrication Lab before access is granted. Our student helpers will be glad to assist you if you are not familiar with the equipment.</p>,
    },
    {
        key: '3',
        label: "What is inside the Hackpack?",
        children: <p>Each HackPack contains an ESP32-S3, breadboard, RFID module, 16x2 Character LCD, IR sensor, ultrasonic sensor, and more! If you need more, we have LED strips, camera modules, acrylic, and plywood provided on an as-needed basis.</p>,
    },
    {
        key: '4',
        label: "What equipment will be availabe in the Makerspace?",
        children: <p>We have 3D printers, laser cutters, bench drills, scroll saws and basic and tools at your disposal!</p>,
    }];

    const others = [{
        key: '1',
        label: "Can I build my prototype beforehand?",
        children: <p>No, you may only begin working (coding, building, analysing) on your prototype after we announce the start of the hacking period on day 1. </p>,
    },
    {
        key: '2',
        label: "Will everyone who registers be able to participate in the hackathon?",
        children: <p>Due to limited capacity, not all registrants will be guaranteed participation. A shortlisting process will be conducted, and selected participants will be notified via email. Please note that selection is not on a first-come, first-served basis.</p>,
    },
    {
        key: '3',
        label: "How do we handle Intellectual Property (IP)?",
        children: <p>Apologies, but we currently do not have provisions for this.</p>,
    },
    {
        key: '4',
        label: "Will I get a certificate of participation for taking part?",
        children: <p>Apologies, but we currently do not have provisions for this.</p>,
        cardBg: '#F5D143'
    },
    {
        key: '5',
        label: "Do we get to pitch our idea?",
        children: <p>Yes, there will be an exhibition segment where you get to pitch your prototypes to the judges and others!</p>,
    },
    {
        key: '6',
        label: "Do I have to use a particular coding language?",
        children: <p>You are free to use any programming language you desire or need to use based on your prototype. There are no restrictions or requirements as to using specific programming languages.</p>,
    },
    {
        key: '7',
        label: "My question can't be found in the FAQs!",
        children: <p>For any further queries or clarifications, feel free to drop us a message via the contact form page, or email us at sutdwth@studentgov.sutd.edu.sg</p>,
    }];

    const onChange = (key) => {
        console.log(key);
    };

    const getCollapseStyle = (bgColor) => ({
        backgroundColor: bgColor,
        border: 'none',
        borderRadius: '8px',
        marginBottom: '16px'
    });

    const items = [
        {
            key: '1',
            label: 'General',
            children: (
                <ConfigProvider theme={{
                    components: {
                        Collapse: {
                            headerBg: "#FF607E !important",
                            contentBg: "#FFFF",
                            colorBorder: "transparent",
                            borderRadiusLG: "8px",
                            fontFamily: "Be Vietnam",
                            fontSize: "18px",
                        }
                    }
                }}>
                    <Collapse 
                        items={general} 
                        style={getCollapseStyle("#F5D143")}
                    />
                </ConfigProvider>
            )
        },
        {
            key: '2',
            label: 'Eligibility',
            children: (
                <ConfigProvider theme={{
                    components: {
                        Collapse: {
                            headerBg: "#FF9B4D !important",
                            contentBg: "#FFFF",
                            colorBorder: "transparent",
                            borderRadiusLG: "8px",
                            fontFamily: "Be Vietnam",
                            fontSize: "18px",
                        }
                    }
                }}>
                    <Collapse 
                        items={eligibility} 
                        style={getCollapseStyle("#F26241")}
                    />
                </ConfigProvider>
            )
        },
        {
            key: '3',
            label: 'Registration',
            children: (
                <ConfigProvider theme={{
                    components: {
                        Collapse: {
                            headerBg: "#FEDD5C !important",
                            contentBg: "#FFFF",
                            colorBorder: "transparent",
                            fontFamily: "Be Vietnam",
                            fontSize: "18px",
                            borderRadiusLG: "8px"
                        }
                    }
                }}>
                    <Collapse 
                        items={registration} 
                        style={getCollapseStyle("#7C85D7")}
                    />
                </ConfigProvider>
            )
        },
        {
            key: '4',
            label: 'Resources',
            children: (
                <ConfigProvider theme={{
                    components: {
                        Collapse: {
                            headerBg: "#5FFFFB !important",
                            contentBg: "#FFFF",
                            colorBorder: "transparent",
                            fontFamily: "Be Vietnam",
                            fontSize: "18px",
                            borderRadiusLG: "8px"
                        }
                    }
                }}>
                    <Collapse 
                        items={resources} 
                        style={getCollapseStyle("#9FD75C")}
                    />
                </ConfigProvider>
            )
        },
        {
            key: '5',
            label: 'Others',
            children: (
                <ConfigProvider theme={{
                    components: {
                        Collapse: {
                            headerBg: "#FAF9F6 !important",
                            contentBg: "#FFFF",
                            colorBorder: "transparent",
                            fontFamily: "Be Vietnam",
                            fontSize: "18px",
                            borderRadiusLG: "8px"
                        }
                    }
                }}>
                    <Collapse 
                        items={others} 
                        style={getCollapseStyle("#3DE2DD")}
                    />
                </ConfigProvider>
            )
        },
    ];

    return ( 
        <div className="faq" style={{background: `url(${seamlessStar}), linear-gradient(to bottom, #3d1697, #0f35be)`, backgroundSize: 'auto'}}>
            <div className="faq-text">
                <p className="intro"><strong>Frequently Asked Questions</strong></p>
                <div className="question">
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
                            items={items} 
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

export default FAQ;