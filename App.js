

import React , {Component} from 'react';

import { View ,Dimensions } from 'react-native'


//components
import Routes from './Routes';


export default class App extends Component {
  constructor(props) {
    super(props);
  

  }



  render() {

    return (

      <View style={{height: Dimensions.get('window').height + 100}}>
          <Routes />
      </View>
        
    );
  }
}
