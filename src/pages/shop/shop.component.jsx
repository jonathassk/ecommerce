import React, {Component} from "react";
import ShopData from './shopdata';
import Collection from "./collection";
class Shop extends Component {
  constructor() {
    super();
    this.state = {
      items: ShopData,
      carros: [],
    }
  }

  componentDidMount() {
    this.setState({carros: this.state.items.cars[0].items.slice(0,4)})
  }

  render(){

    console.log(this.state.carros)
    return(
      <>
        {this.state.items.cars.map((item, key) => (
          <Collection key={key} title={item.title} items={this.state.carros}/>

        ))}
      </>
    );
  }
};

export default Shop;