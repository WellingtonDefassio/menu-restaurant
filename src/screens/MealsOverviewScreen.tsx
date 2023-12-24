import React, {useLayoutEffect} from 'react';
import {CATEGORIES, MEALS} from "../models/data/dummy-data";
import {NavigationProp, ParamListBase} from "@react-navigation/native";
import MealList from "../components/mealList/MealList";

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

    return (
        <MealList meals={displayMeals} />
    );
}


