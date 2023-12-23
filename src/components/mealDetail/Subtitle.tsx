import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface SubtitleProps {
    text: string
}

export default function Subtitle(props: SubtitleProps) {
  return (
      <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>{props.text}</Text>
      </View>
  );
}


const styles = StyleSheet.create({
    subTitleContainer: {
        padding: 6,
        borderBottomWidth: 2,
        borderBottomColor: "#e2b497",
        marginHorizontal: 12,
        marginVertical: 4
    },
    subTitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    }
})
