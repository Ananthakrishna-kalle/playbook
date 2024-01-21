import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  AppBar,
  Toolbar,
  Drawer,
  Badge,
  Link,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { logoutUser } from "../../../actions/authActions";
import { checkNotification } from "../../../actions/notificationActions";
import Desktop from "./Desktop";
import SideDrawer from "./SideDrawer";
import NotificationList from "../../notification/NotificationList";
import UserMenu from "../UserMenu";

import Logo from "../../../img/logop.png";

class Navbar extends Component {
  constructor(props) {
    //const { user } = this.props.auth;


    super(props);
    this.state = {
      showNotification: false,
      showUserMenu: false,
      toggleDrawer: false,
      anchorEl1: "",
      anchorEl2: "",
      iselActive:null,
    };
    this.onShowNotification = this.onShowNotification.bind(this);
    this.onShowUserMenu = this.onShowUserMenu.bind(this);
    this.onHideNotification = this.onHideNotification.bind(this);
    this.onHideUserMenu = this.onHideUserMenu.bind(this);
    this.onLogoutClick = this.onLogoutClick.bind(this);

 

  }

 

  onShowNotification(e) {
    e.preventDefault();
    this.setState({
      showNotification: true,
      anchorEl1: e.currentTarget,
    });
    this.props.checkNotification();
  }

  onShowUserMenu(e) {
    e.preventDefault();
    this.setState({
      showUserMenu: true,
      anchorEl2: e.currentTarget,
    });
  }

  onHideNotification(e) {
    e.preventDefault();
    this.setState({
      showNotification: false,
      anchorEl1: null,
    });
  }

  onHideUserMenu(e) {
    e.preventDefault();
    this.setState({
      showUserMenu: false,
      anchorEl2: null,
    });
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  url(path) {
    
    this.setState({iselActive:path});
    
  }

  render() {
    const { isAuthenticated, notifications } = this.props.auth;
    const { user } = this.props.auth;
    const { profile } = this.props;
    //alert(user.role);

    const handleDrawerOpen = () => {
      this.setState({ toggleDrawer: true });
    };

    const handleDrawerClose = () => {
      this.setState({ toggleDrawer: false });
    };

    const notificationsList = (
      <Badge
        badgeContent={notifications.unread}
        color="secondary"
        onClick={this.onShowNotification}
        className="xm-1"
      >
        <NotificationsIcon />
      </Badge>
    );

    return (
      <AppBar className="primary-color" position="fixed">
        <Container>
          <Toolbar disableGutters className="toolbar">
            <Link component={RouterLink} to="/home">
              <img src={Logo} className="logo" alt="Logo" />
            </Link>


            <div className="hiddenDesk">
              <Link className="white-link" activeClassName='is-active' component={RouterLink} to="/events" id="el" onClick={() => this.url('events')} style={{color:(this.state.iselActive == 'events') ? 'orange' : 'white'}}>
                Events List
              </Link>

              {isAuthenticated ? (
                <Link
                  className="white-link" activeClassName='is-active'
                  component={RouterLink}
                  to="/create-event"
                  id="cr"
                  onClick={() => this.url('create-event')}
                  style={{color:(this.state.iselActive == 'create-event') ? 'orange' : 'white'}}
                >
                  Create Event
                </Link>
              ) : null}
              {user.role === "Admin" ? (
                <Link
                  className="white-link"
                  component={RouterLink}
                  to="/add-venue"
                  id="ad"
                  onClick={() => this.url('add-venue')}
                  style={{color:(this.state.iselActive == 'add-venue') ? 'orange' : 'white'}}
                >
                  Add Venue
                </Link>
              ) : (
                <Link
                  className="white-link"
                  component={RouterLink}
                  to="/book-venue"
                  id="bv"
                  onClick={() => this.url('book-venue')}
                  style={{color:(this.state.iselActive == 'book-venue') ? 'orange' : 'white'}}
                >
                  Book Venue
                </Link>
              )}

              <Link className="white-link" id="mb" component={RouterLink} to="/my-bookings" onClick={() => this.url('my-booking')}
                  style={{color:(this.state.iselActive == 'my-booking') ? 'orange' : 'white'}}>
                My Bookings
              </Link>

              <Link className="white-link" id="faq" component={RouterLink} to="/faq" onClick={() => this.url('faq')}
                  style={{color:(this.state.iselActive == 'faq') ? 'orange' : 'white'}}>
                FAQs
              </Link>
            </div>


            <div className="toolbarRight" style={{cursor:'pointer'}}>
              <div class="userwelcome">Welcome <strong>{user.name}</strong>!!!</div>
              {/* <div>{user.name}</div> */}
              <Desktop
                isAuthenticated={isAuthenticated}
                notificationsUnread={notifications.unread}
                onShowNotification={this.onShowNotification}
                onShowUserMenu={this.onShowUserMenu}
              />


              <div className="hiddenMobile">
                {isAuthenticated ? notificationsList : null}
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleDrawerOpen}
                >
                  <MenuIcon fontSize="large" />
                </IconButton>

              </div>

            </div>
          </Toolbar>
        </Container>

        <Drawer
          anchor="right"
          open={this.state.toggleDrawer}
          onClick={handleDrawerClose}
          onClose={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <SideDrawer
            isAuthenticated={isAuthenticated}
            logout={this.onLogoutClick}
          />
        </Drawer>

        <NotificationList
          notifications={notifications.notification}
          anchorEl={this.state.anchorEl1}
          onClose={this.onHideNotification}
        />
        <UserMenu
          anchorEl={this.state.anchorEl2}
          onClose={this.onHideUserMenu}
          onLogOut={this.onLogoutClick}
        />
      </AppBar>
    );
  }
}



const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, checkNotification })(
  Navbar
);
