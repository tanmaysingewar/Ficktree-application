import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, SIZES } from './constants'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer ,DefaultTheme } from '@react-navigation/native'
import tab from './navigation/tab'
import Profile from './screen/Profile'
import LoginScreen  from './screen/AccountCreatorScreens/LoginScreen' 
import ConformProfileScreen from './screen/AccountCreatorScreens/ConformProfileScreen'
import OtpScreen from './screen/AccountCreatorScreens/OtpScreen'
import TandCscreen from './screen/AccountCreatorScreens/TandCscreen'
import IntroductionScreen from './screen/AccountCreatorScreens/IntroductionScreen'
import AdharInputScreen from './screen/AccountCreatorScreens/AdharInputScreen'
import ChangeNumberScreen from './screen/AccountCreatorScreens/ChangeNumberScreen'
import { Host, Portal } from 'react-native-portalize';
import UserDashboard from './screen/UserDashboard'
const theme = {
  ...DefaultTheme , 
  colors : {
    ...DefaultTheme.colors,
    border :'transparent',
    // background : '#fff'
  },
  
}

const Stack = createStackNavigator()

const horizontalAnimation = {
  gestureDirection: 'horizontal',
  headerShown : false,
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ]
      },
    };
  },
};

const App = () => {
  return (
    <NavigationContainer theme={theme} > 
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} animated={true}  />
      <Host>
      <Stack.Navigator 
        screenOptions={horizontalAnimation}
        initialRouteName={'Home'}
      >
        <Stack.Screen name='Login' component={LoginScreen } screenOptions={horizontalAnimation}/>
        <Stack.Screen name='ConformProfileScreen' component={ConformProfileScreen } screenOptions={horizontalAnimation}/>
        <Stack.Screen name='OtpScreen' component={OtpScreen} screenOptions={horizontalAnimation}/>
        <Stack.Screen name='ChangeNumberScreen' component={ChangeNumberScreen} screenOptions={horizontalAnimation}/>
        <Stack.Screen name='AdharInputScreen' component={AdharInputScreen } screenOptions={horizontalAnimation}/>
        <Stack.Screen name='TandCscreen' component={TandCscreen } screenOptions={horizontalAnimation}/>
        <Stack.Screen name='IntroductionScreen' component={IntroductionScreen } screenOptions={horizontalAnimation}/>
        <Stack.Screen name='Home' component={tab} screenOptions={horizontalAnimation} />
        <Stack.Screen name='Profile' component={Profile}  screenOptions={horizontalAnimation}/>
        <Stack.Screen name='UserDashboard' component={UserDashboard} screenOptions={horizontalAnimation} />
      </Stack.Navigator>
      </Host>
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})
