import React, { useContext,useState,useEffect }  from 'react';
import {View,Text,SafeAreaView,Image} from 'react-native';
import { Button, Header,Input } from 'react-native-elements';
import {styles} from '../style/style';
import {colors} from '../style/colors';
import {AuthContext} from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';

const ChapterScreen = ({navigation}) => {
	const {user,logout} = useContext(AuthContext);
	const [UserData, setUserData] = useState([]);
	const [chapterData, setChapterData] = useState([]);
	const [loading,setLoading] = useState(false);

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
			// getUserData();
		},[]);

	return (
		<SafeAreaView style={{flex:1}}>
		{!loading && (
			<View style={styles.container}>

				<View style={styles.bottom}>
					<Button titleStyle={{color: colors.tertiary,}} buttonStyle={styles.full_button} title="LetsBeFriends" onPress={() => alert('Hello')}/>
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

export default ChapterScreen;