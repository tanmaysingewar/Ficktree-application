import React,{useState,useRef} from 'react'
import { SafeAreaView, StyleSheet, Text, View , Image, StatusBar , TouchableOpacity , ScrollView, TextInput, Dimensions, InputAccessoryView,TextInputBase, KeyboardAvoidingView, Button, Platform} from 'react-native'
import Cards from '../components/Cards'
import { COLORS, FONTS, icon, images, SIZES } from '../constants'
import { Modalize } from 'react-native-modalize';
import { Host, Portal } from 'react-native-portalize';

const height = Dimensions.get('window').height

const Home = ({navigation}) => {
  const modalizeRef = useRef(null)
  const scrollRef = useRef(null);
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

  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
        y: 0,
        animated: true,
    });
}

  
    const renderNavBar = () => {
        return (
          <>
          <View  style={{flexDirection : 'row', height: 60,justifyContent:'space-between', alignItems: 'flex-end', paddingHorizontal: SIZES.padding ,paddingVertical: 5, }}>
              <View>
              <Text style={{ ...FONTS.title}} onPress={onPressTouch} >Ficktree </Text>
              </View>
              <TouchableOpacity 
                onPress={() => (navigation.push('Profile'))}
              >
            <View style={{borderColor : COLORS.black, borderWidth : 2, marginBottom : 8,borderRadius : 50}}>
              
              <Image 
                  source={images.profile1}
                  style={{
                      width : 30,
                      height : 30,
                      borderRadius : 50,
                      margin : 1
                  }}
              />
            </View>
            </TouchableOpacity>
            
          </View>
          </>
        )
      }

      const renderProfileCard = () => {
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

      const renderCard = () => {
          return(
              <ScrollView ref={scrollRef}>
                 <Cards onProfileClick={onOpen} onPostOption={onPostOption}/>
                 <Cards onProfileClick={onOpen} onPostOption={onPostOption}/>
                 <Cards onProfileClick={onOpen} onPostOption={onPostOption}/>
                 <Cards onProfileClick={onOpen} onPostOption={onPostOption}/>
                 <Cards onProfileClick={onOpen} onPostOption={onPostOption}/>
                 <Cards onProfileClick={onOpen} onPostOption={onPostOption}/>
                 <Cards onProfileClick={onOpen} onPostOption={onPostOption}/>
                <View style={{flex: 1, marginBottom : 50}}>
                </View>
              </ScrollView>
          )
      }

      const renderPostOptions = () => {
        return (
          <View style={{marginVertical : 20, marginHorizontal : 10}}>
            <StatusBar barStyle="dark-content" backgroundColor={'#4A4B4D'} animated={true} />
            <Text style={{...FONTS.h2}}>Post Options ~ </Text>
            <View style={{marginHorizontal : 8, justifyContent : 'space-around', marginVertical: 20}}>
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
    return (
        <SafeAreaView>
            <StatusBar  barStyle="dark-content"  />
           {renderNavBar()}
           {renderCard()}
           <Portal>
             <Modalize ref={modalizeRef}  modalHeight={(height / (moduleSelected === 'profile' ? 2.4 :  2.4))} avoidKeyboardLikeIOS={true} keyboardAvoidingOffset={20} childrenStyle={{overflow : 'hidden', borderTopEndRadius : 20,borderTopLeftRadius : 20,}} keyboardAvoidingBehavior={Platform.OS === 'ios' ?'padding' : 'padding'} >{moduleSelected === 'profile' ? renderProfileCard() :  renderPostOptions() }</Modalize>
           </Portal>
        </SafeAreaView>
    )
}

export default Home


