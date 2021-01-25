import React from 'react';
import {Link} from 'react-router-dom';
function Footer(props){
    return(
        <div className="footer">
            <div className="container-fluid">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-3">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </div>
                <div className="col-5 col-sm-5">
                    <h5>Address</h5>
                    <address>
		              24 Paraganas North,<br />
		              Naihati, Kolkata<br />
		              INDIA<br />
		              <i className="fa fa-phone fa-lg"></i>: (+91) 6290754574<br />
                    </address>
                </div>
                <div className="col-12 col-md-3 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="https://www.instagram.com/capturing_the_nature____/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/jaden.dcosta.5/" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/ankit-banerjee-b564431b2/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon" href="mailto:ankit.banerjee2019@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Ankit Banerjee</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;