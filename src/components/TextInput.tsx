import React from 'react';
import {View, StyleSheet, Text, TextInput as Input} from 'react-native';

export default function TextInput({errorText, description, ...props}: any) {
  return (
    <View style={styles.container}>
      <Input style={styles.input} underlineColor="transparent" {...props} />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  description: {
    fontSize: 13,
    color: 'gray',
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: 'gray',
    paddingTop: 8,
  },
});
