import { configureStore } from '@reduxjs/toolkit';
import { EventsApi } from '../services/EventsApi';

export default configureStore({
    reducer: {
        [EventsApi.reducerPath]: EventsApi.reducer,
    },
});