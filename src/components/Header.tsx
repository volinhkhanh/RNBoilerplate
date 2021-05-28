import React from 'react';
import {Text} from 'react-native';

import {create} from '../utils/normalize';

export default function Header({text}: any) {
  return <Text style={styles.header}>{text}</Text>;
}

const styles = create({
  header: {
    fontSize: 21,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
});
