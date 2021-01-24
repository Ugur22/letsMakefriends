import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

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
							alert("Email or password is empty")
						}else{
							await auth().signInWithEmailAndPassword(email, password);
						}
          } catch (e) {
            alert('This combination of email and password does not exist')
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