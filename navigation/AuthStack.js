import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import OnboardingScreen from '../screens/OnboardingScreen';
import SkillsScreen from '../screens/SkillsScreen';
import TraitsScreen from '../screens/TraitsScreen';
import SignupScreen from '../screens/SignupScreen';
import {Text} from "react-native";
import {colors} from '../style/colors';
import {styles} from '../style/style';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
		<Stack.Navigator initialRouteName={'Login'}>
			<Stack.Screen name="Login" component={Login} options={{header: () => null}}/>
			<Stack.Screen name="Onboarding" options={{header: () => null}} component={OnboardingScreen}/>
			<Stack.Screen name="Signup"  component={SignupScreen} options={({navigation}) => ({
				title:<Text style={{color:'#fff',fontFamily:'PlayfairDisplay-Medium',fontSize:18}} >Tell us something about yourself</Text>,
				headerStyle: {
					shadowColor:'#f2f2f2',
					elevation:0,
					backgroundColor:colors.primary
				}
			})}/>
			<Stack.Screen name="Skills"  component={SkillsScreen} options={({navigation}) => ({
				title:<Text style={{color:'#fff',fontFamily:'PlayfairDisplay-Medium',fontSize:18}} >What do you like to do?</Text>,
				headerStyle: {
					shadowColor:'#f2f2f2',
					elevation:0,
					backgroundColor:colors.primary
				}
			})}/>
			<Stack.Screen name="Traits"  component={TraitsScreen} options={({navigation}) => ({
				title:<Text style={{color:'#fff',fontFamily:'PlayfairDisplay-Medium',fontSize:18}} >What are your favourite traits?</Text>,
				headerStyle: {
					shadowColor:'#f2f2f2',
					elevation:0,
					backgroundColor:colors.primary
				}
			})}/>
		</Stack.Navigator>
  );
};

export default AuthStack;
