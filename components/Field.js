import React from 'react';
import { View, StyleSheet } from 'react-native';

const Field = props => {
  return <View style={{...styles.fields, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  fields: {
    
    backgroundColor: 'transparent'
  }
});

export default Field;
