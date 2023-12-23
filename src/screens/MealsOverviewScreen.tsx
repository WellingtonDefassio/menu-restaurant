import React, {useEffect, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {MEALS, CATEGORIES} from "../models/data/dummy-data";
import Meal from "../models/meal";
import MealItem from "../components/MealItem";
import {NavigationProp, ParamListBase} from "@react-navigation/native";
import category from "../models/category";

interface MealsOverviewScreenProps {
    navigation: NavigationProp<ParamListBase>
    route: any
}

export default function MealsOverviewScreen(props: MealsOverviewScreenProps) {

    const categoryId = props.route.params.categoryId;

    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0
    })

    const categoryMeal = CATEGORIES.find((category) => {
        return category.id === categoryId
    })

    useLayoutEffect(() => {
        props.navigation.setOptions({title: categoryMeal?.title})
    }, []);


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
