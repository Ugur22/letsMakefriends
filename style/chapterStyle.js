import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const ChapterStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  item: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  checkbox: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  full_button: {
    backgroundColor: colors.primary,
    margin: 25,
    fontSize: 20,
    padding: 20,
    zIndex: 1000,
  },
  bottom: {
    justifyContent: 'flex-end',
    marginTop: 300,
    zIndex: 1000,
  },
});
