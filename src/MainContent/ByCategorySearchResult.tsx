import React, { useCallback } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, selectors } from "../datastore";
import { PaginationConfig } from "antd/es/pagination";

const ByCategorySearchResult = () => {
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
    }
  ];

  const dispatch = useDispatch();
  const onChange = useCallback((pagination: PaginationConfig) => {
    dispatch(actionCreators.changeCategorySearchPagination(pagination.current));
  }, []);

  const { result: contracts, pagination } = useSelector(
    selectors.getByCategorySearchResult
  );
  const isLoading = useSelector(selectors.isLoadingByCategorySearchResult);

  return (
    <Table
      columns={columns}
      rowKey={contract => String(contract.id)}
      dataSource={contracts}
      pagination={pagination}
      loading={isLoading}
      onChange={onChange}
    />
  );
};

export default ByCategorySearchResult;
