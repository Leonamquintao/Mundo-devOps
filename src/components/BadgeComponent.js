
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
    overflow: 'visible',
    borderWidth: 2,
    borderColor:'#FEFFFF',
    alignItems:'center',
    justifyContent:'center',
    width:20,
    height:20,
    backgroundColor:'#19B996',
    borderRadius:100,
    position: 'absolute',
    right: 2,
    top: 2,
  }
});

export default BadgeComponent;