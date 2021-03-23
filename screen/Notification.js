import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, FlatList,  } from 'react-native'
import { FONTS, icon, images, SIZES } from '../constants'


const Notification = ({navigation}) => {
    const renderHeader = () => {
        return (
            <View  style={{flexDirection : 'row', height: 50,justifyContent:'flex-start', alignItems: 'center', paddingHorizontal: 10 ,paddingVertical: 5, }}>
                <View>
                    <Text style={{...FONTS.h3, paddingHorizontal : 20}}>Notification</Text>
                </View>
            </View>
        )
    }
    

    const renderNotifications = () => {
                return (    
                <View style={{marginHorizontal : SIZES.padding, marginVertical : 10}}>
                <View  style={{flexDirection : 'row', height: 50,justifyContent:'flex-start', alignItems: 'center', paddingHorizontal: 1 ,paddingVertical: 5, }}>
                <TouchableOpacity 
                onPress={() => (navigation.push('Profile'))}
              >
              <Image 
                  source={images.profile1}
                  style={{
                      width : 40,
                      height : 40,
                      borderRadius : 50,
                      margin : 1
                  }}
              />
            </TouchableOpacity>
                <View style={{marginHorizontal : 10, flexDirection : 'row'}}>
                    <Text style={{...FONTS.body4}} ><Text style={{...FONTS.h4}}>tanmaysingewar</Text> liked your post</Text>
                </View>
            </View>
            </View> 
                )
    }

    const render10Times = () => {
        return(
            <FlatList
            style={{marginBottom : 50}}
                data={[0,1,2,3,4,5,6,7,8,9,10,11,1,22,1,5,15]}
                renderItem={renderNotifications}
            />
        )
    }
    return (
        <SafeAreaView>
            {renderHeader()}
            {render10Times()}
        </SafeAreaView>
    )
}

export default Notification

const styles = StyleSheet.create({})
