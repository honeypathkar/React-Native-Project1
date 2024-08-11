import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ContactSection() {
  function openWebsite(website: string) {
    Linking.openURL(website);
  }
  return (
    <View>
      <Text style={styles.headingText}>Social Media Accounts: </Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <TouchableOpacity
            onPress={() => openWebsite('https://github.com/honeypathkar')}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg',
              }}
              style={styles.imageSocial}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <TouchableOpacity
            onPress={() => openWebsite('https://instagram.com/honey.jsx')}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-vector/instagram-logo_1199-122.jpg',
              }}
              style={styles.imageSocial}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    color: 'black',
    paddingTop: 10,
  },
  imageSocial: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  card1: {
    paddingRight: 10,
  },
});
