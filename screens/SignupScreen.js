import React, { useContext, useState }  from 'react';
import {View,Text} from 'react-native';
import { Button, Header,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../utils/style';
import {AuthContext} from '../navigation/AuthProvider';
import SignUpImage from '../assets/images/undraw_sign_in_e6hj.svg';

const SignupScreen = ({navigation}) => {

	const {register} = useContext(AuthContext);
	const [email,setEmail] = useState();
	const [password,setPassword] = useState();

	return (
		<View style={styles.container}>
			<SignUpImage height={300} width={300} />
			<Text style={styles.header} >Create an account</Text>
			<Input labelValue={email} onChangeText={(userEmail) => setEmail(userEmail)}  leftIcon={ <Icon name='child'size={24} color='#F9A826'/>} keyboardType="email-address" autoCapitalize="none" 
			inputContainerStyle={{marginHorizontal:20}} placeholder="email" />
			<Input labelValue={password} onChangeText={(userPassword) => setPassword(userPassword)} leftIcon={ <Icon name='key'size={24} color='#F9A826'/>} 
			inputContainerStyle={{marginHorizontal:20}} placeholder="Password" secureTextEntry={true} />
			<View style={{alignItems:'center',justifyContent:'center'}}>
				<Button buttonStyle={styles.button} title="register" onPress={() => register(email,password)}/>
				<Button titleStyle={{color: '#F9A826',fontStyle:'italic',textDecorationLine:'underline'}} 
				type="clear" title="Have an account? sign in" onPress={() => navigation.navigate('Login')}/>
			</View>
		</View>
	)
}

export default SignupScreen;