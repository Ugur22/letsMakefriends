import React, { useContext }  from 'react';
import {View,Text} from 'react-native';
import { Button, Header,Input } from 'react-native-elements';
import Image from 'react-native-remote-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../utils/style';
import {AuthContext} from '../navigation/AuthProvider';



const HomeScreen = ({navigation}) => {
	const {user,logout} = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<Image source={require('../assets/images/undraw_netflix_q00o.svg')}
				style={styles.logo} />
			<Text style={styles.header} >Welcome {user.email}</Text>
			<Button buttonStyle={styles.button} title="logout" onPress={() => logout()}/>
		</View>
	)
}

export default HomeScreen;