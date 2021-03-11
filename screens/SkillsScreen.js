import React, { useEffect,useState }  from 'react';
import {View,ScrollView,SafeAreaView,FlatList,Image} from 'react-native';
import { Button,Input,Text } from 'react-native-elements';
import {colors} from '../style/colors';
import {styles} from '../style/style';
import { LogBox } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import loadingImage from '../assets/images/giphy.gif';

const SkillsScreen = ({route,navigation}) => {
	LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);

	const user = route.params;
	const [skillsList, setSkillsList] = useState([]);
	const [loading,setLoading] = useState(true);

  const getSkills = async () => {

    try {
			const list = [];
      firestore().collection("skills").get().then((querySnapshot) => {
				querySnapshot.forEach(doc =>{
					const {imgUrl,name,selected} = doc.data();
					list.push({
						id:doc.id,
						title:name,
						avatar_url:imgUrl,
						selected:selected
					});
				});
				setSkillsList([...list]);
			});
    } catch (e) {
			console.log(e);
    }
	}

	//Call when component is rendered
  useEffect(() => {
    getSkills();
		setLoading(false);
  }, []);

	const GotoPage = (user) => {
		navigation.navigate('Traits', {
			user:user,
		});
 	}

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
				{skillsList.length > 0 && (
			<ScrollView stickyHeaderIndices={[4]}>
				<View>
					<FlatList 
						data={skillsList}
						numColumns={2}
						renderItem={renderItem}
						keyExtractor={item => item.id}
						/>
				</View>
				<View style={styles.center}>
					<Button titleStyle={{fontFamily:'PlayfairDisplay-Medium',fontSize:18}}  buttonStyle={styles.button} title="Next" onPress={() => GotoPage(user)}/>
				</View>
			</ScrollView>
				)}	
				{skillsList.length === 0 && (
					<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
						<Image source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif' }} style={{ height: 80, width: 60, }}/>
					</View>
				)}
		</SafeAreaView>
	)
}

export default SkillsScreen;