import axios from 'axios';
import { GET_PROFILE, PROFILE_LOADING,GET_ERRORS,CLEAR_CURRENT_PROFILE,SET_CURRENT_USER} from './types';


//get current profile
export const getCurrentProfile = () =>dispatch =>{
  dispatch(setProfileLoading());
  axios.get('/api/profile').then(res =>
    dispatch({
    type:GET_PROFILE,
    payload:res.data
  })
).catch(errs => dispatch({
type:GET_ERRORS,
payload:errs.response.data
})
);

};
//create profiles
export const createProfile=(profileData,history)=>dispatch=>{
  axios
  .post('/api/profile',profileData)
  .then(res=>{
    if(profileData.form==1){
      history.push('/job');
    }
  })
  .catch(err => dispatch({
    type:GET_ERRORS,
    payload:err.response.data
  })
);
};
export const updateProfile=(profileData,history)=>dispatch=>{
  axios
  .post('/api/profile/updateprofile',profileData)
  .then(res=>console.log("next"))
  .catch(err => dispatch({
    type:GET_ERRORS,
    payload:err.response.data
  })
);
};
export const addExp = (expData, history) => dispatch => {
  axios
    .post('/api/profile/experience', expData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
     })

    );
};

// Add education
export const addEdu = (eduData, history) => dispatch => {
console.log(eduData);
  axios
    .post('/api/profile/education', eduData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Experience
export const deleteExperience = id => dispatch => {
  axios
    .delete(`/api/profile/experience/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Education
export const deleteEducation = id => dispatch => {
  axios
    .delete(`/api/profile/education/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete account & profile
export const deleteAccount = () => dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    axios
      .delete('/api/profile')
      .then(res =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};
//profile LOADING
export const setProfileLoading= () =>{
  return{
    type:PROFILE_LOADING
  };
};

//clear profile
export const clearCurrentProfile= () =>{
  return{
    type:CLEAR_CURRENT_PROFILE
  };
};
