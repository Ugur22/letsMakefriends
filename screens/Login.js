import React, { useState, useEffect }  from 'react';
import {View,Text} from 'react-native';
import Image from 'react-native-remote-svg';
import { Button, Header,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../utils/style';

const Login = ({navigation}) => {
	return (
		<View style={styles.container}>
		<Text style={{fontSize:28,fontWeight:'bold'}}>Letsmakefriends</Text>
			<Image source={require('../assets/images/undraw_true_friends_c94g.svg')}
				style={styles.logo} />
			<Text style={styles.header} >Welcome to our app</Text>
			<Text style={styles.subtitle}  >Welcome to letsmakefriends join the community</Text>
			<Button titleStyle={{color: '#F9A826',fontSize:20,fontStyle:'italic',textDecorationLine:'underline',marginTop:30}}  type="clear" title="What's Letsmakefriends?" onPress={() => navigation.navigate('Onboarding')}/>
			<Input  leftIcon={ <Icon name='child'size={24} color='#F9A826'/>} keyboardType="email-address" autoCapitalize="none" inputContainerStyle={{marginHorizontal:20}} placeholder="email" />
			<Input leftIcon={ <Icon name='key'size={24} color='#F9A826'/>} inputContainerStyle={{marginHorizontal:20}} placeholder="Password" secureTextEntry={true} />
			<View style={{alignItems:'center',justifyContent:'center'}}>
				<Button buttonStyle={styles.button} title="Login" onPress={() => alert('login in app')}/>
				<Button titleStyle={{color: '#F9A826',fontStyle:'italic',textDecorationLine:'underline'}} 
				type="clear" title="Don't have an account? Create one here" onPress={() => navigation.navigate('Signup')}/>
			</View>
		</View>
	)
}

export default Login;