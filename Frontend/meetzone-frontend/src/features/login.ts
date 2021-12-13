import { createSlice } from '@reduxjs/toolkit'

export interface LoginState {
  login: boolean
}

let initialState: LoginState = {
  login: false,
}

if(sessionStorage.getItem("isLogged")){
  initialState = {
    login: true
  }
}

export const loginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    signIn: (state) => {
      state.login = true;
      sessionStorage.setItem("isLogged", 'true');
    },
    signOut: (state) => {
      state.login = false
      sessionStorage.removeItem('isLogged');
    },
  },
})

export const { signIn, signOut } = loginSlice.actions;
export default loginSlice.reducer;