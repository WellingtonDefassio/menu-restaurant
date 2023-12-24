import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MealList from "../components/mealList/MealList";
import {FavoritesContext} from "../store/context/favorites-context";
import {MEALS} from "../models/data/dummy-data";
import {useAppSelector} from "../store/redux/hooks";

export default function FavoritesScreen() {

    // const favMealsContext = useContext(FavoritesContext)

    const favMealsContext = useAppSelector((state) => state.favMeals);
    const favMeals = MEALS.filter(meal => favMealsContext.ids.includes(meal.id));

    const hasFav = favMeals.length === 0

    function renderNoFav() {
        return (
            <View style={styles.rootContainerStyle}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        )
    }

    return (
        <>
            {hasFav ? renderNoFav() : <MealList meals={favMeals}/>}
        </>
    );
}


const styles = StyleSheet.create({
    rootContainerStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }
})
