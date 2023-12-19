import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {CATEGORIES} from "../models/data/dummy-data";
import Category from "../models/category";
import CategoryGridTitle from "../components/CategoryGridTitle";


export default function CategoriesScreens() {

    function renderCategoryItem(item: Category) {
            return (
                <CategoryGridTitle category={item}></CategoryGridTitle>
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
