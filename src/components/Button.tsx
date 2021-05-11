import React from 'react';
import {StyleSheet, Pressable} from 'react-native';

export default function Button({style, ...props}: any) {
  return (
    <Pressable
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
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});
