import React, {createContext, useState} from 'react';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import {Alert} from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
						if(email === undefined || password === undefined || email === '' || password === '' ){
							Alert.alert(
								'login failed',
								'Email or password is empty',
								[
									{
										text: 'ok',
										style: 'cancel'
									}
								],
								{ cancelable: false }
							);
						}else{
							await auth().signInWithEmailAndPassword(email, password);
						}
          } catch (e) {
						Alert.alert(
							'This combination of email and password does not exist',
							'try again',
							[
								{
									text: 'ok',
									style: 'cancel'
								}
							],
							{ cancelable: false }
						);
          }
        },
        register: async (email, password,traits,skills,name,date) => {
          try {
						if(email === undefined || password === undefined || email === '' || password === ''){
							alert("Email or password is empty");
						}else{
							await auth().createUserWithEmailAndPassword(email, password).then((user) => {
								try {
									firestore()
									.collection('Users').
									doc(user.user.uid)
									.set({
										email: email,
										name:name,
										birthdate:date,
										traits:traits,
										skills:skills,
										chapter:1
									})
									.then(() => {
										console.log('User added!');
									});
								} catch (e) {
									console.log(e);
								}
							});
						}
          } catch (error) {
						if (error.code === 'auth/email-already-in-use') {
							alert('That email address is already in use!');
						}

						if (error.code === 'auth/invalid-email') {
							alert('That email address is invalid!');
						}
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};