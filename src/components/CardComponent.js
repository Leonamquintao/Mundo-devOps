import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Button from './Button';


const kcal = require('../assets/images/ic_bike.png');
const min = require('../assets/images/ic_time.png');
const wht = require('../assets/images/ic_balance.png');

/* simple level component */
const CardComponent = (props) => {
  return (
    <View style={styles.cardContainer}>

      <View style={styles.roundBg}>
        <Image source={ props.activities.image } style={styles.img}/>
      </View>

      <View style={{flex: 1, flexDirection: 'column',  alignItems:'center' }}>

        <Text style={styles.txt}>{ props.activities.name }</Text>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image source={kcal} style={styles.littleIcon }/> 
          <Text style={styles.description}>{props.activities.kcal} Kcal</Text>

          <View style={styles.divider} />

          <Image source={min} style={styles.littleIcon }/>
          <Text style={styles.description}>{props.activities.min}</Text>

          <View style={styles.divider} />

          <Image source={wht} style={styles.littleIcon }/>
          <Text style={styles.description}>{props.activities.kg} KG</Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', width: 200 }}>
          <Button buttonText={'HOJE'} active={props.activities.active} propMethod={ () => alert('HOJE!') } /> 
          <Button buttonText={'ONTEM'} active={props.activities.active} propMethod={ () => alert('ONTEM!') } /> 
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 120,
    width: 350,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#323C47',
    borderRadius: 10,
    alignItems:'center',
    marginLeft: 10
  },
  roundBg: {
    alignItems:'center',
    justifyContent:'center',
    width:70,
    height:70,
    backgroundColor:'#262F38',
    borderRadius:100,
    margin: 6
  },
  divider: {
    borderLeftWidth: 1,
    borderLeftColor: '#FEFFFF',
    marginTop: 0,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 8
  },
  img: {
    width: 100,
    height: 100,
  },
  littleIcon: {
    width: 15,
    height: 15,
  },
  description: {
    color: '#FEFFFF',
    marginLeft: 5,
    marginRight: 5,
  },
  txt: {
    margin: 5,
    color: '#FEFFFF',
    fontSize: 28,
    fontWeight: 'bold'
  }
});

export default CardComponent;