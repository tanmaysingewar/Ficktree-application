import React from 'react'
import { StyleSheet, Text, View ,  Button, SafeAreaView, Image, TouchableWithoutFeedback, Platform} from 'react-native'
import { COLORS, FONTS , icon} from '../../constants'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const ChangeNumberScreen = ({navigation}) => {
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
                <Text style={{...FONTS.h3, alignSelf : 'center', marginHorizontal : 20}}>Change Phone Number</Text>
                </View>            
              </View>
            )
        }
        return (
            <SafeAreaView>
                {renderHeader()}
            <View styles={{justifyContent : 'center' , alignItems : 'center' , flex : 1}}>
                <View style={{marginTop : 40}} >
                    <TextInput placeholder={'Phone Number'} style={{alignSelf : 'center', paddingHorizontal : 20, paddingVertical : Platform.OS == 'ios' ? 20 : 10, width : 250, borderWidth : 1,borderRadius: 15 ,marginVertical : 20, ...FONTS.h3, textAlign : 'center' ,borderColor : COLORS.gray }}  keyboardType='phone-pad' maxLength={10}/>
                </View>
                <View style={{alignSelf : 'center'}}>
                    <Text style={{...FONTS.body4, textAlign : 'center', width : 350}}> <Text style={{...FONTS.h4}}>Note : </Text> Number is entered here should be Indian phone number only</Text>
                </View>
                <TouchableOpacity style={{borderWidth : 1,marginHorizontal : 10,marginVertical : 20, paddingVertical: 20, width : 300, borderRadius : 10, backgroundColor : COLORS.black, alignSelf : 'center'}} onPress={() => {
                    navigation.navigate('OtpScreen')
                }}>
                    <Text style={{textAlign  :'center', color : '#fff', ...FONTS.body3, marginHorizontal : 20}}>Change and Send OTP</Text>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
        )
}

export default ChangeNumberScreen

const styles = StyleSheet.create({})
