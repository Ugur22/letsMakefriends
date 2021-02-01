import React, {createContext, useState} from 'react';
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
        register: async (email, password) => {
          try {
						if(email === undefined || password === undefined || email === '' || password === ''){
							alert("Email or password is empty");
						}else{
							await auth().createUserWithEmailAndPassword(email, password);
						}
          } catch (e) {
           alert('create user failed');
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