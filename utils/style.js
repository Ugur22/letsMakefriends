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
		backgroundColor: '#E8CA6F',
		color: '#000',
		margin:10,
		width:200
	},
	full_button: {
		backgroundColor: '#E8CA6F',
		margin:10,
		fontSize:20,
		padding:20,
	},
	bottom: {
		flex: 1,
		justifyContent: 'flex-end',
		marginBottom: 36,
		alignSelf: 'stretch',
		marginHorizontal:20,
    textAlign: 'center',
	},	
	header: {
		fontSize:24,
	},
	subtitle: {
		fontSize:16,
		paddingTop:10
	}
});