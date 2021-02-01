import React, { useContext } from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../navigation/AuthProvider';
import {styles} from '../utils/style';

const Stack = createStackNavigator();

const AppStack = () => {
	const {logout} = useContext(AuthContext);

  return (
		<Stack.Navigator >
			<Stack.Screen name="Home" component={HomeScreen} options={({navigation}) => ({
				title:'',
				headerRight: () => (
					<Button buttonStyle={{backgroundColor:'transparent'}}
					icon={
						<Icon name='logout'size={32} color='#E8CA6F'/>}
						onPress={() => logout()}
						title=""
						color="#fff"
					/>
				),
				headerStyle: {
					backgroundColor:'#f2f2f2',
					shadowColor:'#f2f2f2',
					elevation:0
				}
			})}/>
		</Stack.Navigator>
  );
};

export default AppStack;
