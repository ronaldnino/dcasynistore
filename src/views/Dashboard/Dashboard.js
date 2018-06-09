import React, { Component } from 'react';
import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyDImbC51wj_I86pYX9AUT2cwZTFtQYpmrE',
  authDomain: 'dcasynive.firebaseapp.com',
  databaseURL: 'https://dcasynive.firebaseio.com',
  projectId: 'dcasynive',
  storageBucket: 'dcasynive.appspot.com',
  messagingSenderId: '1019474638957'
};
var fir = firebase.initializeApp(config);


class Dashboard extends Component {

  constructor () {
    super()
    this.state = { name: '' }
    firebase.database().ref('users/').set({data : [{
      username: "Ronald",
      email: 'dass',
      profile_picture : "ojo"
    },
    {
      username: "eduardo",
      email: 'dass',
      profile_picture : "ojo"
    }
  ]});

    firebase.database().ref('libros/' + "223").set({
      nombre: "Aprendiendo javascript con Eduardo",
      autor: 'Eduardo',
      profile_picture : "url"
    });
  }

  componentDidMount(){
    
    
    const nameRef = firebase.database().ref().child('objeto').child('nombre')
    nameRef.on('value', snapshot => {
      this.setState({
        name: snapshot.val()
      })
    })
  }

  render() {
    return (
      <div className="animated fadeIn">
        Hola loca ... {this.state.name}
      </div>
    )
  }
}

export default Dashboard;
