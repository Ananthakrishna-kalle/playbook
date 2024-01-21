import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utilis/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import { Container } from "@material-ui/core";
import store from "./store";

import {
  PrivateRoute,
  Navbar,
  Footer,
  Home,
  Events,
  Event,
  CommentForm,
  Register,
  Login,
  CreateEvent,
  Profile,
  CreateProfile,
  UserProfile,
  PrivacyPolicy,
  TermsofService,
} from "./components";
import BookVenue from "./components/book-venue/BookVenue";
import AddVenue from "./components/add-venue/AddVenue";
import SlotSelection from "./components/book-venue/slot_selection";
import FAQ from "./components/faq/FAQ";
import Landing from './components/landing/landing';
import MyBookings from './components/my-bookings/MyBookings';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Home} />
            <Container>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/privacypolicy" component={PrivacyPolicy} />
              <Route exact path="/termsofservice" component={TermsofService} />
              <Switch>
                <Route exact path="/events" component={Events} />
                <Route exact path="/events/:type" component={Events} />
                <Route exact path="/event/:id" component={Event} />
                <PrivateRoute exact path="/profile" component={Profile} />
                <Route exact path="/profile/:id" component={UserProfile} />
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
                <PrivateRoute
                  exact
                  path="/event/:id/newcomment"
                  component={CommentForm}
                />
                <PrivateRoute
                  exact
                  path="/create-event"
                  component={CreateEvent}
                />
                <PrivateRoute
                  exact
                  path="/edit-event/:id"
                  component={CreateEvent}
                />
                <PrivateRoute exact path="/book-venue" component={BookVenue} />
                <PrivateRoute
                  admin={true}
                  exact
                  path="/add-venue"
                  component={AddVenue}
                />
                <PrivateRoute
                  exact
                  path="/select-slot"
                  component={SlotSelection}
                />
                <PrivateRoute
                  exact
                  path="/my-bookings"
                  component={MyBookings}
                ></PrivateRoute>
                <PrivateRoute exact path="/faq" component={FAQ} />
              </Switch>
            </Container>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
