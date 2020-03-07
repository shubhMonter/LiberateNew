  import React, {Component} from 'react';
  import PropTypes from 'prop-types';
  import {withRouter} from 'react-router-dom';
  //import $ from 'jquery';
  import '../../../../node_modules/popper.js/dist/popper.js';
  import '../../../../node_modules/bootstrap/dist/js/bootstrap.js';

  import classnames from 'classnames';
  import {connect} from 'react-redux';
  import {updateProfile} from '../../../action/profileAction';
  const form = {
    marginLeft: '20rem',
    marginTop: '6rem'
  };
  const center={
    margin:'0 auto'
  }
  class CreateProfile3 extends Component {
    constructor(props){
      super(props)

      this.state = {
        items: [
          { text: "An ability to think, analyze information, create products or use language to express one\’s feelings, meanings of complex ideas. This ability majorly involves oral or written language such as speeches, books etc.",
          name:"Linguistic Intelligence",img:"https://bobandsuewilliams.com/images/intelligence-linguistic-3.jpg", checked: false },
          { text: 'An ability to develop equations, proofs, make calculations, perform complex mathematical operations and solve abstract problems using equations, numbers, practical knowledge using deductive reasoning.',
          name:"Logical/Mathematical Intelligence",img:"https://www.buzzle.com/img/articleImages/611964-4772-7.jpg",checked: false },
          { text: 'An ability to comprehend 3-dimensional images and shapes. It involves perceiving external and internal imagery, recreating, transforming and modifying images and objects through space. Recognizing the image, knowing its relationship to other surronding objectsand dis-playing the organizational structure of thought are all involved in this.',
          name:"Spatial Intelligence",img:"https://blog.mindvalley.com/wp-content/uploads/2018/11/rsz_a3-5.jpg", checked: false },
          { text: 'An ability to distinguish, create, produce and remember meaning of different patterns of sound. Persons with good musical intelligence easily learn to perform an instrument, al-though knowledge of the structural aspects of melody, rhythm and timbreis important for this kind of intelligence.',
          name:"Musical Intelligence",img:"https://www.thclabs.org/wp-content/uploads/2016/07/mu-featured-660x330.jpg",checked: false },
          { text: 'It is the ability to use one’s own body to create products, or solve problems. This aspect of intelligence includes skills to manipulate objects and fine-tune physical skills. This skill ismajorly used by athletes, dancers, typists, gymnasts etc.',
          name:"Bodily/Kinesthetic Intelligence",img:"https://www.thoughtco.com/thmb/RR2Fs1t2hkS-Nqfw_Tj1FR7Db08=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/women-running-on-athletic-track-78377886-59d2a8f00d327a0011ff3b5a.jpg",checked: false },
          { text: 'It is the kind of intelligence shown by people who are able to discern patterns in nature. It is an ability to observe patterns in nature, idebtify and distinguish among different types of plants, animals, natural and human-made systems.',
          name:"Naturalistic Intelligence",img:"https://childfirst.com.sg/wp-content/uploads/2014/07/Teaching_Naturalist_Intelligence_at_Home-1030x939.jpg",checked: false },
          { text: 'It is an ability to understand and recognize other peopl\’es moods, desires, motivations, in-tentions and temperaments. Also interacting with others effectively.',
          name:"Interpersonal Intelligence",img:"https://i0.wp.com/drawingontheword.com/wp-content/uploads/2018/02/Discussion-interpersonal-min1.jpg?resize=1024%2C671&ssl=1", checked: false },

        ],
        checked: {},
        intel_type:{}

      }
      this.onSubmit=this.onSubmit.bind(this);
    }


    getitem(new1){
      this.state.intel_type=new1;
    }
    onSubmit(e){
        e.preventDefault();

      const profileData={
        intel_type:this.state.intel_type,
        form:3
      };

      this.props.updateProfile(profileData,this.props.history);
        this.props.history.push("/addper");
    }



    onSelectedChange = index => {
      this.setState(previousState => ({
        checked: {
          ...previousState.checked,
          [index]: !previousState.checked[index]
        }
      }));
    };

    render() {
      const { checked } = this.state;
      const checkedCount = Object.keys(checked).filter(key => checked[key]).length;
      const disabled = checkedCount > 2;
      return (

          <div>
            <div className="col s6">
            <img src="images/Lib.png" id="img" alt="" border="3" height="70" width="70" />
            <h4 className="branding">Liberate</h4>
            </div>
            <div   style={form}>
                <form onSubmit={this.onSubmit}>
                  <div className=" bootstrap snippet ">
                    <div className="col-md-12 ">

                      <h3>Step 3: which Intelligence you belong</h3>
                          {this.state.items.map((item, index) =>
                              <div className="card mb-3 col-md-5 blur" key={index} style={{float:'left'}} >
                              <div className=" no-gutters">
                                <div className="col-md-4">

                                  <img src={item.img} height="180" className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                  <div className="card-body">


                                    <h5 className="card-title">
                                      <label htmlFor="info" className="btn btn-info"  >
                                        <input
                                           onClick={() => this.onSelectedChange(index)}
                                        className="badgebox"
                                        type="checkbox"
                                        checked={checked[index] || false}
                                        disabled={!checked[index] && disabled}
                                      />{item.name}
                                      </label></h5>
                                    <p className="card-text">{item.text}</p>

                                  </div>
                                </div>
                              </div>
                            </div>
                        )}

                      <br/>
                      {this.getitem(Object.keys(checked).filter(key => checked[key]))}
                      <div className="form-group ">
                      <div className="col-md-12" style={{marginTop:'62rem'}}>
                      <hr/>
                      <button  type="submit"  className="btn btn-primary btn-lg btn-info-full next-step center">Submit</button>
                      </div>
                    </div>
                    </div>

                  </div>

                </form>
            </div>

          </div>

      );
    }
  }

  CreateProfile3.propTypes={
    profile:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired
  }
  const mapStateToProps=(state)=>({
    profile:state.profile,
    errors:state.errors,
    auth:state.auth
  })
  export default connect(mapStateToProps,{updateProfile})(withRouter(CreateProfile3));
