import React, { useState, useContext }  from 'react';
import {View,Text} from 'react-native';
import { Button,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../style/style';
import {AuthContext} from '../navigation/AuthProvider';
import Friends from '../assets/images/logo.svg';
import {Appname} from '../utils/strings';
import {colors} from '../style/colors';

const Login = ({navigation}) => {

	const {login} = useContext(AuthContext);
	const [email,setEmail] = useState();
	const [password,setPassword] = useState();

	return (
		<View style={styles.container}>
			<Friends height={300} width={300} />
			<Text style={styles.header} >Welcome to our app</Text>
			<Text style={styles.subtitle}>Welcome to {Appname} join the community</Text>
			<Button titleStyle={{color: colors.primary,fontSize:20,fontStyle:'italic',fontFamily:'PlayfairDisplay-Medium',textDecorationLine:'underline',marginTop:10}}  type="clear" title="What's LetsMakeFriends?" onPress={() => navigation.navigate('Onboarding')}/>
			<Input errorStyle={{paddingLeft:20}} errorMessage={email === '' ?  'email is empty': ''} renderErrorMessage={true} labelValue={email} onChangeText={(userEmail) => setEmail(userEmail)} leftIcon={ <Icon name='envelope'size={24} color={colors.primary}/>} keyboardType="email-address" autoCapitalize="none" inputContainerStyle={{marginHorizontal:20}} placeholder="email" />
			<Input errorStyle={{paddingLeft:20}} errorMessage={password === '' ?  'password is empty': ''} renderErrorMessage={true} labelValue={password} onChangeText={(userPassword) => setPassword(userPassword)} leftIcon={ <Icon name='key'size={24} color={colors.primary}/>} inputContainerStyle={{marginHorizontal:20}} placeholder="Password" secureTextEntry={true} />
			<View style={{alignItems:'center',justifyContent:'center'}}>
				<Button buttonStyle={styles.button} titleStyle={{fontFamily:'PlayfairDisplay-Medium',fontSize:18}}  title="Login" onPress={() => login(email,password)}/>
				<Button titleStyle={{color: colors.primary,fontStyle:'italic',fontFamily:'PlayfairDisplay-Medium',textDecorationLine:'underline'}} 
				type="clear" title="Don't have an account? Create one here" onPress={() => navigation.navigate('Signup')}/>
			</View>
		</View>
	)
}

export default Login;