import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:5001' }),
    reducerPath: "adminApi",
    tagTypes:["User"],
    endpoints:(build)=>({
        getUser:build.query({
            query:(id)=>`/general/user/${id}`,
            providesTages:["User"]
        }),
        getProducts:build.query({
            query:()=>`/client/Products`,
            providesTages:["Products"]
        }),
        getCustomers:build.query({
            query:()=>`/client/customers`,
            providesTages:["Customers"]
        }),
        getTransactions: build.query({
            query: ({ page, pageSize, sort, search }) => ({
              url: "client/transactions",
              method: "GET",
              params: { page, pageSize, sort, search },
            }),
            providesTags: ["Transactions"],
          }),
          getGeography:build.query({
            query:()=>`/client/geography`,
            providesTages:["Geography"]
        }),
        getSales:build.query({
            query:()=>`/sales//sales`,
            providesTages:["Sales"]
        }),
    })
})

export const{
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetGeographyQuery,
    useGetSalesQuery
}=api;