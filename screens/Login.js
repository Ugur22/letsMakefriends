import React, { useState, useContext,useEffect }  from 'react';
import {View,Text} from 'react-native';
import { Button, Header,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../utils/style';
import {AuthContext} from '../navigation/AuthProvider';
import Friends from '../assets/images/undraw_true_friends_c94g.svg';
import {Appname} from '../utils/strings';

const Login = ({navigation}) => {

	const {login} = useContext(AuthContext);
	const [email,setEmail] = useState();
	const [password,setPassword] = useState();

	return (
		<View style={styles.container}>
		<Text style={{fontSize:28,fontWeight:'bold'}}>{Appname}s</Text>
				<Friends height={300} width={300} />
			<Text style={styles.header} >Welcome to our app</Text>
			<Text style={styles.subtitle}  >Welcome to {Appname} join the community</Text>
			<Button titleStyle={{color: '#F9A826',fontSize:20,fontStyle:'italic',textDecorationLine:'underline',marginTop:30}}  type="clear" title="What's LetsMakeFriends?" onPress={() => navigation.navigate('Onboarding')}/>
			<Input labelValue={email} onChangeText={(userEmail) => setEmail(userEmail)}   leftIcon={ <Icon name='child'size={24} color='#F9A826'/>} keyboardType="email-address" autoCapitalize="none" inputContainerStyle={{marginHorizontal:20}} placeholder="email" />
			<Input labelValue={password} onChangeText={(userPassword) => setPassword(userPassword)} leftIcon={ <Icon name='key'size={24} color='#F9A826'/>} inputContainerStyle={{marginHorizontal:20}} placeholder="Password" secureTextEntry={true} />
			<View style={{alignItems:'center',justifyContent:'center'}}>
				<Button buttonStyle={styles.button} title="Login" onPress={() => login(email,password)}/>
				<Button titleStyle={{color: '#F9A826',fontStyle:'italic',textDecorationLine:'underline'}} 
				type="clear" title="Don't have an account? Create one here" onPress={() => navigation.navigate('Signup')}/>
			</View>
		</View>
	)
}

export default Login;