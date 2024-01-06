import React, { FC, useState } from "react";
import { questionPropTypes } from "../types";
import { decodeHTMLEntities } from "../common/utils";

const Cards: FC<questionPropTypes> = (props) => {
  const { questions, options, handleSubmit, questionNumber, totalQuestions } =
    props;

  const [userAns, setUserAns] = useState("");

  const handleSubmitedAns = (e: any) => {
    setUserAns(e.target.value);
  };
  const btnText = questionNumber === 4 ? "Submit" : "Next";

  const decodedQuestion = decodeHTMLEntities(questions);

  return (
    <div className="cards">
      <div className="center">
        <h3 className="question-heading center">
          Question: {questionNumber + 1}/{totalQuestions}
        </h3>
      </div>
      <p>
        Q{questionNumber + 1}: {decodedQuestion}
      </p>
      <form
        onSubmit={(e: React.FormEvent<EventTarget>) => handleSubmit(e, userAns)}
      >
        {options.map((val: string, ind: number) => {
          return (
            <div key={ind}>
              <label>
                <input
                  type="radio"
                  required={true}
                  value={val}
                  onChange={handleSubmitedAns}
                  checked={userAns === val}
                  name="options"
                />
                {val}
              </label>
              <br />
            </div>
          );
        })}
        <br />
        <input type="submit" value={btnText} className="btn" />
      </form>
    </div>
  );
};

export default Cards;
