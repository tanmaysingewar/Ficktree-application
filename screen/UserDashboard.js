import React from 'react'
import { StyleSheet, Text, View , Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { FONTS, icon, images, theme } from '../constants'

const UserDashboard = ({navigation}) => {

    const renderHeader = () => {
        return (
            <View  style={{flexDirection : 'row', height: 50,justifyContent:'space-between', alignItems: 'flex-end', paddingHorizontal: 10 ,paddingVertical: 5, }}>
            <View style={{ }}>
              <TouchableOpacity 
                onPress={() => navigation.goBack()}
              >
              <Image 
                  source={icon.back_arrow}
                  style={{
                      width : 25,
                      height : 25,
                      margin : 1
                  }}
              />
            </TouchableOpacity>
            </View>
            <View style={{ }}>
              <TouchableOpacity 
                onPress={() => {navigation.navigate('UserDashboard')}}
              >
              <Image 
                  source={icon.dashboard}
                  style={{
                      width : 25,
                      height : 25,
                      margin : 3,
                  }}
              />
            </TouchableOpacity>
            </View>
            
          </View>
        )
    }


    return (
        <SafeAreaView>
            {renderHeader()}
        </SafeAreaView>
    )
}

export default UserDashboard

const styles = StyleSheet.create({})
