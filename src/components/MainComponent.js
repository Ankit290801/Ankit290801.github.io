import React, {Component} from 'react';
import Header from './HeaderComponent';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
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
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/projects" component={Projects} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Main;