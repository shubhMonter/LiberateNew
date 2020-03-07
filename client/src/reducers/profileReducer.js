import {PROFILE_LOADING_STOP,GET_PROFILE,PROFILE_LOADING,CLEAR_CURRENT_PROFILE,SCRAP_DATA} from '../action/types'
const initialState={
  profile:null,
  profiles:null,
  loading:false
}

export default function(state= initialState, action){
  switch(action.type){
    case PROFILE_LOADING:
    return{
      ...state,
      loading:true
    };
    case GET_PROFILE:
    return{
      ...state,
      profile:action.payload,
      loading:false
    };
    case CLEAR_CURRENT_PROFILE:
    return{
      ...state,
      profile:null
    }
    case PROFILE_LOADING_STOP:
    return{
      ...state,
      loading:false
    };


    default:
    return state;
  }
}
