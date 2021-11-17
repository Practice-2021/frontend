import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        teacher: null
    },
    reducers: {
        setTeacher(state,action){
            state.teacher = action.payload;
        }
    },
})

export const actions = {...profileSlice.actions}
export default profileSlice.reducer