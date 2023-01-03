import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:"https://shazam.p.rapidapi.com/",
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", "ba386d825fmsh129e9e8af38b6b2p1edad5jsn97932d7d255b");

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => "charts/track?locale=en-US&pageSize=50&startFrom=0"}),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;