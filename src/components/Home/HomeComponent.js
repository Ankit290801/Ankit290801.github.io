import React, {Component} from 'react';
import './Home.css'
import ReactTypingEffect from 'react-typing-effect';
import pic from '../../img/profilepic.jpeg';
import Social from '../SocialComponent';
class Home extends Component{
    render(){
        return(
            <div className="container home text-center">
                <div className="text-center">
                    <img src={pic} alt="Ankit Banerjee" className="profilepic" /><br />
                    <ReactTypingEffect className="typingeffect" text={['Hello, this is Ankit Banerjee.','Engineer by choice', 'Creator for Passion!']} 
                    speed={100} eraseDelay={800}></ReactTypingEffect>
                </div>
                <h3 className="connect" style={{color:"#f2f2f2",margin:"50px 0 10px 0",fontSize:"20px"}}>Let's Connect to Create!</h3>
                <Social />
            </div>
        )
    }
}

export default Home;