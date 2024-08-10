import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ScrollCard from './components/ScrollCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ScrollCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
