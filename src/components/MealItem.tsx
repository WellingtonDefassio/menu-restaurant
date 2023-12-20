import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import Meal from "../models/meal";

interface MealItemProps {
    meal: Meal
}

export default function MealItem({meal}: MealItemProps) {
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{color: "#ccc"}}
                style={({pressed}) => pressed ? styles.buttonPressed : null}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: meal.imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{meal.title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{meal.duration}m</Text>
                        <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{meal.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "white",
        elevation: 6,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden"
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8
    },
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
    buttonPressed: {
        opacity: 0.5,
    }
})
