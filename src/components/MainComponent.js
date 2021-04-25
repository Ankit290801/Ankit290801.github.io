import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './Home/HomeComponent';
import Projects from './Projects/ProjectsComponent';
import About from './About/AboutComponent';
class Main extends Component{
    render(){
        return(
            <BrowserRouter>
                <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/projects" component={Projects} />
                    </Switch>
            </BrowserRouter>
        )
    }
}

export default Main;