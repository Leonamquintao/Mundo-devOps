import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component {
  render() {
    return (
      <View style={ styles.view }>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => alert('Menu Action!') }>
              <Icon name="bars" size={30} style={{ color: '#FEFFFF' }}/> 
            </TouchableOpacity>
          </View>

          <View style={styles.textBar}>
            <Text style={ styles.head }>{ this.props.headerText }</Text>
          </View>
          
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => alert('config Action!') }>
              <Icon name="gear" size={30} style={{ color: '#FEFFFF' }}/> 
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#F8F8F8',
    height: 90,
    paddingTop: 26,
    position: 'relative',
    backgroundColor: '#262F38',
    borderBottomColor: '#FEFFFF',
    borderBottomWidth: 0.5,
  },
  icons: {
    width: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBar: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50
  },
  head: {
    fontSize: 22,
    color: '#FEFFFF',
  }
});
