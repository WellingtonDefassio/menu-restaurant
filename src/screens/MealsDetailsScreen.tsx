import React, {useLayoutEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Meal from "../models/meal";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/mealDetail/Subtitle";
import List from "../components/mealDetail/List";
import IconButton from "../components/IconButton";
import {useAppDispatch, useAppSelector} from "../store/redux/hooks";
import {favActions} from "../store/redux/favorites";

export default function MealsDetailsScreen(props: any) {
    const meal: Meal = props.route.params.meal
    let appDispatch = useAppDispatch();

    // const favMealsContext = useContext(FavoritesContext)

    const favMealsContext = useAppSelector((state) => state.favMeals);
    const mealsIsFavorite = favMealsContext.ids.includes(meal.id)


    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => renderFavIcon()
        });
    }, [props.navigation, changeFavoriteStatus]);

    function renderFavIcon() {
        return (
            <IconButton onPress={changeFavoriteStatus} icon={mealsIsFavorite ? "star" : "star-outline"} color={"white"}/>
        )
    }

    function changeFavoriteStatus() {
        if(mealsIsFavorite) {
            // favMealsContext.removeFavorite(meal.id)
            appDispatch(favActions.removeFavorite({id: meal.id}))
        } else {
            // favMealsContext.addFavorite(meal.id)
            appDispatch(favActions.addFavorite({id: meal.id}))
        }
    }

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: meal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{meal.title}</Text>
            <MealDetails meal={meal} textStyles={styles.detailText}/>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle text={"Ingredients"}/>
                    <List items={meal.ingredients}/>
                    <Subtitle text={"Steps"}/>
                    <List items={meal.steps}/>
                </View>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white"
    },
    detailText: {
        color: "white"
    },
    subTitleContainer: {
        padding: 6,
        borderBottomWidth: 2,
        borderBottomColor: "#e2b497",
        marginHorizontal: 24,
        marginVertical: 4
    },
    subTitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    listOuterContainer: {
        alignItems: "center"
    },
    listContainer: {
        width: '80%'
    }
})
