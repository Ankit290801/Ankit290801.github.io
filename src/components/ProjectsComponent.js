import React, {Component} from 'react';
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
import Footer from './FooterComponent';
import Calculator from '../img/calculator.png'
import Covid from '../img/covid.jpg'
import Hack from '../img/hackathon.png'
import Res from '../img/restaurant.jpg'
class Projects extends Component{
    render(){
        return(
            <div>
                <p className="quote"><em>"Tell me and I may forget,<br/> Teach me and I may remember,<br/> Involve me and I learn"<br/> ~ Benjamin Franklin</em></p>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <Card>
                                <CardImg top width="100%" src={Calculator} alt="Calculator" />
                                <CardBody>
                                    <CardTitle className="text-center">Calculator</CardTitle>
                                    <CardText className="text-justify">A calculator certainly is an application we all need on a daily basis. The simple use of markup languages has given you an easy web access without the need to carry it in your pocket.</CardText>
                                    <Button color="info" className="float-center"><a href="https://ankit290801.github.io/calculator.github.io/" className="text-white">Click Here</a></Button>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-4">
                            <Card>
                                    <CardImg top width="100%" src={Covid} alt="Covid Tracker" />
                                    <CardBody>
                                        <CardTitle className="text-center">Covid-19 Tracker</CardTitle>
                                        <CardText className="text-justify">This efficient tracker pulls up world data and displays it based on the IP address of the user. The graph correctly points out the live-cured-death comparison as well.</CardText>
                                        <Button color="info" className="float-center"><a href="https://github.com/Ankit290801/covid-tracker" className="text-white" target="_blank" rel="noreferrer">Click Here</a></Button>
                                    </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-4">
                            <Card>
                                <CardImg top width="100%" src={Res} alt="Resturante Con Fusion" />
                                    <CardBody>
                                        <CardTitle className="text-center">Con Fusion</CardTitle>
                                        <CardText className="text-justify">What better way to exhibit your skills in React, Redux and ReactStrap if not to showcase the delicacies of a restaurant?</CardText>
                                        <Button color="info" className="float-center"><a href="https://github.com/Ankit290801?tab=repositories" className="text-white">Click Here</a></Button>
                                    </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-md-4">
                            <Card>
                                <CardImg top width="100%" src={Hack} alt="Hackathon" />
                                <CardBody>
                                            <CardTitle className="text-center">Hackathon</CardTitle>
                                            <CardText className="text-justify">You want the best mentors to guide you in your desired field. Take up webinars or one to one chat to clear up your doubts. Head over here and sign up! </CardText>
                                            <Button color="info" className="float-center"><a href="https://github.com/Ankit290801?tab=repositories" className="text-white">Click Here</a></Button>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
                <Footer />                
            </div>
        )
    }
}

export default Projects;