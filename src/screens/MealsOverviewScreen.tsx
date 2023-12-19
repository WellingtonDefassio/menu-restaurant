import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MEALS} from "../models/data/dummy-data";


export default function MealsOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text> Meals Overview Screen </Text>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})
