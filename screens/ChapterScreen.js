import React, { useContext, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { ChapterStyle } from '../style/chapterStyle';
import { styles } from '../style/style';
import { colors } from '../style/colors';
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import WaveImage from '../assets/images/wave3.svg';
import CircleImage from '../assets/images/circle.svg';
import ProgressBar from 'react-native-progress/Bar';

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
				<View style={{ position: 'absolute', top: -200, left: 100, right: 0, bottom: 0 }}>
					<CircleImage height={500} width={500} />
				</View>
				<View style={[styles.center, { top: 140, left: 20, right: 20, bottom: 0, flexDirection: 'row' }]}>
					<Icon
						raised
						reverse
						name='book'
						type='font-awesome'
						color={colors.primary}
						onPress={() => navigation.navigate('Diary')} />
					<Icon
						raised
						reverse
						name='users'
						type='font-awesome'
						color={colors.primary}
						onPress={() => console.log('hello')} />
					<Icon
						raised
						reverse
						name='key'
						type='font-awesome'
						color={colors.primary}
						onPress={() => console.log('hello')} />
				</View>
			</View>
			<View style={ChapterStyle.item}>
				<View >
					<View style={{ position: 'absolute', top: 0, left: 20, right: 20, bottom: 20, flexDirection: 'column' }}>
					<Text style={[styles.text, { textAlign: 'left', paddingHorizontal: 10,paddingVertical:10, fontSize: 18 }]}>xp</Text>
						<ProgressBar progress={0.3} width={Dimensions.get('window').width - 40} height={20} color={colors.primary} />
						<View style={{ flexDirection: 'row' }}>
							<Text style={[styles.text, { textAlign: 'left', paddingHorizontal: 10, flex: 1,fontSize:18 }]}>3</Text>
							<Text style={[styles.text, { textAlign: 'right', paddingHorizontal: 10,fontSize:18 }]}>4</Text>
						</View>
					</View>

					<View style={ChapterStyle.bottom}>
						<Button titleStyle={{ color: colors.tertiary, }} buttonStyle={ChapterStyle.full_button} title="LetsMakeFriends" />
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