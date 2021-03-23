import React from 'react'
import { StyleSheet, Text, View ,  Button, SafeAreaView, Image, TouchableWithoutFeedback, Platform} from 'react-native'
import { COLORS, FONTS , icon} from '../../constants'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const AdharInputScreen = ({navigation}) => {
    const renderHeader = () => {
        return (
            <View  style={{flexDirection : 'row', height: 50,justifyContent:'space-between', alignItems: 'flex-end', paddingHorizontal: 10 ,paddingVertical: 5, }}>
            <View style={{ flexDirection : 'row' }}>
              <TouchableOpacity 
                onPress={() => navigation.goBack()}
              >
              <Image 
                  source={icon.back_arrow}
                  style={{
                      width : 20,
                      height : 20,
                      margin : 1
                  }}
              />
            </TouchableOpacity>
            <Text style={{...FONTS.h3, alignSelf : 'center', marginHorizontal : 20}}>AdharCard Number</Text>
            </View>            
          </View>
        )
    }
    return (
        <SafeAreaView>
            {renderHeader()}
        <View styles={{justifyContent : 'center' , alignItems : 'center' , flex : 1}}>
            <View style={{marginTop : 40}} >
            <View style={{alignSelf : 'center'}}>
                <Text style={{...FONTS.body4, textAlign : 'center', width : 350}}> <Text style={{...FONTS.h4}}>Note : </Text> Like you phone number, we also save your AdharCard number in encrypted form</Text>
            </View>
                <TextInput placeholder={'Adhar Number'} style={{alignSelf : 'center', paddingHorizontal : 20, paddingVertical : Platform.OS == 'ios' ? 20 : 10, width : 300, borderWidth : 1,borderRadius: 15 ,marginVertical : 20, ...FONTS.h3, textAlign : 'center' ,borderColor : COLORS.gray }}  keyboardType='phone-pad' maxLength={12}/>
            </View>
            
            <TouchableOpacity style={{borderWidth : 1,marginHorizontal : 10,marginVertical : 20, paddingVertical: 20, width : 250, borderRadius : 10, backgroundColor : COLORS.black, alignSelf : 'center'}} onPress={() => {
                navigation.replace('TandCscreen')
            }}>
                <Text style={{textAlign  :'center', color : '#fff', ...FONTS.body3, marginHorizontal : 20}}>Continue</Text>
            </TouchableOpacity>
            <View style={{alignSelf : 'center'}}>
                <Text style={{...FONTS.body4, textAlign : 'center', width : 350}}> <Text style={{...FONTS.h4}}>Warning : </Text> We will cross-check your adhar number anytime if it doesn't match your account will get restricted. Without informing you</Text>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default AdharInputScreen

const styles = StyleSheet.create({})
