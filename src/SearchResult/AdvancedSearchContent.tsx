import React, { Fragment, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, selectors } from "../datastore/advancedSearch";
import { Button, Table } from "antd";
import { PaginationConfig } from "antd/es/pagination";
import ResultSentence from "./ResultSentence";
import ArticleDetailsDialog from "./ArticleDetails/ArticleDetailsDialog";

const AdvancedSearchContent = () => {
  const isContentLoading = useSelector(selectors.isContentLoading);
  const resultHighlightRegex = useSelector(selectors.getInputHighlightRegex);
  const dispatch = useDispatch();
  const onChange = useCallback((pagination: PaginationConfig) => {
    dispatch(actionCreators.changeCategorySearchPagination(pagination.current));
  }, []);
  const { result: contracts, pagination } = useSelector(
    selectors.getAdvancedSearchResult
  );

  const columns = [
    {
      title: "序号",
      render: (text, record, index) => index + 1,
    },
    {
      title: "时代",
      dataIndex: "time",
    },
    {
      title: "公元",
      dataIndex: "year",
    },
    {
      title: "地点",
      dataIndex: "location",
    },
    {
      title: "契名",
      dataIndex: "name",
    },
    {
      title: "例句",
      dataIndex: "sentence",
      render: sentence => (
        <ResultSentence
          sentence={sentence}
          highlightRegex={resultHighlightRegex}
        />
      ),
    },
    {
      title: "操作",
      dataIndex: "id",
      render: id => (
        <Button
          icon="search"
          onClick={() => {
            dispatch(actionCreators.showArticleDetails(id));
          }}
        >
          打开详情
        </Button>
      ),
    },
  ];

  return (
    <Fragment>
      <Table
        columns={columns}
        rowKey={contract => String(contract.key)}
        dataSource={contracts}
        pagination={{
          ...pagination,
          showTotal: (total: number) => `共${total}条数据`,
        }}
        loading={isContentLoading}
        onChange={onChange}
      />
      <ArticleDetailsDialog />
    </Fragment>
  );
};

export default AdvancedSearchContent;
