import React from 'react';
import { View, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { greaterOrEq } from 'react-native-reanimated';
import styles from './HomeStyle';
import { useState, useEffect } from 'react';
import db from '../../db/db';

let timer;
let hoursC = 0;
let minutesC = 0;
let secondsC = 0;
let mSecondsC = 0;

const HomeScreen = ({navigation}) => {
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [mSeconds, setMSeconds] = useState('00');

    useEffect( () => {
      db.transaction( tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS task (id integer primary key not null, name varchar, hours int, minutes int, seconds int);');
      });
    }, []);

    const write = () => {
      mSecondsC = mSecondsC + 10;
      if(mSecondsC > 99) { secondsC++; mSecondsC = 0;}
      if(secondsC > 59) { minutesC++; secondsC = 0;}
      if(minutesC > 59) { hoursC++; minutesC = 0;}
      if(hoursC > 24) hoursC = 0;

      setMSeconds(('0' + mSecondsC).slice(-2));
      setSeconds(('0' + secondsC).slice(-2));
      setMinutes(('0' + minutesC).slice(-2));
      setHours(('0' + hoursC).slice(-2));
    }
    
    const start = () => {
      write;
      timer = setInterval( write, 100)
    }

    const stop = () => {
      clearInterval(timer);
    }

    const change = () => {
        setSeconds = 5;
    }
    
    return (
      <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.text_title}>Cronometro</Text>
          </View>
          <View style={styles.timer}>
            <Text style={styles.text_timer}>{hours}:{minutes}:{seconds}.{mSeconds}</Text>
          </View>
          <View style={styles.timer_buttons}>
            <Ionicons name="md-play-circle" size={60} color="white" onPress={ start } />
            <Ionicons name="md-pause-circle" size={60} color="white" onPress={ stop }/>
            <Ionicons name="md-reload-circle" size={60} color="white" />
          </View>
          <View style={styles.timer_options}>
          </View>
      </View>
    );
  }

  HomeScreen.navigationOptions = ({navigation}) => {
    return{
      headerRight: () => (
        <View>
        <Ionicons name="md-add-circle" size={30} color="white" onPress={() => { navigation.navigate('Task')}}/>
        </View>
      )
    }
  }

  export default HomeScreen;