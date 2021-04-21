import React, { useContext,useState,useEffect } from 'react';
import HomeScreen from '../screens/HomeScreen';
import ChapterScreen from '../screens/ChapterScreen';
import DiaryScreen from '../screens/DiaryScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../navigation/AuthProvider';
import {colors} from '../style/colors';
import {Text} from 'react-native';
import {styles} from '../style/style';
import firestore from '@react-native-firebase/firestore';

const Stack = createStackNavigator();

const AppStack = () => {
	const {logout,user} = useContext(AuthContext);
	const [UserData, setUserData] = useState([]);

	useEffect(() => {
		firestore().collection('Users').doc(user.uid).get().then(documentSnapshot => {
			if (documentSnapshot.exists) {
				setUserData(documentSnapshot.data());
			}
		});
	},[]);

  return (
		<Stack.Navigator >
			<Stack.Screen name="Home" component={HomeScreen} options={({navigation}) => ({
				title:<Text style={styles.subtitle} >Welcome, {UserData.name}</Text> ,
				headerRight: () => (
					<Button buttonStyle={{backgroundColor:'transparent'}}
					icon={
						<Icon name='logout'size={32} color={colors.tertiary}/>}
						onPress={() => logout()}
						title=""
						color={colors.secondary}
					/>
				),
				headerStyle: {
					backgroundColor:'#f2f2f2',
					shadowColor:'#f2f2f2',
					elevation:0
				}
			})}/>
			<Stack.Screen name="Chapter" component={ChapterScreen} options={({navigation}) => ({
				title:'' ,
				headerRight: () => (
					<Text style={styles.subtitleInvert}>Chapter one</Text>
				),
				headerLeft: () => (
					<Text style={styles.subtitle}>14-02-2020</Text>
				),
				headerStyle: {
					backgroundColor:'transparent',
					elevation:0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
				},
				
			})}/>
			<Stack.Screen name="Diary" component={DiaryScreen} options={({navigation}) => ({
				title:'' ,
				headerRight: () => (
					<Text style={styles.subtitle}>Dairy</Text>
				),
				headerLeft: () => (
					<Text style={styles.subtitle}>14-02-2020</Text>
				),
				headerStyle: {
					backgroundColor:'transparent',
					elevation:0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
				},
				
			})}/>
		</Stack.Navigator>
  );
};

export default AppStack;