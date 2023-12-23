import React from 'react';
import {View, Text} from 'react-native';

export default function MealsDetailsScreen(props: any) {
 const mealId =  props.route.params.mealId
  return (
    <View>
      <Text style={{color: "white"}}> This is the Meal Detail screen {mealId} </Text>
    </View>
  );
}
