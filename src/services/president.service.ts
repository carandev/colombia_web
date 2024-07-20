import type PresidentPagedList from "../data/presidentPagedList";
import { BASE_API_URL } from "../util";

export const getPaginatedPresidents = async (
  page: number,
  pageSize: number,
): Promise<PresidentPagedList> => {
  const response = await fetch(
    `${BASE_API_URL}/api/v1/president/pagedList?page=${page}&pagesize=${pageSize}`,
  );

  const data: PresidentPagedList = await response.json();

  return data;
};
