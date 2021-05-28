import React from 'react';
import {TouchableOpacity} from 'react-native';

import {create} from '../utils/normalize';

export default function Button({style, ...props}: any) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      labelStyle={styles.text}
      {...props}
    />
  );
}

const styles = create({
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
