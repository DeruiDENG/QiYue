import React, { useCallback } from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import { selectors } from "../datastore";

const ByCategorySearchResult = () => {
  const columns = [
    {
      title: "时代",
      dataIndex: "time",
      width: "15%"
    },
    {
      title: "公元",
      dataIndex: "year",
      width: "15%"
    },
    {
      title: "地点",
      dataIndex: "location",
      width: "20%"
    },
    {
      title: "契名",
      dataIndex: "name",
      width: "50%"
    }
  ];

  const onChange = useCallback(() => {}, []);

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
