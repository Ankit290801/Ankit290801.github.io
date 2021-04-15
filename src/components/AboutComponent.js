import React, {Component} from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import vector from '../img/vector.png';
import vector1 from '../img/vector1.png';
import Footer from './FooterComponent';
class About extends Component{
    render(){
        return(
            <>
                <div className="container-fluid text-center bg">
                    <p className="about">Hi, I am Ankit Banerjee</p>
                    <hr />
                    <div className="container">
                        <div className="row mt-3 mb-4">
                            <div className="col-12 col-md-4 mb-5 mt-5 ">
                            <img src = {vector} className="vector" alt="vector"></img>
                            </div>
                            <div className="col-12 col-md-8 mt-5">
                                <div className="text-center details1">
                                    <h3>Who Am I?</h3>
                                    <p>An aspiring engineer who passionately loves web development. Bringing ideas to life and wants to contribute diligently to Open Source. </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3 pb-4">
                            <div className="col-12 col-md-8 ">
                            <div className="text-center details1">
                                <h3>Some Things that I like</h3>
                                <p>Capturing the beauty of the nature from behind the lenses. A profound love for Japanese Animation takes away most of my leisure time.</p>
                            </div>
                            </div>
                            <div className="col-12 col-md-4 pb-5 mt-2">
                            <img src = {vector1} className="vector" alt="vector"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center text-dark" style={{fontSize:"2rem", margin:"20px 0"}}><em>There is no Innovation and Creativity without failure. Period.</em><br/>~Brene Brown</p>
                <div className=" container-fluid mb-3 text-light skills">
                    <h2 className="text-center pt-3 pb-4">Skills and Endorsements</h2>
                    <div className="row">
                        <div className="col-md-6 text-center language">
                            <h5>Languages I speak</h5>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>React</p>
                            <p>Python</p>
                            <p>C</p>
                        </div>

                        <div className="col-md-6 text-center">
                            <h5>Achievements and Participations</h5>
                            <p>HackYuva hackthon ~ 2nd position</p>
                            <p>Enigma 2020 ~ 3rd position</p>
                            <p>Speaker at 3-day webinar on "Challenges faced by Engineers during the global pandemic"</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid text-center academics bg-dark">
                    <h2 className="text-light pt-5">Academics & Certifications</h2>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education text-light"
                            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            date="April 2021 - Present"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Web Development</h3>
                            <h4 className="vertical-timeline-element-subtitle">BytesPlex</h4>
                            <p>
                            Internship | React Developer
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work text-light"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            date="March 2021 - Present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            
                        >
                            <h3 className="vertical-timeline-element-title">Content Writer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Digistatement</h4>
                            <p>
                            Internship | Content Writing
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education text-light"
                            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            date="2019 - Present"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            
                        >
                            <h3 className="vertical-timeline-element-title">Bachelors in Technology</h3>
                            <h4 className="vertical-timeline-element-subtitle">BPPIMT, Kolkata</h4>
                            <p>
                            Electronics and Communication Engineering
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work text-light"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            date="September 2020 - January 2021"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            
                        >
                            <h3 className="vertical-timeline-element-title">Content Writer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Careers360</h4>
                            <p>
                            Internship | Content Writing
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education text-light"
                            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            date="October 2020"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            
                        >
                            <h3 className="vertical-timeline-element-title">Front End Web Development with React</h3>
                            <h4 className="vertical-timeline-element-subtitle">Online Course - Coursera</h4>
                            <p>
                            Front-End Web Development
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education text-light"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            date="2017 - 2019"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            
                        >
                            <h3 className="vertical-timeline-element-title">Higher Secondary Education</h3>
                            <h4 className="vertical-timeline-element-subtitle">KHEMS, Kanchrapara</h4>
                            <p>
                            Science stream (PCMB)
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education text-light"
                            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            date="2007 - 2017"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            
                        >
                            <h3 className="vertical-timeline-element-title">Secondary Education</h3>
                            <h4 className="vertical-timeline-element-subtitle">Don Bosco School, Bandel</h4>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
                <Footer />
            </>
        )
    }
}

export default About;