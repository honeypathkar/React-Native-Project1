import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ScrollCard() {
  return (
    <View>
      <Text style={styles.headingText}>Scroll Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardScroll]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardScroll]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardScroll]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardScroll]}>
          <Text>See</Text>
        </View>
        <View style={[styles.card, styles.cardScroll]}>
          <Text>More</Text>
        </View>
        <View style={[styles.card, styles.cardScroll]}>
          <Text>Cards</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingTop: 10,
    color: 'black',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  cardScroll: {
    backgroundColor: '#CAD5E2',
    elevation: 4
  },
});
