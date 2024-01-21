import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, Typography, Button } from "@material-ui/core";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap";
import history from "../history";
import { createBrowserHistory } from "history";
import { getVenues } from "../../actions/eventActions";
import './bookvenue.css';

class BookVenue extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      displayvenues: false,
      sport_venues: [],
      badminton_venues: [
        {
          name: "Badminton Venue 1",
          location: "Roxbury",
          description: "Great place",
        },
        {
          name: "Badminton Venue 2",
          location: "Mission Hill",
          description: "Great place 1",
        },
        {
          name: "Badminton Venue 3",
          location: "Jamaica Plain",
          description: "Great place to play badminton",
        },
        {
          name: "Badminton Venue 4",
          location: "Copley",
          description: "Great place to play badminton",
        },
      ],
      cricket_venues: [
        "Cricket Venue 1",
        "Cricket Venue 2",
        "Cricket Venue 3",
        "Cricket Venue 4",
      ],
      book: false,
      errors: {},
    };

    // const navigate = useNavigate();
    const history = createBrowserHistory({ forceRefresh: true });

    this.onChooseSport = this.onChooseSport.bind(this);
    this.onBook = this.onBook.bind(this);

    const badminton_venues = [
      "Badminton Venue 1",
      "Badminton Venue 2",
      "Badminton Venue 3",
      "Badminton Venue 4",
    ];
  }

  onChooseSport(sport) {
    this.setState({
      displayvenues: true,
    });
    this.props.getVenues(sport);
  

  }

  onBook(venue) {
    
   // alert('Hi');
    //  window.location('/select-slot');
    // navigate('/select-slot');
    localStorage.setItem("venue_id", venue._id);
    localStorage.setItem("venue_startTime", venue.startTime);
    localStorage.setItem("venue_endTime", venue.endTime);
    history.push("/select-slot");
    window.location.reload();
  }

  render() {
   // const { errors } = this.state;
    const { venues } = this.props.venues;
    // const badminton = "Badminton";
    // const cricket = "Cricket";

    return (
      <>
        <div
          className="choose_container"
          style={{ display: !this.state.displayvenues ? "block" : "none", marginTop: '7.5%'}}
        >
          <h2>Choose Sport</h2>
          <div className="row" style={{ display: "flex" }}>
            <div class="col-sm-4">
              <div
                class="sport_card"
                onClick={() => this.onChooseSport("Badminton")}
              >
                <div class="image">
                  <img src="https://cdn.shopify.com/s/files/1/2183/6715/files/badminton-grass-racket-115016_800x.jpg?v=1613183350" />
                </div>
                <div class="card-inner">
                  <div class="header">
                    <h3>Badminton</h3>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div
                class="sport_card"
                onClick={() => this.onChooseSport("Cricket")}
              >
                <div class="image">
                  <img src="https://wallpaperaccess.com/full/6402577.jpg" />
                </div>
                <div class="card-inner">
                  <div class="header">
                    <h3>Cricket</h3>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="sport_card"
              onClick={() => this.onChooseSport("Tennis")}
              >
                <div class="image">
                  <img src="https://imageio.forbes.com/specials-images/imageserve//6297a140ad5629573ba5f667/0x0.jpg?format=jpg&width=1200" />
                </div>
                <div class="card-inner">
                  <div class="header">
                    <h3>Tennis</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row" style={{ display: "flex" }}>
            <div class="col-sm-4">
              <div class="sport_card"
              onClick={() => this.onChooseSport("Table tennis")}
              >
                <div class="image">
                  <img src="https://www.daysoftheyear.com/wp-content/uploads/world-table-tennis-day1.jpg" />
                </div>
                <div class="card-inner">
                  <div class="header">
                    <h3>Table Tennis</h3>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="sport_card"
              onClick={() => this.onChooseSport("Basketball")}>
                <div class="image">
                  <img src="https://recreation.gmu.edu/wp-content/uploads/2019/10/basketball.jpg" />
                </div>
                <div class="card-inner">
                  <div class="header">
                    <h3>Basketball</h3>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="sport_card"
              onClick={() => this.onChooseSport("Soccer")}>
                <div class="image">
                  <img src="https://daily.jstor.org/wp-content/uploads/2018/06/soccer_europe_1050x700.jpg" />
                </div>
                <div class="card-inner">
                  <div class="header">
                    <h3>Soccer</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="venues_container"
          style={{ display: this.state.displayvenues ? "block" : "none",marginTop:'7.5%',height:'870px' }}
        >
          <h2>Venues</h2>
          <div className="row">
            <div class="col-sm" style={{width:50}}>
              {venues.map((venue) => (
                <div className="sport_card1">
                  <div style={{ display: "flex" }}>
                    <div class="imagev">
                      <img src={
                        (venue.typeofsport == 'Badminton') ? "https://cdn.shopify.com/s/files/1/2183/6715/files/badminton-grass-racket-115016_800x.jpg?v=1613183350" :
                        ((venue.typeofsport == 'Soccer') ? "https://daily.jstor.org/wp-content/uploads/2018/06/soccer_europe_1050x700.jpg" :
                        ((venue.typeofsport == 'Basketball') ? "https://recreation.gmu.edu/wp-content/uploads/2019/10/basketball.jpg" :
                        ((venue.typeofsport == 'Tennis') ? "https://imageio.forbes.com/specials-images/imageserve//6297a140ad5629573ba5f667/0x0.jpg?format=jpg&width=1200" :
                        ((venue.typeofsport == 'Cricket') ? "https://wallpaperaccess.com/full/6402577.jpg" :
                        ((venue.typeofsport == 'Table tennis') ?"https://www.daysoftheyear.com/wp-content/uploads/world-table-tennis-day1.jpg" :"")))))
                      }/>
                    </div>
                    <div class="card-inner">
                      <div class="header">
                        <br></br><br></br>
                        <img src="http://cdn.onlinewebfonts.com/svg/img_23043.png" alt="new" style={{"height" : "22px", "width" : "22px", whiteSpace:'nowrap',  display:'inline', marginRight:'14px'}} />
                        <h4 className="marginL-d7" style={{whiteSpace:'nowrap',  display:'inline'}}>{venue.nameofvenue}</h4><br></br>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Map_marker_font_awesome.svg/2048px-Map_marker_font_awesome.svg.png" alt="new" style={{"height" : "25px", "width" : "25px", whiteSpace:'nowrap',  display:'inline', marginRight:'10px'}} />
                        <h6 className="marginL-d7" style={{whiteSpace:'nowrap',  display:'inline'}}>{venue.location}</h6>
                      </div>
                      <div class="content">
                        <p className="marginL-d7">{venue.description}</p>
                      </div>
                      <div>
                        <button
                          className="btn btn-primary marginL-d7" style={{marginLeft:35}}
                          onClick={() => this.onBook(venue)}>
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div class="col-sm-6">
                            <div class="card">
                            <div style={{display:'flex'}}>
                                <div class="imagev">
                                    <img src="https://wallpaperaccess.com/full/6402577.jpg" />
                                </div>
                                <div class="card-inner">
                                    <div class="header">
                                        <h2>Venue 2</h2>
                                        <h3>Sub-Head</h3>
                                    </div>
                                    <div class="content">
                                        <p>Content area</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="card">
                            <div style={{display:'flex'}}>
                                <div class="imagev">
                                    <img src="https://imageio.forbes.com/specials-images/imageserve//6297a140ad5629573ba5f667/0x0.jpg?format=jpg&width=1200" />
                                </div>
                                <div class="card-inner">
                                    <div class="header">
                                        <h2>Venue 3</h2>
                                        <h3>Sub-Head</h3>
                                    </div>
                                    <div class="content">
                                        <p>Content area</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="card" onClick={this.onChooseSport}>
                            <div style={{display:'flex'}}>
                                <div class="imagev">
                                    <img src="https://cdn.shopify.com/s/files/1/2183/6715/files/badminton-grass-racket-115016_800x.jpg?v=1613183350" />
                                </div>
                                <div class="card-inner">
                                    <div class="header">
                                        <h2>Venue 4</h2>
                                        <h3>Sub-Head</h3>
                                    </div>
                                    <div class="content">
                                        <p>Content area</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="card">
                            <div style={{display:'flex'}}>
                                <div class="imagev">
                                    <img src="https://wallpaperaccess.com/full/6402577.jpg" />
                                </div>
                                <div class="card-inner">
                                    <div class="header">
                                        <h2>Venue 5</h2>
                                        <h3>Sub-Head</h3>
                                    </div>
                                    <div class="content">
                                        <p>Content area</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="card">
                            <div style={{display:'flex'}}>
                                <div class="imagev">
                                    <img src="https://imageio.forbes.com/specials-images/imageserve//6297a140ad5629573ba5f667/0x0.jpg?format=jpg&width=1200" />
                                </div>
                                <div class="card-inner">
                                    <div class="header">
                                        <h2>Venue 6</h2>
                                        <h3>Sub-Head</h3>
                                    </div>
                                    <div class="content">
                                        <p>Content area</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
  venues: state.venues,
});

export default connect(mapStateToProps, { getVenues })(withRouter(BookVenue));
