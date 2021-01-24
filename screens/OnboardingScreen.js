import React, { useState, useEffect }  from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Friend from '../assets/images/undraw_friends_r511.svg';
import Skate from '../assets/images/undraw_skateboard_d6or.svg';
import Powerful from '../assets/images/undraw_Powerful_re_frhr.svg';
import {Appname} from '../utils/strings';


const OnboardingScreen = ({navigation}) => {
	return (
		<Onboarding
		onSkip={() => navigation.replace('Login')}
		onDone={() => navigation.navigate('Login')}
		transitionAnimationDuration={500}
		pages={[
			{
				backgroundColor: '#fff',
				image:	<Powerful height={300} width={300} />,
				title: `What is ${Appname}?`,
				subtitle: 'Its an app that will guide you to become a social butterfly step by step',
			},
			{
				backgroundColor: '#fff',
				image: 	<Friend height={300} width={300} />,
				title: `What is the goal of ${Appname}?`,
				subtitle: 'We have created 9 chapters to guide you through your process. Each chapter comes with tasks and information to educate and guide you along the way',
			},
			{
				backgroundColor: '#fff',
				image: 	<Skate height={300} width={300} />,
				title: 'The chapters and their own story',
				subtitle: 'chapters explanation',
			},
		]}/>
	)
}

export default OnboardingScreen;