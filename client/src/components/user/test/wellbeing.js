// @flow
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

type Props = {
  foo: number
};
type State = {
  bar: number
};

className Wellbeing extends React.Component<Props, State> {
  static defaultProps = {
    foo: 42
  };

  state = {
    bar: 42
  };

  eval(){

    var sum3=0;
    var sum=0;
    var val;
    var set=["group1","group3"];
    function pass(){
      for(var i=1;i<4;i++)
      {
        name="group"+i;
      console.log(name);
      getRadioVal(wellbeing,name);
    }
    }
    function getRadioVal(form, name) {

        // get list of radio buttons with specified name
        var radios = form.elements[name];
    console.log(radios);
        // loop through list of radio buttons
        for (var i=0, len=radios.length; i<len; i++) {
            if ( radios[i].checked ) { // radio checked?
                var c=-1;
                   val = radios[i].value;
                for(var j=0,l=set.length;j<l;j++)
                {
                  //console.log(set[j]);
                  if(radios[i].name==set[j])
                  {
                    console.log("if condition = "+radios[i].name);
                    console.log("if condition = "+set[j]);
                    console.log("swap value "+val);
                    console.log("i am in");
                    var w = swap(val);
                   sum3 = sum3+w;// return value of checked radio or undefined if none checked
                    console.log(w);
                    swapadd(w);
                    c++;
                    break;

                  }


                }
                if(c==-1)
                {
                  var v1 = swap1(val);
                  sum3=sum3+v1;

                }

        }
        //console.log(val);

    //add1(val);
    }
      console.log(sum3);
    }

    function swap(val){
       var cal=6-val+1;
       if(cal<0){
         var cal=-(cal);
       }
       return cal;
    }
    function swap1(val)
    {
    var   cal=val%6;
    return cal;
    }
    function swapadd(w){
      sum=sum+w;
      console.log("sum of swap"+sum);
    }


  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => {
        count: prevState.bar + 1;
      });
    }, 1000);
  }

  render() {
    const { foo } = this.props;
    const { bar } = this.state;
    return (
      <div className="container ">
          <div className="card">
               <div className="center-align">
                      <a  href="../test.html"className="waves-effect black waves-light btn-large" >BACK</a>
                  </div>
              <br>
              <h4 className="center-align"> Well Being </h4>
              <br>
              <div className="row">
                  <br>
                  <div className="row container">
                      <form id="wellbeing"className="col s12">

                          <div className="input-field col s12 flow-text">
                            Q.1.  I am not afranumber to voice my opinions, even when they are in opposition to the opinions of most people."
                              <p>
                                  <label>
                                      <input name="group1" type="radio" className="with-gap" value="1"  />
                                      <span className="black-text"> 1 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group1" type="radio" className="with-gap" value="2" />
                                      <span className="black-text"> 2 </span>
                                  </label>
                                  <label>
                                      <input name="group1" type="radio" className="with-gap" value="3"  />
                                      <span className="black-text"> 3 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group1" type="radio" className="with-gap" value="4"/>
                                      <span className="black-text"> 4 </span>
                                  </label>
                                  <label>
                                      <input name="group1" type="radio" className="with-gap"  value="5" />
                                      <span className="black-text"> 5 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group1" type="radio" className="with-gap" value="6"/>
                                      <span className="black-text"> 6 </span>
                                  </label>
                              </p>
                          </div>

                          <div className="input-field col s12 flow-text">
                              Q.2.In general, I feel I am in charge of the situation in which I live.
                              <p>
                                  <label>
                                      <input name="group2" type="radio" className="with-gap" value="1" />
                                      <span className="black-text"> 1 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group2" type="radio" className="with-gap" value="2"/>
                                      <span className="black-text"> 2 </span>
                                  </label>
                                  <label>
                                      <input name="group2" type="radio" className="with-gap"  value="3"/>
                                      <span className="black-text"> 3 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group2" type="radio" className="with-gap" value="4"/>
                                      <span className="black-text"> 4 </span>
                                  </label>
                                  <label>
                                      <input name="group2" type="radio" className="with-gap"  value="5"/>
                                      <span className="black-text"> 5 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group2" type="radio" className="with-gap" value="6"/>
                                      <span className="black-text"> 6 </span>
                                  </label>
                              </p>
                          </div>

                          <div className="input-field col s12 flow-text">
                            Q.3.I am not interested in activities that will expand by horizons..
                              <p>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="1" />
                                      <span className="black-text"> 1 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="2"/>
                                      <span className="black-text"> 2 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="3"/>
                                      <span className="black-text"> 3 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="4"/>
                                      <span className="black-text"> 4 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="5"/>
                                      <span className="black-text"> 5 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="6"/>
                                      <span className="black-text"> 6 </span>
                                  </label>
                              </p>
                          </div>
                          <div className="input-field col s12 flow-text">
                            Q.4."Most people see me as loving and affectionate."
                              <p>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="1" />
                                      <span className="black-text"> 1 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="2"/>
                                      <span className="black-text"> 2 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="3"/>
                                      <span className="black-text"> 3 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="4"/>
                                      <span className="black-text"> 4 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="5"/>
                                      <span className="black-text"> 5 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="6"/>
                                      <span className="black-text"> 6 </span>
                                  </label>
                              </p>
                          </div>
                          <div className="input-field col s12 flow-text">
                            Q.5.I live life one day at a time and don’t really think about the future.
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="1" />
                                      <span className="black-text"> 1 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="2"/>
                                      <span className="black-text"> 2 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="3"/>
                                      <span className="black-text"> 3 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="4"/>
                                      <span className="black-text"> 4 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="5"/>
                                      <span className="black-text"> 5 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="6"/>
                                      <span className="black-text"> 6 </span>
                                  </label>
                              </p>
                          </div>
                          <div className="input-field col s12 flow-text">
                            Q.6.When I look at the story of my life, I am pleased with how things have turned out.
                              <p>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="1" />
                                      <span className="black-text"> 1 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="2"/>
                                      <span className="black-text"> 2 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="3"/>
                                      <span className="black-text"> 3 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="4"/>
                                      <span className="black-text"> 4 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="5"/>
                                      <span className="black-text"> 5 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="6"/>
                                      <span className="black-text"> 6 </span>
                                  </label>
                              </p>
                          </div>
                          <div className="input-field col s12 flow-text">
                            Q.7 My decisions are not usually influenced by what everyone else is doing.
                              <p>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="1" />
                                      <span className="black-text"> 1 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="2"/>
                                      <span className="black-text"> 2 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="3"/>
                                      <span className="black-text"> 3 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="4"/>
                                      <span className="black-text"> 4 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="5"/>
                                      <span className="black-text"> 5 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="6"/>
                                      <span className="black-text"> 6 </span>
                                  </label>
                              </p>
                          </div>
                          <div className="input-field col s12 flow-text">
                            Q.8 The demands of everyday life often get me down.
                              <p>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="1" />
                                      <span className="black-text"> 1 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="2"/>
                                      <span className="black-text"> 2 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="3"/>
                                      <span className="black-text"> 3 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="4"/>
                                      <span className="black-text"> 4 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="5"/>
                                      <span className="black-text"> 5 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="6"/>
                                      <span className="black-text"> 6 </span>
                                  </label>
                              </p>
                          </div>
                          <div className="input-field col s12 flow-text">
                            Q.9.I think it is important to have new experiences that challenge how you think about yourself and the world
                              <p>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="1" />
                                      <span className="black-text"> 1 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="2"/>
                                      <span className="black-text"> 2 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="3"/>
                                      <span className="black-text"> 3 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="4"/>
                                      <span className="black-text"> 4 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="5"/>
                                      <span className="black-text"> 5 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="6"/>
                                      <span className="black-text"> 6 </span>
                                  </label>
                              </p>
                          </div>
                          <div className="input-field col s12 flow-text">
                            Q.10.Maintaining close relationships has been difficult and frustrating for me.
                              <p>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="1" />
                                      <span className="black-text"> 1 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="2"/>
                                      <span className="black-text"> 2 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="3"/>
                                      <span className="black-text"> 3 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="4"/>
                                      <span className="black-text"> 4 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="5"/>
                                      <span className="black-text"> 5 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="6"/>
                                      <span className="black-text"> 6 </span>
                                  </label>
                              </p>
                          </div>

                          <div className="input-field col s12 flow-text">
                            Q.11.I have a sense of direction and purpose in life.
                              <p>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="1" />
                                      <span className="black-text"> 1 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="2"/>
                                      <span className="black-text"> 2 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="3"/>
                                      <span className="black-text"> 3 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="4"/>
                                      <span className="black-text"> 4 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="5"/>
                                      <span className="black-text"> 5 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="6"/>
                                      <span className="black-text"> 6 </span>
                                  </label>
                              </p>
                          </div>
                          <div className="input-field col s12 flow-text">
                            Q.12.In general, I feel confnumberent and positive about myself.
                              <p>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="1" />
                                      <span className="black-text"> 1 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="2"/>
                                      <span className="black-text"> 2 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="3"/>
                                      <span className="black-text"> 3 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="4"/>
                                      <span className="black-text"> 4 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="5"/>
                                      <span className="black-text"> 5 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="6"/>
                                      <span className="black-text"> 6 </span>
                                  </label>
                              </p>
                          </div>
                          <div className="input-field col s12 flow-text">
                            Q.13.I tend to worry about what other people think of me...
                              <p>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="1" />
                                      <span className="black-text"> 1 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="2"/>
                                      <span className="black-text"> 2 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="3"/>
                                      <span className="black-text"> 3 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="4"/>
                                      <span className="black-text"> 4 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="5"/>
                                      <span className="black-text"> 5 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="6"/>
                                      <span className="black-text"> 6 </span>
                                  </label>
                              </p>
                          </div>
                          <div className="input-field col s12 flow-text">
                            Q.14.I do not fit very well with the people and the community around me.
                              <p>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="1" />
                                      <span className="black-text"> 1 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="2"/>
                                      <span className="black-text"> 2 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="3"/>
                                      <span className="black-text"> 3 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="4"/>
                                      <span className="black-text"> 4 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="5"/>
                                      <span className="black-text"> 5 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="6"/>
                                      <span className="black-text"> 6 </span>
                                  </label>
                              </p>
                          </div>
                          <div className="input-field col s12 flow-text">
                            Q.15.When I think about it, I haven’t really improved much as a person over the years
                              <p>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="1" />
                                      <span className="black-text"> 1 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="2"/>
                                      <span className="black-text"> 2 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="3"/>
                                      <span className="black-text"> 3 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="4"/>
                                      <span className="black-text"> 4 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="5"/>
                                      <span className="black-text"> 5 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="6"/>
                                      <span className="black-text"> 6 </span>
                                  </label>
                              </p>
                          </div>
                          <div className="input-field col s12 flow-text">
                            Q.16.I often feel lonely because I have few close friends with whom to share my concerns."
                              <p>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="1" />
                                      <span className="black-text"> 1 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="2"/>
                                      <span className="black-text"> 2 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="3"/>
                                      <span className="black-text"> 3 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="4"/>
                                      <span className="black-text"> 4 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="5"/>
                                      <span className="black-text"> 5 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="6"/>
                                      <span className="black-text"> 6 </span>
                                  </label>
                              </p>
                          </div>
                          <div className="input-field col s12 flow-text">
                            Q.17.My daily activities often seem trivial and unimportant to me.
                              <p>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="1" />
                                      <span className="black-text"> 1 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="2"/>
                                      <span className="black-text"> 2 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="3"/>
                                      <span className="black-text"> 3 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="4"/>
                                      <span className="black-text"> 4 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="5"/>
                                      <span className="black-text"> 5 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="6"/>
                                      <span className="black-text"> 6 </span>
                                  </label>
                              </p>
                          </div>
                          <div className="input-field col s12 flow-text">
                            Q.18.I feel like many of the people I know have gotten more out of life than I have.
                              <p>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="1" />
                                      <span className="black-text"> 1 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="2"/>
                                      <span className="black-text"> 2 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="3"/>
                                      <span className="black-text"> 3 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="4"/>
                                      <span className="black-text"> 4 </span>
                                  </label>
                                  <label>
                                      <input name="group3" type="radio" className="with-gap"  value="5"/>
                                      <span className="black-text"> 5 </span>
                                  </label>
                                  &nbsp
                                  <label>
                                      <input name="group3" type="radio" className="with-gap" value="6"/>
                                      <span className="black-text"> 6 </span>
                                  </label>
                              </p>
                          </div>
                          v  <div className="input-field col s12 flow-text">
                              Q.19. I tend to be influenced by people with strong opinions.
                                <p>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="1" />
                                        <span className="black-text"> 1 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="2"/>
                                        <span className="black-text"> 2 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="3"/>
                                        <span className="black-text"> 3 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="4"/>
                                        <span className="black-text"> 4 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="5"/>
                                        <span className="black-text"> 5 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="6"/>
                                        <span className="black-text"> 6 </span>
                                    </label>
                                </p>
                            </div>
                            <div className="input-field col s12 flow-text">
                              Q.20."I am quite good at managing the many responsibilities of my daily life.
                                <p>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="1" />
                                        <span className="black-text"> 1 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="2"/>
                                        <span className="black-text"> 2 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="3"/>
                                        <span className="black-text"> 3 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="4"/>
                                        <span className="black-text"> 4 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="5"/>
                                        <span className="black-text"> 5 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="6"/>
                                        <span className="black-text"> 6 </span>
                                    </label>
                                </p>
                            </div>
                            <div className="input-field col s12 flow-text">
                              Q.21.I have a sense that I have developed a lot as a person over time."
                                <p>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="1" />
                                        <span className="black-text"> 1 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="2"/>
                                        <span className="black-text"> 2 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="3"/>
                                        <span className="black-text"> 3 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="4"/>
                                        <span className="black-text"> 4 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="5"/>
                                        <span className="black-text"> 5 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="6"/>
                                        <span className="black-text"> 6 </span>
                                    </label>
                                </p>
                            </div>
                            <div className="input-field col s12 flow-text">
                              Q.22.I enjoy personal and mutual conversations with family members or friends.
                                <p>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="1" />
                                        <span className="black-text"> 1 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="2"/>
                                        <span className="black-text"> 2 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="3"/>
                                        <span className="black-text"> 3 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="4"/>
                                        <span className="black-text"> 4 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="5"/>
                                        <span className="black-text"> 5 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="6"/>
                                        <span className="black-text"> 6 </span>
                                    </label>
                                </p>
                            </div>
                            <div className="input-field col s12 flow-text">
                              Q.23.I don’t have a good sense of what it is I’m trying to accomplish in life.
                                <p>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="1" />
                                        <span className="black-text"> 1 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="2"/>
                                        <span className="black-text"> 2 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="3"/>
                                        <span className="black-text"> 3 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="4"/>
                                        <span className="black-text"> 4 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="5"/>
                                        <span className="black-text"> 5 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="6"/>
                                        <span className="black-text"> 6 </span>
                                    </label>
                                </p>
                            </div>
                            <div className="input-field col s12 flow-text">
                              Q.24.I like most aspects of my personality.
                                <p>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="1" />
                                        <span className="black-text"> 1 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="2"/>
                                        <span className="black-text"> 2 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="3"/>
                                        <span className="black-text"> 3 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="4"/>
                                        <span className="black-text"> 4 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="5"/>
                                        <span className="black-text"> 5 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="6"/>
                                        <span className="black-text"> 6 </span>
                                    </label>
                                </p>
                            </div>
                            <div className="input-field col s12 flow-text">
                              Q.25.I have confnumberence in my opinions, even if they are contrary to the general consensus..
                                <p>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="1" />
                                        <span className="black-text"> 1 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="2"/>
                                        <span className="black-text"> 2 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="3"/>
                                        <span className="black-text"> 3 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="4"/>
                                        <span className="black-text"> 4 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="5"/>
                                        <span className="black-text"> 5 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="6"/>
                                        <span className="black-text"> 6 </span>
                                    </label>
                                </p>
                            </div>

                            <div className="input-field col s12 flow-text">
                              Q.26.I often feel overwhelmed by my responsibilities.
                                <p>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="1" />
                                        <span className="black-text"> 1 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="2"/>
                                        <span className="black-text"> 2 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="3"/>
                                        <span className="black-text"> 3 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="4"/>
                                        <span className="black-text"> 4 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="5"/>
                                        <span className="black-text"> 5 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="6"/>
                                        <span className="black-text"> 6 </span>
                                    </label>
                                </p>
                            </div>
                            <div className="input-field col s12 flow-text">
                              Q.27.I do not enjoy being in new situations that require me to change my old familiar ways of doing things."
                                <p>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="1" />
                                        <span className="black-text"> 1 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="2"/>
                                        <span className="black-text"> 2 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="3"/>
                                        <span className="black-text"> 3 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="4"/>
                                        <span className="black-text"> 4 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="5"/>
                                        <span className="black-text"> 5 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="6"/>
                                        <span className="black-text"> 6 </span>
                                    </label>
                                </p>
                            </div>
                            <div className="input-field col s12 flow-text">
                              Q.28. People would describe me as a giving person, willing to share my time with others
                                <p>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="1" />
                                        <span className="black-text"> 1 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="2"/>
                                        <span className="black-text"> 2 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="3"/>
                                        <span className="black-text"> 3 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="4"/>
                                        <span className="black-text"> 4 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="5"/>
                                        <span className="black-text"> 5 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="6"/>
                                        <span className="black-text"> 6 </span>
                                    </label>
                                </p>
                            </div>
                            <div className="input-field col s12 flow-text">
                              Q.29.I enjoy making plans for the future and working to make them a reality.
                                <p>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="1" />
                                        <span className="black-text"> 1 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="2"/>
                                        <span className="black-text"> 2 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="3"/>
                                        <span className="black-text"> 3 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="4"/>
                                        <span className="black-text"> 4 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="5"/>
                                        <span className="black-text"> 5 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="6"/>
                                        <span className="black-text"> 6 </span>
                                    </label>
                                </p>
                            </div>

                            <div className="input-field col s12 flow-text">
                              Q.30.In many ways, I feel disappointed about my achievements in life..
                                <p>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="1" />
                                        <span className="black-text"> 1 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="2"/>
                                        <span className="black-text"> 2 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="3"/>
                                        <span className="black-text"> 3 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="4"/>
                                        <span className="black-text"> 4 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="5"/>
                                        <span className="black-text"> 5 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="6"/>
                                        <span className="black-text"> 6 </span>
                                    </label>
                                </p>
                            </div>
                            <div className="input-field col s12 flow-text">
                              Q.31.It’s difficult for me to voice my own opinions on controversial matters.
                                <p>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="1" />
                                        <span className="black-text"> 1 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="2"/>
                                        <span className="black-text"> 2 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="3"/>
                                        <span className="black-text"> 3 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="4"/>
                                        <span className="black-text"> 4 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="5"/>
                                        <span className="black-text"> 5 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="6"/>
                                        <span className="black-text"> 6 </span>
                                    </label>
                                </p>
                            </div>
                            <div className="input-field col s12 flow-text">
                              Q.32.I have difficulty arranging my life in a way that is satisfying to me.
                                <p>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="1" />
                                        <span className="black-text"> 1 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="2"/>
                                        <span className="black-text"> 2 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="3"/>
                                        <span className="black-text"> 3 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="4"/>
                                        <span className="black-text"> 4 </span>
                                    </label>
                                    <label>
                                        <input name="group3" type="radio" className="with-gap"  value="5"/>
                                        <span className="black-text"> 5 </span>
                                    </label>
                                    &nbsp
                                    <label>
                                        <input name="group3" type="radio" className="with-gap" value="6"/>
                                        <span className="black-text"> 6 </span>
                                    </label>
                                </p>
                            </div>


                      </form>

                  </div>
                  <div className="center-align">
                      <button className="waves-effect black waves-light btn-large" onclick="pass();">Submit</button>
                  </div>
                  <br>
              </div>
          </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Wellbeing;
