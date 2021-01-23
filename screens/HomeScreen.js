import React, { useContext }  from 'react';
import {View,Text} from 'react-native';
import { Button, Header,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../utils/style';
import {AuthContext} from '../navigation/AuthProvider';
import HomeImage from '../assets/images/undraw_sign_in_e6hj.svg';



const HomeScreen = ({navigation}) => {
	const {user,logout} = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<HomeImage height={300} width={300} />
			<Text style={styles.header} >Welcome {user.email}</Text>
			<Button buttonStyle={styles.button} title="logout" onPress={() => logout()}/>
		</View>
	)
}

export default HomeScreen;