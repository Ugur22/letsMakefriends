import React, { useContext, useState }  from 'react';
import {View,ScrollView,SafeAreaView,FlatList,Image} from 'react-native';
import { Button,Input,Text,ListItem } from 'react-native-elements';
import {colors} from '../style/colors';
import {styles} from '../style/style';

const SkillsScreen = ({navigation}) => {

	const DATA = [
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			title: 'Dancing',
			avatar_url: require('../assets/images/undraw_netflix_q00o.png'),
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
			title: 'Gaming',
			avatar_url: require('../assets/images/undraw_netflix_q00o.png'),

		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			title: 'Netflix',
					avatar_url: require('../assets/images/undraw_netflix_q00o.png'),

		},
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			title: 'Coding',
					avatar_url: require('../assets/images/undraw_netflix_q00o.png'),

		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
			title: 'Fishing',
					avatar_url: require('../assets/images/undraw_netflix_q00o.png'),

		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			title: 'Soccer',
			avatar_url: require('../assets/images/undraw_netflix_q00o.png'),

		},
	];

	const Item = ({ title,avatar }) => (
		<View style={styles.item}>
			<Image
        style={{width:150,height:150,
					borderRadius:100,borderWidth:3,borderColor:colors.primary}}
					source={ avatar }
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
						data={DATA}
						numColumns={2}
						renderItem={renderItem}
						keyExtractor={item => item.id}
						/>
				</View>
				<View style={styles.center}>
					<Button titleStyle={{fontFamily:'PlayfairDisplay-Medium',fontSize:18}}  buttonStyle={styles.button} title="Next" onPress={() => navigation.navigate('Traits')}/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default SkillsScreen;