import {WholeState} from "./type";

export const initialState: WholeState = {
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
    savedInput: {
      bookName: "",
      author: "",
      place: "",
      timePeriod: "all",
      connectDifferentType: true,
      searchKeyword: "",
      searchKeywordLogic: "connect",
      secondaryKeyWord: ""
    },
    contents: {},
    isContentLoading: false,
  },
  byCategorySearch: {
    input: {
      checkedKeys: []
    },
    savedInput: {
      checkedKeys: []
    },
    contents: {},
    isContentLoading: false
  }
};
