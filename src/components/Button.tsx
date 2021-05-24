import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

export default function Button({style, ...props}: any) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      labelStyle={styles.text}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: '#39B78D',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    color: 'black',
  },
});
