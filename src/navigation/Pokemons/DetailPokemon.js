import React, { useContext, useCallback, useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  InteractionManager,
  StatusBar,
  Button,
} from 'react-native';

import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { Card, Title } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

import ApplicationContext from '../../context/ApplicationContext';
import { COLORS } from '../../constants/constants';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const renderItem = ({ item }) => <Item title={item.title} />;

const DetailPokemon = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: COLORS.AZUL, flex: 1 }}>
      <ScrollView
        styles={styles.container}
        horizontal={true}
        alwaysBounceHorizontal={true}
        decelerationRate={0.9}
        snapToInterval={Dimensions.get('window').width} //your element width
        snapToAlignment={'center'}
      >
        <Card
          style={{
            borderRadius: 20,
            flex: 1,
            elevation: 5,
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.get('window').width - 20,
            //borderColor: '#f5f5f5',
            //borderWidth: 1,
            backgroundColor: '#fff',
            margin: 10,
          }}
        >

        </Card>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#222',
  },
  modalContainerStyle: {
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  item: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DetailPokemon;