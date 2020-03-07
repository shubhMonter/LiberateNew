  import React, {Component} from 'react';
  import PropTypes from 'prop-types';
  import {withRouter} from 'react-router-dom';
  //import $ from 'jquery';
  import '../../../../node_modules/popper.js/dist/popper.js';
  import '../../../../node_modules/bootstrap/dist/js/bootstrap.js';

  import classnames from 'classnames';
  import {connect} from 'react-redux';
  import {createProfile} from '../../../action/profileAction';
  const form = {
    marginLeft: '20rem',
    marginTop: '10rem'
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
          name:"Linguistic Intelligence", checked: false },
          { text: 'An ability to develop equations, proofs, make calculations, perform complex mathematical operations and solve abstract problems using equations, numbers, practical knowledge using deductive reasoning.',
          name:"Logical/Mathematical Intelligence",checked: false },
          { text: 'An ability to comprehend 3-dimensional images and shapes. It involves perceiving external and internal imagery, recreating, transforming and modifying images and objects through space. Recognizing the image, knowing its relationship to other surronding objectsand dis-playing the organizational structure of thought are all involved in this.',
          name:"Spatial Intelligence", checked: false },
          { text: 'An ability to distinguish, create, produce and remember meaning of different patterns of sound. Persons with good musical intelligence easily learn to perform an instrument, al-though knowledge of the structural aspects of melody, rhythm and timbreis important for this kind of intelligence.',
          name:"Musical Intelligence",checked: false },
          { text: 'It is the ability to use one’s own body to create products, or solve problems. This aspect of intelligence includes skills to manipulate objects and fine-tune physical skills. This skill ismajorly used by athletes, dancers, typists, gymnasts etc.',
          name:"Bodily/Kinesthetic Intelligence",checked: false },
          { text: 'It is the kind of intelligence shown by people who are able to discern patterns in nature. It is an ability to observe patterns in nature, idebtify and distinguish among different types of plants, animals, natural and human-made systems.',
          name:"Naturalistic Intelligence",checked: false },
          { text: 'It is an ability to understand and recognize other peopl\’es moods, desires, motivations, in-tentions and temperaments. Also interacting with others effectively.',
          name:"Interpersonal Intelligence", checked: false },

        ]
      }
    }

    onToggle(index, e){
      let newItems = this.state.items.slice();
      newItems[index].checked = !newItems[index].checked

      this.setState({
        items: newItems
      })
    }

    getitem(new1){

      if(new1.length>=3){
        console.log("max limit is 3");

      }
    }
    render() {
      return (
        <div className="container">
          <div  style={form}>
            <section>
              <form onSubmit={this.onSubmit}>
                <div className=" bootstrap snippet blur">
                  <div className="col-md-12">

                    <ul>
                      {this.state.items.map((item, i) =>
                        <li key={i}>

                          <input type="checkbox" className="form-control" onChange={this.onToggle.bind(this, i)} />{item.name}
                          <br/>
                          {item.text}
                        </li>

                      )}
                    </ul>
                    <br/>
                    {this.getitem(this.state.items.filter(item => item.checked))}
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      );
    }
  }



  export default CreateProfile3;
