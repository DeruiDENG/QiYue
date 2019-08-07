import { useSelector } from "react-redux";
import { selectors } from "../datastore";

export function useSearchMode() {
  return useSelector(selectors.getSearchMode);
}
