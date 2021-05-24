import React, {useState, FC} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import moment from 'moment';
import {useTranslation} from 'react-i18next';

import Background from '../../../components/Background';
import Logo from '../../../components/Logo';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import TextInput from '../../../components/TextInput';

import {emailValidator} from '../../../helpers/emailValidator';
import {passwordValidator} from '../../../helpers/passwordValidator';
import {nameValidator} from '../../../helpers/nameValidator';

import {postSignUp} from '../../../services';

import {useCalendar} from '../../../hooks/useCalendar';

export const SignUpScreen: FC<{}> = ({navigation}: any) => {
  const {calendarStart: date, handleOpen: handleOpenCalendar} = useCalendar();
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || nameError) {
      setName({...name, error: nameError});
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    const data = await postSignUp({
      name: name,
      username: email,
      password: password,
    });
    if (data) {
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    }
  };
  const {t} = useTranslation();
  return (
    <Background>
      <Logo />
      <Header>{t('Create Account')}</Header>
      <TextInput
        placeholder={t('Name')}
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({value: text, error: ''})}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        placeholder={t('Email')}
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        placeholder={t('Password')}
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TouchableWithoutFeedback onPress={handleOpenCalendar}>
        <View style={styles.selectCalendar}>
          {!date ? (
            <Text>Select Date</Text>
          ) : (
            <Text>{moment(date).format('DD/MM/YYYY')}</Text>
          )}
        </View>
      </TouchableWithoutFeedback>
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{marginTop: 24}}>
        <Text>{t('Sign up')}</Text>
      </Button>
      <View style={styles.row}>
        <Text>{t('Already have an account?')} </Text>
        <TouchableOpacity onPress={() => navigation.replace('SignInScreen')}>
          <Text style={styles.link}>{t('Login')}</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: 'gray',
  },
  selectCalendar: {
    marginTop: 10,
    backgroundColor: 'white',
    height: 40,
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
    paddingLeft: 16,
  },
});
