import React, { useContext, useState }  from 'react';
import {View,ScrollView,SafeAreaView} from 'react-native';
import { Button,Input,Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../style/colors';
import {styles} from '../style/style';
import {AuthContext} from '../navigation/AuthProvider';
import DatePicker from 'react-native-date-picker'
import {formatDate} from "../utils/dates";

const SignupScreen = ({navigation}) => {

	const {register} = useContext(AuthContext);
	const [email,setEmail] = useState();
	const [password,setPassword] = useState();
	const [name,setName] = useState();
	let [date, setDate] = useState(new Date('1998-10-10'));
	
	 const GotoPage = (email,password,date,name) => {
			navigation.navigate('Skills', {
				email:email,
				password:password,
				date:formatDate(date),
				name:name
			});
	 }

	return (
		<SafeAreaView style={{flex:1}}>
			<ScrollView >
			<View style={{marginBottom:20}}>
			</View>
			<Text style={styles.header} >personal information</Text>
			<Input labelValue={name} onChangeText={(userName) => setName(userName)} leftIcon={ <Icon name='child'size={24} color={colors.primary}/>} 
					inputContainerStyle={{marginHorizontal:20}} placeholder="Name" />
					<Text style={styles.subtitle} >birthday</Text>
					<View style={{alignItems:'center',justifyContent:'center'}}>
			<DatePicker date={date} onDateChange={setDate} androidVariant="nativeAndroid" mode="date" />
			</View>

			<Text style={styles.header} >account information</Text>
			<Input labelValue={email} onChangeText={(userEmail) => setEmail(userEmail)}  leftIcon={ <Icon name='envelope'size={24} color={colors.primary} />} keyboardType="email-address" autoCapitalize="none" 
				inputContainerStyle={{marginHorizontal:20}} placeholder="email" />
				<Input labelValue={password} onChangeText={(userPassword) => setPassword(userPassword)} leftIcon={ <Icon name='key'size={24} color={colors.primary}/>} 
				inputContainerStyle={{marginHorizontal:20}} placeholder="Password" secureTextEntry={true} />

			<View style={styles.center}>
				<Button titleStyle={{fontFamily:'PlayfairDisplay-Medium',fontSize:18}} buttonStyle={styles.button} title="Next" onPress={() => GotoPage(email,password,date,name)}/>
			</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default SignupScreen;