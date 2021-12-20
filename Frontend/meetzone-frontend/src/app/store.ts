import { configureStore } from '@reduxjs/toolkit';
import { EventsApi } from '../services/EventsApi';
import loginReducer  from '../features/login';
import centerReducer  from '../features/center';

export const store =  configureStore({
    reducer: {
        Center: centerReducer,
        Login: loginReducer,        
        [EventsApi.reducerPath]: EventsApi.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch