import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css';


function OnLogin() {

    const credentials = {
        "cricket@gmail.com": "Cricket",
        "badminton@yahoo.com": "Badminton",
        "football@outlook.com": "Football"
    }

    var username = document.getElementById('username');
    var password = document.getElementById('password').value;

    if (password == credentials[username.value]) {

        window.location.href = "/Home.html";

    } else {
        //alert('Invalid Username or Password');

        const alertPlaceholder = document.getElementById('alertmsg')

        const alert = (message, type) => {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<div className="alert alert-${type} alert-dismissible" role="alert">`,
                `   <div>${message}</div>`,
                '   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
            ].join('')

            alertPlaceholder.append(wrapper)
        }

        alert('Invalid Username or Password!', 'danger');

    }


}



const Login = () => {
    return (

        <><head>
            <title>Login</title>
            <link rel="stylesheet" type="text/css" href="Login.css" />
            <link rel="stylesheet" type="text/css" href="/MDB5-STANDARD-UI-KIT-Free-5.0.0/css/mdb.min.css"></link>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
                crossorigin="anonymous"></script>
                </head>
                
                
                <body style={{backgroundImage:"url(/playbook/src/Images/sports-tools_53876-138077.jpg)"}}>
                <section className="h-100 gradient-form">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-xl-10">
                                <div className="card rounded-3 text-black">
                                    <div className="row g-0">
                                        <div className="col-lg-6">
                                            <div className="card-body p-md-5 mx-md-4">

                                                <div className="text-center">
                                                    <img src="playbook/src/Images/img_sports.png" style={{width: "185px"}} alt="logo" />
                                                        <h4 className="mt-1 mb-5 pb-1">We are the PLAYBOOK Team</h4>
                                                    </div>

                                                <div id="alertmsg"></div>

                                                <form>
                                                    <p>Please login to your account</p>

                                                    <div className="form-outline mb-4">
                                                        <input type="email" id="username" className="form-control"
                                                            placeholder="Phone number or email address" />
                                                        <label className="form-label" for="form2Example11">Username</label>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="password" id="password" className="form-control" />
                                                        <label className="form-label" for="form2Example22">Password</label>
                                                    </div>

                                                    <div>
                                                        <input type="checkbox" value="lsRememberMe" id="rememberMe" /> <label
                                                            for="rememberMe">Remember me</label>
                                                        </div>

                                                    <div className="text-center pt-1 mb-2 pb-1">
                                                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                            type="button" onClick={OnLogin}>Log in</button>
                                                        <a className="text-muted" href="#!">Forgot password?</a>
                                                    </div>

                                                    <div>
                                                        <button className="btn btn-md btn-block btn-primary"
                                                            style={{backgroundColor: "#dd4b39"}} type="submit"><i
                                                                className="fab fa-google me-2"></i> Sign in with google</button>
                                                        <button className="btn btn-md btn-block btn-primary mb-2"
                                                            style={{backgroundColor: "#3b5998;"}} type="submit"><i
                                                                className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>
                                                    </div><br/>


                                                        <div className="d-flex align-items-center justify-content-center pb-4">
                                                            <p className="mb-0 me-2">Not a Member yet?</p>
                                                            <a href="/signup.html"><button type="button" className="btn btn-outline-danger">Sign Up</button></a>

                                                        </div>

                                                    </form>

                                            </div>
                                        </div>
                                        <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                                <h4 className="mb-4">We are more than just a company</h4>
                                                <p className="small mb-0">With PLAYBOOK you can not only book Venues to play your
                                                    favourite sport but also connect with the fellow teammates, plan your game
                                                    schedules, host tournaments and invite players.
                                                </p>
                                                <br/>
                                                    <a href="#moredetails">
                                                        <button type="button" className="btn btn-primary">More Details</button>
                                                    </a>
                                                </div>
                                        </div>





                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-fluid" id="moredetails">
                    <div className="px-lg-5">

                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                                <div className="bg-white rounded shadow-sm"><img src="/playbook/src/Images/venue.jpg" alt=""
                                    className="venueimg card-img-top" />
                                    <div className="p-4">
                                        <h5> <a href="#" className="text-dark">Book Venue</a></h5>
                                        <p className="small text-muted mb-0">Don't wanna wait in queue to
                                            play???<br/>
                                                Click below to book a venue in advance and play hard!
                                            </p>
                                        <div
                                            className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                            <div
                                                className="badge badge-danger px-3 rounded-pill font-weight-normal" style={{marginLeft:"30%"}}>

                                                <button type="button" className="bookvenue">BOOK</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                                <div className="bg-white rounded shadow-sm"><img src="/playbook/src/Images/teammates.jpg"
                                    alt="" className="teammatesimg card-img-top"/>
                                    <div className="p-4">
                                        <h5> <a href="#" className="text-dark">Connect</a></h5>
                                        <p className="small text-muted mb-0">Fan of someone player and want to
                                            connect with them?
                                            Click below to get the details of all the players.
                                        </p>
                                        <div
                                            className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                            <div
                                                className="badge badge-primary px-3 rounded-pill font-weight-normal" style={{marginLeft:"30%"}}>

                                                <button type="button" className="connect">CONNECT</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                                <div className="bg-white rounded shadow-sm"><img src="/playbook/src/Images/tournament.png"
                                    alt="" className="connectimg card-img-top"/>
                                    <div className="p-4">
                                        <h5> <a href="#" className="text-dark">Host Tournament</a></h5>
                                        <p className="small text-muted mb-0">If you wanna host a tournament and
                                            give away a CUP then click
                                            below to host and to select the players.</p>
                                        <div
                                            className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                            <div
                                                className="badge badge-warning px-3 rounded-pill font-weight-normal text-white" style={{marginLeft:"30%"}}>

                                                <button type="button" className="host">HOST</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                                <div className="bg-white rounded shadow-sm"><img src="/playbook/src/Images/apply.jpg" alt=""
                                    className="applyimg card-img-top"/>
                                    <div className="p-4" style={{marginTop:"8%"}}>
                                        <h5> <a href="#" className="text-dark">Apply for Trials</a></h5>
                                        <p className="small text-muted mb-0">If you love a game and are good at
                                            it but don't have company
                                            then apply for trials and join a team to participate in the
                                            leagues.</p>
                                        <div
                                            className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                            <div
                                                className="badge badge-success px-3 rounded-pill font-weight-normal" style={{marginLeft:"30%"}}>

                                                <button type="button" className="apply">APPLY</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.js"></script>
                <script src="/Login.js"></script>

            </body></>


    );
  };
    
  export default Login;