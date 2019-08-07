import { AdvancedSearchInput, WholeState } from "./type";
import { createAction } from "./utils";

const initialState: WholeState = {
  mode: "by-category",
  advancedSearch: {
    input: {
      bookName: "",
      author: "",
      place: "",
      timePeriod: "all",
      connectDifferentType: true,
      searchKeyword: "",
      searchKeywordLogic: "connect",
      secondaryKeyWord: ""
    },
    contents: {}
  }
};

const SWITCH_MODE = "SWITCH_MODE";
const CHANGE_ADVANCED_SEARCH_INPUT = "CHANGE_ADVANCED_SEARCH_INPUT";

export const actionCreators = {
  switchMode: ({ mode }: { mode: WholeState["mode"] }) =>
    createAction(SWITCH_MODE, { mode }),
  changeAdvancedSearchInput: ({ input }: { input: AdvancedSearchInput }) =>
    createAction(CHANGE_ADVANCED_SEARCH_INPUT, { input })
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

export const selectors = {
  getSearchMode,
  getAdvancedSearchInput
};
