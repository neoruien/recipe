import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './src/pages/HomePage';
import ReadRecipePage from './src/pages/ReadRecipePage';
import CreateRecipePage from './src/pages/CreateRecipePage';
import ChefPage from './src/pages/ChefPage';

import { Icon } from '@iconify/react';
import HomeIcon from '@iconify-icons/mdi/home';
import CreateIcon from '@iconify-icons/mdi/plus-circle';
import ChefIcon from '@iconify-icons/mdi/chef-hat';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {

  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage}/>
        <Stack.Screen name="Read Recipe" component={ReadRecipePage}/>
      </Stack.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name="Home"
          children={HomeStack}
          options={{
            tabBarIcon: ({color}) => (
              <Icon icon={HomeIcon} color={color} size={25}/>
            ),
          }}
        />
        <Tabs.Screen
          name="Create Recipe"
          component={CreateRecipePage}
          options={{
            tabBarIcon: ({color}) => (
              <Icon icon={CreateIcon} color={color} size={25}/>
            ),
          }}
        />
        <Tabs.Screen
          name = "Chef"
          component={ChefPage}
          options={{
            tabBarIcon: ({color}) => (
              <Icon icon={ChefIcon} color={color} size={25}/>
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
