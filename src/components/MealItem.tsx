import React from 'react';
import {View, Text} from 'react-native';
import Meal from "../models/meal";

interface MealItemProps {
    meal: Meal
}

export default function MealItem({ meal }: MealItemProps) {
    return (
        <View>
            <Text>{meal.title}</Text>
        </View>
    );
}
