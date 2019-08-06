import { WholeState } from "./type";

const initialState: WholeState = {
  mode: "by-category"
};

const SWITCH_MODE = "SWITCH_MODE";

export const actionCreators = {
  switchMode: ({ mode }: { mode: WholeState["mode"] }) => ({
    type: SWITCH_MODE,
    payload: { mode }
  })
};

export const reducers = (
  state = initialState,
  action: ReturnType<typeof actionCreators[keyof typeof actionCreators]>
): WholeState => {
  const { type, payload } = action;
  switch (type) {
    case SWITCH_MODE: {
      return {
        ...state,
        mode: payload.mode
      };
    }
    default:
      return state;
  }
};

function getSearchMode(state: WholeState): WholeState["mode"] {
  return state.mode;
}

export const selectors = {
  getSearchMode
};
