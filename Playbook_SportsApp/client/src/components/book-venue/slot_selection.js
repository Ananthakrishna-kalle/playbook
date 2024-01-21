import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  TextField,
} from "@material-ui/core";
import DateFieldGroup from "../common/DateFieldGroup";
import TimeRange from "react-time-range";
import { Modal } from "react-bootstrap";
import history from "../history";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap";
//import ReactTimeslotCalendar from "react-timeslot-calendar";
import moment from "moment";
// import { response } from 'express';
import { paymentsuccess } from './paymentdone.png'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
  } from "mdb-react-ui-kit";

class SlotSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: false,
      book: false,
      errors: {},
      selectedDate: new Date(),
      venueStartTime: null,
      venueEndTime: null,
      startTime: new Date(),
      endTime: new Date(),
      venueDetails: null,
      selectedEquipment: null,
      isOpen: false
    };

   

    this.onChange = this.onChange.bind(this);
    this.bookSlot = this.bookSlot.bind(this);
    this.changeTime = this.changeTime.bind(this);
    this.updateEquipment = this.updateEquipment.bind(this);

    let access_token = localStorage.getItem("jwtToken");
    let venue_id = localStorage.getItem("venue_id");

    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: access_token,
      },
    };
    fetch(`http://localhost:8081/api/venues/${venue_id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ venueDetails: data ,
        venueStartTime:data.startTime,
    venueEndTime:data.endTime});
      });
  }

  onChange(e) {
    console.log(e.target.value);
    this.setState({ selectedDate: e.target.value });
  }

  bookSlot(e) {
    console.log(e);
  }

  changeTime(e) {
    console.log(e);
    if (e.startTime) this.setState({ startTime: e.startTime });
    if (e.endTime) this.setState({ endTime: e.endTime });
  }

  populateSlots() {
    let slots = [];
    for (let i = this.state.venueStartTime; i < this.state.venueEndTime; i++) {
      slots.push(
        <Grid item xs={2}>
          <Card sx={{ minWidth: 50, maxWidth: 250 }}>
            <CardContent>
              <Typography sx={{ fontSize: 15 }} component="div">
                {i}:00 - {i + 1}:00
              </Typography>
              <Typography sx={{ fontSize: 12 }} color="green">
                Available
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small" onClick={this.bookSlot} data-startHour="{i}">Book</Button> */}
            </CardActions>
          </Card>
        </Grid>
      );
    }

    return slots;
  }

  bookSlot() {
    let access_token = localStorage.getItem("jwtToken");

    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: access_token,
      },
      body: JSON.stringify({
        venue: this.state.venueDetails._id,
        venueName: this.state.venueDetails.nameofvenue,
        sport: this.state.venueDetails.typeofsport,
        datetime: this.state.selectedDate,
        startTime: new Date(this.state.startTime).getHours(),
        endTime: new Date(this.state.endTime).getHours(),
        equipment: this.state.selectedEquipment,
      }),
    };

    fetch("http://localhost:8081/api/bookings/new", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

      this.setState({isOpen:false, 
        isOpen1:true
    });
      

  }

  updateEquipment(e) {
    this.setState({ selectedEquipment: e.target.value.split(",") });
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  openModal1 = () => this.setState({ isOpen1: true });
  closeModal1 = () => {
     this.setState({ isOpen1: false });
    history.push('/my-bookings');
    window.location.reload();
  }

  render() {
    const { errors } = this.state;
    

    return (
      <div>
        <br></br>
        <h2 style={{marginTop:'5%'}}>Slot selection</h2>
        <br/>
        <div>
          <div >
          <h3>
            Sport:
          {this.state.venueDetails
                ? this.state.venueDetails.typeofsport
                : "Sport"}
            </h3>
            <h3>
                Venue:
              {this.state.venueDetails
                ? this.state.venueDetails.nameofvenue
                : "Venue"}
            </h3>
            <br/>
            <br/>
           
          </div>
          <div style={{textAlign:'center'}}>
          <div style={{ marginTop: "1%" }}>Choose Date:</div>
          <DateFieldGroup
            label="Select Date"
            value={this.state.selectedDate}
            onChange={this.onChange}
            error={errors.start}
          /></div>
        </div>
        <br></br>
        <Grid container spacing={2} rowSpacing={5}>
          {this.populateSlots()}
        </Grid>
        <br></br>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            color: "black",
          }}
        >
          <div style={{ marginTop: "1%" }}>Choose Slot:</div>
          <TimeRange
            startMoment={this.state.startTime}
            endMoment={this.state.endTime}
            minuteIncrement={60}
            onChange={this.changeTime}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            color: "black",
          }}
        >
          <div style={{ marginTop: "5%", marginBottom: "0%" }}>Enter Equipment required:</div>
          <TextField style={{ marginTop: "5%", marginBottom: "0%"}} type="name" onChange={this.updateEquipment}></TextField>
          {/* <Button onClick={this.bookSlot} variant="contained" size="small">
            Book
          </Button> */}
        </div>
        <div
          style={{ height: "100vh", marginLeft: "45%", marginTop: "5%", alignItems: "center", justifyContent: "center"}}
        >
          <Button color= "primary" variant="contained" onClick={this.openModal}>
            Book Now
          </Button>
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal} style = {{ marginTop: "10%" }}>
          <Modal.Header closeButton>
            <Modal.Title>Payment Gateway</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <strong style={{fontSize:'30px',textAlign:'center',display:'block'}}>Your Total : $75</strong>
          <MDBContainer fluid className="py-5 gradient-custom">
      <MDBRow className="d-flex justify-content-center py-5">
        <MDBCol md="2" lg="2" xl="10">
          <MDBCard style={{ borderRadius: "15px", width: "100%", marginLeft: "0%" }}>
            <MDBCardBody>
                
              <MDBRow className="d-flex align-items-center">
                <MDBCol size="9">
                  <MDBInput
                    label="Card Number"
                    id="form1"
                    type="text"
                    placeholder="1234 5678 9012 3457"
                  />
                </MDBCol>
                <MDBCol size="3">
                  <img
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    alt="visa"
                    width="64px"
                  />
                </MDBCol>

                <MDBCol size="9">
                  <MDBInput
                    label="Cardholder's Name"
                    id="form2"
                    type="text"
                    placeholder="Cardholder's Name"
                  />
                </MDBCol>

                <MDBCol size="6">
                  <MDBInput
                    label="Expiration"
                    id="form2"
                    type="text"
                    placeholder="MM/YYYY"
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    label="CVV"
                    id="form2"
                    type="text"
                    placeholder="&#9679;&#9679;&#9679;"
                  />
                </MDBCol>
                <MDBCol size="3">
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
          </Modal.Body>
          <Modal.Footer>
          <Button color= "primary" variant="contained" onClick={this.bookSlot}>
            Finalize Payment
          </Button>
            <Button variant="secondary" onClick={this.closeModal}>
              Go Back
            </Button>
          </Modal.Footer>
        </Modal>
        
        {/* Success Modal */}
        <Modal show={this.state.isOpen1} onHide={this.closeModal1} style = {{ marginTop: "10%" }}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <img src="https://www.beauty-addict.com/wp-content/uploads/2021/02/Payment-success.png" style={{width:'300px',marginLeft:'60px'}}/>
          </Modal.Body>
        </Modal>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps)(withRouter(SlotSelection));
