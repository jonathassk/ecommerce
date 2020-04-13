import React, {Component} from "react";
import MenuItem from "./Menuitem";

export default class homemenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items : [
        {
          title: 'CARROS',
          buttonText: 'Compre agora',
          id: 1,
          linkUrl: 'carros'
        }, {
          title: 'SEGURO',
          buttonText: 'Faça agora',
          id: 2,
          linkUrl: 'hats'
        }, {
          title: 'REVISÃO',
          buttonText: 'Faça agora',
          id: 3,
          linkUrl: 'hats'
        }, {
          title: 'CAMINHÕES',
          buttonText: 'Compre agora',
          id: 4,
          linkUrl: 'hats'
        }, {
          title: 'ONIBUS',
          buttonText: 'Compre agora',
          id: 5,
          linkUrl: 'hats'
        }
      ]
    }
  }

  componentDidMount() {
  }

  render() {
    return(
      <>
        {this.state.items.map(({id , ...sectionProps}) => (<MenuItem key={id} {...sectionProps}/> ))}
      </>
    );
  }
}