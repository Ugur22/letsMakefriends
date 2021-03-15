import React, { useContext,useState,useEffect }  from 'react';
import {View,Text} from 'react-native';
import { Button, Header,Input } from 'react-native-elements';
import {styles} from '../style/style';
import {colors} from '../style/colors';
import {AuthContext} from '../navigation/AuthProvider';
import HomeImage from '../assets/images/undraw_Personal_goals_re_iow7.svg';
import firestore from '@react-native-firebase/firestore';

const HomeScreen = ({navigation}) => {
	const {user,logout} = useContext(AuthContext);
	const [UserData, setUserData] = useState([]);

		useEffect(() => {
			firestore().collection('Users').doc(user.uid).get().then(documentSnapshot => {
				if (documentSnapshot.exists) {
					setUserData(documentSnapshot.data());
				}
			});
		},[]);

	return (
		<View style={styles.container}>
			<HomeImage height={300} width={300} />
			<View style={{alignItems:'center',justifyContent:'center', paddingHorizontal:60}}>
				<Text style={styles.header}>Welcome to chapter one </Text>
				<Text style={styles.header}>Pity party</Text>
				<Text style={styles.header}>focusing on:</Text>
				<View style={{flexDirection: 'row',paddingTop:5}}>
					<Text style={{color: colors.primary}}>{'\u2022'}</Text>
					<Text style={{color: colors.primary}}>{'confidence'}</Text>
    		</View>
				<View style={{flexDirection: 'row',paddingTop:5}}>
					<Text style={{color: colors.primary}}>{'\u2022'}</Text>
					<Text style={{color: colors.primary}}>{'anxiety'}</Text>
    		</View>
				<View style={{flexDirection: 'row',paddingTop:5}}>
					<Text style={{color: colors.primary}}>{'\u2022'}</Text>
					<Text style={{color: colors.primary}}>{'comfort'}</Text>
    		</View>
			</View>
			<View style={styles.bottom}>
				<Button titleStyle={{color: colors.tertiary,}} buttonStyle={styles.full_button} title="I'm ready to start my journey" onPress={() => alert('Hello')}/>
			</View>
		</View>
	)
}

export default HomeScreen;