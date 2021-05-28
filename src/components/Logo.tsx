import React from 'react';
import {Image} from 'react-native';

import ImageAssets from '../assets/images';

import {create} from '../utils/normalize';

export default function Logo() {
  return <Image source={ImageAssets.logo} style={styles.image} />;
}

const styles = create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
});
