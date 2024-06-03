import { getNextInternalQuery } from "next/dist/server/request-meta";

export interface Search {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
