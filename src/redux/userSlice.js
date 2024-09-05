import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        email: '',
        password: '',
        mobile: '',
    },
    reducers: {
        registerUser: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.mobile = action.payload.mobile;
        },
    },
});

export const { registerUser } = userSlice.actions;
export default userSlice.reducer;
