import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {MEALS} from "../models/data/dummy-data";
import Meal from "../models/meal";
import MealItem from "../components/MealItem";

interface MealsOverviewScreenProps {
    navigation: any
    route: { params: { categoryId: string } }
}

export default function MealsOverviewScreen(props: MealsOverviewScreenProps) {
    const categoryId = props.route.params.categoryId;

    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0
    })

    function renderMealItem(item: Meal) {
        return (
            <MealItem meal={item}/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayMeals}
                keyExtractor={(item) => item.id}
                renderItem={(item) => renderMealItem(item.item)}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})
