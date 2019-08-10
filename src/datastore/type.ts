export type SearchMode = "by-category" | "by-full-text" | "advanced";

export type TimePeriod = "qing" | "ming" | "minguo" | "all";

export interface WholeState {
  mode: SearchMode;
  advancedSearch: {
    input: AdvancedSearchInput;
    savedInput: AdvancedSearchInput;
    contents: { [key: number]: ContractAbstract[] };
    isContentLoading: false;
  };
  byCategorySearch: {
    input: ByCategorySearchInput;
    savedInput: ByCategorySearchInput;
    contents: { [key: number]: ContractAbstract[] };
    isContentLoading: false;
  };
}

export interface AdvancedSearchInput {
  bookName: string;
  author: string;
  place: string;
  timePeriod: TimePeriod;
  connectDifferentType: boolean;
  searchKeyword: string;
  searchKeywordLogic: "or" | "and" | "not" | "connect";
  secondaryKeyWord: string;
}

export interface ByCategorySearchInput {
  checkedKeys: string[];
}

export interface ContractAbstract {
  id: number;
  name: string;
  author: string;
  time: string;
  location: string;
}
