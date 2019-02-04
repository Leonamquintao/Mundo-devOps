import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ViewOverflow from 'react-native-view-overflow';

import BadgeComponet from './BadgeComponent'

/* simple level component */
const SwipeComponent = (props) => {
  return (
    <View style={styles.swipeContainer}>
      <ScrollView horizontal={true} >
      
      <LinearGradient colors={['#7F38F4', '#c949cc', '#F22B48']} style={styles.roundBtn} >
        <BadgeComponet />
        <Image source={require('../assets/images/ic_yoga.png')} style={styles.btnIcon} />
      </LinearGradient>

      <LinearGradient colors={['#7F38F4', '#c949cc', '#F22B48']} style={styles.roundBtn}>
        <Image source={require('../assets/images/ic_upper_body.png')} style={styles.btnIcon} />
      </LinearGradient>

      <LinearGradient colors={['#7F38F4', '#c949cc', '#F22B48']} style={styles.roundBtn}>
        <BadgeComponet />
        <Image source={require('../assets/images/ic_lower_body.png')} style={styles.btnIcon} />
      </LinearGradient>

      <LinearGradient colors={['#7F38F4', '#c949cc', '#F22B48']} style={styles.roundBtn}>
        <Image source={require('../assets/images/ic_dance.png')} style={styles.btnIcon} />
      </LinearGradient>

      <LinearGradient colors={['#7F38F4', '#c949cc', '#F22B48']} style={styles.roundBtn}>
        <Image source={ require('../assets/images/ic_yoga.png') } style={styles.btnIcon} />
      </LinearGradient>

      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  swipeContainer: {
    flexDirection: 'row',
    height: 90,
    width: 350,
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: '#323C47',
    borderRadius: 10,
  },

  roundBtn: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:70,
    height:70,
    backgroundColor:'#7F38F4',
    borderRadius:100,
    margin: 10,
    position: 'relative',
  },
  btnIcon: {
    width: 40,
    height: 40,
    resizeMode:'contain'
  }
});

export default SwipeComponent;