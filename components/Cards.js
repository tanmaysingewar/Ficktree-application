import React,{useState} from 'react'
import { StyleSheet, Text, View, Image, Dimensions , TouchableWithoutFeedback} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, FONTS, icon, images, SIZES } from '../constants'
import DoubleClick from 'react-native-double-click';
let backCount = 0
let backTimer
const Cards = ({onProfileClick , onPostOption}) => {
    return (
        <View style={styles.cardContainer}>
            <View style={{flexDirection : 'row', height: 60,justifyContent:'space-between', alignItems: 'flex-end',paddingVertical: 5}}>
                <View style={{flexDirection : 'row'}}>
                    <TouchableOpacity onPress={() => onProfileClick('Emma Stone',images.profile1)}> 
                    <Image 
                    source={images.profile1}
                    style={{
                        width : 45,
                        height : 45,
                        borderRadius : 50,
                    }}
                    />
                    </TouchableOpacity> 
                    <View style={styles.username_card}>
                        <Text style={{...FONTS.h3}} >Emma Stone</Text>
                        <Text  style={{...FONTS.body4, fontSize : 12, color: COLORS.gray}} >Emma Stone</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => onPostOption()}>
                        <Image 
                        source={icon.more}
                        style={{
                            width : 15,
                            height : 15,
                            tintColor : COLORS.gray,
                            marginVertical : 15
                        }}
                        />
                    </TouchableOpacity>
                </View>
          </View>
          <View style={styles.card}>
          <TouchableWithoutFeedback
                        onPress={() => {
                            backCount++
                            if (backCount == 2) {
                                // backCount = 0
                                console.log("Clicked twice", backCount)
                            } else {
                                backTimer = setTimeout(() => {
                                backCount = 0
                                }, 350)
                            }

                        }}
                    >
              <View style={{overflow : 'hidden', borderRadius : 10}}>
                  {/* <View style={{flexDirection : 'row', justifyContent : 'space-between', marginBottom : 20}}>
                    <Text style={{...FONTS.body2,color : COLORS.white}} ></Text>
                    <Image source={icon.bookmark} style={{height : 25, width : 25, tintColor : '#fff'}} />
                  </View> */}
                    
                    {/* <Text style={{...FONTS.body4,color : COLORS.white, }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text> */}
                        <Image source={images.post} style={{height : Dimensions.get('window').height / 2.3, width : "100%", alignSelf : 'center', resizeMode : 'center', backgroundColor : '#fff'}}/>
              </View>
              </TouchableWithoutFeedback>
          </View>
          <View style={{ backgroundColor : COLORS.add_background , paddingHorizontal: 10, paddingVertical : 5, borderRadius : SIZES.radius}}>
              <View style={{flexDirection : 'row', justifyContent : 'space-between'}} >
                    <View style={{flexDirection : 'row'}}>
                            <Image 
                                source={images.profile1}
                                style={{
                                    width : 22,
                                    height : 22,
                                    borderRadius : 50,
                                }}
                            />
                            <View style={{paddingHorizontal : 8, justifyContent : 'center', alignItems :'center'}}>
                                <Text style={{ ...FONTS.body4, color:COLORS.gray}}>20% off XYZ Caffe</Text>
                            </View>
                    </View>
                <View style={{paddingHorizontal : 10, marginTop : 2}}>
                     <Image 
                        source={icon.info}
                        style={{
                            width : 20,
                            height : 20,
                            tintColor : COLORS.gray
                        }}
                     />
                </View>     
              </View>
          </View>
          <View style={{flexDirection : 'row', marginTop: 10, marginHorizontal : 5}}>
              <View style={{flexDirection : 'row'}}>
                  <Image 
                    source={icon.like}
                    style={{
                        height : 22,
                        width: 22,
                        tintColor : COLORS.red
                    }}
                  />
                  <Text style={{...FONTS.body3, paddingHorizontal : 6, marginTop : 3}}>258</Text>
              </View>
              <View style={{flexDirection : 'row', marginHorizontal : 15}} >
                  <TouchableOpacity >
                    <Image 
                        source={icon.comment}
                        style={{
                            height : 22,
                            width: 22,
                            tintColor : COLORS.gray
                        }}
                    />    
                  </TouchableOpacity>
                  
                  <Text style={{...FONTS.body3, paddingHorizontal : 6, marginTop : 3}}>25</Text>
              </View>

          </View>
        </View>
    )
}

export default Cards

const styles = StyleSheet.create({
    cardContainer : {
        marginHorizontal : SIZES.padding,
        marginVertical : SIZES.padding,
        maxWidth : 601
    },
    card : {
        // paddingHorizontal : SIZES.padding,
        // paddingVertical : SIZES.padding,
        marginTop: SIZES.padding,
        marginBottom : 10,
        backgroundColor : COLORS.cardColor,
        borderRadius : SIZES.radius
    },
    username_card : {
        flexDirection : 'column',
        paddingHorizontal : 10,
        paddingVertical : 5
    }
})
