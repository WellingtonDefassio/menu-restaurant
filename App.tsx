
import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import CategoriesScreens from "./src/screens/CategoriesScreens";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";
import MealsDetailsScreen from "./src/screens/MealsDetailsScreen";
import {createDrawerNavigator} from "@react-navigation/drawer"
import FavoritesScreen from "./src/screens/FavoritesScreen";
import {Ionicons} from "@expo/vector-icons";

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator(){
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: {backgroundColor: "#351401"},
            headerTintColor: "white",
            sceneContainerStyle: {backgroundColor: "#3f2f25"},
            headerTitleAlign: "center",
            drawerContentStyle: {backgroundColor: "#351401"},
            drawerInactiveTintColor: "white",
            drawerActiveTintColor: "#351401",
            drawerActiveBackgroundColor: "#b28568"
        }}>
            <Drawer.Screen
                name={"Categories"}
                component={CategoriesScreens}
                options={{
                    title: "All Categories",
                    drawerIcon: ({size, color}) => <Ionicons size={size} color={color} name={"list"}/>
                }}
            />
            <Drawer.Screen
                name={"Favorites"}
                component={FavoritesScreen}
                options={{
                    drawerIcon: ({size, color}) => <Ionicons size={size} color={color} name={"star"}/>
                }}
            />
        </Drawer.Navigator>
    )
}


export default function App() {
    return (
        <>
            <StatusBar style={"light"}/>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: {backgroundColor: "#351401"},
                    headerTintColor: "white",
                    contentStyle: {backgroundColor: "#3f2f25"},
                    headerTitleAlign: "center"
                }}>
                    <Stack.Screen
                        name={"CategoriesStack"}
                        component={DrawerNavigator}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen name={"Meals"} component={MealsOverviewScreen}/>
                    <Stack.Screen name={"Details"} component={MealsDetailsScreen} options={{title: "Meal Details" }}/>
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
