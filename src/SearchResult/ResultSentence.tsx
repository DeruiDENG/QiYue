import React from 'react';
import {Typography} from 'antd'

const {Text} = Typography;

interface Props {
  sentence: string;
  highlightRegex: RegExp
}

const ResultSentence = (props: Props ) => {
  const {highlightRegex, sentence} = props;
  const words = sentence.split(highlightRegex);
  return (
      <React.Fragment>
        {words.map((word, index) => {
          if (highlightRegex.test(word)) {
            return <Text key={index} mark>{word}</Text>
          }
          return <Text key={index}>{word}</Text>
        })}
      </React.Fragment>
  );
};

export default ResultSentence;
