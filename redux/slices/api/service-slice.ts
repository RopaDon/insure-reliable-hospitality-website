import { baseQueryWithReauth } from "./base-slice";
import { toQueryString } from "@/components/utils/utils";
import { ApiMethods, BaseEndpoints } from "@/config/enums/enums";
import { TagDescription, createApi } from "@reduxjs/toolkit/query/react";
import { ActionResult, ApiResult, Country, Job, Pagination, Province, Query } from "@/config/types";

const descriptionTags = ["Service"] as readonly TagDescription<"Service">[] & string[];

export const serviceSlice = createApi({
  reducerPath: "services",
  tagTypes: descriptionTags,
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getCountries: builder.query<ApiResult<Country[]>, any>({
      query: (params) => ({
        method: ApiMethods.GET,
        url: `/${BaseEndpoints.Service}/get-countries`,
      }),
    }),
    getProvincesByCountry: builder.query<ApiResult<Province[]>, any>({
      query: (params) => ({
        method: ApiMethods.GET,
        url: `/${BaseEndpoints.Service}/get-provinces/${params.iso}`,
      }),
    }),

    requestPartnership: builder.mutation<ApiResult<ActionResult>, any>({
      query: (body) => ({
        body,
        method: ApiMethods.POST,
        url: `/${BaseEndpoints.Service}/request/partnership`,
      }),
    }),
  }),
});
export const { useGetCountriesQuery, useGetProvincesByCountryQuery, useRequestPartnershipMutation } = serviceSlice;
