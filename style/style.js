import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 400,
    width: 350,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    color: colors.tertiary,
    margin: 10,
    width: 200,
    fontFamily: 'PlayfairDisplay-Medium',
  },
  full_button: {
    backgroundColor: colors.primary,
    margin: 10,
    fontSize: 20,
    padding: 20,
    zIndex: 1000,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    alignSelf: 'stretch',
    marginHorizontal: 20,
    textAlign: 'center',
  },
  header: {
    fontSize: 24,
    color: colors.tertiary,
    padding: 5,
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay-Medium',
  },
  subtitle: {
    fontSize: 18,
    color: colors.tertiary,
    paddingTop: 10,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay-Medium',
  },
  subtitleInvert: {
    fontSize: 18,
    color: colors.primary,
    paddingTop: 10,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay-Medium',
  },
  text: {
    fontSize: 14,
    color: colors.tertiary,
    paddingHorizontal: 20,
    fontFamily: 'PlayfairDisplay-Medium',
  },
  item: {
    padding: 10,
    marginVertical: 8,
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    paddingTop: 5,
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay-Medium',
    color: colors.tertiary,
  },
});
