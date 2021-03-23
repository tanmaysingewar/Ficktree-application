import React,{useState, useRef} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image , ScrollView, SafeAreaView, Platform, Dimensions, StatusBar} from 'react-native'
import Cards from '../components/Cards'
import { COLORS, FONTS, icon, images, SIZES } from '../constants'
import { Host, Portal } from 'react-native-portalize';
import { Modalize } from 'react-native-modalize';

const height = Dimensions.get('window').height
const Profile = ({ navigation }) => {

    const modalizeRef = useRef(null)

    const [moduleSelected, setModuleSelected] = useState('')
    
      const onOpen =  (username, profilePic) => {
        setModuleSelected('profile')
        setModalUserData({
          username,
          profilePic
        })
        console.log('Open')
        modalizeRef.current?.open()
      };
    
      const onPostOption = () => {
        setModuleSelected('postOption')
        modalizeRef.current?.open()
      }
    
      const [modalUserData, setModalUserData] = useState({
        username : '',
        profilePic : 'http://placehold.it/100x100'
      })

    const renderHeader = () => {
        return (
            <View  style={{flexDirection : 'row', height: 50,justifyContent:'space-between', alignItems: 'flex-end', paddingHorizontal: 10 ,paddingVertical: 5, }}>
            <View style={{ }}>
              <TouchableOpacity 
                onPress={() => navigation.goBack()}
              >
              <Image 
                  source={icon.back_arrow}
                  style={{
                      width : 25,
                      height : 25,
                      margin : 1
                  }}
              />
            </TouchableOpacity>
            </View>
            <View style={{ }}>
              <TouchableOpacity 
                onPress={() => {navigation.navigate('UserDashboard')}}
              >
              <Image 
                  source={icon.dashboard}
                  style={{
                      width : 25,
                      height : 25,
                      margin : 3,
                  }}
              />
            </TouchableOpacity>
            </View>
            
          </View>
        )
    }

    const renderProfileCard = () => {
        const x = Platform.OS === 'ios' ? 0 : 4 
        return (
            <View>
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
                        <TouchableOpacity style={{justifyContent : 'center' ,alignItems : 'center',}} onPress={() => console.log('Edit Page')}>
                            <Text style={{borderWidth : 2 , borderColor : COLORS.black, borderRadius : 14,borderColor : COLORS.gray, paddingHorizontal : 10,paddingTop : x, paddingLeft : 14,...FONTS.body4, fontSize : 12}}>Edit Profile</Text>
                        </TouchableOpacity>
                </View>
                <View style={{paddingHorizontal : 22, paddingVertical : 20,justifyContent: 'center', }}>
                    <Text style={{...FONTS.body4, color: COLORS.gray, textAlign : 'left'}} >
                        {`If you live to be 100, I hope I live to \nbe 100 minus 1 day, so I never have \nto live without you`}
                    </Text>
                </View>

                <View>
                    <View style={{flexDirection : 'row', marginHorizontal : 30, paddingHorizontal :20, paddingVertical : 10,  borderRadius : 20, justifyContent : 'space-between', backgroundColor : COLORS.white}}>
                        <View style={{justifyContent : 'center', alignItems : 'center'}}>
                            <Text style={{...FONTS.h2}}>190</Text>
                            <Text style={{...FONTS.body4}}>Posts</Text>
                        </View>
                        <View style={{justifyContent : 'center', alignItems : 'center'}}>
                            <Text style={{...FONTS.h2}}>1.5M</Text>
                            <Text style={{...FONTS.body4}}>Joined</Text>
                        </View>
                        <View style={{justifyContent : 'center', alignItems : 'center'}}>
                            <Text style={{...FONTS.h2}}>17</Text>
                            <Text style={{...FONTS.body4}}>Joins</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    const renderPostCard = () => {
        return(
            <View>
                <Cards onProfileClick={onOpen} onPostOption={onPostOption}/>
            </View>
        )
    }

    const renderPostOptions = () => {
        return (
          <View style={{marginTop : 20, marginHorizontal : 10}}>
            <StatusBar barStyle="dark-content" backgroundColor={'#4A4B4D'} animated={true} />
            <Text style={{...FONTS.h2}}>Post Options ~ </Text>
            <View style={{marginHorizontal : 8, justifyContent : 'space-around', marginTop: 20}}>
              <TouchableOpacity onPress={() => {
                console.log('Save🤘')
                modalizeRef.current?.close()
              }}>
                  <Text style={{...FONTS.body3, marginVertical : 15}}>Save 🤘</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                console.log('Join 🤝')
                modalizeRef.current?.close()
              }}>
                  <Text style={{...FONTS.body3, marginVertical : 15}}>Join 🤝</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                console.log('Report Post 😤')
                modalizeRef.current?.close()
              }}>
                  <Text style={{...FONTS.body3, marginVertical : 15 , color : 'red'}}>Report Post 😤</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                console.log('Report Policy 👿')
                modalizeRef.current?.close()
              }}>
                <Text style={{...FONTS.body3, marginVertical : 15 , color : 'red'}}>User Moving out of his/her policy 👿</Text>
              </TouchableOpacity>
                <View style={{justifyContent : 'center', alignSelf : 'center', marginTop : 25}}>
                  <Text style={{...FONTS.body4, color : COLORS.gray}}>Designed and created by <Text style={{...FONTS.title, fontSize : 15, color: COLORS.black}}>Stylun</Text></Text>
                </View>
            </View>
          </View>
        )
      }


      const renderProfileCardModal = () => {
        const x = Platform.OS === 'ios' ? 0 : 4 
        return (
            <View style={{backgroundColor : '#fff', overflow : 'hidden' }}>
              <StatusBar barStyle="dark-content" backgroundColor={'#4A4B4D'} animated={true} />
              <View style={{width : 100, borderRadius : 5, marginBottom : 20, alignSelf : 'center', marginTop : 10}}></View>
                <View style={{flexDirection : 'row', justifyContent : 'space-between', paddingHorizontal : 28}}>
                    <View style={{flexDirection : 'row'}}>
                        <Image
                            source={modalUserData.profilePic || 'http://placehold.it/100x100'}
                            style={{
                                width : 55,
                                height : 55,
                                borderRadius : 50
                            }}
                        />
                        <View style={{marginHorizontal : 10, marginVertical : 10}} >
                            <Text style={{...FONTS.h2}}>{modalUserData.username}</Text>
                            <Text style={{...FONTS.body4, color : COLORS.gray}}>San Francisco, CA</Text>
                        </View>
                    </View>
                </View>
                <View style={{paddingHorizontal : 22, paddingVertical : 20,justifyContent: 'center', marginVertical : 10}}>
                    <Text style={{...FONTS.body4, color: COLORS.gray, textAlign : 'left'}} >
                        {`If you live to be 100, I hope I live to \nbe 100 minus 1 day, so I never have \nto live without you`}
                    </Text>
                </View>

                <View style={{ marginBottom : 40}}>
                    <View style={{flexDirection : 'row', marginHorizontal : 30, paddingHorizontal :20, paddingVertical : 10,  borderRadius : 20, justifyContent : 'space-between', backgroundColor : COLORS.white}}>
                        <View style={{justifyContent : 'center', alignItems : 'center'}}>
                            <Text style={{...FONTS.h2}}>190</Text>
                            <Text style={{...FONTS.body4}}>Posts</Text>
                        </View>
                        <View style={{justifyContent : 'center', alignItems : 'center'}}>
                            <Text style={{...FONTS.h2}}>1.5M</Text>
                            <Text style={{...FONTS.body4}}>Joined</Text>
                        </View>
                        <View style={{justifyContent : 'center', alignItems : 'center'}}>
                            <Text style={{...FONTS.h2}}>17</Text>
                            <Text style={{...FONTS.body4}}>Joins</Text>
                        </View>
                    </View>
                </View>
                {
                  //?? This is end message code
                  // Todo : enable only when integration of massaging system
                //   Platform.OS === 'ios' ? (
                //     <View>
                //     <Text style={{...FONTS.h2, marginHorizontal : 10}} >Send Message 😀</Text>
                //       <View style={{flexDirection : 'row', marginVertical : 10}}>
                //         <TextInput   placeholder='open' style={{padding : 10, borderRadius : 30, marginVertical : 10, marginHorizontal : 10, backgroundColor : '#f6f6f6' , width  : '85%'}}  />
                //         <View style={{alignItems : 'center', justifyContent : 'center'}}>
                //         <Image source={icon.send} style={{
                //           height : 25,
                //           width : 25,
                //           transform: [{ rotate: '15deg'}]
                //         }} />
                //   </View>
                // </View>
                //       </View>
                //   ) : <View></View>
                }
            </View>
                 
        )
    }
    return (
        <SafeAreaView>
            {renderHeader()}
        <ScrollView>
           {renderProfileCard()}
           {renderPostCard()}
        </ScrollView>
        <Portal>
             <Modalize ref={modalizeRef}  modalHeight={(height / (moduleSelected === 'profile' ? 2.4 :  2.4))} avoidKeyboardLikeIOS={true} keyboardAvoidingOffset={20} childrenStyle={{overflow : 'hidden', borderTopEndRadius : 20,borderTopLeftRadius : 20,}} keyboardAvoidingBehavior={Platform.OS === 'ios' ?'padding' : 'padding'} >{moduleSelected === 'profile' ? renderProfileCardModal() :  renderPostOptions() }</Modalize>
           </Portal>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({})
