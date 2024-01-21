import React from "react";
import  '../css/Home.css';

const Home = () => {
    return (
      <body>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        
         <a class="navbar-brand" href="#">PlayBook</a>
  
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Book Venue</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Offers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">  
                  <i class="fa fa-bell">
                    <span class="position-absolute top-10 start-200 translate-middle badge rounded-pill bg-primary">
                      5
                      <span class="visually-hidden">unread messages</span>
                    </span>
                  </i>              
                  Notifications
                  
                </a>
              </li>
              <li class="nav-item">
                <div class="dropdown">
                  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-user"></i>
                    My Profile
                  </button>
                  <ul class="dropdown-menu" style={{marginLeft: "-25%"}}>
                    <li><a class="dropdown-item" href="#">Bookings</a></li>
                    <li><a class="dropdown-item" href="#">View Profile</a></li>
                    <li><a class="dropdown-item" href="/Login.html">Logout</a></li>
                  </ul>
                </div>
              </li>          
            </ul>
          </div>
        </div>
      </nav>
  
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/Images/1.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="/Images/2.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="/Images/3.png" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br />
  
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card upcoming" style={{width:"350px"}}>
              <img class="card-img-top" src="Images/upcomingEvents.png" alt="Card image" style={{width:"100%"}} />
              <div class="card-body">
                <p><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10/26/2022</p>
                <p><i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00 AM - 11:00 AM</p>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Boston Badminton</p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#viewEventsModal">
                  View Event
                </button>
              </div>
            </div>
          </div>
  
          <div class="col">
            <div class="row">
              <div class="card icon" style={{width: "12rem"}}>
                <img src="Images/book_venue.png" class="card-img-top" alt="..." style={{width: "10rem",height: "10rem"}} />
                <div class="card-body">
                  <button type="button" class="btn btn-primary">Book Venue</button>
                </div>
              </div>
              <div class="card" style={{width: "12rem"}}>
                <img src="Images/host.png" class="card-img-top" alt="..." style={{width: "10rem",height: "10rem"}}/>
                <div class="card-body">
                  <button type="button" class="btn btn-primary">Host a Game</button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="card icon" style={{width: "12rem"}}>
                <img src="Images/apply.png" class="card-img-top" alt="..." style={{width: "10rem",height: "10rem"}}/>
                <div class="card-body">
                  <button type="button" class="btn btn-primary">Apply for Trails</button>
                </div>
              </div>
              <div class="card" style={{width: "12rem"}}>
                <img src="Images/connect.png" class="card-img-top" alt="..." style={{width: "10rem",height: "10rem"}}/>
                <div class="card-body">
                  <button type="button" class="btn btn-primary">Connect</button>
                </div>
              </div>
            </div>
          </div>
  
        </div>
        </div>
  
  
      {/*Modal*/}
      <div class="modal fade" id="viewEventsModal" tabindex="-1" aria-labelledby="viewEventsModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="viewEventsModalLabel">Badminton</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="/Images/boston_badminton.png" alt="Venue" style={{width: "100%",height:"80%" }}/> <br/><br/>
              <p><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10/26/2022</p>
              <p><i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00 AM - 11:00 AM</p>
              <p><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Boston Badminton</p>
              <p>Amount Paid : $38</p>
              <p>Address: 169 Flanders Rd, Westborough, MA 01581</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
      </div>
  
      <h2 class="faqheading">FAQS</h2>
  
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Can I cancel my membership?
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Yes, you can cancel the membership at anytime with no cost involved. After you cancel the membership it might take few hours for it to be updated in our database.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Can I reschedule the booking?
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">You can reschedule your booking only if there are available slots which also includes some fee.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              How to get a refund for cancelled premium membership?
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Go to My Profile and click on settings then navigate to My Membership. There you will be able to cancel your premium membership if there are no pending payments from your side.</div>
          </div>
        </div>
      </div>
  
  
    {/*Site footer*/}
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">PlayBook</p>
          </div>
  
          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="#">Badminton</a></li>
              <li><a href="#">Basket Ball</a></li>
              <li><a href="#">Cricket</a></li>
              <li><a href="#">Squash</a></li>
              <li><a href="#">Base Ball</a></li>
            </ul>
          </div>
  
          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ's</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a href="#">PlayBook</a>.
            </p>
          </div>
  
          <div>
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="instagram" href="#"><i class="fa fa-instagram"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
  </footer>
    </body>
    );
  };
    
  export default Home;