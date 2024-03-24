import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers:{
        setNotification1(state, action){
            return action.payload
        },
        clearNotification(state, action){
            return ''
        }
    }
})

export const { setNotification1, clearNotification } = notificationSlice.actions

export const setNotification = (message, seconds) => {
    return async dispatch => {
        dispatch(setNotification1(message))
        setTimeout(() => {
            dispatch(clearNotification())
        }, seconds * 1000)
    }
}

export default notificationSlice.reducer