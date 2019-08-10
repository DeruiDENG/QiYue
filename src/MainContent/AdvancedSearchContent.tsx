import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectors, actionCreators } from "../datastore/advancedSearch";
import { Table } from "antd";
import { PaginationConfig } from "antd/es/pagination";

const AdvancedSearchContent = () => {
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
    },
  ];

  const dispatch = useDispatch();
  const onChange = useCallback((pagination: PaginationConfig) => {
    dispatch(actionCreators.changeCategorySearchPagination(pagination.current));
  }, []);
  const { result: contracts, pagination } = useSelector(
    selectors.getAdvancedSearchResult
  );
  const isContentLoading = useSelector(selectors.isContentLoading);

  return (
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
  );
};

export default AdvancedSearchContent;
