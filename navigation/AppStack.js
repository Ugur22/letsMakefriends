import React, { useContext } from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../navigation/AuthProvider';
import {colors} from '../style/colors';
import {Text} from 'react-native';
import {styles} from '../style/style';

const Stack = createStackNavigator();

const AppStack = () => {
	const {logout,user} = useContext(AuthContext);

  return (
		<Stack.Navigator >
			<Stack.Screen name="Home" component={HomeScreen} options={({navigation}) => ({
				title:<Text style={styles.subtitle} >{user.email}</Text> ,
				headerRight: () => (
					<Button buttonStyle={{backgroundColor:'transparent'}}
					icon={
						<Icon name='logout'size={32} color={colors.primary}/>}
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
		</Stack.Navigator>
  );
};

export default AppStack;
