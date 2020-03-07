import React,{Component} from 'react';

export default class Learning extends Component{
render(){
return(<div className="App">
<div class="row">
  <div class="col-md-12 text-center">
    <h4 class="branding"> Class Room</h4>
  </div>
</div>
<div class="sidenav">
  <div style="margin-top: 30px;">
    <a class="dropdown-btn"> <img class="img2" src="../../profile.png" id="img1" alt="" border=3 height=230 width=230>
      <div class=" overlay">CLick To Login as</div>
    </a>

    <div class="dropdown-container">
      <a href="http://localhost/Liberate_Beta_latest/threeee/Registration/login.html"><i class="fas fa-user-circle">User</i></a>
      <a href="http://localhost/Liberate_Beta_latest/threeee/Company Control Panel/rotation/info2.html"><i class="fas fa-building">Company</i></a>
      <a href="http://localhost/Liberate_Beta_latest/threeee/University Control Panel/rotation/info2.html"><i class="fas fa-university">University</i></a>
      <a href="#"><i class="fas fa-sign-out-alt">Logout</i>

      </a>
    </div>

  </div>
  <a href="http://localhost/Liberate_Beta_latest/threeee/Registration/registration.html" class="top">Registration</a>

  <a href="#contact" class="top">Philosophy</a>
  <a href="#services" class="top">Class Rooms</a>

  <hr style="margin-top: 1rem;
margin-bottom: 1rem;
border: 0;
width: 90%;
border-top: 0.5px solid rgba(250, 245, 245, 0.95);">
  <a href="http://localhost/Liberate_Beta_latest/threeee/user%20control%20panel/PAGES/classroom/tech.html" class="top">Technical</a>
  <a href="http://localhost/Liberate_Beta_latest/threeee/user%20control%20panel/PAGES/classroom/personal.html" class="top">PersonalGrowth</a>

  <div><a href="http://localhost/Liberate_Beta_latest/threeee/PAGES/Home%20/all_new_home.html"> <img src="icon/Lib.png" id="img" alt="" border=3 height=230 width=230 style="position: absolute;bottom: 0;"></a>
  </div>
</div>



<div class="col-sm-12 text-center">
  <a class="btn btn-info btn-lg bg-dark" href="http://localhost/Liberate_Beta_latest/threeee/PAGES/rotation/ML.html">Career Guidance</a>
  <a class="btn btn-info btn-lg bg-dark" href="http://localhost/Liberate_Beta_latest/threeee/PAGES/rotation/Learning.html">Learning</a>
  <a class="btn btn-info btn-lg bg-dark" href="http://localhost/Liberate_Beta_latest/threeee/PAGES/rotation/toporg.html">Top Organisation</a>


</div>


<div id="container1"></div>
</div>);
}
}
