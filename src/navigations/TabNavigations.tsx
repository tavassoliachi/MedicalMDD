import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Appointments from 'screens/Appointments';
import Profile from 'screens/Profile';
import Icon1 from '../assets/Appointments.svg';
import Icon2 from '../assets/Profile.svg';
import Icon3 from '../assets/Diagnostics.svg';
import Logo from '../assets/Logo.svg';
import Diagnostics from 'screens/Diagnostics';

const TabNavigations = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#CE86F0'},
        headerTitle: () => {
          return <Logo width={175} />;
        },
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        name="Appointments"
        component={Appointments}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon1 width={size} height={size} stroke={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon2 width={size} height={size} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Diagnostics"
        component={Diagnostics}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Icon3 width={size} height={size} fill={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigations;
