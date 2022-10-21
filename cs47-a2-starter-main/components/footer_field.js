import { Platform, View, Text, StyleSheet, Image } from 'react-native';

const Footer_field = ({ image_url, text }) => {
  return (
    <View style={styles.footer_field}>
            <Image style={styles.tinyLogo}
                source={image_url}
              />
            <Text style = {styles.footer_text}>{text}</Text>
    </View>
  );
};

export default Footer_field;

const styles = StyleSheet.create({
  footer_field: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },

  footer_text: {
    color: 'black',
    fontFamily: 'Sydney',
    fontSize: 25,
  },

  tinyLogo: {
    width: 40,
    height: 40, // having trouble with images - resizing to right size
    resizeMode: 'contain',
    marginBottom: 2,
  },
});
