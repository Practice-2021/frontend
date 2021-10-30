import { createSlice } from '@reduxjs/toolkit'

const listSlice = createSlice({
    name: 'list',
    initialState: {
        search: "",
        teachers: []
    },
    reducers: {
        setSearch(state,action){
            state.search = action.payload;
        },
        setTeachers(state,action){
            state.teachers = action.payload;
        }
    },
})

export const actions = {...listSlice.actions}
export default listSlice.reducer