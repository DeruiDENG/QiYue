import { SearchMode, WholeState } from "../type";
import { createAction } from "../utils";

const SWITCH_MODE = "SWITCH_MODE";

export const actionCreators = {
  switchMode: ({ mode }: { mode: WholeState["mode"] }) =>
    createAction(SWITCH_MODE, { mode }),
};

export const reducers = (
  state: WholeState["mode"] = SearchMode.ByCategory,
  action: ReturnType<typeof actionCreators[keyof typeof actionCreators]>
): WholeState["mode"] => {
  switch (action.type) {
    case SWITCH_MODE: {
      return action.payload.mode;
    }
    default:
      return state;
  }
};

function getSearchMode(state: WholeState): WholeState["mode"] {
  return state.mode;
}

export const selectors = {
  getSearchMode,
};
