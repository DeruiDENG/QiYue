import {
  ByCategorySearchInput,
  ContractAbstract,
  Pagination,
  WholeState,
} from "../type";
import { createAction } from "../utils";
import { initialState } from "./initialState";

const CHANGE_INPUT = "CATEGORY_SEARCH__CHANGE_INPUT";
const CHANGE_RESULT_PAGINATION = "CATEGORY_SEARCH__CHANGE_RESULT_PAGINATION";

export const actionCreators = {
  changeCategorySearchInput: ({ input }: { input: ByCategorySearchInput }) =>
    createAction(CHANGE_INPUT, { input }),
  changeCategorySearchPagination: (pageNumber: number) =>
    createAction(CHANGE_RESULT_PAGINATION, { pageNumber }),
};

export const reducers = (
  state = initialState,
  action: ReturnType<typeof actionCreators[keyof typeof actionCreators]>
): WholeState["byCategorySearch"] => {
  switch (action.type) {
    case CHANGE_INPUT: {
      const { input } = action.payload;
      return {
        ...state,
        input,
      };
    }
    case CHANGE_RESULT_PAGINATION: {
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

interface ByCategorySearchResult {
  pagination: Pagination;
  result: ContractAbstract[];
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
