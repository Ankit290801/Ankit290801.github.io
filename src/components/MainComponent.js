import React, {Component} from 'react';
import Header from './HeaderComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
import About from './AboutComponent';
class Main extends Component{
    render(){
        return(
            <div>
                <Header />
                <Router>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/projects" component={Projects} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Main;