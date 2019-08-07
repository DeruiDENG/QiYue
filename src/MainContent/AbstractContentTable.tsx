import React from "react";
import { Table } from "antd";
import { PaginationConfig } from "antd/es/pagination";
import { ContractAbstract } from "../datastore/type";

interface Props {
  contracts: ContractAbstract[];
  pagination: PaginationConfig;
  isLoading: boolean;
  onChange: (config: PaginationConfig) => void;
}

const AbstractContentTable = ({
  pagination,
  contracts,
  isLoading,
  onChange
}: Props) => {
  const columns = [
    {
      title: "契名",
      dataIndex: "name",
      width: "25%"
    },
    {
      title: "立契人",
      dataIndex: "author",
      width: "25%"
    },
    {
      title: "时代",
      dataIndex: "time",
      width: "25%",
      render: time => {
        // "qing" | "ming" | "minguo" | "all"
        switch (time) {
          case "qing": {
            return "清代";
          }
          case "ming": {
            return "明代";
          }
          case "minguo": {
            return "民国";
          }
          default:
            return "其他";
        }
      }
    },
    {
      title: "地点",
      dataIndex: "location",
      width: "25%"
    }
  ];

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

export default AbstractContentTable;
