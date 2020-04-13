import React, {Component} from "react";

export default class AA extends Component{
  constructor(props) {
    super(props);
    this.state = {
      propriedade: props.match.params,
    }
  }
  render(){
    console.log(this.state.propriedade)
    return(<div><p>aass</p></div>)
  }
}