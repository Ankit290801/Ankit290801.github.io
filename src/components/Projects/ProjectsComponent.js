import React from 'react';
import './Projects.css'
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
import Footer from '../FooterComponent';
import Calculator from '../../img/calculator.png'
import Covid from '../../img/covid.jpg'
import Res from '../../img/restaurant.jpg'

const works = [
    {
        id: 0,
        title: 'Calculator',
        description: 'A calculator certainly is an application we all need on a daily basis. The simple use of markup languages has given you an easy web access without the need to carry it in your pocket.',
        link: 'https://ankit290801.github.io/calculator.github.io/',
        img: Calculator,
    },
    {
        id: 1,
        title: 'Covid-19 Tracker',
        description: 'This efficient tracker pulls up world data and displays it based on the IP address of the user. The graph correctly points out the live-cured-death comparison as well.',
        link: 'https://github.com/Ankit290801/covid-tracker',
        img: Covid,
    },
    {
        id: 2,
        title: 'Con Fusion',
        description: 'What better way to exhibit your skills in React, Redux and ReactStrap if not to showcase the delicacies of a restaurant?',
        link: '#',
        img: Res,
    },
]

const DisplayProjects = () => {
    return(
        <div className="row">
        {works
        .map((work,id) => (
            <div className="col-12 col-md-4">
                <Card>
                    <CardImg top width="100%" src={work.img} alt={work.title} />
                    <CardBody>
                        <CardTitle className="text-center">{work.title}</CardTitle>
                        <CardText className="text-justify">{work.description}</CardText>
                        <Button color="info" className="float-center"><a href={work.link} className="text-white">Click Here</a></Button>
                    </CardBody>
                </Card>
            </div>
        ))}
        </div>
    )
}

function Projects(props){
    return(
        <div>
                <p className="quote"><em>"Tell me and I may forget,<br/> Teach me and I may remember,<br/> Involve me and I learn"<br/> ~ Benjamin Franklin</em></p>
                <div className="container">
                    <DisplayProjects />
                </div> 
                <Footer />                
            </div>
    )
}


export default Projects;