export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  itemsPerPages: number;
  hasMore: boolean;
}
