import { AdvancedSearchInput, ByCategorySearchInput, WholeState } from "./type";
import { createAction } from "./utils";
import { initialState } from "./initialState";

const SWITCH_MODE = "SWITCH_MODE";
const CHANGE_ADVANCED_SEARCH_INPUT = "CHANGE_ADVANCED_SEARCH_INPUT";
const CHANGE_CATEGORY_SEARCH_INPUT = "CHANGE_CATEGORY_SEARCH_INPUT";

export const actionCreators = {
  switchMode: ({ mode }: { mode: WholeState["mode"] }) =>
    createAction(SWITCH_MODE, { mode }),
  changeAdvancedSearchInput: ({ input }: { input: AdvancedSearchInput }) =>
    createAction(CHANGE_ADVANCED_SEARCH_INPUT, { input }),
  changeCategorySearchInput: ({ input }: { input: ByCategorySearchInput }) =>
    createAction(CHANGE_CATEGORY_SEARCH_INPUT, { input })
};

export const reducers = (
  state = initialState,
  action: ReturnType<typeof actionCreators[keyof typeof actionCreators]>
): WholeState => {
  switch (action.type) {
    case SWITCH_MODE: {
      return {
        ...state,
        mode: action.payload.mode
      };
    }
    case CHANGE_ADVANCED_SEARCH_INPUT: {
      const { input } = action.payload;
      return {
        ...state,
        advancedSearch: {
          ...state.advancedSearch,
          input
        }
      };
    }
    case CHANGE_CATEGORY_SEARCH_INPUT: {
      const { input } = action.payload;
      return {
        ...state,
        byCategorySearch: {
          ...state.byCategorySearch,
          input
        }
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

export const selectors = {
  getSearchMode,
  getAdvancedSearchInput,
  getByCategorySearchInput
};
