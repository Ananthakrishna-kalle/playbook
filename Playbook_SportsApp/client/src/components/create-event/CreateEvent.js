import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';

import TextFieldGroup from '../common/TextFieldGroup';
import DateFieldGroup from '../common/DateFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectFieldGroup from '../common/SelectFieldGroup';
import { createEvent } from '../../actions/eventActions';
import TimeRange from 'react-time-range';
import moment from 'moment';
import {Modal} from 'react-bootstrap';

const sportList = ["Badminton", "Tennis", "Volleyball", "Basketball", "Cricket", "Running", "Table tennis", "Football", "Soccer"];

class CreateEvent extends Component{
    constructor(props){
        super(props);
        this.state = {
            nameofevent: '',
            typeofsport: '',
            numberofplayer: '',
            imageURL: '',
            location: '',
            start: '',
            description: '',
            errors: {},
            isOpen:false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        window.scrollTo(0, 0);

        if(this.props.match.params.id){
            const event = this.props.event.event;

            this.setState({
                nameofevent: event.nameofevent,
                typeofsport: event.typeofsport,
                numberofplayer: event.numberofplayer,
                imageURL: event.imageURL,
                location: event.location,
                start: event.start,
                description: event.description
            });
        }
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }
    
    onSubmit(e){
        e.preventDefault();
        
      
        
        this.setState({isOpen:true});
        //setTimeout(() => console.log('Initial timeout!'), 2000);
       
        
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    openModal = () => this.setState({ isOpen: true });
  closeModal = () => {
    this.setState({ isOpen: false });
    const eventData = {
        nameofevent: this.state.nameofevent,
        typeofsport: this.state.typeofsport,
        numberofplayer: this.state.numberofplayer,
        imageURL: this.state.imageURL,
        location: this.state.location,
        start: this.state.start,
        description: this.state.description
    };
    this.props.createEvent(eventData, this.props.history);
  }
    
    render(){
        const {errors} = this.state;
        
        return(
            <div style = {{marginTop: '7.5%'}}>
            <Grid container justify="center" className="marginX-1">
                <Grid item xs={12} sm={8} md={6}>
                    <Card className="card">
                        <CardContent>
                            <h2 align="center" >
                                Host Your Event
                            </h2>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    label="Event Name *"
                                    placeholder=""
                                    name="nameofevent"
                                    type="name"
                                    value={this.state.nameofevent}
                                    onChange={this.onChange}
                                    error={errors.nameofevent}
                                />
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <SelectFieldGroup
                                            label="Type of Sport *"
                                            name="typeofsport"
                                            type="name"
                                            value={this.state.typeofsport}
                                            onChange={this.onChange}
                                            sportList={sportList}
                                            error={errors.typeofsport}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextFieldGroup
                                            label="Number of Player *"
                                            placeholder="2-100 Players"
                                            name="numberofplayer"
                                            type="number"
                                            value={this.state.numberofplayer}
                                            onChange={this.onChange}
                                            error={errors.numberofplayer}
                                        />
                                    </Grid>
                                </Grid>
                                <TextFieldGroup
                                    label="Image URL"
                                    placeholder="EX: https://unsplash.com/photos/-JzHSIzNYnU"
                                    name="imageURL"
                                    type="name"
                                    value={this.state.imageURL}
                                    onChange={this.onChange}
                                    error={errors.imageURL}
                                />
                                <TextFieldGroup
                                    label="Location"
                                    placeholder="EX: West 96th Street, New York, NY 10025"
                                    name="location"
                                    type="name"
                                    value={this.state.location}
                                    onChange={this.onChange}
                                    error={errors.location}
                                />
                                <DateFieldGroup
                                    label="Start Date"
                                    name="start"
                                    value={this.state.start}
                                    onChange={this.onChange}
                                    error={errors.start}
                                />
                                <TextAreaFieldGroup
                                    label="Description"
                                    placeholder="Details about this event"
                                    name="description"
                                    type="name"
                                    value={this.state.description}
                                    onChange={this.onChange}
                                    error={errors.description}
                                />
                                <Button className="primary-color marginB-2" type="submit" variant="contained" fullWidth>
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
            <h4 style={{textAlign:'center'}}>Event Created Succesfully</h4>
          </Modal.Body>
        </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    event: state.events,
    errors: state.errors
});

export default connect(mapStateToProps, {createEvent})(withRouter(CreateEvent));