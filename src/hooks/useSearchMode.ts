import { useSelector } from "react-redux";
import { selectors } from "../datastore/searchMode";

export function useSearchMode() {
  return useSelector(selectors.getSearchMode);
}
