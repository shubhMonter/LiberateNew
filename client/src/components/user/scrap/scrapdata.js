import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {connect} from 'react-redux';
import { scrapData,hist,gethist,clearScrap} from '../../../action/scrapAction';
import {getCurrentProfile} from '../../../action/profileAction';
import LoadingOverlay from 'react-loading-overlay';
import ReactPlayer from 'react-player'
import Moment from 'react-moment';
const form = {
  marginLeft: '50rem',

};
  const form1={marginTop: '50rem'};
const blur ={
	textAlign:'-webkit-auto'
};
class Scrapdata extends Component {
  constructor(props){
    super(props);
    this.state={
      string:'',
      search:'',
      errors: {},
      playing:true
    };
  this.onChange=this.onChange.bind(this);
  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value})

  }
  componentDidMount(){
  this.props.getCurrentProfile();


  setTimeout(()=>{
    var userData='';
if(this.props.profile===null){

}
   if(this.props.profile.profile.skill===null||this.props.profile.profile.skill===undefined||this.props.profile.profile.skill===''){
     console.log("in if");
          userData={
   //  string:this.props.profile.profile.skills[0].skillset,
     //string:this.state.string,
     string:this.props.profile.profile.job_role,
     sector:this.props.profile.profile.sector,
     skill:this.props.profile.profile.skill,
     domain:this.props.profile.profile.domain,
     category:this.props.profile.profile.category
       };
       }else{
    userData={
   //  string:this.props.profile.profile.skills[0].skillset,
     //string:this.state.string,
     string:this.props.profile.profile.skill,
     sector:this.props.profile.profile.sector,
     job_role:this.props.profile.profile.job_role,
     domain:this.props.profile.profile.domain,
     category:this.props.profile.profile.category
       };

       }
this.props.scrapData(userData);
},800);
this.props.gethist();
    }
    search(search_string){
    var userData={
      string:search_string
    };
    this.props.scrapData(userData);
    this.props.clearScrap();

    }

    onPlay = (link) => {
      link['type']='video';
      this.props.hist(link);

      }
      pushHistory(link,type){
        link['type']=type;
        //console.log(link);
        this.props.hist(link);
        }

  render(){
      const { errors,playing} = this.state;
      var{string}=this.state;
      let video_b,video_i,video_a,books,article,history;
console.log(this.props);
      let load;




      if(this.props.videos.videos===null||this.props.videos.book===null||this.props.videos.article===null||this.props.videos.videos===undefined||this.props.videos.book===undefined||this.props.videos.article===undefined){
        const isActive=true;
        load=(<LoadingOverlay
        active={isActive}
        spinner
        text='scrapping data......'
        style={{position:'unset'}}
        ></LoadingOverlay>);

      }else{
        if(this.props.videos.videos_basic===null||this.props.videos.videos_basic===undefined){
          video_b=(<p>Can't scrap anything</p>);
        }else

        {video_b = this.props.videos.videos_basic.map((vid,i) =>
        {
          return(

          <div className={classnames('carousel-item col-md-3',{'active':i===0})} key={vid._id}>
          <div className="card carda">
            <ReactPlayer url={vid.link} width='100%'
          height='50%' onPlay={this.onPlay.bind(this,vid)} />

            <div className="card-body">
              <div className="col-md">
                <p className="card-text title text-center">{vid.title}</p>
              </div>
              <hr/>
              <div className="col-md text-center">
                <span> </span>

              </div>
              <hr/>
              <div className="col-md text-center">
              <a href={vid.link} target="_blank"  onClick={this.pushHistory.bind(this,vid,'video')}>  <span>Enroll Course <i className="fas fa-angle-double-right" /></span></a>
              </div>
            </div>
            </div>
            </div>

        );});}
        if(this.props.videos.videos_inter===null||this.props.videos.videos_inter===undefined  ){
          video_i=(<p>value is Null</p>);
        }else{
        video_i = this.props.videos.videos_inter.map((vid,i) =>
        {
          return(

          <div className={classnames('carousel-item col-md-3',{'active':i===0})} key={vid._id}>
          <div className="card carda">
            <ReactPlayer url={vid.link} width='100%'
          height='50%' onPlay={this.onPlay.bind(this,vid)} />

            <div className="card-body">
              <div className="col-md">
                <p className="card-text title text-center">{vid.title}</p>
              </div>
              <hr/>
              <div className="col-md text-center">
                <span> </span>

              </div>
              <hr/>
              <div className="col-md text-center">
              <a href={vid.link} target="_blank"  onClick={this.pushHistory.bind(this,vid,'video')}>  <span>Enroll Course <i className="fas fa-angle-double-right" /></span></a>
              </div>
            </div>
            </div>
            </div>

        );})}
        if(this.props.videos.videos_adv===null||this.props.videos.videos_adv===undefined){
          video_a=(<p>value is Null</p>);
        }else{
        video_a = this.props.videos.videos_adv.map((vid,i) =>
        {
          return(

          <div className={classnames('carousel-item col-md-3',{'active':i===0})} key={vid._id}>
          <div className="card carda">
            <ReactPlayer url={vid.link} width='100%'
          height='50%' onPlay={this.onPlay.bind(this,vid)} />

            <div className="card-body">
              <div className="col-md">
                <p className="card-text title text-center">{vid.title}</p>
              </div>
              <hr/>
              <div className="col-md text-center">
                <span> </span>

              </div>
              <hr/>
              <div className="col-md text-center">
              <a href={vid.link} target="_blank"  onClick={this.pushHistory.bind(this,vid,'video')}>  <span>Enroll Course <i className="fas fa-angle-double-right" /></span></a>
              </div>
            </div>
            </div>
            </div>

        );});
      }
      if(this.props.videos.book===null||this.props.videos.book===undefined){
        books=(<p>value is Null</p>);
      }else
      {books = this.props.videos.book.docs.map((bok,i) =>
        { //var myURL = new URL(vid.link);
          //var vlink=myURL.searchParams.get('v');
          return(

          <div className={classnames('carousel-item col-md-3',{'active':i===0})}  key={bok._id}>
          <div className="card carda">
            <img className="card-img-top" src={`http://covers.openlibrary.org/w/id/${bok.cover_i}-M.jpg`}/>

            <div className="card-body">
              <div className="col-md">
                <p className="card-text title text-center">{bok.title}</p>
              </div>
              <hr/>
              <div className="col-md text-center">
                <span> {bok.author_name}</span>
                <p className="card-text "><Moment format="DD/MM/YYYY HH:mm">{bok.first_publish_year}</Moment> </p>
              </div>
              <hr/>
              <div className="col-md text-center">
                <a href={`https://openlibrary.org/${bok.key}`} target="_blank" onClick={this.pushHistory.bind(this,bok,'book')} ><span>buy book</span> <i className="fas fa-angle-double-right"  /></a>
              </div>
            </div>
            </div>
            </div>




        );});
        }
        if(this.props.videos.article===null||this.props.videos.article===undefined){
          article=(<p>value is Null</p>);
        }else

        {article = this.props.videos.article.articles.map(art =>
          { //var myURL = new URL(vid.link);
            //var vlink=myURL.searchParams.get('v');
            return(

            <div className="col-md-4" key={art._id}>
            <div className="card carda">
              <img className="card-img-top" src={art.urlToImage}/>

              <div className="card-body">
                <div className="col-md">
                  <p className="card-text title text-center">{art.title}</p>
                </div>
                <hr/>
                <div className="col-md text-center">
                  <span> {art.author}</span>
                  <p className="card-text "><Moment format="DD/MM/YYYY HH:mm">{art.publishedAt}</Moment> </p>
                </div>
                <hr/>
                <div className="col-md text-center">
              <a href={art.url} target="_blank" onClick={this.pushHistory.bind(this,art,'article')}>    <span>Read Article <i className="fas fa-angle-double-right" /></span></a>
                </div>
              </div>
              </div>
              </div>

          );});

}
     }
     if(this.props.videos.history===null||this.props.videos.history===undefined){
       history=<p>No history</p>;
     }else{
     history=this.props.videos.history.map(hist=>{
       var view,link;
       if(hist.cType==='video'){
         view=(<ReactPlayer url={hist.link} width='100%'
       height='50%' onPlay={this.onPlay.bind(this,hist)} />);
       link=(<span>Enroll Course<a href={hist.link} target="_blank"> <i className="fas fa-angle-double-right" /></a></span>);
       }else{
         view=(<img className="card-img-top" src={hist.img}/>);
         link=(  <span>Read Article<a href={hist.link} target="_blank"> <i className="fas fa-angle-double-right" onClick={this.pushHistory.bind(this,hist)}/></a></span>);
       }
       return(

       <div className="col-md-4" key={hist._id}>
       <div className="card carda">

         {view}

         <div className="card-body">
           <div className="col-md">
             <p className="card-text title text-center">{hist.title}</p>
           </div>
           <hr/>
           <div className="col-md text-center">
             <span> </span>

           </div>
           <hr/>
           <div className="col-md text-center">
             {link}
           </div>
         </div>
         </div>
         </div>

     );

   });
 }

     return (
         <section id="tabs" className="project-tab">
           {load}
           <div className="blur">
           <div className="input-group mb-3">
             <input type="text" className="form-control" placeholder="Search Bar"  name="search" onChange={this.onChange} aria-describedby="basic-addon2"/>
             <div className="input-group-append">
               <button className="btn btn-outline-secondary" type="button" onClick={this.search.bind(this,this.state.search)}><i className="fas fa-search">Search</i></button>
             </div>
           </div>
             <div className="row">

               <div className="col-md-12 ">
                 <nav>
                   <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                     <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Books</a>
                     <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Videos</a>
                     <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Articles</a>
                     <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-history" role="tab" aria-controls="nav-contact" aria-selected="false">History</a>
                   </div>
                 </nav>
                 <div className="tab-content col-md-12" id="nav-tabContent ">
                   <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                     <div id="carouselExample2" class="carousel slide">
                       <div class="carousel-inner row w-100 mx-auto" role="listbox">
                         {books}
                       </div>
                       <a class="carousel-control-prev" href="#carouselExample2" role="button" data-slide="prev">
                         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span class="sr-only">Previous</span>
                       </a>
                       <a class="carousel-control-next text-faded" href="#carouselExample2" role="button" data-slide="next">
                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
                         <span class="sr-only">Next</span>
                       </a>
                     </div>
                   </div>
                   <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                     <h3>Basic</h3>
                     <div id="carouselExample3" class="carousel slide">
                       <div class="carousel-inner row w-100 mx-auto" role="listbox">
                         {video_b}
                       </div>
                       <a class="carousel-control-prev" href="#carouselExample3" role="button" data-slide="prev">
                         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span class="sr-only">Previous</span>
                       </a>
                       <a class="carousel-control-next text-faded" href="#carouselExample3" role="button" data-slide="next">
                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
                         <span class="sr-only">Next</span>
                       </a>
                     </div>
                     <h3>intermediate</h3>
                   <div id="carouselExample4" class="carousel slide">
                     <div class="carousel-inner row w-100 mx-auto" role="listbox">
                       {video_i}
                     </div>
                     <a class="carousel-control-prev" href="#carouselExample4" role="button" data-slide="prev">
                       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                       <span class="sr-only">Previous</span>
                     </a>
                     <a class="carousel-control-next text-faded" href="#carouselExample4" role="button" data-slide="next">
                       <span class="carousel-control-next-icon" aria-hidden="true"></span>
                       <span class="sr-only">Next</span>
                     </a>
                   </div>
                   <h3>Advance</h3>
                 <div id="carouselExample5" class="carousel slide">
                   <div class="carousel-inner row w-100 mx-auto" role="listbox">
                     {video_a}
                   </div>
                   <a class="carousel-control-prev" href="#carouselExample5" role="button" data-slide="prev">
                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span class="sr-only">Previous</span>
                   </a>
                   <a class="carousel-control-next text-faded" href="#carouselExample5" role="button" data-slide="next">
                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                     <span class="sr-only">Next</span>
                   </a>
                 </div>
               </div>

             <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
               {article}
             </div>
             <div className="tab-pane fade" id="nav-history" role="tabpanel" aria-labelledby="nav-contact-tab">
               {history}
             </div>
           </div>
         </div>
       </div>
     </div>
</section>


     );

     }
   }

     Scrapdata.propTypes={
       getCurrentProfile:PropTypes.func.isRequired,
       scrapData:PropTypes.func.isRequired,
       profile:PropTypes.object.isRequired,
       videos:PropTypes.object.isRequired,
       errors:PropTypes.object.isRequired
     };

     const mapStateToProps = state =>({
       profile:state.profile,
       videos:state.videos,
       auth:state.auth,
       errors:state.errors
     });

     export default connect(mapStateToProps,{scrapData,getCurrentProfile,hist,gethist,clearScrap})(Scrapdata);
