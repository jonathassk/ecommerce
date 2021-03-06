import React, {Component} from 'react';
import { auth, createUserProfileDocument} from "./firebase/firebase.utils";
import './App.css';
import Routes from './routes';
import Header from './components/header/header.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    }
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header user={this.state.currentUser}/>
        <div className='bodyPrincipal'>
        <Routes />
        </div>
      </div>
    );
  }
}

export default App;
