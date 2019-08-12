import React, { useCallback } from "react";
import {ArticleDetails, useArticleDetails} from "./articleCache";
import { Button, Modal, Spin } from "antd";
import ArticleDetailsContent from "./ArticleDetailsContent";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, selectors } from "../../datastore/advancedSearch";

const ArticleDetailsDialog = () => {
  const { articleId, isPopup } = useSelector(selectors.getArticleDetailsInfo);
  const articleDetails = useArticleDetails(articleId, isPopup);
  const dispatch = useDispatch();
  const onCancel = useCallback(() => {
    dispatch(actionCreators.closeArticleDetails());
  }, []);
  return (
    <Modal
      title="契约详情"
      visible={isPopup}
      onCancel={onCancel}
      footer={[
        <Button key="关闭" onClick={onCancel}>
          关闭
        </Button>,
      ]}
      width={"80%"}
    >
      {articleDetails ? (
        <ArticleDetailsContent articleDetails={articleDetails} />
      ) : (
        <div
          style={{
            display: "flex",
            padding: "40px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin tip="加载中..." />
        </div>
      )}
    </Modal>
  );
};

export default ArticleDetailsDialog;
