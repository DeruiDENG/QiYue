import {
  AdvancedContractAbstract,
  AdvancedSearchInput,
  Pagination,
  WholeState,
} from "../type";
import { createAction } from "../utils";
import { initialState } from "./initialState";

const CHANGE_INPUT = "ADVANCED_SEARCH__CHANGE_INPUT";
const CHANGE_RESULT_PAGINATION = "ADVANCED_SEARCH__CHANGE_RESULT_PAGINATION";
const SHOW_ARTICLE_DETAILS = "ADVANCED_SEARCH__SHOW_ARTICLE_DETAILS";
const CLOSE_ARTICLE_DETAILS = "ADVANCED_SEARCH__CLOSE_ARTICLE_DETAILS";

export const actionCreators = {
  changeAdvancedSearchInput: ({ input }: { input: AdvancedSearchInput }) =>
    createAction(CHANGE_INPUT, { input }),
  changeCategorySearchPagination: (pageNumber: number) =>
    createAction(CHANGE_RESULT_PAGINATION, { pageNumber }),
  showArticleDetails: (articleId: string) =>
    createAction(SHOW_ARTICLE_DETAILS, { articleId }),
  closeArticleDetails: () => createAction(CLOSE_ARTICLE_DETAILS, {}),
};

export const reducers = (
  state = initialState,
  action: ReturnType<typeof actionCreators[keyof typeof actionCreators]>
): WholeState["advancedSearch"] => {
  switch (action.type) {
    case CHANGE_INPUT: {
      const { input } = action.payload;
      return {
        ...state,
        input,
      };
    }
    case CHANGE_RESULT_PAGINATION: {
      const { pageNumber } = action.payload;
      return {
        ...state,
        pagination: {
          ...state.pagination,
          current: pageNumber,
        },
      };
    }
    case SHOW_ARTICLE_DETAILS: {
      const { articleId } = action.payload;
      return {
        ...state,
        articleDetails: {
          isPopup: true,
          articleId,
        },
      };
    }
    case CLOSE_ARTICLE_DETAILS: {
      return {
        ...state,
        articleDetails: {
          ...state.articleDetails,
          isPopup: false,
        },
      };
    }
    default:
      return state;
  }
};

export type AdvancedSearchContract = Omit<
  AdvancedContractAbstract,
  "sentences"
> & {
  sentence: string;
  key: string;
};

interface AdvancedSearchResult {
  pagination: Pagination;
  result: AdvancedSearchContract[];
}

function getAdvancedSearchContracts(
  contracts: AdvancedContractAbstract[]
): AdvancedSearchContract[] {
  return contracts
    .map(contract =>
      contract.sentences.map((sentence, index) => ({
        ...contract,
        sentence,
        key: `${contract.id}-${index}`,
      }))
    )
    .flat();
}

function getAdvancedSearchResult(state: WholeState): AdvancedSearchResult {
  const { pagination, contents } = state.advancedSearch;
  const PAGE_SIZE = 10;
  const { current } = pagination;
  const result = getAdvancedSearchContracts(contents);
  const currentPageResult = result.slice(
    (current - 1) * PAGE_SIZE,
    current * PAGE_SIZE
  );

  return {
    pagination,
    result: currentPageResult,
  };
}

function getAdvancedSearchInput(state: WholeState): AdvancedSearchInput {
  return state.advancedSearch.input;
}

function isContentLoading(state: WholeState): boolean {
  return state.advancedSearch.isContentLoading;
}

function getInputHighlightRegex(state: WholeState): RegExp {
  const { searchKeyword } = state.advancedSearch.savedInput;
  return new RegExp(`(${searchKeyword})`);
}

function getArticleDetailsInfo(state: WholeState) {
  return state.advancedSearch.articleDetails;
}

export const selectors = {
  getAdvancedSearchInput,
  getAdvancedSearchResult,
  isContentLoading,
  getInputHighlightRegex,
  getArticleDetailsInfo,
};
