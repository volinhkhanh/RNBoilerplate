import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function Header({text}: any) {
  return <Text style={styles.header}>{text}</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: 'gray',
    fontWeight: 'bold',
    paddingVertical: 12,
  },
});
