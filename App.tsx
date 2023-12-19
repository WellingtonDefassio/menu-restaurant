import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import CategoriesScreens from "./src/screens/CategoriesScreens";

export default function App() {
    return (
        <View>
            <StatusBar style={"light"}/>
            <CategoriesScreens/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
