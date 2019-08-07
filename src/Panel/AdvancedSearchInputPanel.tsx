import React, { ChangeEvent } from "react";
import { Button, Checkbox, Form, Input, Radio, Select } from "antd";
import panelImage from "./panel-image-min.jpg";
import PanelImage from "./PanelImage";
import "./panelForm.scss";
import { checkboxItemLayout, formItemLayout, formItemStyle } from "./config";
import { AdvancedSearchInput, TimePeriod, WholeState } from "../datastore/type";
import { actionCreators, selectors } from "../datastore";
import { Dispatch } from "redux";
import { connect } from "react-redux";

const { Option } = Select;

interface Props {
  input: AdvancedSearchInput;
  setInput: (input: AdvancedSearchInput) => void;
}

const AdvancedSearchInputPanel = ({ input, setInput }: Props) => {
  const timePeriodOptions: { type: TimePeriod; displayName: string }[] = [
    { type: "all", displayName: "所有时代" },
    { type: "ming", displayName: "明代" },
    { type: "qing", displayName: "清代" },
    { type: "minguo", displayName: "民国" }
  ];

  const setInputField = (fieldName: string) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setInput({
      ...input,
      [fieldName]: event.target.value
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
    searchKeywordLogic
  } = input;

  return (
    <div className="advanced-panel">
      <PanelImage url={panelImage} alt="高级搜索栏图片" />
      <Form {...formItemLayout}>
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
            marginBottom: "12px"
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
                timePeriod: value
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
                connectDifferentType: checkedValue.target.checked
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

function mapStateToProps(state: WholeState) {
  return { input: selectors.getAdvancedSearchInput(state) };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    setInput: function(input: AdvancedSearchInput) {
      dispatch(actionCreators.changeAdvancedSearchInput({ input }));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvancedSearchInputPanel);
