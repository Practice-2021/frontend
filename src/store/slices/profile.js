import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        id: null,
        teacher: null
    },
    reducers: {
        setId(state,action){
            state.id = action.payload;
        },
        setTeacher(state,action){
            state.teacher = action.payload;
        }
    },
})

export const actions = {...profileSlice.actions}
export default profileSlice.reducer