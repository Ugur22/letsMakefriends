import {View,Text,StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	},
	logo: {
		height: 400,
		width:350,
		resizeMode:'cover',
		margin:-50,
		alignItems:'center',
		justifyContent:'center'
	},
	text: {
		fontSize:24
	},
	button: {
		backgroundColor: '#F9A826',
		color: '#000',
		margin:10,
		width:200
	},
	header: {
		fontSize:24
	},
	subtitle: {
		fontSize:16,
	}
});