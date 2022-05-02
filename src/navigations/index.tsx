import React from 'react';
import Loading from '../screens/Loading';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigations from './TabNavigations';

// type Props = {};

const Navigations = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Main">
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Main" component={TabNavigations} />
    </Stack.Navigator>
  );
};

export default Navigations;
