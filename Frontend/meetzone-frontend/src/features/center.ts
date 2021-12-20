import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CenterState {
  center: {
    lat: number,
    lng: number
  },
  zoom: number
}

let initialState: CenterState = {
  center: { lat: 51.107, lng: 17.04 },
  zoom: 14
}

export const centerSlice = createSlice({
  name: 'Center',
  initialState,
  reducers: {
    setZoom: (state, action: PayloadAction<number>) => {
      state.zoom = action.payload;
    },
    setCenter: (state, action: PayloadAction<{lat: number,lng: number}>) => {
      state.center = action.payload;
    },    
  },
})

export const { setCenter, setZoom } = centerSlice.actions;
export default centerSlice.reducer;