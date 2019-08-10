export enum SearchMode {
  ByCategory = "by-category",
  FullText = "by-full-text",
  Advanced = "advanced",
}

export enum TimePeriod {
  Qing = "清代",
  Ming = "明代",
  MinGuo = "民国",
  All = "所有",
}

export interface WholeState {
  mode: SearchMode;
  advancedSearch: {
    input: AdvancedSearchInput;
    savedInput: AdvancedSearchInput;
    contents: AdvancedContractAbstract[];
    isContentLoading: false;
    pagination: Pagination;
  };
  byCategorySearch: {
    input: ByCategorySearchInput;
    savedInput: ByCategorySearchInput;
    contents: { [key: number]: ContractAbstract[] };
    isContentLoading: false;
    pagination: Pagination;
  };
}

export interface Pagination {
  current: number;
  total: number;
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
  time: TimePeriod;
  year?: number;
  location: string;
}

export interface AdvancedContractAbstract {
  id: number;
  name: string;
  time: TimePeriod;
  year?: number;
  location?: string;
  sentences: string[];
}

