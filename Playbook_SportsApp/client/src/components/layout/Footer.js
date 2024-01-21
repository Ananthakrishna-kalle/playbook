import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Container, Grid, Link, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

import Logo from '../../img/logop.png';
import './Footer.css';

export default() => {
    return(
        <footer>
            <AppBar className="primary-color marginT-3 pad-2" position="static">
                <Grid component={Container} container>
                    <Grid item xs={12} sm={2} className="footerLogo">
                        <img src={Logo} className="logo1" alt="Logo" />                      
                    </Grid>
                    <Grid item xs={12} sm={7} className="footer-links">
                        <Link className="orange-link" component={RouterLink} to="/">
                            Home
                        </Link>
                        <span>/</span>
                        <Link className="orange-link" component={RouterLink} to="/register">
                            Get Started
                        </Link>
                        <span>/</span>
                        <Link className="orange-link" component={RouterLink} to="/events">
                            Events List
                        </Link>
                        <span>/</span>
                        <Link className="orange-link" component={RouterLink} to="/create-event">
                            Create Event
                        </Link>
                        <span>/</span>
                        <Link className="orange-link" component={RouterLink} to="/book-venue">
                            Book Venue
                        </Link>
                        <span>/</span>
                        <Link className="orange-link" component={RouterLink} to="/termsofservice">
                            Terms
                        </Link>
                        <span>/</span>
                        <Link className="orange-link" component={RouterLink} to="/privacypolicy">
                            Privacy
                        </Link>
                        <p>
                            <br></br>
                            <Typography className="marginL-d7">
                                Copyright &copy;{new Date().getFullYear()} PlayBook
                            </Typography>
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <div className='social-container'>
                            <p className="marginL-d7">&nbsp;&nbsp;&nbsp;Follow Us On:</p>
                            <a href="#" className="youtube social"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                            <a href="#" className="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                            <a href="#" className="twitter social"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                            <a href="#" className="instagram social"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                        </div>
                    </Grid>
                </Grid>
            </AppBar>
        </footer>
    );
};