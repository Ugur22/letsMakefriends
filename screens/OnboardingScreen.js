import React, { useState, useEffect }  from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Friend from '../assets/images/undraw_friends_r511.svg';
import Skate from '../assets/images/undraw_skateboard_d6or.svg';
import Powerful from '../assets/images/undraw_Powerful_re_frhr.svg';


const OnboardingScreen = ({navigation}) => {
	return (
		<Onboarding
		onSkip={() => navigation.replace('Login')}
		onDone={() => navigation.navigate('Login')}
		transitionAnimationDuration={500}
		pages={[
			{
				backgroundColor: '#fff',
				image:	<Friend height={300} width={300} />,
				title: 'Onboarding 1',
				subtitle: 'Done with React Native Onboarding Swiper',
			},
			{
				backgroundColor: '#34495e',
				image: 	<Skate height={300} width={300} />,
				title: 'Onboarding 2',
				subtitle: 'Done with React Native Onboarding Swiper 2',
			},
			{
				backgroundColor: '#F9A826',
				image: 	<Powerful height={300} width={300} />,
				title: 'Onboarding 3',
				subtitle: 'Done with React Native Onboarding Swiper 3',
			},
		]}/>
	)
}

export default OnboardingScreen;