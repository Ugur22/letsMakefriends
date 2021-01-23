import React, { useState, useEffect }  from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Image from 'react-native-remote-svg';

const OnboardingScreen = ({navigation}) => {
	return (
		<Onboarding
		onSkip={() => navigation.replace('Login')}
		onDone={() => navigation.navigate('Login')}
		transitionAnimationDuration={500}
		pages={[
			{
				backgroundColor: '#fff',
				image: <Image source={require('../assets/images/undraw_friends_r511.svg')}
				style={{ width: 300, height: 300 }} />,
				title: 'Onboarding 1',
				subtitle: 'Done with React Native Onboarding Swiper',
			},
			{
				backgroundColor: '#34495e',
				image: <Image source={require('../assets/images/undraw_skateboard_d6or.svg')}
				style={{ width: 300, height: 300 }} />,
				title: 'Onboarding 2',
				subtitle: 'Done with React Native Onboarding Swiper 2',
			},
			{
				backgroundColor: '#F9A826',
				image: <Image source={require('../assets/images/undraw_Powerful_re_frhr.svg')}
				style={{ width: 300, height: 300 }} />,
				title: 'Onboarding 3',
				subtitle: 'Done with React Native Onboarding Swiper 3',
			},
		]}/>
	)
}

export default OnboardingScreen;