export type SearchMode = "by-category" | "by-full-text" | "advanced";

export type TimePeriod = "qing" | "ming" | "minguo" | "all";

export interface WholeState {
  mode: SearchMode;
  advancedSearch: {
    input: AdvancedSearchInput;
    contents: { [key: number]: ContractAbstract[] };
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

export interface ContractAbstract {
  id: number;
  name: string;
  author: string;
  time: string;
  location: string;
}
