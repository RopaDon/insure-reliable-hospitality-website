import { AdminRole } from "./enums/enums";

export interface ApiResult<T> {
  data: T;
  path: string;
  success: boolean;
  timestamp: string;
  errors: ApiError[];
  statusCode: number;
}

export interface Query {
  limit: number;
  page: number;
  searchTerm?: string | null;
}

export interface DropdownOption {
  id: any;
  value: any;
}

export interface Pagination<T> {
  items: T[];
  meta: PaginationMeta;
}

export interface PaginationMeta {
  total: number;
  lastPage: number;
  currentPage: number;
  perPage: number;
  prev: number | null;
  next: number | null;
}

export interface ApiResult<T> {
  data: T;
  path: string;
  success: boolean;
  timestamp: string;
  errors: ApiError[];
  statusCode: number;
}

export interface ApiError {
  type: string;
  message: string;
}

export interface Waitlist {
  id: number;

  firstName: string;

  lastName: string;

  email: string;

  phoneNumber: string;

  industry: Industry;

  jobExperienceLevel: JobExperienceLevel;

  createdOn: string;
}

export interface JobExperienceLevel {
  id: number;
  name: string;
  description: string;
}

export interface Status {
  id: number;
  name: string;
  description: string;
}

export interface Job {
  id: number;
  name: string;
  createdOn: string;
  createdBy?: string;
  description: string;
}

export interface Document {
  id: number;
  name: string;
  file: string;
  type: string;
  description: string;
  size: number;
  createdOn: string;
  createdBy?: string;
}

export interface Industry {
  id: number;
  name: string;
  description: string;
}

export interface Country {
  name: string;
  code: string;
}

export interface Province {
  name: string;
  code: string;
  country: string;
}

export interface ActionResult {
  action: string;
}

export interface OptionSets {
  id: number;

  name: string;

  description: string;
}
