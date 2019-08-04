import React, { useState } from "react";
import panelImage from "./panel-image-min.jpg";
import PanelImage from "./PanelImage";
import Input from "../shared/input/Input";
import Button from "../shared/button/Button";
import './panelForm.scss';

// interface Props {
//   input: AdvancedSearchInput
// }

export interface AdvancedSearchInput {
  bookName: string;
  auther: string;
  version: string;
  article: string;
}

const AdvancedSearchInputPanel = () => {
  const [input, setInput] = useState<AdvancedSearchInput>({
    bookName: "",
    auther: "",
    version: "",
    article: ""
  });

  const setInputField = (fieldName: string) => (value: string) => {
    setInput({
      ...input,
      [fieldName]: value
    });
  };

  const { auther, bookName, version, article } = input;

  return (
    <div className="advanced-panel">
      <PanelImage url={panelImage} alt="高级搜索栏图片" />
      <form className="panel-input-form">
        <div className="panel-input-form__row">
          <Input
            labelText="书名"
            value={bookName}
            onChange={setInputField("bookName")}
          />
        </div>
        <div className="panel-input-form__row">
          <Input
            labelText="作者"
            value={auther}
            onChange={setInputField("auther")}
          />
        </div>
        <div className="panel-input-form__row">
          <Input
              labelText="版本"
              value={version}
              onChange={setInputField("version")}
          />
        </div>
        <div className="panel-input-form__row">
          <Input
              labelText="篇目"
              value={article}
              onChange={setInputField("article")}
          />
        </div>
        <div className="panel-input-form__row panel-input-form__submit">
          <Button displayText="搜索" onClick={()=>{
            console.log("Clicked on the advance panel search button")
          }}/>
        </div>
      </form>
    </div>
  );
};

export default AdvancedSearchInputPanel;
