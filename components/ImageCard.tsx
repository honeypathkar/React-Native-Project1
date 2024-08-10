import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ImageCard() {
  return (
    <View>
      <Text style={styles.headingText}>Images of Nature</Text>
      <View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1381679/pexels-photo-1381679.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.cardDesc}>
          <Text style={styles.cardTitle}>Purple Flowers</Text>
          <View style={styles.cardLabel}>
            <Text>~By Irina iriser</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.cardDesc}>
          <Text style={styles.cardTitle}>Green Forest</Text>
          <View style={styles.cardLabel}>
            <Text>~By Luis Dalvan</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.cardDesc}>
          <Text style={styles.cardTitle}>Mountain</Text>
          <View style={styles.cardLabel}>
            <Text>~By Tyler lastovitch</Text>
          </View>
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
  cardImage: {
    height: 200,
    width: 350,
    borderRadius: 5,
    borderColor: 'black',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  cardDesc: {
    paddingHorizontal: 30,
  },
  cardTitle: {
    color: 'black',
    fontFamily: 'mono',
  },
  cardLabel: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
