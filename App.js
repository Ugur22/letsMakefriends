/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect }  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Colors,} from 'react-native/Libraries/NewAppScreen';
import { Button, Header } from 'react-native-elements';
import auth from '@react-native-firebase/auth';

const App: () => React$Node = () => {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();
	
	  // Handle user state changes
		function onAuthStateChanged(user) {
			setUser(user);
			if (initializing) setInitializing(false);
		}

		useEffect(() => {
			const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
			return subscriber; // unsubscribe on unmount
		}, []); 

		if (initializing) return null;
	
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
					<Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'letsmakefriends', style: { color: '#fff', fontSize: 18 } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={{
              backgroundColor: '#e8cb6f',
              justifyContent: 'space-around',
            }}
          />
					<View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Button style={styles.button}
                title="Login"
                type="solid"
                buttonStyle={{
                  backgroundColor: '#e8cb6f',
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
