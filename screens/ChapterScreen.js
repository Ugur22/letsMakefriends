import React, { useContext, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, Dimensions } from 'react-native';
import { Button, Header, Input } from 'react-native-elements';
import { ChapterStyle } from '../style/chapterStyle';
import { styles } from '../style/style';
import { colors } from '../style/colors';
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import WaveImage from '../assets/images/wave2.svg';
import CircleImage from '../assets/images/circle.svg';

const ChapterScreen = ({ navigation }) => {
	const { user, logout } = useContext(AuthContext);
	const [UserData, setUserData] = useState([]);
	const [chapterData, setChapterData] = useState([]);
	const [loading, setLoading] = useState(false);

	const getChapterInfo = async (chapter) => {
		try {
			await firestore().collection('chapters').where("number", "==", chapter).get().then(snapshot => {
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
	}, []);

	return (
		<View style={ChapterStyle.container}>
			<View style={ChapterStyle.item}>
				<View style={{ position: 'absolute', top: -120, left: 50, right: 0, bottom: 0 }}>
					<CircleImage height={550} width={550} />
				</View>
			</View>
			<View style={ChapterStyle.item}>
				<View >
					<View style={ChapterStyle.bottom}>
					<Button titleStyle={{ color: colors.tertiary, }} buttonStyle={ChapterStyle.full_button} title="LetsMakeFriends" onPress={() => alert('Hello')} />
					</View>
					<View style={{ position: 'absolute', top: 0, left: 0, right: 16, bottom: 0 }}>
						<WaveImage height={550} width={Dimensions.get('window').width} />
					</View>
				</View>
			</View>
		</View>
	)
}

export default ChapterScreen;