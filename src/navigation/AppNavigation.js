import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../pages/HomePage';
import NotificationPage from '../pages/NotificationPage';
import SettingPage from '../pages/SettingPage';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" type="material" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="notifications" type="material" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="settings" type="material" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;