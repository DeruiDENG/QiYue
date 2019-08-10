import {
  ByCategorySearchInput,
  ByCategorySearchResult,
  WholeState,
} from "../type";
import { createAction } from "../utils";
import { initialState } from "./initialState";

const CHANGE_CATEGORY_SEARCH_INPUT = "CHANGE_CATEGORY_SEARCH_INPUT";
const CHANGE_CATEGORY_SEARCH_PAGINATION = "CHANGE_CATEGORY_SEARCH_PAGINATION";

export const actionCreators = {
  changeCategorySearchInput: ({ input }: { input: ByCategorySearchInput }) =>
    createAction(CHANGE_CATEGORY_SEARCH_INPUT, { input }),
  changeCategorySearchPagination: (pageNumber: number) =>
    createAction(CHANGE_CATEGORY_SEARCH_PAGINATION, { pageNumber }),
};

export const reducers = (
  state = initialState,
  action: ReturnType<typeof actionCreators[keyof typeof actionCreators]>
): WholeState["byCategorySearch"] => {
  switch (action.type) {
    case CHANGE_CATEGORY_SEARCH_INPUT: {
      const { input } = action.payload;
      return {
        ...state,
        input,
      };
    }
    case CHANGE_CATEGORY_SEARCH_PAGINATION: {
      const { pageNumber } = action.payload;
      return {
        ...state,
        pagination: {
          ...state.pagination,
          current: pageNumber,
        },
      };
    }
    default:
      return state;
  }
};

function getByCategorySearchInput(state: WholeState): ByCategorySearchInput {
  return state.byCategorySearch.input;
}

function getByCategorySearchResult(state: WholeState): ByCategorySearchResult {
  const { pagination, contents } = state.byCategorySearch;
  const { current } = pagination;
  const result = contents[current] || [];
  return {
    pagination,
    result,
  };
}

function isLoadingByCategorySearchResult(state: WholeState): boolean {
  return state.byCategorySearch.isContentLoading;
}

export const selectors = {
  getByCategorySearchInput,
  getByCategorySearchResult,
  isLoadingByCategorySearchResult,
};
