import {GET_ERRORS,SCRAP_VID_BASIC,SCRAP_VID,SCRAP_VID_INTER,SCRAP_VID_ADV,SCRAP_BOOK,SCRAP_ARTICLE,HISTORY,CLEAR_SCRAP} from '../action/types';
const initialState ={
  videos:null,
videos_basic:null,
videos_inter:null,
videos_adv:null,
book:null,
article:null,
history:null
}
export default  function(state= initialState,action){
  switch(action.type){
    case GET_ERRORS:
    return action.payload;
    case SCRAP_VID:
    return{
      ...state,
      videos:action.payload
    };
    case SCRAP_VID_BASIC:
    return{
      ...state,
      videos_basic:action.payload
    };
    case SCRAP_VID_INTER:
    return{
      ...state,
      videos_inter:action.payload
    };
    case SCRAP_VID_ADV:
    return{
      ...state,
      videos_adv:action.payload
    };
    case SCRAP_BOOK:
    return{
      ...state,
      book:action.payload
    };
    case SCRAP_ARTICLE:
    return{
      ...state,
      article:action.payload
    };
    case HISTORY:
    return{
      ...state,
      history:action.payload
    };
    case CLEAR_SCRAP:
    return{
      ...state,
      videos_basic:null,
      videos_inter:null,
      videos_adv:null,
      videos:null,
      book:null,
      article:null
    }
    default:
    return state;
  }
}
