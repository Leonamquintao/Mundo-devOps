
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BadgeComponent = () => {
  return(
    <View style={styles.badgeContainer}>
      <Icon name="check" style={{ color: '#FEFFFF' }}/> 
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    position: 'absolute',
    overflow: 'visible',
    top: 0,
    right: 1,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:20,
    height:20,
    backgroundColor:'#19B996',
    borderRadius:100,
  }
});

export default BadgeComponent;