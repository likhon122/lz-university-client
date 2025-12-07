import baseApi from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicSemester: builder.query({
      query: () => ({
        url: "academic-semesters/get-all-academic-semesters",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllAcademicSemesterQuery } = academicSemesterApi;
