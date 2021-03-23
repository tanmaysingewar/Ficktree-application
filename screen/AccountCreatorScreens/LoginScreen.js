import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, FONTS, icon, images } from '../../constants'

const LoginScreen = ({navigation}) => {
    const renderButtons = () => {
        return (
            <View style ={{alignItems : 'center'}}>
                <View>
                    <TouchableOpacity onPress={() => { navigation.navigate('ConformProfileScreen')}}>
                        <View style={{justifyContent : 'center', alignItems : 'center' ,paddingVertical : 15,borderRadius : 25, borderWidth : 1, width : 250,backgroundColor  : 'black',shadowColor : 'black'}}>
                            <Text style={{color : '#fff', ...FONTS.body4}}>Create Account</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginVertical : 10}}>
                    <Text style={{...FONTS.body4, color : COLORS.gray}}>- Already have account? -</Text>
                </View>
                <View style={{justifyContent : 'center', alignItems : 'center', marginVertical : 5}}>
                    <TouchableOpacity onPress={() => {console.log('Create Account Pressed')}}>
                        <View style={{justifyContent : 'center', alignItems : 'center' ,paddingVertical : 15,borderRadius : 25, borderWidth : 1, width : 250}}>
                            <Text style={{color : 'black', ...FONTS.body4}}>Sign In</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    const renderSlogans = () => {
        return (
            <View style={{justifyContent : 'center'}}>
                <Text style={{...FONTS.title, textAlign : 'center', marginVertical : 20, marginHorizontal : 10}}>
                {`It's not just social media,\n it's a new generation social marketing media`}
                </Text>
            </View>
        )
    }
    const renderAppIcon = () => {
        return (
            <View style={{justifyContent : 'center', alignItems : 'center'}}>
                <Image 
                    source={icon.appIcon}
                    style={{
                        height : 80,
                        width : 80,
                    }}
                />
            </View>
        )
    }

    const renderTermsWarningsStatement = () => {
        return (
                <View style={{justifyContent : 'center'}}>
                    <Text style={{textAlign : 'center', marginVertical : 20, marginHorizontal : 20, color : COLORS.gray, ...FONTS.body4}}>
                    {`By Creating an account, you are agreeing to our`} <Text style={{...FONTS.h4, color : COLORS.black}}>Terms of Services</Text>
                    </Text>
                </View>
        )
    }
    return (
        <>
            <SafeAreaView style={{justifyContent : 'space-around', alignItems : 'center', flex :1}}>
                <View>
                    {renderAppIcon()}
                    {renderSlogans()}
                </View>
                <View>
                    {renderButtons()}
                    {renderTermsWarningsStatement()}
                </View>
            </SafeAreaView>
        </>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})


