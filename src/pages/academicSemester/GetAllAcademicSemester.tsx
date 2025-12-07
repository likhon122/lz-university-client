import { useGetAllAcademicSemesterQuery } from "../../redux/features/academicSemester/academicSemesterApi";

const GetAllAcademicSemester = () => {
  const { data } = useGetAllAcademicSemesterQuery(undefined);

  console.log(data);
  return (
    <div>
      <h1>This is get all academic Semester page</h1>
    </div>
  );
};

export default GetAllAcademicSemester;
