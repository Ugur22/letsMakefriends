import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import {View,Text} from 'react-native';
import Friends from '../assets/images/undraw_true_friends_c94g.svg';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
	const [initializing, setInitializing] = useState(true);
	const [loading, setLoading] = useState(true);
	
	const onAuthStateChanged = (user) => {
		setUser(user);
		if(initializing) setInitializing(false);
		setLoading(false);
	}

	useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
	}, []);

	if (loading) {
    return 	<Friends height={300} width={300} />;
  }
	
	if(initializing) return null;
	
  return (
		<NavigationContainer>
			{user ? <AppStack/> : <AuthStack/>}
		</NavigationContainer>
  );
};

export default Routes;
