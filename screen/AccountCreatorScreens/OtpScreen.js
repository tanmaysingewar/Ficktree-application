import React from 'react'
import { StyleSheet, Text, View ,  Button, SafeAreaView, Image, TouchableWithoutFeedback} from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { COLORS, FONTS , icon} from '../../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Modal from 'react-native-modal';




const OtpScreen = ({navigation}) => {

    const renderHeader = () => {
        return (
          <>
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
            <Text style={{...FONTS.h3, alignSelf : 'center', marginHorizontal : 20}}>Verify Phone</Text>
            </View>            
          </View>
          </>
        )
    }
    return (
        <SafeAreaView>
            {renderHeader()}
        <View styles={{justifyContent : 'center' , alignItems : 'center' , flex : 1}}>
            <Text style={{...FONTS.body3, alignSelf : 'center', marginTop : 20}}>Code is send to <Text style={{...FONTS.h4}}>8605527382</Text></Text>
            <OTPInputView
                style={{width: '100%', height: 200,maxWidth : 300, alignItems : 'center',  alignSelf  : 'center'}}
                pinCount={4}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                // autoFocusOnLoad
                codeInputFieldStyle={{...FONTS.body3,...styles.underlineStyleBase}}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled = {(code => {
                    console.log(`Code is ${code}, you are good to go!`)
                    navigation.replace('AdharInputScreen')
                })}
            />
            <View style={{alignSelf : 'center'}}>
                <Text style={{...FONTS.body4}}>Don't receive code? <Text style={{...FONTS.h4}} onPress={() => console.log('Request code again')}>Request again</Text></Text>
            </View>
            <TouchableOpacity style={{borderWidth : 1,marginHorizontal : 10,marginVertical : 20, paddingVertical: 20, width : 300, borderRadius : 10, backgroundColor : COLORS.black, alignSelf : 'center'}}>
                <Text style={{textAlign  :'center', color : '#fff', ...FONTS.body4, marginHorizontal : 20}}>Verify and Create Account</Text>
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={() => {navigation.navigate('ChangeNumberScreen')}}>
                <Text style={{...FONTS.body3, alignSelf : 'center', marginTop : 20}}>Change the number?</Text>
            </TouchableWithoutFeedback>
        </View>
        </SafeAreaView>
    )
}

export default OtpScreen

const styles = StyleSheet.create({
    borderStyleBase: {
      width: 30,
      height: 45
    },

    borderStyleHighLighted: {
      borderColor: "black",
    },
   
    underlineStyleBase: {
      width: 40,
      height: 45,
      borderBottomWidth: 1,
      color : 'black',
      marginHorizontal : 10, 
      borderWidth : 1,
      borderColor : COLORS.gray,
    },
   
    underlineStyleHighLighted: {
      borderColor: "black",
    },
  });
