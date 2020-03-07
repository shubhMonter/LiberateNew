import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorReducer';
import profileReducer from './profileReducer'
import scrapReducer from'./scrapReducer'


export default combineReducers({
  auth:authReducer,
  errors:errorsReducer,
  profile:profileReducer,
  videos:scrapReducer,
  videos_basic:scrapReducer,
  videos_inter:scrapReducer,
  videos_adv:scrapReducer,
  book:scrapReducer,
  article:scrapReducer,
  history:scrapReducer
});
