import React, {Component} from 'react';
import { View, StatusBar } from 'react-native';

// COMPONENTS
import Header from './src/components/Header';
import Home from './src/components/Home';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Header headerText={'MEU PERFIL'} />
        <Home />
      </View>
    );
  }
}