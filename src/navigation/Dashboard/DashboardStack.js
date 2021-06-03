import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';
//import Icon from 'react-native-vector-icons/Feather'

import { COLORS } from '../../constants/constants';
import DashBoard from './Dashboard';
import Header from '../../componets/Header';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    elevation: 0,
    height: 35,
    backgroundColor: COLORS.AZUL,
  },
  gestureEnabled: true,
  gestureDirection: "horizontal",
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerTintColor: 'white',
};

const DashboardStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={DashBoard}
        options={({ navigation, route }) => ({
          headerTitle: () => <Header name="Dashboard" />,
          headerStyle: {
            elevation: 0,
            height: 45,
            backgroundColor: COLORS.AZUL,
          }
        })}
      />
    </Stack.Navigator>
  )
};

export default DashboardStack;