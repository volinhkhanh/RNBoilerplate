import React from 'react';
import renderer from 'react-test-renderer';
import {SignInScreen} from '../SignInScreen';

it('renders correctly', () => {
  const onPress = (): void => undefined;
  const tree = renderer
    .create(<SignInScreen onPressSignIn={onPress} email={''} password={''} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
