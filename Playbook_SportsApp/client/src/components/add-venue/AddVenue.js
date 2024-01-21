import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Card, CardContent, Typography, Button } from "@material-ui/core";

import TextFieldGroup from "../common/TextFieldGroup";
import DateFieldGroup from "../common/DateFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import SelectFieldGroup from "../common/SelectFieldGroup";
import { addVenue } from "../../actions/eventActions";
import TimeRange from "react-time-range";
import moment from "moment";
import {Modal} from 'react-bootstrap';

const sportList = [
  "Badminton",
  "Tennis",
  "Volleyball",
  "Basketball",
  "Cricket",
  "Running",
  "Table tennis",
  "Football",
  "Soccer",
];

const startTimes = [
  "12 AM",
  "1 AM",
  "2 AM",
  "3 AM",
  "4 AM",
  "5 AM",
  "6 AM",
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM"
]

const endTimes = [
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
  "10 PM",
  "11 PM",
  "12 AM",
  "1 AM"
]

class AddVenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameofvenue: "",
      typeofsport: "",
      location: "",
      description: "",
      imgurl:"",
      imgurl_badminton:"https://cdn.shopify.com/s/files/1/2183/6715/files/badminton-grass-racket-115016_800x.jpg?v=1613183350",
      imgurl_basketball:"https://recreation.gmu.edu/wp-content/uploads/2019/10/basketball.jpg",
      imgurl_tennis:"https://imageio.forbes.com/specials-images/imageserve//6297a140ad5629573ba5f667/0x0.jpg?format=jpg&width=1200",
      imgurl_cricket:"https://wallpaperaccess.com/full/6402577.jpg",
      imgurl_soccer:"https://daily.jstor.org/wp-content/uploads/2018/06/soccer_europe_1050x700.jpg",
      imgurl_tabletennis:"https://www.daysoftheyear.com/wp-content/uploads/world-table-tennis-day1.jpg",
      errors: {},
      isOpen:false,
    };
    this.onChange = this.onChange.bind(this);
    this.changeTime = this.changeTime.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);

    if (this.props.match.params.id) {
      const event = this.props.event.event;

      this.setState({
        nameofvenue: event.nameofvenue,
        typeofsport: event.typeofsport,
        location: event.location,
        description: event.description,
        imgurl:event.imgurl,
        startTime: event.startTime,
        endTime: event.endTime
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    if(this.state.typeofsport == 'Badminton'){
      this.setState({
        imgurl:this.state.imgurl_badminton
      });
    }
    else if(this.state.typeofsport == 'Cricket'){
      this.setState({
        imgurl:this.state.imgurl_cricket
      });
    }
    else if(this.state.typeofsport == 'Tennis'){
      this.setState({
        imgurl:this.state.imgurl_tennis
      });
    }
    else if(this.state.typeofsport == 'Soccer'){
      this.setState({
        imgurl:this.state.imgurl_soccer
      });
    }
    else if(this.state.typeofsport == 'Basketball'){
      this.setState({
        imgurl:this.state.imgurl_basketball
      });
    }
    else if(this.state.typeofsport == 'Table tennis'){
      this.setState({
        imgurl:this.state.imgurl_tabletennis
      });
    }

    const startDate = new Date(this.state.startTime)
    const endDate = new Date(this.state.endTime)

    const startHours = startDate.getHours();
    const endHours = endDate.getHours();

    const venueData = {
      nameofvenue: this.state.nameofvenue,
      typeofsport: this.state.typeofsport,
      location: this.state.location,
      description: this.state.description,
      imgurl:this.state.imgurl,
      startTime: startHours,
      endTime: endHours
      // imgurl_badminton:this.state.imgurl_badminton,
      // imgurl_cricket:this.state.imgurl_cricket,
      // imgurl_basketball:this.state.imgurl_basketball,
      // imgurl_soccer:this.state.imgurl_soccer,
      // imgurl_tabletennis:this.state.imgurl_tabletennis,
      // imgurl_tennis:this.state.imgurl_tennis
    };

    this.props.addVenue(venueData, this.props.history);
    this.setState({isOpen:true});

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  changeTime(e){
    const d = new Date(e.startTime);
    let time = d.getHours();
    console.log(time)
    if(e.startTime)
      this.setState({startTime: e.startTime})

    if(e.endTime)
      this.setState({endTime: e.endTime})
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    const { errors } = this.state;

    return (
      <><Grid container justify="center" className="marginX-1" style={{ marginTop: '7.5%' }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card className="card">
            <CardContent>
              <Typography
                variant="h3"
                component="h1"
                align="center"
                gutterBottom
              >
                Add Venue
              </Typography>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  label="Venue Name *"
                  placeholder=""
                  name="nameofvenue"
                  type="name"
                  value={this.state.nameofvenue}
                  onChange={this.onChange}
                  error={errors.nameofvenue} />
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <SelectFieldGroup
                      label="Type of Sport *"
                      name="typeofsport"
                      type="name"
                      value={this.state.typeofsport}
                      onChange={this.onChange}
                      sportList={sportList}
                      error={errors.typeofsport} />
                  </Grid>
                </Grid>
                <TextFieldGroup
                  label="Location"
                  placeholder="EX: West 96th Street, New York, NY 10025"
                  name="location"
                  type="name"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location} />
                <TextAreaFieldGroup
                  label="Description"
                  placeholder="Details about this event"
                  name="description"
                  type="name"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description} />
                <TimeRange
                  startMoment={this.state.startTime}
                  endMoment={this.state.endTime}
                  minuteIncrement={60}
                  onChange={this.changeTime}
                  style={{ marginBottom: '25px' }} />
                <Button
                  className="primary-color marginB-2"
                  type="submit"
                  variant="contained"
                  fullWidth
                  style={{ marginTop: '15px' }}
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Modal show={this.state.isOpen} onHide={this.closeModal} style={{ marginTop: "10%" }}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <img src="https://www.plendify.com/assets/images/check_mark.png" style={{ width: '300px', marginLeft: '60px' }} />
            <h4 style={{textAlign:'center'}}>Venue Added Succesfully</h4>
          </Modal.Body>
        </Modal></>
    );
  }
}

const mapStateToProps = (state) => ({
  event: state.events,
  errors: state.errors,
});

export default connect(mapStateToProps, { addVenue })(withRouter(AddVenue));
