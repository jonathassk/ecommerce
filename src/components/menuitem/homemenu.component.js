import React, {Component} from "react";
import MenuItem from "./Menuitem";

export default class homemenuComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items : [
        {
          title: 'CARROS',
          buttonText: 'Compre agora'
        }, {
          title: 'SEGURO',
          buttonText: 'Faça agora'
        }, {
          title: 'REVISÃO',
          buttonText: 'Faça agora'
        }, {
          title: 'CAMINHÕES',
          buttonText: 'Compre agora'
        }, {
          title: 'ONIBUS',
          buttonText: 'Compre agora'
        }
      ]
    }
  }

  componentDidMount() {
  }

  render() {
    return(
      <>
        {this.state.items.map((item, key) => (<MenuItem title={item.title} buttonText={item.buttonText}/> ))}
      </>
    );
  }
}