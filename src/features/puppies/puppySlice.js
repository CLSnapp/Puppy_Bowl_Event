import api from "../../store/api";

/*
TODO: Define the following 4 endpoints:
  1. getPuppies (query)
  2. getPuppy (query)
  3. addPuppy (mutation)
  4. deletePuppy (mutation)

The query endpoints should provide the "Puppy" tag.
The mutation endpoints should invalidate the "Puppy" tag.

(Optional) TODO: Write `transformResponse` and `transformErrorResponse`
functions for each endpoint.
*/

const puppyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPuppies: build.query({
      query: () => ({
        url: "/players",
        method: "GET",
      }),
      providesTags: ["Puppy"],
    }),

    getPuppy: build.query({
      query: (id) => ({
        url: `/players/${id}`,
        method: "GET",
      }),
      providesTags: ["Puppy"],
    }),

    addPuppy: build.mutation({
      query: ({ name, breed }) => ({
        url: "/players",
        method: "POST",
        body: {
          name,
          breed,
        },
      }),
      invalidatesTags: ["Puppy"],
    }),

    deletePuppy: build.mutation({
      query: (id) => ({
        url: `/players/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Puppy"],
    }),
  }),
});

export const {
  useGetPuppiesQuery,
  useGetPuppyQuery,
  useAddPuppyMutation,
  useDeletePuppyMutation,
} = puppyApi;
