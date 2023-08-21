import axios, { AxiosResponse } from "axios";
import { DataResponse } from "../interfaces/dataResponse";

const API_BASE_URL = "http://localhost:3100";

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const getData = async (
): Promise<DataResponse> => {
  // Api call using axios get data for application
  try {
    const response: AxiosResponse<DataResponse> =
      await apiService.get<DataResponse>(`/get-data`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(error.response.data.error);
      }
    }
    throw new Error("Failed to get data");
  }
};
