import React, {Component} from "react";
import ShopData from './shopdata';
import Collection from "./collection";
class Shop extends Component {
  constructor() {
    super();
    this.state = {
      items: ShopData,
      carros: [],
      caminhoes: [],
    }
  }

  componentDidMount() {
    this.setState({
      carros: this.state.items.cars[0].items.slice(0,4),
      caminhoes: this.state.items.cars[1].items.slice(0,4)
    })
  }

  render(){

    console.log(this.state.carros)
    return(
      <>
        <Collection title={this.state.items.cars[0].title} items={this.state.carros}/>
        <Collection title={this.state.items.cars[1].title} items={this.state.caminhoes}/>
      </>
    );
  }
};

export default Shop;