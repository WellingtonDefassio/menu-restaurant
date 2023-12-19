import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Category from "../models/category";

interface CategoryGridTitleProps {
    category: Category
}

export default function CategoryGridTitle(props: CategoryGridTitleProps) {
    return (
        <View>
            <Pressable>
                <View>
                    <Text>{props.category.title}</Text>
                </View>
            </Pressable>
        </View>
    );
}
