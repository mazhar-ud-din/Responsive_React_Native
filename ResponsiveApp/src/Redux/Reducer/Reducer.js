import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    CheckData: [],
    CardData: [],
    AllGetData: [],
    CartItems: [],
}

const AuthReducer = createSlice({
    name: 'Beauty',
    initialState,
    reducers: {
        UserLogin: (state, action) => {
            state.UserLogin = action.payload
        },
        CheckData: (state, action) => {
            state.CheckData = action.payload
        },
        CardData: (state, action) => {
            state.CardData = action.payload
        },
        AllGetData: (state, action) => {
            state.AllGetData = action.payload
        },
        AddMyCard: (state, { payload }) => {
            state.CartItems = payload
            console.log('pAYLOAD', payload);
            const {id}=payload            
            console.log('id0==>', id);
            const find = payload.map((item) => { return item.id });
            console.log('id0==>', find);
        }
    },
})

export const { CheckData, UserLogin, CardData, AllGetData, AddMyCard } = AuthReducer.actions
export default AuthReducer.reducer