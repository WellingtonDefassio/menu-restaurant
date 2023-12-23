import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ListProps {
    items: any[]
}

export default function List(props: ListProps) {
  return (
      props.items.map(item => {
          return (
              <View key={item} style={styles.listItem}>
                  <Text style={styles.itemText}>{item}</Text>
              </View>

          )
      })
  );
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: "#e2b497"
    },
    itemText: {
        color: "#351401",
        textAlign: "center"
    }
})
