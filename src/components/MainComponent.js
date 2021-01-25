import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
import About from './AboutComponent';
class Main extends Component{
    render(){
        return(
            <div>
                <Header />
                <Switch>
                    <HashRouter hashType="slash">
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/projects" component={Projects} />
                    </HashRouter>
                </Switch>
                {/* <Router>
                    <Switch>
                        
                    </Switch>
                </Router> */}
            </div>
        )
    }
}

export default Main;