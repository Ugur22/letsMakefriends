import React, { useContext }  from 'react';
import {View,Text} from 'react-native';
import { Button, Header,Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../utils/style';
import {AuthContext} from '../navigation/AuthProvider';
import HomeImage from '../assets/images/undraw_Personal_goals_re_iow7.svg';

const HomeScreen = ({navigation}) => {
	const {user,logout} = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<HomeImage height={300} width={300} />
			<View style={{alignItems:'center',justifyContent:'center', paddingHorizontal:60}}>
			{/* <Text style={styles.header} >Welcome {user.email}</Text> */}
				<Text style={styles.header}>Welcome to chapter one </Text>
				<Text style={styles.header}>Pity party</Text>
				<Text style={{fontSize:20,paddingTop:10}}>focusing on:</Text>
				<View style={{flexDirection: 'row',paddingTop:5}}>
					<Text>{'\u2022'}</Text>
					<Text >{'confidence'}</Text>
    		</View>
				<View style={{flexDirection: 'row',paddingTop:5}}>
					<Text>{'\u2022'}</Text>
					<Text>{'anxiety'}</Text>
    		</View>
				<View style={{flexDirection: 'row',paddingTop:5}}>
					<Text>{'\u2022'}</Text>
					<Text>{'comfort'}</Text>
    		</View>
			</View>
			<View style={styles.bottom}>
				<Button titleStyle={{color: '#FFF'}} buttonStyle={styles.full_button} title="I'm ready to start my journey" onPress={() => alert('Hello')}/>
			</View>
		</View>
	)
}

export default HomeScreen;