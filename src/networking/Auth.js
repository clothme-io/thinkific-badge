import axiosClient from "./axiosClient";

export const checkTenantExist = async (gId) => {
  const tgid = gId.queryKey[0];
  try {
    const response = await axiosClient.get(
      `/app/check-tenant-exist?tgid=${tgid}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
