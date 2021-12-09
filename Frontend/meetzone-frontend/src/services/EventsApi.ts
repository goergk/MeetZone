import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Creator {
    id: number;
    username: string;
    date_joined: Date;
    trust_index: number;
}

export interface Event {
    id: number;
    creator: Creator;
    creation_date: Date;
    edit_date?: any;
    closing_date?: any;
    closed: boolean;
    type: string;
    number_of_people: number;
    people_needed: number;
    note: string;
}

export interface RootObject {
    events: Event[];
    length: number;
}

const baseUrl: string = 'http://127.0.0.1:8000/api/';

const createRequest = (url: string) => ({ url });

export const EventsApi = createApi({
    reducerPath: 'eventsAPI',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getEvents: builder.query<RootObject, string>({
            query: (type) => createRequest(`/events/${type}/`),
        }),
    })
});

export const { 
    useGetEventsQuery
} = EventsApi;