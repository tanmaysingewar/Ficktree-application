import React from 'react'
import { StyleSheet, Text, View ,  Button, SafeAreaView, Image, TouchableWithoutFeedback, Platform} from 'react-native'
import { COLORS, FONTS , icon, SIZES} from '../../constants'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const IntroductionScreen = ({navigation}) => {
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
            <Text style={{...FONTS.h3, alignSelf : 'center', marginHorizontal : 20}}>Introduction</Text>
            </View>            
          </View>
        )
    }
    const renderFooter = () => {
        return ( 
            <View style={{marginHorizontal : 20, marginVertical : 40}}>
                  <TouchableOpacity style={{paddingHorizontal : 20, paddingVertical : 10, backgroundColor : 'black', marginHorizontal : 20, borderRadius : 5, alignItems : 'center'}} onPress={() => {
                      navigation.replace('Home')
                  }}>
                      <Text style={{color : '#fff'}}>Continue</Text>
                  </TouchableOpacity>
            </View>  
        )
    }
    return (
        <SafeAreaView>
            {renderHeader()}
            <View>
                
                <ScrollView  style={{height : SIZES.height - (Platform.OS ==='ios' ? 250 : 180), marginTop : 10} }>
                    <View style={{marginHorizontal : 20}}>
                        <Text style={{...FONTS.h2, color : COLORS.highlighter , marginTop : 10, textAlign : 'center'}}>{`Introduction to \n`} </Text>
                        <Text style={{color : COLORS.black, ...FONTS.title, marginTop : 0, textAlign : 'center'}}>Ficktree</Text>
                        <Text style={{...FONTS.body3, textAlign : 'justify', marginTop : 20}}>
                        {`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
                        }
                        </Text>
                    </View>
                </ScrollView>
                {renderFooter()}
            </View>
        </SafeAreaView>
    )
}

export default IntroductionScreen

const styles = StyleSheet.create({})
