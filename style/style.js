import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const styles = StyleSheet.create({
	container: {
		flex:1,
		alignItems:'center',
		justifyContent:'center',
	},
	logo: {
		height: 400,
		width:350,
		resizeMode:'cover',
		alignItems:'center',
		justifyContent:'center'
	},
	button: {
		backgroundColor: colors.primary,
		color: colors.tertiary,
		margin: 10,
		width: 200
	},
	full_button: {
		backgroundColor: colors.primary,
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
		color: colors.primary,
	},
	subtitle: {
		fontSize:16,
		color: colors.primary,
		paddingTop:10
	},
	text: {
		fontSize:14,
		color: colors.primary,
		paddingHorizontal:20,
		textAlign: 'center'
	}
});