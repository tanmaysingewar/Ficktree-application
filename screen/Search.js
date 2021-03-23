import React from 'react'
import { StyleSheet, Text, TextInput, View , Image, SafeAreaView } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Cards from '../components/Cards'
import { COLORS, FONTS, icon, SIZES, images } from '../constants'

const Search = () => {

    const searchBoxRender = () => {
        return(
            <View style={{flexDirection : 'row' , justifyContent :  'space-between' , alignItems  : 'center' , marginHorizontal : 20}}>
                <TouchableOpacity 
                onPress={() => {}}
                >
                {/* <Image 
                    source={icon.back_arrow}
                    style={{
                        width : 20,
                        height : 20,
                    }}
                /> */}
                </TouchableOpacity>
                <View style={{ borderWidth : 1, borderColor : 'transparent' , borderRadius : 20, marginTop : 5, width : '90%', flexDirection : 'column', overflow : 'hidden',marginRight : 10}}>
                    <TextInput style={{padding : 5 , paddingHorizontal : 13 , backgroundColor : '#E8E8E8', fontFamily: "Poppins-Regular", fontSize: 15}} placeholder='Search'  placeholderTextColor={COLORS.gray} placeholderStyle={{...FONTS.body3}}/>
                </View>
                <View style={{
                    marginTop : 3
                }}>
                    <TouchableOpacity >
                <Image 
                    source={icon.styleCard}
                    style={{
                        width : 30,
                        height : 30,
                    }}
                    />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const topPeopleRender = () => {
        const renderItem = (item) => {
            return(
                <View style={{marginVertical : 20}}>
                    <View style={{flexDirection : 'row', justifyContent : 'space-between', paddingHorizontal : 28}}>
                    <View style={{flexDirection : 'row'}}>
                        <Image
                            source={images.profile2}
                            style={{
                                width : 55,
                                height : 55,
                                borderRadius : 50
                            }}
                        />
                        <View style={{marginHorizontal : 10, marginVertical : 10}} >
                            <Text style={{...FONTS.h2}}>David Bruno</Text>
                            <Text style={{...FONTS.body4, color : COLORS.gray}}>San Francisco, CA</Text>
                        </View>
                    </View>
                </View>
                <View style={{paddingHorizontal : 42, paddingVertical : 20,justifyContent: 'center', }}>
                    <Text style={{...FONTS.body4, color: COLORS.gray, textAlign : 'left'}} >
                        {`If you live to be 100, I hope I live to \nbe 100 minus 1 day, so I never have \nto live without you`}
                    </Text>
                </View>
                </View>
            )
        }
        return(
            <View>
                <View>
                    <Text style={{...FONTS.h3, marginLeft : SIZES.padding, marginTop : 20}}>People on Top</Text>
                </View>
                <View>
                    <FlatList 
                    data={[0,1,2,3,4,5,6,7]}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    />
                    
                </View>
                <View>
                    <Text style={{...FONTS.h3, marginLeft : SIZES.padding, marginTop : 20 , marginBottom : 10}}>Top Post</Text>
                    <View style={{flexDirection : 'row', justifyContent : 'space-between', marginHorizontal : SIZES.padding}}>
                        <Text style={{...FONTS.h4}}>Trending</Text>
                        <Text style={{...FONTS.h4 , color : COLORS.gray}}>Most liked</Text>
                        <Text style={{...FONTS.h4 , color : COLORS.gray}}>Most commented</Text>
                        <Text style={{...FONTS.h4 , color : COLORS.gray}}>Recent</Text>
                    </View>
                </View>
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
            </View>
        )
    }
    return (
        <SafeAreaView style={{flex : 1}}>
            <ScrollView>
            {searchBoxRender()}
            {topPeopleRender()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Search

const styles = StyleSheet.create({})
