import axios from 'axios';
import {GET_ERRORS,SET_CURRENT_USER,LOADING} from './types'
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

//register Username

    const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': 'http://www.linkedin.com',
      'withCredentials': 'true'
  }
}
export const registerUser = (userData,history) => dispatch => {

  axios.post('/api/user/register', userData)
    .then(res => {
    dispatch(loginUser(userData));
    history.push('/dashboard');
  })
    .catch(err =>
      dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
    );
};
//Linkedin Login -get USer token

export const linkedinReg = (reqData,history) => dispatch =>{
  console.log(history);
  dispatch({
    type:LOADING
  })
  axios.get('https://cors-anywhere.herokuapp.com/http://www.linkedin.com/oauth/v2/accessToken?client_id='+reqData.client_id+'&grant_type=authorization_code&client_secret='+reqData.client_secret+'&code='+reqData.code+'&content-type=application/json&redirect_uri='+reqData.redirect_uri+'&Access-Control-Allow-Origin=*')
  .then(res=>{
    console.log(res);
    var linkedInUrl = `https://cors-anywhere.herokuapp.com/https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))`;
    var linkedInUrl1 = `https://cors-anywhere.herokuapp.com/https://api.linkedin.com/v2/me`;
    var linkedInUrl2 = `https://cors-anywhere.herokuapp.com/https://api.linkedin.com/v2/me?projection=(profilePicture(displayImage~:playableStreams))`;
    var headers = {
    'Authorization': `Bearer ${res.data.access_token}`,
    'Access-Control-Allow-Methods':'GET,PUT,PATCH,POST,DELETE',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Request-Headers':'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type':'application/x-www-form-urlencoded'
    };

  axios.all([
    axios.get(linkedInUrl, {headers}),
    axios.get(linkedInUrl1, {headers}),
    axios.get(linkedInUrl2, {headers})
  ]).then(data => {
    console.log(data);
      const userData={
        name:data[1].data.firstName.localized.en_US,
        email:data[0].data.elements[0]['handle~'].emailAddress,
        avatar:data[2].data.profilePicture['displayImage~'].elements[1].identifiers[0].identifier,
        password:'root123',
        password2:'root123',
     }
     dispatch(registerUser(userData,history));

      //console.log(data[2].data.profilePicture['displayImage~'].elements[1].identifiers[0].identifier);
    }
    ).catch(err =>
      dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  //  console.log(err)
    );
//?client_id='+userData.client_id+'&grant_type=authorization_code&client_secret='+userData.client_secret+'&code='+userData.code+'&content-type=application/json&redirect_uri='+userData.redirect_uri+'&Access-Control-Allow-Origin=*
  })
  .catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
);



};
export const linkedinLogin = (reqData,history) => dispatch =>{
  console.log(history);
  dispatch({
    type:LOADING
  })
  axios.get('https://cors-anywhere.herokuapp.com/http://www.linkedin.com/oauth/v2/accessToken?client_id='+reqData.client_id+'&grant_type=authorization_code&client_secret='+reqData.client_secret+'&code='+reqData.code+'&content-type=application/json&redirect_uri='+reqData.redirect_uri+'&Access-Control-Allow-Origin=*')
  .then(res=>{
    console.log(res);
    var linkedInUrl = `https://cors-anywhere.herokuapp.com/https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))`;
    var linkedInUrl1 = `https://cors-anywhere.herokuapp.com/https://api.linkedin.com/v2/me`;

    var headers = {
    'Authorization': `Bearer ${res.data.access_token}`,
    'Access-Control-Allow-Methods':'GET,PUT,PATCH,POST,DELETE',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Request-Headers':'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type':'application/x-www-form-urlencoded'
    };

  axios.all([
    axios.get(linkedInUrl, {headers}),
    axios.get(linkedInUrl1, {headers}),

  ]).then(data => {
      const userData={
        email:data[0].data.elements[0]['handle~'].emailAddress,
        password:'root123',
     }
     dispatch(loginUser(userData,history));

      console.log(data[1]);
    }
    ).catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
    //console.log(err)
    );
//?client_id='+userData.client_id+'&grant_type=authorization_code&client_secret='+userData.client_secret+'&code='+userData.code+'&content-type=application/json&redirect_uri='+userData.redirect_uri+'&Access-Control-Allow-Origin=*
  })
  .catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
);



};
//Login -get USer token

export const loginUser= userData => dispatch =>{
  axios.post('/api/user/login',userData)
  .then(res=>{
    //save to localStorage
    const {token} =res.data;
    //set localStorage only store string
      localStorage.setItem('jwtToken',token);
      //set token to Auth header
      setAuthToken(token);
     console.log(token)
      //decode token to get user data
      const decode = jwt_decode(token);
      //set current user
      dispatch(setCurrentUser(decode));


  })
  .catch(err => dispatch({
    type: GET_ERRORS,
    payload: err.response.data
  })
);
};
//set logged in userData
export const setCurrentUser= decode =>{
  return{
    type:SET_CURRENT_USER,
    payload:decode
  }
}


//log out
export const logoutUser =()=>dispatch=>{
  //remove token from localStorage
  localStorage.removeItem('jwtToken');
  //remove auth header for future request
  setAuthToken(false);
  //set the current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));

}
