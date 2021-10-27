import { createSlice } from '@reduxjs/toolkit'

const listSlice = createSlice({
    name: 'list',
    initialState: {
        search: ""
    },
    reducers: {
        setSearch(state,action){
            state.search = action.payload;
        }
    },
})

export const actions = {...listSlice.actions}
export default listSlice.reducer