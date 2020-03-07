import axios from 'axios';
import { GET_ERRORS,SCRAP_VID,SCRAP_BOOK,SCRAP_ARTICLE,LOADING,HISTORY,CLEAR_SCRAP,SCRAP_VID_BASIC,SCRAP_VID_INTER,SCRAP_VID_ADV} from './types';
var count=0;

//get current profile
export const scrapData =(data)=>dispatch =>{
  var headers = {
  'Access-Control-Allow-Methods':'get,post,delete,put',
  'Access-Control-Allow-Origin':'http://127.0.0.1:5005',
  'Access-Control-Request-Headers':'origin, x-requested-with, content-type, cccept',
  'Content-Type':'application/x-www-form-urlencoded'
  };
  axios.get('https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q='+data.sector+'&apiKey=ef77792a61a94669a71d737855ad7f5a').then(res =>
    {dispatch({
      type:SCRAP_ARTICLE,
      payload:res.data
  });
  dispatch({
    type:LOADING
  });}
  )
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })

    );


  axios.get('http://127.0.0.1:5005/vid1/'+data.string+''+data.domain,{headers}).then(res =>
  dispatch({
    type:SCRAP_VID,
    payload:res.data
  })
).catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })

);
axios.get('https://cors-anywhere.herokuapp.com/http://scrap.iliberate.co/Basic/'+data.string+''+data.domain,{headers}).then(res =>
dispatch({
  type:SCRAP_VID_BASIC,
  payload:res.data
})
).catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })

);
axios.get('https://cors-anywhere.herokuapp.com/http://scrap.iliberate.co/Intermediate/'+data.string+''+data.sector,{headers}).then(res =>
dispatch({
  type:SCRAP_VID_INTER,
  payload:res.data
})
).catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })

);
axios.get('https://cors-anywhere.herokuapp.com/http://scrap.iliberate.co/Advance/'+data.string+''+data.category,{headers}).then(res =>
dispatch({
  type:SCRAP_VID_ADV,
  payload:res.data
})
).catch(err => //dispatch({
    //  type: GET_ERRORS,
      //payload: err.response.data
  //  })
  console.log(err.response)

);
//axios.get('https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/search?q='+data.string+'&key=AIzaSyCS3nuWIauzrtmbUSLV_PLG5KxP9Z9_mYY&part=snippet').then(res =>
//console.log(res)
//).catch(errs => console.log(errs)
//);
axios.get('https://cors-anywhere.herokuapp.com/http://openlibrary.org/search.json?title='+data.string).then(res =>
  {dispatch({
    type:SCRAP_BOOK,
    payload:res.data
  });dispatch({
    type:LOADING
  });
}

)
  .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })

  );

};
//news api key: ef77792a61a94669a71d737855ad7f5a
 export const hist=(data)=>dispatch=>{
   console.log(data);
   axios.post('/api/history/',data).then(res =>
   console.log(res)
 ).catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })

 );
 }
 export const gethist=()=>dispatch=>{
   axios.get('/api/history/').then(res =>
     dispatch({
       type:HISTORY,
       payload:res.data.history
   })

 ).catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })

 );
 }
 export const clearScrap= () =>{
   return{
     type:CLEAR_SCRAP
   };
 };
