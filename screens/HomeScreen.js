import React, { useContext,useState,useEffect }  from 'react';
import {View,Text,SafeAreaView,Image} from 'react-native';
import { Button, Header,Input } from 'react-native-elements';
import {styles} from '../style/style';
import {colors} from '../style/colors';
import {AuthContext} from '../navigation/AuthProvider';
import HomeImage from '../assets/images/undraw_Personal_goals_re_iow7.svg';
import firestore from '@react-native-firebase/firestore';

const HomeScreen = ({navigation}) => {
	const {user,logout} = useContext(AuthContext);
	const [UserData, setUserData] = useState([]);
	const [chapterData, setChapterData] = useState([]);
	const [loading,setLoading] = useState(true);

	const getChapterInfo = async (chapter) => {
		try {
			await	firestore().collection('chapters').where("number", "==", chapter).get().then(snapshot => {
				setChapterData(snapshot.docs[0].data());
			
				});
				setLoading(false);
		} catch (e) {
			console.log(e);
		}
	}

	const getUserData = async () => {
		try {
			await firestore().collection('Users').doc(user.uid).get().then(documentSnapshot => {
				if (documentSnapshot.exists) {
					getChapterInfo(documentSnapshot.data().chapter);
				}
			});
		} catch (e) {
			console.log(e);
		}
	}
		useEffect(() => {
			getUserData();
		},[]);

	return (
		<SafeAreaView style={{flex:1}}>
		{!loading && (
			<View style={styles.container}>
				<HomeImage height={300} width={300} />
				<View style={{alignItems:'center',justifyContent:'center', paddingHorizontal:20}}>
					<Text style={styles.header}>Welcome to {chapterData.name}</Text>
					<Text style={styles.header}>Tasks:</Text>
					{chapterData.tasks.map((task, index) => (
					<View style={{flexDirection: 'row',paddingTop:10}} key={index} >
						<Text style={{color: colors.primary,fontSize:16}}>{'\u2022'}</Text>
						<Text style={{color: colors.primary, fontSize:16}}>{task}</Text>
					</View>
					))}
				</View>
				<View style={styles.bottom}>
					<Button titleStyle={{color: colors.tertiary,}} buttonStyle={styles.full_button} title="I'm ready to start my journey" onPress={() => alert('Hello')}/>
				</View>
			</View>
			)}	
			{loading &&  (
				<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
					<Image source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif' }} style={{ height: 80, width: 60, }}/>
				</View>
			)}
		</SafeAreaView>
	)
}

export default HomeScreen;