import {createContext, useState} from "react";

export const FavoritesContext = createContext({
    ids: [] as string[],
    addFavorite: (id: string) => {
    },
    removeFavorite: (id: string) => {
    },
});

export default function FavoritesContextProvider({children}: any) {

    const [mealsId, setMealsId] = useState<string[]>([])

    function addFavorite(id: string) {
        setMealsId((current) => [...current, id])
    }

    function removeFavorite(id: string) {
        setMealsId((current) => current.filter(item => item !== id))
    }

    const value = {
        ids: mealsId,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}
