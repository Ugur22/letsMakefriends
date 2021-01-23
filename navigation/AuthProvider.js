import React, { createContext,useState, useEffect }  from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const Authprovider = ({children}) => {
	const [user, setuser] = [state, setstate] = useState(null);
	return (
		<AuthContext.Provider
				value={{
					user,
					setuser	,
					login: async (email,password) => {
						try {
							await auth().signInWithEmailAndPassword(email,password)
						} catch (error) {
							console.log(error);
						}
					},
					register: async (email, password) => {
						try {
							await auth().createUserWithEmailAndPassword(email,password);
						} catch (error) {
							console.log(error);
						}
					},
					logout: async () => {
						try {
							await auth.signOut();
						} catch (error) {
							console.log(error);
						}
					}
				}}>
					{children}
				</AuthContext.Provider>
	);
}
