import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Meal from "../../models/meal";
import MealItem from "./MealItem";

interface MealListProps {

    meals: Meal[]

}

export default function MealList(props: MealListProps) {


    function renderMealItem(item: Meal) {
        return (
            <MealItem meal={item}/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={props.meals}
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
