import React, { useState } from "react";
import panelImage from "./panel-image-min.jpg";
import PanelImage from "./PanelImage";
import Input from "../shared/input/Input";
import Button from "../shared/button/Button";
import "./panelForm.scss";
import Select from "../shared/input/Select";
import CheckBox from "../shared/input/CheckBox";

type TimePeriod = "qing" | "ming" | "minguo" | "all";

export interface AdvancedSearchInput {
  bookName: string;
  auther: string;
  place: string;
  timePeriod: TimePeriod;
  connectDifferentType: boolean;
}

const AdvancedSearchInputPanel = () => {
  const [input, setInput] = useState<AdvancedSearchInput>({
    bookName: "",
    auther: "",
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

  const setInputField = (fieldName: string) => (value: string) => {
    setInput({
      ...input,
      [fieldName]: value
    });
  };

  const { auther, bookName, place, timePeriod, connectDifferentType } = input;

  return (
    <div className="advanced-panel">
      <PanelImage url={panelImage} alt="高级搜索栏图片" />
      <form className="panel-input-form">
        <div className="panel-input-form__row">
          <Input
            labelText="契名"
            value={bookName}
            onChange={setInputField("bookName")}
          />
        </div>
        <div className="panel-input-form__row">
          <Input
            labelText="立契人"
            value={auther}
            onChange={setInputField("auther")}
          />
        </div>
        <div className="panel-input-form__row">
          <Select
            labelText="时代"
            selectedOptionType={timePeriod}
            options={timePeriodOptions}
            onSelect={setInputField("timePeriod")}
          />
        </div>
        <div className="panel-input-form__row">
          <Input
            labelText="地点"
            value={place}
            onChange={setInputField("place")}
          />
        </div>
        <div className="panel-input-checkboxes">
          <div className="panel-input-form__row">
            <CheckBox
                labelText="关联异体字"
                isChecked={connectDifferentType}
                onChange={isChecked => {
                  setInput({
                    ...input,
                    connectDifferentType: isChecked
                  });
                }}
            />
          </div>
        </div>
        <div className="panel-input-form__row panel-input-form__submit">
          <Button
            displayText="搜索"
            onClick={() => {
              console.log("Clicked on the advance panel search button");
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default AdvancedSearchInputPanel;
