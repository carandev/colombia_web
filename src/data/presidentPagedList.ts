import type President from "./president";

export default interface PresidentPagedList {
  page: number;
  pageSize: number;
  totalRecords: number;
  pageCount: number;
  data: President[];
}
