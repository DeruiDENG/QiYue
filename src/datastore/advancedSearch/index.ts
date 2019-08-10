import { AdvancedSearchInput, WholeState } from "../type";
import { createAction } from "../utils";
import { initialState } from "./initialState";

const CHANGE_ADVANCED_SEARCH_INPUT = "CHANGE_ADVANCED_SEARCH_INPUT";

export const actionCreators = {
  changeAdvancedSearchInput: ({ input }: { input: AdvancedSearchInput }) =>
    createAction(CHANGE_ADVANCED_SEARCH_INPUT, { input }),
};

export const reducers = (
  state = initialState,
  action: ReturnType<typeof actionCreators[keyof typeof actionCreators]>
): WholeState["advancedSearch"] => {
  switch (action.type) {
    case CHANGE_ADVANCED_SEARCH_INPUT: {
      const { input } = action.payload;
      return {
        ...state,
        input,
      };
    }
    default:
      return state;
  }
};


function getAdvancedSearchInput(state: WholeState): AdvancedSearchInput {
  return state.advancedSearch.input;
}

export const selectors = {
  getAdvancedSearchInput,
};
