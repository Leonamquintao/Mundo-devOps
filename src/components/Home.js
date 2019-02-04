import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import SwipeComponent from './SwipeComponent';
import CardComponent from './CardComponent';

const activities = [
  { id: 1, name: 'CORRIDA', kcal: '400', min: '30 m', kg: '52', image: require('../assets/images/running.png'), active: '' },
  { id: 2, name: 'BICICLETA', kcal: '630', min: '40 m', kg: '55', image: require('../assets/images/cycling.png'), active: 'HOJE' },
  { id: 3, name: 'MUSCULAÇÃO', kcal: '950', min: '1 h', kg: '57', image: require('../assets/images/gym.png'), active: '' },
  { id: 4, name: 'YOGA', kcal: '200', min: '80 m', kg: '69', image: require('../assets/images/yoga.png'), active: 'ONTEM' },
];
export default class Home extends Component {

  renderActions() {
    return activities.map(item =>
      <CardComponent key={ item.id } activities={ item } />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <SwipeComponent />

        <ScrollView>
          { this.renderActions() }
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#262F38',
  },
  txt: {
    color: '#fff'
  }
});
