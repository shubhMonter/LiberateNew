import isEmpty from '../validation/is-empty';
import {SET_CURRENT_USER,LOADING} from '../action/types';
const initialState ={
  isAuthenticated:false,
  user:{},
  loading:false
}
export default  function(state= initialState,action){
  switch(action.type){
    case LOADING:
    return{
      ...state,
      loading:true
    }
    case SET_CURRENT_USER:
    return{
      ...state,
      isAuthenticated:!isEmpty(action.payload),
      user:action.payload,
      loading:false
        }

    default:
    return state;
  }
}
