import React from 'react';
import {Text} from 'react-native';

import {create} from '../utils/normalize';

export default function Paragraph() {
  return <Text style={styles.text} />;
}

const styles = create({
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
});
