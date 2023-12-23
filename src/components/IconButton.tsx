import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Ionicons} from "@expo/vector-icons"


interface IconButtonIcon {
    onPress: () => void
    icon: any
    color: string
}

export default function IconButton(props: IconButtonIcon) {
    return (
        <Pressable
            onPress={props.onPress}
            style={({pressed}) => pressed && styles.pressed}
        >
            <Ionicons name={props.icon} size={24} color={props.color}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})
