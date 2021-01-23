import React, { useState, useEffect }  from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Button, Header,Input } from 'react-native-elements';
import Image from 'react-native-remote-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../utils/style';

const SignupScreen = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Image source={require('../assets/images/undraw_sign_in_e6hj.svg')}
				style={styles.logo} />
			<Text style={styles.header} >Create an account</Text>
			<Input  leftIcon={ <Icon name='child'size={24} color='#F9A826'/>} keyboardType="email-address" autoCapitalize="none" 
			inputContainerStyle={{marginHorizontal:20}} placeholder="email" />
			<Input leftIcon={ <Icon name='key'size={24} color='#F9A826'/>} 
			inputContainerStyle={{marginHorizontal:20}} placeholder="Password" secureTextEntry={true} />
			<View style={{alignItems:'center',justifyContent:'center'}}>
				<Button buttonStyle={styles.button} title="register" onPress={() => navigation.navigate('Signup')}/>
				<Button titleStyle={{color: '#F9A826',fontStyle:'italic',textDecorationLine:'underline'}} 
				type="clear" title="Have an account? sign in" onPress={() => navigation.navigate('Login')}/>
			</View>
		</View>
	)
}

export default SignupScreen;