import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import ApplicationContext from './src/context/ApplicationContext';
import { COLORS } from './src/constants/constants';
import DashboardStack from './src/navigation/Dashboard/DashboardStack';
import PokemonStack from './src/navigation/Pokemons/PokemonStack';
Icon.loadFont();

const MainStack = createBottomTabNavigator();

const App = () => {
  //const {} = useContext(ApplicationContext);

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Dashboard"
        lazy={false}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Pokemons') {
              size = focused ? 24 : 22;
              iconName = focused ? 'hard-drive' : 'hard-drive';
            } else if (route.name === 'Dashboard') {
              size = focused ? 24 : 22;
              iconName = focused ? 'home' : 'home';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeBackgroundColor: '#0020A8',
          inactiveBackgroundColor: COLORS.AZUL,
          tabStyle: { paddingBottom: 2 },
          keyboardHidesTabBar: true,
          labelStyle: { fontSize: 14, fontFamily: 'light' },
          activeTintColor: '#F9DD16',
          inactiveTintColor: '#fff',
          style: {
            width: '125%',
            height: 60,
            borderTopWidth: 0.3,
            borderTopColor: '#001643',
          },
        }}>
        <MainStack.Screen 
          name="Dashboard"
          component={DashboardStack}
          color="#558855"
        />
        <MainStack.Screen 
          name="Pokemon"
          component={PokemonStack}
          color="#558855"
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
