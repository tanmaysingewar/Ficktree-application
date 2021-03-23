import React from 'react'
import { StyleSheet, Text, View, Image,Platform} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screen/Home';
import { COLORS, icon } from '../constants';
import Search from '../screen/Search';
import Offers from '../screen/Offers';
import Notification from '../screen/Notification';

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel : false,
    style : {
        height : Platform.OS == 'ios' ? '9%' : '8%' ,
        backgroundColor : COLORS.white
    }
}

const tab = () => {
    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({route}) => ({
                tabBarIcon : ({focused}) => {
                    const tintColor = focused ? COLORS.black : COLORS.gray
                    
                    switch (route.name) {
                        case 'Home':
                            return(
                                <Image 
                                    source={icon.home}
                                    resizeMode='contain'
                                    style={{
                                        tintColor : tintColor,
                                        width : Platform.OS == 'android' ? 25 : 28,
                                        height : Platform.OS == 'android' ? 20 : 22
                                    }}
                                />
                            )
                        case 'Search' : 
                        return (
                            <Image 
                                source={icon.search}
                                resizeMode='contain'
                                style={{
                                    tintColor : tintColor,
                                    width : Platform.OS == 'android' ? 25 : 28,
                                    height : Platform.OS == 'android' ? 20 : 22
                                }}
                            />
                        )
                        case 'Notification' : 
                        return (
                            <Image  
                                source={icon.like}
                                resizeMode='contain'
                                style={{
                                    tintColor : tintColor,
                                    width : Platform.OS == 'android' ? 25 : 28,
                                    height : Platform.OS == 'android' ? 20 : 22
                                }}
                            />
                        )
                        case 'Coupon' :
                            return(
                                <Image
                                    source={icon.coupon}
                                    resizeMode='contain'
                                    style={{
                                        tintColor : tintColor,
                                        width : Platform.OS == 'android' ? 25 : 28,
                                        height : Platform.OS == 'android' ? 20 : 22
                                    }}
                                />
                            )
                    
                        default:
                            break;
                    }
                }
            })}
        >
            <Tab.Screen 
                name='Home'
                component={Home}
            />
            <Tab.Screen 
                name='Search'
                component={Search}
            />
            <Tab.Screen 
                name='Notification'
                component={Notification}
            />
            <Tab.Screen 
                name='Coupon'
                component={Offers}
            />
        </Tab.Navigator>
    )
}

export default tab

const styles = StyleSheet.create({})
