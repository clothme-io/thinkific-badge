import axiosClient from "./axiosClient";

export const getAllCourses = async (gId) => {
  console.log("TenantId====:", gId);
  const tenatId = gId.queryKey[1];
  try {
    const response = await axiosClient.get(
      `/api/tenant/course/get-all-course?tenantGid=${tenatId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleCourse = (courseId) => {};
