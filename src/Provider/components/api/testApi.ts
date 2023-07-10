import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_CHANNEL = 'web';

export const testApi = createApi({
  reducerPath: "testApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" ,prepareHeaders(headers){
    headers.set('x-cict-channels', API_CHANNEL)
  }}),
  endpoints: (builder) => ({
    getAllTestData: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useGetAllTestDataQuery } = testApi;
