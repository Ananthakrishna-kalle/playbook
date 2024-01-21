import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card';
// import { Container, Button } from "@material-ui/core";
// import Carousel from "react-bootstrap/Carousel";
// import bmimage from './badminton.jpg';
// import cricimg from './cricket.jpg';
import playoimg from "./images/PlayoSports.jpg";
import "./landing.css";
import GooglePlayStore from "./images/GooglePlayStore.png";
import AppStore from "./images/AppStore.png";
import rating from "./images/rating.jpg";
import playbookstats from "./images/Playbookstats.png";

// import badminton from "./images/1.png";
// import cricket from "./images/2.jpg";
// import tabletennis from "./images/3.png";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
// } from "mdb-react-ui-kit";

class Landing extends Component {
  render() {
    return (
      <>
        <div class="cntnr">
          <img class="bgimage" src={playoimg} alt="Logo" />
          <div class="bottom-left">GET YOUR GAME ON!!!</div>
          <div class="bottom-center-top">
            , With The World's Largest Sports Community App!!
          </div>
          <img class="bottom-center" src={GooglePlayStore} />
          <img class="bottom-cntr" src={AppStore} />
        </div>
        <div class = "stats">
          <img src = {playbookstats}/>
        </div>
        <div class="title">
        <strong>Playbook User Reviews</strong>
        </div>
        <div class="cards">
        <Card style={{ width: "19rem" }}>
          <Card.Body>
            <Card.Text>
            I love using this app. Very convenient to book courts for the weekends. Also the notification about upcoming events is also a cool feature
            </Card.Text>
            <Card.Title><strong>Kashyap<img class = "rating" src={rating}/></strong></Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "19rem" }}>
          <Card.Body>
            <Card.Text>
            Amazing App. It's a nice idea. I had badminton courts nearby but didn't able to find players. The app helped me to find within 10mins!!
            </Card.Text>
            <Card.Title><strong>Deepak<img class = "rating" src={rating}/></strong></Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "19rem" }}>
          <Card.Body>
            <Card.Text>
            Useful app In the midst of nonsense app making and backup. Playo is a comfortable one. It's here to stay. Need more speed. Kudos.
            </Card.Text>
            <Card.Title><strong>Ananth<img class = "rating" src={rating}/></strong></Card.Title>
          </Card.Body>
        </Card> 
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
