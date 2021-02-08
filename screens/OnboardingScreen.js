import React, { useState, useEffect }  from 'react';
import {View,Text} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Friend from '../assets/images/undraw_friends_r511.svg';
import Skate from '../assets/images/undraw_skateboard_d6or.svg';
import Powerful from '../assets/images/undraw_Powerful_re_frhr.svg';
import {Appname} from '../utils/strings';
import {colors} from '../style/colors';
import {styles} from '../style/style';

const OnboardingScreen = ({navigation}) => {
	return (
		<Onboarding
			onSkip={() => navigation.replace('Login')}
			onDone={() => navigation.navigate('Login')}
			transitionAnimationDuration={500}
			pages={[
				{
					backgroundColor: colors.secondary,
					image:	<Powerful height={300} width={300} />,
					title: 	<Text style={styles.header}>What's {Appname}?</Text>,
					subtitle: <Text style={styles.text}>Its an app that will guide you to become a social butterfly step by step</Text>
				},
				{
					backgroundColor: colors.secondary,
					image: 	<Friend height={300} width={300} />,
					title: `What is the goal of ${Appname}?`,
					subtitle: <Text style={styles.text}>We have created 9 chapters to guide you through your process. Each chapter
					 comes with tasks and information to educate and guide you along the way</Text>
				},
				{
					backgroundColor: colors.secondary,
					image: 	<Skate height={300} width={300} />,
					title: 	<Text style={styles.header}>The chapters and their own story</Text>,
					subtitle: <Text style={styles.text}>chapters explanation</Text>
				}
		]}/>
	)
}

export default OnboardingScreen;