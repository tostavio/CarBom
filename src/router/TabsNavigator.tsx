import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Details from '@screens/Details';
import Home from '@screens/Home';

const { Navigator, Screen } = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );
}

export default TabsNavigator;
