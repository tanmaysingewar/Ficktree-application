import React from 'react'
import { Button, Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View , TextInput, Platform, TouchableOpacity,Keyboard} from 'react-native'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { COLORS, FONTS, images, icon } from '../../constants'

const ConformProfileScreen = ({navigation}) => {
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
                <Text style={{...FONTS.h3, alignSelf : 'center', marginHorizontal : 20}}>Conform Account</Text>
            </View>            
          </View>
        )
    }
    return (
        <SafeAreaView >
            {renderHeader()}
        <ScrollView keyboardShouldPersistTaps='handled'>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={60}>
        
            <View>
                <View style={{alignItems  : 'center', marginTop :25}}> 
                    
                    <View style={{alignItems : 'center'}}>
                        <Image 
                            source={images.profile2}
                            style={{
                                width : 100,
                                height : 100,
                                borderRadius : 100
                            }}
                        />
                        <Text style={{textAlign : 'center' , ...FONTS.body4, color : COLORS.gray, marginTop : 20}}>{`This profile will be your default profile image.\n Further you can change it`}</Text>
                    </View>
                    <View style={{flexDirection : 'row', marginTop : 40 }}>
                        <View>
                            <TextInput placeholder='First Name' style={styles.input1} />
                            <Text style={{...FONTS.body4, color : COLORS.red,marginHorizontal : 25}}>Field is required</Text>
                        </View>
                        <View>
                            <TextInput placeholder='Last Name' style={styles.input1} />
                            <Text style={{...FONTS.body4, color : COLORS.red,marginHorizontal : 25}}>Field is required</Text>
                        </View>
                    </View>
                    <View>
                        <TextInput placeholder='Username' style={styles.input2} />
                        <Text style={{...FONTS.body4, color : COLORS.greenish,marginHorizontal : 25}}>Username is available</Text>
                    </View>
                    <View>
                        <TextInput placeholder='Email' style={{...styles.input2, color : COLORS.gray}} editable={false} value={`singewartanmay@gmail.com`} />
                        <Text style={{...FONTS.body4, color : COLORS.gray,marginHorizontal : 25}}>You can't change the email id 😃</Text>
                    </View>
                    <View>
                       
                        <TextInput placeholder='Phone Number' style={{...styles.input2}} keyboardType='number-pad' maxLength={10}/>
                        <Text style={{...FONTS.body4, color : COLORS.red,marginHorizontal : 25}}>Field is required</Text>
                        <Text style={{marginTop: 10 , textAlign : 'left', marginLeft : 25, ...FONTS.body4, color : COLORS.gray}}>{`**Its safe to give your no. \nWe save it in `}<Text style={{...FONTS.h4}}>encrypted form</Text></Text>
                    </View>
                
                </View>
            </View>
        <View style={{alignItems  : 'center', marginTop : 50}}>
            <TouchableOpacity style={{borderWidth : 1, borderRadius : 50,paddingHorizontal : 50, paddingVertical : 15, backgroundColor : COLORS.black}} onPress={() => {navigation.replace('OtpScreen')}}>
            <Text style={{...FONTS.body3 , color: COLORS.white, }} >Submit</Text>
        </TouchableOpacity>
        </View>
        <View style={{alignItems : 'center', marginTop : 20}}>
        <Text style={{...FONTS.body4}}>{`Already have account?`}<Text style={{...FONTS.h3}} onPress={() => {console.log('Sing In press')}}> Sign In</Text></Text>
        </View >
        </KeyboardAvoidingView>
        </ScrollView>
        </SafeAreaView>
    )
}

export default ConformProfileScreen

const styles = StyleSheet.create({
    input1 : {borderBottomWidth : 1,
        paddingBottom : Platform.OS === 'ios' ? 10 : 0, 
        borderBottomColor : COLORS.gray , 
        width  : 120, marginHorizontal : 20, 
        ...FONTS.body3
    },
    input2:{borderBottomWidth : 1,
        paddingBottom : Platform.OS === 'ios' ? 10 : 0,
        borderBottomColor : COLORS.gray ,
        width  : 280,
        marginHorizontal : 20,
        marginTop : 20,
        ...FONTS.body3
    }
})
