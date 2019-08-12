import React from "react";
import { ArticleDetails } from "./articleCache";
import { Row, Col, Typography, Button } from "antd";

const { Title, Paragraph } = Typography;

interface Props {
  articleDetails: ArticleDetails;
}

const ArticleDetailsContent = (props: Props) => {
  const { articleDetails } = props;
  return (
    <Row>
      <Col span={16}>
        <Title level={4}>{articleDetails.title}<Button size="small" style={{marginLeft: "16px"}}>复制文字</Button></Title>
        {articleDetails.content.map((para, index) => (
          <Paragraph key={index}>{para}</Paragraph>
        ))}
      </Col>
      <Col span={8}>Images</Col>
    </Row>
  );
};

export default ArticleDetailsContent;
