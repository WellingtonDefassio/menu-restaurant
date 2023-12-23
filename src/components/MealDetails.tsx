import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Meal from "../models/meal";

interface MealDetailsProps {
    meal: Meal
    styles?: any
    textStyles?: any
}

export default function MealDetails(props: MealDetailsProps) {
    return (
        <View style={[styles.details, props.styles]}>
            <Text style={[styles.detailItem, props.textStyles]}>{props.meal.duration}m</Text>
            <Text style={[styles.detailItem, props.textStyles]}>{props.meal.complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, props.textStyles]}>{props.meal.affordability.toUpperCase()}</Text>
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
