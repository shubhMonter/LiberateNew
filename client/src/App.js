import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser,logoutUser} from './action/authAction';
import {clearCurrentProfile} from './action/profileAction';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

//import { browserHistory, Router, Route } from 'react-router-dom';
import Nav from './components/navbar';
import Home from './components/Home';
import Corridor from './components/Corridor';
import Classroom from './components/Classroom';
import Career from './components/classroom/career';
import CRegistration from './components/form/creg';
import URegistration from './components/form/ureg';
import Reghome from './components/form/reghome';
import LinkedInPage from './components/form/ureg/linkedinlogin';
import { LinkedInPopUp } from './components/form/src';
import Reg from './components/form/ureg/reg';
import Login from './components/form/ureg/login';
import CreateProfile1 from './components/form/ureg/createprofile1';
import CreateProfile2 from './components/form/ureg/createprofile2';
import CreateProfile3 from './components/form/ureg/createprofile3';
import PrivateRoute from './components/PrivateRoute.js';
import Dashboard from './components/user/Dashboard';
import EditProfile from './components/user/profile/edit/seditprofile';
import AddExp from './components/user/profile/edit/addexp';
import AddEdu from './components/user/profile/edit/addedu2';
import AddPer from './components/form/ureg/addpersonality';
import Scrapdata from './components/user/scrap/scrapdata';
//check for token
if(localStorage.jwtToken){
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decode token and get user current info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  //check fro expired token
  const currentTime = Date.now()/1000;
  if(decoded.exp<currentTime){
    store.dispatch(logoutUser());
    //TODO:clear current profile
  store.dispatch(clearCurrentProfile());
  //
    //redirect to login
    window.location.href='/login';
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
      <Router>
      <div>
          <Nav/>
          <Route exact path="/" component={Home}/>

            <Route exact path="/corridor" component={Corridor}/>
            <Route exact path="/classroom" component={Classroom}/>


          <Route exact path="/career" component={Career}/>
          <Route exact path="/home" component={Reghome}/>
          <Route exact path="/register/creg" component={CRegistration}/>
          <Route exact path="/register/ureg" component={URegistration}/>
          <Route exact path="/register/reg" component={Reg}/>

            <Route exact path="/login" component={LinkedInPopUp} />
            <Route path="/login" component={Login} />

            <Switch>
              <PrivateRoute exact path="/Dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/createprofile" component={CreateProfile1} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/job" component={CreateProfile2} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/intel" component={CreateProfile3} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/editprofile" component={EditProfile} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/addexp" component={AddExp} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/addedu" component={AddEdu} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/addper" component={AddPer} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/scrap" component={Scrapdata} />
            </Switch>

      </div>
      </Router>
      </Provider>
      </div>
    );
  }
}

export default App;
