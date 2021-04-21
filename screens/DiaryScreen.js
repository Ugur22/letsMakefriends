import React, { useContext, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { ChapterStyle } from '../style/chapterStyle';
import { styles } from '../style/style';
import { colors } from '../style/colors';
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import WaveImage from '../assets/images/wave2.svg';
import DreamerImage from '../assets/images/undraw_dreamer_gxxi.svg';

const DiaryScreen = ({ navigation }) => {
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
			<View style={[styles.container, { position: 'absolute', top: -200, left: 0, right: 200, bottom: 0 }]}>
				<DreamerImage height={400} width={400} />
			</View>

			<View style={ChapterStyle.item}>
			</View>
			<View style={ChapterStyle.item}>
				<View >
					<View style={ChapterStyle.bottom}>
						<Button titleStyle={{ color: colors.primary, }} buttonStyle={[ChapterStyle.full_button, { width: 80,height:80,backgroundColor:colors.tertiary, borderRadius:50 }]} onPress={() => navigation.navigate('Chapter')}
							icon={
								<Icon
									name='arrow-left'
									type='font-awesome'
									size={30}
									color={colors.primary}
								/>
							}
						/>
					</View>
					<View style={{ position: 'absolute', top: 0, left: 0, right: 16, bottom: 0 }}>
						<WaveImage height={550} width={Dimensions.get('window').width} />
					</View>
				</View>
			</View>
		</View>
	)
}

export default DiaryScreen;