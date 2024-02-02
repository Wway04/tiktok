import * as request from "../utils/httpRequest";

export const search = async (path, params = {}) => {
  try {
    const response = request.get(`'${path}'`, { params });
    return response.data;
  } catch (error) {
    console.log("🚀 ~ search ~ error:", error);
  }
};
