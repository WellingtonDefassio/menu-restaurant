import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Meal from "../models/meal";
import MealDetails from "../components/MealDetails";

export default function MealsDetailsScreen(props: any) {
    const meal: Meal = props.route.params.meal

    function renderIngredients() {
        return (
            meal.ingredients.map(ingredient => {
                return (
                    <Text key={ingredient}>{ingredient}</Text>
                )
            })
        )
    }

    function renderSteps() {
        return (
            meal.steps.map(steps => {
                return (
                    <Text key={steps}>{steps}</Text>
                )
            })
        )
    }

    return (
        <View>
            <Image source={{uri: meal.imageUrl}} style={styles.image}/>
            <Text>{meal.title}</Text>
            <MealDetails meal={meal}/>
            <Text>Ingredients</Text>
            {renderIngredients()}
            <Text>Steps</Text>
            {renderSteps()}
        </View>
    );
}


const styles = StyleSheet.create({

    image: {
        width: '100%',
        height: 200
    },
})
