/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Image, Dimensions} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {ChapterStyle} from '../style/chapterStyle';
import {styles} from '../style/style';
import {colors} from '../style/colors';
import {AuthContext} from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import WaveImage from '../assets/images/wave3.svg';
import CircleImage from '../assets/images/circle.svg';
import ProgressBar from 'react-native-progress/Bar';
import CheckBox from '@react-native-community/checkbox';

const ChapterScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  const [UserData, setUserData] = useState([]);
  const [chapterData, setChapterData] = useState([]);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    try {
      await firestore()
        .collection('Users')
        .doc(user.uid)
        .get()
        .then((documentSnapshot) => {
          if (documentSnapshot.exists) {
            getChapterInfo(documentSnapshot.data().chapter);
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  const getChapterInfo = async (chapter) => {
    try {
      const list = await firestore()
        .collection('chapters')
        .where('number', '==', chapter)
        .get();
      setChapterData(list.docs[0].data());
    } catch (e) {
      console.log(e);
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {!loading && (
        <View style={ChapterStyle.container}>
          <View style={ChapterStyle.item}>
            <View
              style={{
                position: 'absolute',
                top: -180,
                left: -40,
                right: 0,
                bottom: 0,
              }}>
              <CircleImage height={500} width={500} />
            </View>
            <View
              style={{
                paddingHorizontal: 40,
              }}>
              {chapterData.tasks.map((task, index) => (
                <View
                  style={{flexDirection: 'row', paddingTop: 10}}
                  key={index}>
                  <CheckBox
                    style={{marginTop: -4}}
                    tintColors={true ? '#000' : '#000'}
                    value={agree}
                    onChange={() => setAgree(!agree)}
                  />
                  <Text style={{color: colors.secondary, fontSize: 14}}>
                    {task}
                  </Text>
                </View>
              ))}
            </View>
            <View style={[styles.center, {top: 130, flexDirection: 'row'}]}>
              <Icon
                raised
                reverse
                name="book"
                type="font-awesome"
                color={colors.primary}
                onPress={() => navigation.navigate('Diary')}
              />
              <Icon
                raised
                reverse
                name="users"
                type="font-awesome"
                color={colors.primary}
                onPress={() => console.log('hello')}
              />
              <Icon
                raised
                reverse
                name="key"
                type="font-awesome"
                color={colors.primary}
                onPress={() => console.log('hello')}
              />
            </View>
          </View>
          <View style={ChapterStyle.item}>
            <View style={[ChapterStyle.bottom, {zIndex: 100}]}>
              <Button
                titleStyle={{color: colors.primary}}
                buttonStyle={[
                  {
                    width: 60,
                    height: 60,
                    backgroundColor: colors.tertiary,
                    borderRadius: 50,
                    marginLeft: 20,
                    marginBottom: 10,
                  },
                ]}
                onPress={() => navigation.navigate('Home')}
                icon={
                  <Icon
                    name="arrow-left"
                    type="font-awesome"
                    size={30}
                    color={colors.primary}
                  />
                }
              />
            </View>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 16,
                bottom: 0,
              }}>
              <WaveImage height={500} width={Dimensions.get('window').width} />
            </View>
          </View>
        </View>
      )}
      {loading && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={{
              uri:
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif',
            }}
            style={{height: 80, width: 60}}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ChapterScreen;
