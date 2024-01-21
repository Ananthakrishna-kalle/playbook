import React from "react";

const Signup = () => {
    return (
      <body style={{backgroundImage:"url(/Images/sports-tools_53876-138077.jpg)"}}>
    <section class="h-100 gradient-form">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-10">
                    <div class="card rounded-3 text-black" style={{height: "50rem"}}>
                        <div class="row g-0">
                            <div class="col-lg-7">
                                <div class="card-body p-md-5 mx-md-4">

                                    <div class="text-center">
                                        <img src="/Images/img_sports.png" style={{width: "185px", alt:"logo"}} />
                                        <h4 class="mt-1 mb-5 pb-1">We are the PLAYBOOK Team</h4>
                                    </div>

                                    <div id="alertmsg"></div>

                                    <form>
                                        <p>Register your account here</p>

                                        <div class="d-flex flex-row align-items-center mb-1">
                                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="form3Example1c">Full Name</label>
                                              <input type="text" id="name" class="form-control" />
                                              
                                            </div>
                                          </div>

                                       
                                          <div class="d-flex flex-row align-items-center mb-1">
                                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="form3Example3c">Your Email</label>
                                              <input type="email" id="form3Example3c" class="form-control" />
                                              
                                            </div>
                                          </div>

                                          <div class="d-flex flex-row align-items-center mb-1">
                                            <i class="fas fa-phone fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="form3Example3c">Phone Number</label>
                                              <input type="email" id="form3Example3c" class="form-control" />
                                              
                                            </div>
                                          </div>
                        
                                          <div class="d-flex flex-row align-items-center mb-1">
                                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="form3Example4c">Password</label>
                                              <input type="password" id="form3Example4c" class="form-control" />
                                             
                                            </div>
                                          </div>
                        
                                          <div class="d-flex flex-row align-items-center mb-3">
                                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                            <label class="form-label" for="form3Example4cd">Repeat your password</label>
                                              <input type="password" id="form3Example4cd" class="form-control" />
                                              
                                            </div>
                                          </div>
                        
                                          <div class="form-check d-flex justify-content-center mb-3">
                                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                            <label class="form-check-label" for="form2Example3">
                                              I agree all statements in <a href="#!">Terms of service</a>
                                            </label>
                                          </div>
                        
                                         

                                        <div class="text-center pt-1 mb-2 pb-1">
                                            <button class="btn btn-primary btn-block  gradient-custom-2 mb-3"
                                                type="button" onclick="OnLogin()">Register</button>
                                            
                                        </div>
                                        

                                    </form>

                                </div>
                            </div>
                            <div class="col-lg-5 d-flex align-items-center gradient-custom-2" style={{height: "50rem"}}>
                                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                    <h4 class="mb-4">We are more than just a company</h4>
                                    <p class="small mb-0">With PLAYBOOK you can not only book Venues to play your
                                        favourite sport but also connect with the fellow teammates, plan your game
                                        schedules, host tournaments and invite players.
                                    </p>
                                    <br/>
                                    
                                </div>
                            </div>

                        
                          

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.js"></script>
    <script src="/signup.js"></script>

</body>
    );
  };
    
  export default Signup;