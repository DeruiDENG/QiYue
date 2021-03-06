import React, { useCallback } from "react";
import { Col, Row, Tree } from "antd";
import "./panelForm.scss";
import PanelImage from "./PanelImage";
import panelImage from "./panel-image-min.jpg";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, selectors } from "../datastore/byCategory";

const { TreeNode, DirectoryTree } = Tree;

const CategorySearchInputPanel = () => {
  const categories = [
    {
      mainCategory: "土地契约",
      subCategories: ["典契", "推契", "买卖契", "抵押"],
    },
    {
      mainCategory: "房屋、树木及其他物品文书",
      subCategories: ["典卖", "抵押"],
    },
    {
      mainCategory: "商业类文书",
      subCategories: ["结社合同", "揭借合同", "银钱账册"],
    },
    {
      mainCategory: "家族文书",
      subCategories: ["分家文书", "婚假文书", "承继文书", "立嗣文书"],
    },
    {
      mainCategory: "其他文书",
      subCategories: [],
    },
  ];

  const { checkedKeys } = useSelector(selectors.getByCategorySearchInput);
  const dispatch = useDispatch();
  const setCheckedKeys = useCallback(
    (checkedKeys: string[]) => {
      dispatch(
        actionCreators.changeCategorySearchInput({ input: { checkedKeys } })
      );
    },
    [dispatch]
  );

  const onSelect = useCallback((selectedKeys: string[]) => {
    setCheckedKeys(selectedKeys);
    console.log("Checked keys", selectedKeys);
  }, []);

  return (
    <React.Fragment>
      <Row>
        <Col span={0} md={24}>
          <PanelImage url={panelImage} alt="高级搜索栏图片" />
        </Col>
      </Row>
      <DirectoryTree
        multiple
        defaultExpandAll
        checkedKeys={checkedKeys}
        onSelect={onSelect}
        expandAction={false}
      >
        {categories.map(({ subCategories, mainCategory }) => (
          <TreeNode key={mainCategory} title={mainCategory}>
            {subCategories.map(subCategories => (
              <TreeNode
                title={subCategories}
                key={`${mainCategory}-${subCategories}`}
                isLeaf
              />
            ))}
          </TreeNode>
        ))}
      </DirectoryTree>
    </React.Fragment>
  );
};

export default CategorySearchInputPanel;
