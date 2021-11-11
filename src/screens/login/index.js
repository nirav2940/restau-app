import React, {useRef, useState} from 'react';
import {View, Text, Keyboard,Image,TextInput} from 'react-native';
import Button from '../../components/button';
import styles from './styles';
import Ripple from 'react-native-material-ripple';
import {connect} from 'react-redux';
import loginAccount from './action';

const LoginScreen = props => {
  const {loginAccount, isLoading} = props;
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.header}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Please sign in to your account</Text>
      </View>
      <View style={styles.middleContent}>
        <TextInput
          autoCapitalize="none"
          placeholder="Enter email address"
          placeholderTextColor="#585a60"
          value={email}
          ref={input => {
            emailRef.current = input;
          }}
          style={styles.input}
          onSubmitEditing={() => passwordRef.current.focus()}
          onChangeText={val => {
            setEmail(val);
          }}
          blurOnSubmit={false}
          returnKeyType="next"
        />

        <TextInput
          autoCapitalize="none"
          placeholder="Enter password"
          placeholderTextColor="#585a60"
          value={password}
          ref={input => {
            passwordRef.current = input;
          }}
          style={styles.input}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          onChangeText={val => {
            setPassword(val);
          }}
          secureTextEntry={true}
          blurOnSubmit={false}
          returnKeyType="done"
        />
      </View>

      <View style={styles.bottomContent}>
        <Button
          title="Sign In"
          isLoading={isLoading}
          action={() => {
            loginAccount({email, password});
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  isLoading: state.LoginReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  loginAccount: data => dispatch(loginAccount(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
