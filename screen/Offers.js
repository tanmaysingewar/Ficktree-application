import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { icon, FONTS ,images, SIZES, COLORS } from '../constants'


const Offers = () => {
    const renderHeader = () => {
        return (
            <View  style={{flexDirection : 'row', height: 50,justifyContent:'flex-start', alignItems: 'center', paddingHorizontal: 10 ,paddingVertical: 5, }}>
                <View>
                    <Text style={{...FONTS.h3, paddingHorizontal : 20}}>Offers</Text>
                </View>
            </View>
        )
    }

    const specialOffers = () => {
        return(
            <View style={{ marginHorizontal : 20, marginVertical : 20}}>
                <View style={{paddingHorizontal : 20, paddingVertical : 50, backgroundColor : COLORS.cream, borderRadius : 10, flexDirection : 'row', justifyContent : 'space-between'}}>
                    <View>
                        <Text style={{...FONTS.h3}}>50% off</Text>
                        <Text style={{...FONTS.body3, color : COLORS.gray, fontSize : 12}}>National Caffe,Sadar,Nagpur</Text>
                    </View>
                    <View>
                        <Image
                            source={images.sandwich}
                            style={{
                                width : 80,
                                height : 50
                            }}
                        />
                    </View>
                </View>
            </View>
        )
    }

    const renderOffersCategoriesHeader = () => {
        return (
            <View>
                <View style={{flexDirection : 'row', justifyContent : 'space-between' , alignItems : 'center', marginHorizontal : SIZES.padding, marginBottom : 10}}>
                    <Text style={{...FONTS.h4}}>All Other</Text>
                    <Text style={{...FONTS.h4, color: COLORS.gray}}>Recent</Text>
                    <Text style={{...FONTS.h4, color : COLORS.gray}}>Most Loved</Text>
                    <Text style={{...FONTS.h4, color : COLORS.gray}}>Heavy Offers</Text>
                </View>
            </View>
        )
    }
    const renderOffersByCategory = () => {
        return(
            <View style={{ borderWidth : 1, marginHorizontal : SIZES.padding, paddingHorizontal : 20, paddingVertical : 20,marginVertical : 10, borderRadius : 10, borderColor : '#DBDADA'}}>
                <View style={{flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'center'}}>
                    <View>
                        <Image
                            source={images.profile1}
                            style={{
                                width : 35,
                                height : 35,
                                borderRadius : 50
                            }}
                        />
                    </View>
                    <View style={{marginHorizontal : 10}}>
                        <Text style={{...FONTS.h4,lineHeight : 20}}>10-40% OFF</Text>
                        <Text style={{ fontSize : 12, lineHeight : 15, color : COLORS.gray}}>At Arabian,Caffe,Sadar,Nagpur</Text>
                    </View>     
                </View>
                <View style={{flexDirection : 'row' , marginHorizontal : 45, marginVertical : 10, justifyContent : 'space-around'}}>
                    <View style={{paddingHorizontal : 10, borderRadius : 10, borderColor : 'transparent', borderWidth : 1, backgroundColor : '#fff4d0', flexDirection : 'row'}}>
                        <View style={{justifyContent : 'center', alignItems : 'center', marginHorizontal : 5}}>
                            <Image source={icon.like} style={{height : 13, width : 13 , tintColor : '#ffdd72'}} />
                        </View>
                      <Text style={{...FONTS.body4 , color : COLORS.black}}>4.5</Text>
                    </View>
                    <View style={{paddingHorizontal : 10, borderRadius : 10, borderColor : 'transparent', borderWidth : 1 , backgroundColor : '#e5f1fc'}}>
                        <Text style={{...FONTS.body4 , color : '#0776e5'}}>Food</Text>
                    </View>
                    <View style={{paddingHorizontal : 10, borderRadius : 10, borderColor : 'transparent', borderWidth : 1, 
                backgroundColor : '#fae8ec'}}>
                        <Text style={{...FONTS.body4 , color : '#d74465'}}>15 days</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (

        <SafeAreaView>
        {renderHeader()}
        <ScrollView style={{marginBottom : 60}}>
            {specialOffers()}
            {renderOffersCategoriesHeader()}
            {renderOffersByCategory()}
            {renderOffersByCategory()}
            {renderOffersByCategory()}
            {renderOffersByCategory()}
            {renderOffersByCategory()}
            {renderOffersByCategory()}
            {renderOffersByCategory()}
            {renderOffersByCategory()}
            {renderOffersByCategory()}
            {renderOffersByCategory()}
        </ScrollView>
        </SafeAreaView>
    )
}

export default Offers

const styles = StyleSheet.create({})

