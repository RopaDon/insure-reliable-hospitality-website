import { getDomain } from "@/src/components/utils/utils";
import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

export const baseQuery = fetchBaseQuery({
  validateStatus(response, body) {
    return [200, 201, 400, 409, 404, 401].includes(response.status);
  },
  baseUrl: getDomain(),
  prepareHeaders: (headers, { getState, endpoint }) => {
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  // console.log(args)
  let result = await baseQuery(args, api, extraOptions);
  if (result.meta?.response?.status === 401 || result.meta?.response?.status === 403) {
  }
  return result;
};
