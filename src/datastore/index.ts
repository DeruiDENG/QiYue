import {
  AdvancedSearchInput,
  ByCategorySearchInput,
  ByCategorySearchResult,
  WholeState,
} from "./type";
import { createAction } from "./utils";
import { initialState } from "./initialState";

const SWITCH_MODE = "SWITCH_MODE";
const CHANGE_ADVANCED_SEARCH_INPUT = "CHANGE_ADVANCED_SEARCH_INPUT";
const CHANGE_CATEGORY_SEARCH_INPUT = "CHANGE_CATEGORY_SEARCH_INPUT";
const CHANGE_CATEGORY_SEARCH_PAGINATION = "CHANGE_CATEGORY_SEARCH_PAGINATION";

export const actionCreators = {
  switchMode: ({ mode }: { mode: WholeState["mode"] }) =>
    createAction(SWITCH_MODE, { mode }),
  changeAdvancedSearchInput: ({ input }: { input: AdvancedSearchInput }) =>
    createAction(CHANGE_ADVANCED_SEARCH_INPUT, { input }),
  changeCategorySearchInput: ({ input }: { input: ByCategorySearchInput }) =>
    createAction(CHANGE_CATEGORY_SEARCH_INPUT, { input }),
  changeCategorySearchPagination: (pageNumber: number) =>
    createAction(CHANGE_CATEGORY_SEARCH_PAGINATION, { pageNumber }),
};

export const reducers = (
  state = initialState,
  action: ReturnType<typeof actionCreators[keyof typeof actionCreators]>
): WholeState => {
  switch (action.type) {
    case SWITCH_MODE: {
      return {
        ...state,
        mode: action.payload.mode,
      };
    }
    case CHANGE_ADVANCED_SEARCH_INPUT: {
      const { input } = action.payload;
      return {
        ...state,
        advancedSearch: {
          ...state.advancedSearch,
          input,
        },
      };
    }
    case CHANGE_CATEGORY_SEARCH_INPUT: {
      const { input } = action.payload;
      return {
        ...state,
        byCategorySearch: {
          ...state.byCategorySearch,
          input,
        },
      };
    }
    case CHANGE_CATEGORY_SEARCH_PAGINATION: {
      const { pageNumber } = action.payload;
      return {
        ...state,
        byCategorySearch: {
          ...state.byCategorySearch,
          pagination: {
            ...state.byCategorySearch.pagination,
            current: pageNumber,
          },
        },
      };
    }
    default:
      return state;
  }
};

function getSearchMode(state: WholeState): WholeState["mode"] {
  return state.mode;
}

function getAdvancedSearchInput(state: WholeState): AdvancedSearchInput {
  return state.advancedSearch.input;
}

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
  getSearchMode,
  getAdvancedSearchInput,
  getByCategorySearchInput,
  getByCategorySearchResult,
  isLoadingByCategorySearchResult,
};
