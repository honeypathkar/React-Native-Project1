import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ScrollCard from './components/ScrollCard';
import ImageCard from './components/ImageCard';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ScrollCard />
        <ImageCard />
        <ContactSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
