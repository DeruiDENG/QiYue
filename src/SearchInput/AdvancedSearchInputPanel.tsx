import React, { ChangeEvent, useCallback } from "react";
import { Button, Checkbox, Form, Input, Radio, Select, Col } from "antd";
import panelImage from "./panel-image-min.jpg";
import PanelImage from "./PanelImage";
import "./panelForm.scss";
import { checkboxItemLayout, formItemLayout, formItemStyle } from "./config";
import { AdvancedSearchInput, TimePeriod } from "../datastore/type";
import { actionCreators, selectors } from "../datastore/advancedSearch";
import { useDispatch, useSelector } from "react-redux";

const { Option } = Select;

const AdvancedSearchInputPanel = () => {
  const timePeriodOptions: { type: TimePeriod; displayName: string }[] = [
    { type: TimePeriod.All, displayName: "所有时代" },
    { type: TimePeriod.Ming, displayName: "明代" },
    { type: TimePeriod.Qing, displayName: "清代" },
    { type: TimePeriod.MinGuo, displayName: "民国" },
  ];

  const input = useSelector(selectors.getAdvancedSearchInput);
  const dispatch = useDispatch();
  const setInput = useCallback(
    (input: AdvancedSearchInput) =>
      dispatch(actionCreators.changeAdvancedSearchInput({ input })),
    [dispatch]
  );

  const setInputField = (fieldName: string) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setInput({
      ...input,
      [fieldName]: event.target.value,
    });
  };

  const {
    author,
    bookName,
    place,
    timePeriod,
    connectDifferentType,
    searchKeyword,
    secondaryKeyWord,
    searchKeywordLogic,
  } = input;

  return (
    <div className="advanced-panel">
      <Col span={0} md={24}>
        <PanelImage url={panelImage} alt="高级搜索栏图片" />
      </Col>
      <Form {...formItemLayout} style={{paddingLeft: "12px", paddingRight: "12px"}}>
        <Form.Item label="检索字词" style={formItemStyle}>
          <Input
            value={searchKeyword}
            onChange={setInputField("searchKeyword")}
          />
        </Form.Item>
        <Radio.Group
          onChange={e => {
            setInput({ ...input, searchKeywordLogic: e.target.value });
          }}
          value={searchKeywordLogic}
          style={{
            paddingLeft: "16px",
            paddingRight: "16px",
            marginBottom: "12px",
          }}
        >
          <Radio value="and">与</Radio>
          <Radio value="or">或</Radio>
          <Radio value="not">非</Radio>
          <Radio value="connect">递进</Radio>
        </Radio.Group>
        <Form.Item label="检索字词" style={formItemStyle}>
          <Input
            value={secondaryKeyWord}
            onChange={setInputField("secondaryKeyWord")}
          />
        </Form.Item>
        <Form.Item label="契名" style={formItemStyle}>
          <Input value={bookName} onChange={setInputField("bookName")} />
        </Form.Item>
        <Form.Item label="立契人" style={formItemStyle}>
          <Input value={author} onChange={setInputField("author")} />
        </Form.Item>
        <Form.Item label="时代" style={formItemStyle}>
          <Select
            value={timePeriod}
            onSelect={value => {
              setInput({
                ...input,
                timePeriod: value,
              });
            }}
          >
            {timePeriodOptions.map(({ type, displayName }) => {
              return (
                <Option key={type} value={type}>
                  {displayName}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item label="地点" style={formItemStyle}>
          <Input value={place} onChange={setInputField("place")} />
        </Form.Item>
        <Form.Item
          {...checkboxItemLayout}
          label="关联异体字"
          style={formItemStyle}
        >
          <Checkbox
            checked={connectDifferentType}
            onChange={checkedValue => {
              setInput({
                ...input,
                connectDifferentType: checkedValue.target.checked,
              });
            }}
          />
        </Form.Item>
        <div className="panel-input-form__row panel-input-form__submit">
          <Button type="primary" htmlType="button">
            搜索
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AdvancedSearchInputPanel;
