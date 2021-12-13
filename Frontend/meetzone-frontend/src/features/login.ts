import { createSlice } from '@reduxjs/toolkit'

export interface LoginState {
  login: boolean
}

const initialState: LoginState = {
  login: false,
}

export const loginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    signIn: (state) => {
      state.login = true
    },
    signOut: (state) => {
      state.login = false
    },
  },
})

export const { signIn, signOut } = loginSlice.actions;
export default loginSlice.reducer;