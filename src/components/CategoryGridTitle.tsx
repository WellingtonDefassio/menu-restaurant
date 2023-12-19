import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Category from "../models/category";

interface CategoryGridTitleProps {
    category: Category
    onPress: () => void
}

export default function CategoryGridTitle(props: CategoryGridTitleProps) {
    return (
        <View style={styles.gridItem}>
            <Pressable
                style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={props.onPress}
            >
                <View style={[styles.innerContainer,{backgroundColor: props.category.color}]}>
                    <Text style={styles.title}>{props.category.title}</Text>
                </View>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        elevation: 6,
        borderRadius: 8,
        shadowColor: "black",
        backgroundColor: "white",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        overflow: "hidden"
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    }
})
