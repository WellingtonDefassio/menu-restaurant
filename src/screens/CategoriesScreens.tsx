import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {CATEGORIES} from "../models/data/dummy-data";
import Category from "../models/category";
import CategoryGridTitle from "../components/CategoryGridTitle";

interface CategoriesScreensProps {
    navigation: any
}

export default function CategoriesScreens(props: CategoriesScreensProps) {

    function pressHandler(item: Category) {
        props.navigation.navigate("Meals", {categoryId: item.id})
    }

    function renderCategoryItem(item: Category) {
        return (
            <CategoryGridTitle category={item} onPress={() => pressHandler(item)}></CategoryGridTitle>
        )
    }

    return (
        <View>
            <FlatList
                data={CATEGORIES}
                renderItem={({item}) => renderCategoryItem(item)}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    );
}
