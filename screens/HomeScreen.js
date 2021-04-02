import React, { useContext,useState,useEffect }  from 'react';
import {View,Text,SafeAreaView,Image,ScrollView} from 'react-native';
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

	const getChapterInfo = async (chapter) => {
		try {
			const list =	await	firestore().collection('chapters').where("number", "==", chapter).get();
			setChapterData(list.docs[0].data());
			} catch (e) {
				console.log(e);
			}
			setLoading(false);
		}
		
		useEffect(() => {
			getUserData();
		},[]);

	return (
		<SafeAreaView style={{flex:1}}>
		{!loading && (
			<ScrollView stickyHeaderIndices={[4]}>
				<View style={styles.container}>
					<HomeImage height={200} width={200} />
					<View style={{alignItems:'center',justifyContent:'center', paddingHorizontal:20}}>
						<Text style={styles.header}>Welcome to {chapterData.name}</Text>
						<Text style={styles.header}>Tasks:</Text>
						{chapterData.tasks.map((task, index) => (
						<View style={{flexDirection: 'row',paddingTop:10}} key={index} >
							<Text style={{color: colors.tertiary,fontSize:16}}>{'\u2022'}</Text>
							<Text style={{color: colors.tertiary, fontSize:16}}>{task}</Text>
						</View>
						))}
					</View>
				</View>
			</ScrollView>
			)}	
			{loading &&  (
				<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
					<Image source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif' }} style={{ height: 80, width: 60, }}/>
				</View>
			)}
			<View style={styles.bottom}>
				<Button titleStyle={{color: colors.tertiary,}} buttonStyle={styles.full_button} title="I'm ready to start my journey" onPress={() => navigation.navigate('Chapter')}/>
			</View>
		</SafeAreaView>
	)
}

export default HomeScreen;