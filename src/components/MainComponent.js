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
                        <Route exact path="/" component={Home} />
                        <Route path="/ankit290801.github.io/about" component={About} />
                        <Route path="/ankit290801.github.io/projects" component={Projects} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Main;