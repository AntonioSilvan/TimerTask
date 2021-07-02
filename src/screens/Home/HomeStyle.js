import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title:{
        flex: 2,
        alignItems: 'center',
      },
      timer:{
        flex: 4,
      },
      timer_buttons:{
        flex: 3,
        flexDirection: 'row',
      },
      timer_options:{
        flex: 3,
      },
      text:{
        color: '#fff'
      },
      text_title: {
          color: '#faf3f2',
          fontSize: 30
      },
      text_timer: {
        color: '#faf3f2',
        fontSize: 60,
        alignItems: 'center'
      }
  });