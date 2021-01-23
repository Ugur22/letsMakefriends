import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
		<Stack.Navigator >
			<Stack.Screen name="Home" options={{header: () => null}} component={HomeScreen}/>
		</Stack.Navigator>
  );
};

export default AppStack;
