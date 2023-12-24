import {createSlice} from "@reduxjs/toolkit";



const favSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: [] as string[]
    },
    reducers: {
        addFavorite: (state, action) => {
           state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1)
        }
    }
});


export const favActions = favSlice.actions
export default favSlice.reducer;
