import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Meal from "../models/meal";

interface MealDetailsProps {
    meal: Meal
}

export default function MealDetails({meal}: MealDetailsProps) {
    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}>{meal.duration}m</Text>
            <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{meal.affordability.toUpperCase()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    },
})
