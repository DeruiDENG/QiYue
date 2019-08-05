import React, { useState, ChangeEvent } from "react";
import { Form, Input, Checkbox, Select, Button } from "antd";
import panelImage from "./panel-image-min.jpg";
import PanelImage from "./PanelImage";
import "./panelForm.scss";
import {checkboxItemLayout, formItemLayout} from "./config";

type TimePeriod = "qing" | "ming" | "minguo" | "all";
const { Option } = Select;

export interface AdvancedSearchInput {
  bookName: string;
  author: string;
  place: string;
  timePeriod: TimePeriod;
  connectDifferentType: boolean;
}

const AdvancedSearchInputPanel = () => {
  const [input, setInput] = useState<AdvancedSearchInput>({
    bookName: "",
    author: "",
    place: "",
    timePeriod: "all",
    connectDifferentType: true
  });

  const timePeriodOptions: { type: TimePeriod; displayName: string }[] = [
    { type: "all", displayName: "所有时代" },
    { type: "ming", displayName: "明代" },
    { type: "qing", displayName: "清代" },
    { type: "minguo", displayName: "民国" }
  ];

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const setInputField = (fieldName: string) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setInput({
      ...input,
      [fieldName]: event.target.value
    });
  };

  const { author, bookName, place, timePeriod, connectDifferentType } = input;

  return (
    <div className="advanced-panel">
      <PanelImage url={panelImage} alt="高级搜索栏图片" />
      <Form {...formItemLayout}>
        <Form.Item label="契名">
          <Input value={bookName} onChange={setInputField("bookName")} />
        </Form.Item>
        <Form.Item label="立契人">
          <Input value={author} onChange={setInputField("author")} />
        </Form.Item>
        <Form.Item label="时代">
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
        <Form.Item label="地点">
          <Input value={place} onChange={setInputField("place")} />
        </Form.Item>
        <Form.Item {...checkboxItemLayout} label="关联异体字">
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

export default AdvancedSearchInputPanel;
