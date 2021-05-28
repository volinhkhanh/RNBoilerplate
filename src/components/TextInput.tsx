import React from 'react';
import {View, Text, TextInput as Input} from 'react-native';

import {create} from '../utils/normalize';

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

const styles = create({
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
