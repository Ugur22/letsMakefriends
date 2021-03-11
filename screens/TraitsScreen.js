import React, { useEffect, useState }  from 'react';
import {View,ScrollView,SafeAreaView,FlatList,Image} from 'react-native';
import { Button,Input,Text,ListItem } from 'react-native-elements';
import {colors} from '../style/colors';
import {styles} from '../style/style';
import firestore from '@react-native-firebase/firestore';

const TraitsScreen = ({navigation}) => {

	const [traitsList, setTraitsList] = useState([]);

	const DATA = [
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			title: 'Friendly',
			avatar_url: require('../assets/images/undraw_true_friends_c94g.png'),
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
			title: 'Confidence',
			avatar_url: require('../assets/images/undraw_true_friends_c94g.png'),

		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			title: 'Ambitious',
					avatar_url: require('../assets/images/undraw_true_friends_c94g.png'),

		},
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			title: 'Optimistic',
					avatar_url: require('../assets/images/undraw_true_friends_c94g.png'),

		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
			title: 'Engaging',
					avatar_url: require('../assets/images/undraw_true_friends_c94g.png'),

		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			title: 'Curious',
			avatar_url: require('../assets/images/undraw_true_friends_c94g.png'),

		},
	];

	const getTraits = async () => {

    try {
			const list = [];
      firestore().collection("traits").get().then((querySnapshot) => {
				querySnapshot.forEach(doc =>{
					const {imgUrl,name,selected} = doc.data();
					list.push({
						id:doc.id,
						title:name,
						avatar_url:imgUrl,
						selected:selected
					});
				});
				setTraitsList([...list]);
			});
    } catch (e) {
			console.log(e);
    }
	}

		//Call when component is rendered
		useEffect(() => {
			getTraits();
		}, []);

	const Item = ({ title,avatar }) => (
		<View style={styles.item}>
			<Image
					style={{width:150,height:150,
						borderRadius:100,borderWidth:3,borderColor:colors.primary}}
						source={{uri: avatar}}
				/>
			<Text style={styles.title}>{title}</Text>
		</View>
	);

	const renderItem = ({ item }) => (
    <Item title={item.title} avatar={item.avatar_url}  />
  );

	

	return (
		<SafeAreaView style={{flex:1}}>
			<ScrollView stickyHeaderIndices={[4]}>
				<View>
					<FlatList
						data={traitsList}
						numColumns={2}
						renderItem={renderItem}
						keyExtractor={item => item.id}
						/>
				</View>
				<View style={styles.center}>
					<Button titleStyle={{fontFamily:'PlayfairDisplay-Medium',fontSize:18}}  buttonStyle={styles.button} title="Finish" onPress={() => register(email,password)}/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default TraitsScreen;