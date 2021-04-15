import React, {Component} from 'react';
class Social extends Component{
    render(){
        return(
            <div className="social" style={{fontSize:"2rem", margin:"10px"}}>
                <span><a href="https://www.facebook.com/jaden.dcosta.5/" target="_blank" rel="noreferrer"><i class="fa fa-facebook fa-md icon"></i></a></span>
                <span><a href="https://www.instagram.com/capturing_the_nature____/" target="_blank" rel="noreferrer"><i class="fa fa-instagram fa-md icon" ></i></a></span>
                <span><a href="https://github.com/Ankit290801" target="_blank" rel="noreferrer"><i class="fa fa-github icon" ></i></a></span>
                <span><a href="https://www.linkedin.com/in/ankit-banerjee-b564431b2/" target="_blank" rel="noreferrer"><i class="fa fa-linkedin icon" ></i></a></span>
            </div>
        )
    }
}

export default Social;