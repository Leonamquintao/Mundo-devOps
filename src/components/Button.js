import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

/* simple level component */
const Button = (props) => {
  return (
    <TouchableOpacity style={ this.changeColor(props) } onPress={ props.propMethod }>
      <Text style={ styles.buttonTxt }> { props.buttonText } </Text>
    </TouchableOpacity>
  );
};

changeColor = (props) => {
  let color = '#262F38'
  if(props.active == 'HOJE' && props.buttonText == 'HOJE') { color = '#FD3C29' }
  if(props.active == 'ONTEM' && props.buttonText == 'ONTEM') { color = '#19B996' }

  return {
    flex: 1,
    backgroundColor: color,
    borderRadius: 74,
    borderWidth: 1,
    borderColor: '#FEFFFF',
    margin: 10
  }
}

const styles = StyleSheet.create({
  buttonTxt: {
    alignSelf: 'center',
    color: '#FEFFFF',
  }
});

export default Button;
