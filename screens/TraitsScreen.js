/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import {colors} from '../style/colors';
import {styles} from '../style/style';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../navigation/AuthProvider';

const TraitsScreen = ({route, navigation}) => {
  const [traitsList, setTraitsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const {register} = useContext(AuthContext);

  const userData = route.params;

  const getTraits = async () => {
    try {
      const list = [];
      firestore()
        .collection('traits')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const {imgUrl, name, selected} = doc.data();
            list.push({
              id: doc.id,
              title: name,
              avatar_url: imgUrl,
              selected: selected,
            });
          });
          setTraitsList([...list]);
        });
    } catch (e) {
      console.log(e);
    }
  };

  //Call when component is rendered
  useEffect(() => {
    getTraits();
    setLoading(false);
  }, []);

  const FinishRegister = (user) => {
    let list = [];
    traitsList.map((trait) => {
      if (trait.selected) {
        list.push(trait.title);
      }
    });

    register(
      user.user.email,
      user.user.password,
      list,
      user.skills,
      user.user.name,
      user.user.date,
    );
  };

  const Item = ({title, avatar, item, index, selected}) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onChangeValue(item, index)}>
        <Image
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            borderWidth: 3,
            borderColor: selected ? colors.tertiary : colors.primary,
          }}
          source={{uri: avatar}}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({item, index}) => (
    <Item
      title={item.title}
      avatar={item.avatar_url}
      item={item}
      index={index}
      selected={item.selected}
    />
  );

  const onChangeValue = (item, index) => {
    const newData = traitsList.map((newItem) => {
      if (newItem.id === item.id) {
        newItem.selected = !newItem.selected;
        return {
          ...newItem,
        };
      }
      return {
        ...newItem,
      };
    });
    setTraitsList(newData);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {traitsList.length > 0 && (
        <ScrollView stickyHeaderIndices={[4]}>
          <View>
            <FlatList
              data={traitsList}
              numColumns={2}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.center}>
            <Button
              titleStyle={{fontFamily: 'PlayfairDisplay-Medium', fontSize: 18}}
              buttonStyle={styles.button}
              title="Finish"
              onPress={() => FinishRegister(userData)}
            />
          </View>
        </ScrollView>
      )}
      {traitsList.length === 0 && (
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

export default TraitsScreen;
