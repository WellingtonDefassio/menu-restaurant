import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import CategoriesScreens from "./src/screens/CategoriesScreens";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator()


export default function App() {
    return (
        <>
            <StatusBar style={"light"}/>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: {backgroundColor: "#351401"},
                    headerTintColor: "white",
                    contentStyle: {backgroundColor: "#3f2f25"}
                }}>
                    <Stack.Screen
                        name={"Categories"}
                        component={CategoriesScreens}
                        options={{
                            title: "All Categories",
                        }}
                    />
                    <Stack.Screen name={"Meals"} component={MealsOverviewScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
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
