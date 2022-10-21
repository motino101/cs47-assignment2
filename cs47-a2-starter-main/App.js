import AppLoading from 'expo-app-loading';
import { StyleSheet, ImageBackground, Image, Text, View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import Footer_field from './components/footer_field';
import { Themes } from './assets/Themes';
import {Icons} from "./assets/Themes";
import SwipeCards from './components/SwipeCards';


export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  return (
    <View style={styles.body}>
        <View style={styles.section_top}>

{/* HEADER  */}
          <View style={[styles.header, Themes.dark.shadows]}>
            <Image style={styles.tinyLogo}
              source={require('./assets/Icons/menu_dark.png')}
            />
            <Text style={styles.title_text}>ensom</Text>
            <Image style={styles.tinyLogo}
              source={require('./assets/Icons/moon.png')}
            />
          </View> 

{/* Swipable cards */}
          <SwipeCards/>
            

{/* AUDIO */}
          <View style={[styles.card, Themes.dark.shadows]}>
            <Text style={styles.subheading_text}>My hottest take</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image style={styles.tinyLogo}
                source={Icons.player.dark}
              />
              <Image style={{flex: 1, resizeMode: 'contain', marginLeft: 10}}
                source={Icons.audioWave.dark}
              />
            </View>
          </View>
        </View>



{/* Footer */}
        <View style={styles.footer}>
          <Footer_field
            image_url={Icons.discover.dark}
            text={'Discover'}
          />
          <Footer_field
            image_url={Icons.heart.dark}
            text={'Matches'}
          />
          <Footer_field
            image_url={Icons.messages.dark}
            text={'DMs'}
          />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({

  // Icons
  tinyLogo: {
    width: 40,
    height: 40, // having trouble with images - resizing to right size
    resizeMode: 'contain',
    marginBottom: 2,
  },


  // text
  body_text: {
    color: 'white',
    fontFamily: 'Sydney',
    fontSize: 25,
  },

  subheading_text: {
    color: 'white',
    fontFamily: 'Sydney',
    fontSize: 25,
    marginBottom: 10,
  },

  title_text: {
    color: 'white',
    fontFamily: 'Sydney-Bold',
    fontSize: 30,
  },

  // body

  body: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  section_top: {
    width: '100%',
    height: '85%',
    padding: 30,
    backgroundColor: Themes.dark.bg,
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10%',
    marginBottom: '5%',
    ...Platform.select({
      ios: {
        height: 41
      },
      android: {
        height: 54
      },
     }),
  },

  card: {
    width: '100%',
    borderRadius: 20,
    backgroundColor:Themes.dark.bgSecondary,
    padding: 30,
    marginTop: 30,
  },

  // footer
  
  footer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems:'center',
    width:'100%',
    height: '15%',
    paddingHorizontal: 50,
  },


});
